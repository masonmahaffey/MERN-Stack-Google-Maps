# Google Maps MERN-Stack Application

This is a work in progress so bear that in mind while looking through the code! I've built this application for testing purposes to better understand how files are served by the node server to the client's browser as well as to better understand how to create an API to send data between the front-end and back-end. Also, this project has satisfied a deep yearning to understand how Babel transpiles React's jsx. You see, React uses Babel to transpile React's jsx into javascript and this whole process, while I understood it, baffled me as to where Babel was actually converting the jsx --> javascript. This piece of the puzzle was a mystery to me! It wasn't until I served my index.html to a client without doing anything else on the backend that I realized my jsx files were being transpiled by Babel on the client's browser itself! It helped me truly realize the separation between the front-end and backend. That being said, I've now found out that you can actually render React on the server side. For the time being I'm satisfied, but I will certainly look into this later.

##Technologies used:

- Node Server

- Express 4.0 Router to build my API

- Mongoose to send/pull data to/from my mongoDB

- MongoDB as my database

- React 15.1.0 (I didn't use Redux)

- Google Maps API



<!-- [Read the tutorial](http://scotch.io/tutorials/javascript/build-a-restful-api-using-node-and-express-4) -->

## Requirements

- Node and npm

## Installation

- Install dependencies: `npm install`
- Start the server: `node server.js`

## Testing the API
Test the API using [Postman](https://chrome.google.com/webstore/detail/postman-rest-client-packa/fhbjgbiflinjbdggehcddcbncdddomop)
