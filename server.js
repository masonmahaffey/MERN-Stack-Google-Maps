// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 3000; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://misterMason:recrem12131@ds157298.mlab.com:57298/mongo-test'); // connect to our database
var Bear     = require('./app/models/bear');
var http = require('http');


// // get all data/stuff of the body (POST) parameters
// app.use(bodyParser.json()); // parse application/json 
// app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
// app.use(bodyParser.urlencoded({ extended: true })); // parse application/x-www-form-urlencoded

// app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users




app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
});




// ROUTES FOR OUR API
//=========================================================================================================
// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
	// do logging
	console.log('Something is happening.');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: 'hooray! welcome to our api!' });	
});

// on routes that end in /bears
//---------------------------------------------------------------------------------------------------------

router.route('/articles')

	// create a bear (accessed at POST http://localhost:8080/bears)
	.post(function(req, res) {
		
		var article = new Bear();		// create a new instance of the Bear model
		article.name = req.body.name;  // set the bears name (comes from the request)

		article.save(function(err) {
			if (err)
				res.send(err);

			res.json({ message: 'Article stored in database!' });
		});

		
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		Bear.find(function(err, bears) {
			if (err)
				res.send(err);

			res.json(bears);
		});
	});

// on routes that end in /bears/:bear_id
//---------------------------------------------------------------------------------------------------------
router.route('/bears/:bear_id')

	// get the bear with that id
	.get(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {
			if (err)
				res.send(err);
			res.json(bear);
		});
	})

	// update the bear with this id
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ message: 'Bear updated!' });
			});

		});
	})

	// delete the bear with this id
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ message: 'Successfully deleted' });
		});
	});

	


// REGISTER OUR ROUTES ------------------------------------------------------------------------------------
app.use('/api', router);

// START THE SERVER
// =========================================================================================================
app.listen(port);
console.log('Your not very secure API is running on: ' + port);




//NEWS API setINTERVAL CALLS
// =============================================================================================

setInterval(function () { 
    console.log('API REQUEST RAN!'); 

var options = {
  hostname: 'newsapi.org',
  port: 80,
  path: '/v1/articles?source=techcrunch&apiKey=275258a3655c449ba4907833f5baf08b',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    // 'Content-Length': Buffer.byteLength(postData)
  }
};

var req = http.request(options, (res) => {
  	console.log(`STATUS: ${res.statusCode}`);
   	var body = '';
	res.on('data', function(chunk){
	    body += chunk;
	});
	res.on('end', function(){
        var fbResponse = JSON.parse(body);
        console.log("Got a response: ", fbResponse);
    });
});

req.on('error', (e) => {
  console.log(`problem with request: ${e.message}`);
});

req.end();


}, 1000000); 

