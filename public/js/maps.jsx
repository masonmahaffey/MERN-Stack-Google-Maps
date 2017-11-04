let map = new google.maps.Map(
  document.getElementById('map'),
  {
    center: {lat: 39.8282, lng: -98.5795},
    zoom: 4
  }
);

let infoWindow = new google.maps.InfoWindow({});
let markers = [];
let PoIMarkers = [];

//a function place a marker at a city location
function createMarker(city) {
  let icon = 'http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2%7CFE7569';
  let cityLatLong = {
    lat: city.lat,
    lng: city.lon
  };

  //this actually creates the google maps marker on the google maps map
  let marker = new google.maps.Marker({
    position: cityLatLong,
    map: map,
    title: city.city,
    icon: icon,
    // animation: google.maps.Animation.DROP
  });

  //this listens for the user to click on a marker, and then creates an infoWindow with specified content inside
  google.maps.event.addListener(marker, 'click', function () {

    infoWindow.setContent(`<h2> ${city.city}</h2><div>${city.state}</div><div>${city.yearEstimate}</div>`);
    infoWindow.open(map, marker);
  });
  //this pushes the google maps marker onto the markers array
  markers.push(marker);
}

function createPoI(place) {
  let infoWindow = new google.maps.InfoWindow({});
  console.log(place);
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
    icon: place.icon
  });
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.setContent(place.name);
    infoWindow.open(map, marker);
  });
  PoIMarkers.push(marker);
  // poIMarkers.map(function(){

  // })
}


class GoogleCity extends React.Component {
  handleClickedCity = (event) => {
    google.maps.event.trigger(markers[this.props.cityObject.yearRank - 1], "click");
  };

  handleClickedCity = (event) => {
    google.maps.event.trigger(markers[this.props.cityObject.yearRank - 1], "click"); //something else here)
  };

  zoomToCity = (event) => {
    event.preventDefault();

    let cityLL = new google.maps.LatLng(this.props.cityObject.lat, this.props.cityObject.lon)
    //created a new map at this city's center
    map = new google.maps.Map(
      document.getElementById('map'),
      {
        zoom: 10,
        center: cityLL
      }
    );

    let service = new google.maps.places.PlacesService(map);

    service.nearbySearch(
      {
        location: cityLL,
        radius: '500',
        type: ['store']
      }, function (results, status) {
        console.log(results);
        if (status == 'OK') {
          //we got a good response
          results.map(function (currPlace, index) {
            createPoI(currPlace);
          })
        }
        else {
          console.log("NO RESPONSE ERROR!");
        }
      });

    let bounds = new google.maps.LatLngBounds(cityLL);
    PoIMarkers.map(function (currMarker, index) {
      bounds.extend(currMarker.getPosition());
    });
    map.fitBounds(bounds);

  };

  render() {
    return (
      <tr>
        <td className="cityName" onClick={this.handleClickedCity}>{this.props.cityObject.city}</td>
        <td className="cityRank">{this.props.cityObject.yearRank}</td>
        <td>
          <button type="button" onClick={this.zoomToCity}>Zoom</button>
        </td>
      </tr>
    );
  }
}

let startArray = [];
let destinationString = '';

class Cities extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currCities: this.props.cities};
  }

  handleInputChange(event) {
    let newFilterValue = event.target.value;

    let filteredCitiesArray = [];
    this.props.cities.map(function (currCity, index) {

      if (currCity.city.toUpperCase().indexOf(newFilterValue.toUpperCase()) !== -1) {
        //BAM. We got a hit ;0
        filteredCitiesArray.push(currCity)
      }

    });
    // this.state.currCities = filteredCitiesArray;
    this.setState({
      currCities: filteredCitiesArray
    });
    if (filteredCitiesArray[1] === null) {
      this.updateMarkers();
    }
    startArray = filteredCitiesArray;

  }

  handleInputChangeDestination(event) {
    let newFilterValue = event.target.value;

    let filteredCitiesArray = [];
    this.props.cities.map(function (currCity, index) {

      if (currCity.city.toUpperCase().indexOf(newFilterValue.toUpperCase()) !== -1) {
        //BAM. We got a hit ;0
        filteredCitiesArray.push(currCity)
      }

    });
    // this.state.currCities = filteredCitiesArray;
    this.setState({
      currCities: filteredCitiesArray
    });
    if (filteredCitiesArray[1] === null) {
      this.updateMarkers();
    }
    destinationString = filteredCitiesArray[0].city;

    if ((filteredCitiesArray[1] === null) && (filteredCitiesArray[0] !== null)) {
      initMap();
    }

  }

  updateMarkers() {
    // event.preventDefault();

    // this iterates over the entire markers array with our markers objects inside, and sets their maps to null
    markers.map(function (marker, index) {
      //removes the marker from the google maps map
      if (markers.indexOf(marker.title) === -1) {
        marker.setMap(null);
      }
    });
    this.state.currCities.map(function (city, index) {
      createMarker(city);
    })
  }

  render() {
    let cityRows = [];
    this.state.currCities.map(function (currentCity, index) {

      createMarker(currentCity)
      cityRows.push(<GoogleCity zoomFunction={this.zoomToCity} cityObject={currentCity} key={index}/>);
    }.bind(this));
    return (
      <div>
        <form>
          <p>Start: </p><input type="text" placeholder="Search Start Location"
                               onChange={this.handleInputChange}/>
          <p>Destination: </p><input type="text" placeholder="Search Destination"
                                     onChange={this.handleInputChangeDestination}/>
          <div className="spacer"></div>
        </form>
        <table>
          <thead>
          <tr>
            <th>City Name</th>
            <th>City Rank</th>
          </tr>
          </thead>
          <tbody>
          {cityRows}
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
  <Cities cities={cities}/>,
  document.getElementById('cities-container')
);

let directionsService = new google.maps.DirectionsService;
let directionsDisplay = new google.maps.DirectionsRenderer;

function initMap() {

  // directionsDisplay.directions.routes = [];
  directionsDisplay.setMap(map);

  calculateAndDisplayRoute(directionsService, directionsDisplay);

  function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
      origin: startArray[0].city,
      destination: destinationString,
      travelMode: 'DRIVING'
    }, function (response, status) {
      if (status === 'OK') {
        // directionsDisplay.setDirections({});
        console.log(response);
        directionsDisplay.setMap(null);
        directionsDisplay.setMap(map);
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }
}

// you can choose the map you want to setDirections, or change by using document.getElementById('specified map') in the DOM;






