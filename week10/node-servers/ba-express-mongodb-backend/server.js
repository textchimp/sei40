// Main Express server file

const express = require('express');
const app = express();
const PORT = 3000;

const flightsController = require('./controllers/flightsController');

const cors = require('cors');
app.use( cors() ); // Use cors handling as Express middleware, i.e. set header

// To support POSTed formdata, we need to add this Express middleware:
app.use( express.json() ); // Add support for JSON-encoded request bodies
app.use( express.urlencoded( {extended: true} ) );

const mongoose = require('mongoose');

// Authentication requirements
const User = require('./models/User');  // to find the user
const bcrypt = require('bcrypt'); // to encrypt & compare passwords
const jwt = require('jsonwebtoken'); // to send back a signed token to the frontend as proof of login

// TODO: Move this out of the server file and out of git repo, into
// a .env file or .bash_profile (as we did with other API keys)
const SERVER_SECRET_KEY = 'yourSecretKeyHereCHICKEN'; // this should be a real md5-generated random key

const jwtAuthenticate = require('express-jwt');

// Create a handler function that we give to any route that is protected,
// i.e. a route that you must be logged-in to see
const checkAuth = () => {
  return jwtAuthenticate({
    secret: SERVER_SECRET_KEY, // use the same secret key to check the token hasn't been tampered with,
    algorithms: ['HS256']
  });
}; // checkAuth



// Connect to the DB
mongoose.connect('mongodb://localhost/ba', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (err) => {
  console.log('Connection error', err);
});


// Once the connection is established, we can start querying/seeding
// db.once('open', () => {
// Once the DB is connected, we can start accepting HTTP requests
//
// }); // db.once open

const server = app.listen(PORT, () => {
  console.log(`BA server listening on http://localhost:${PORT} ...`);
});


// Now this server.js looks a lot like a Rails routes.rb file!
// get '/flights' => 'flights#index'
app.get('/flights', flightsController.index  );
app.get('/flights/search/:origin/:destination', flightsController.search );
app.get('/flights/:flight_number', flightsController.show );
app.post('/flights/:id/reservation', flightsController.createReservation );


// Login route aka authentication
app.post('/login', async (req, res) => {
  console.log('LOGIN', req.body);

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });   // { email: email }

    // console.log('passwords', user, password, user.passwordDigest); // debug!

    if( user && bcrypt.compareSync(password, user.passwordDigest) ){
      // Credentials match - successful login

      // Create a signed JWT token to send as the response;
      // The frontend will have to store this token, and present it in the header
      // of any future AJAX requests for them to count as authenticated to this server;
      // The token also encodes the authenticated user's ID; the token can actually
      // be decoded and viewed by anyone, but not changed without breaking it.
      const token = jwt.sign(
        // The data to encode into the token: don't put too much in here,
        // since it gets sent in a header of all future AJAX requests from the frontend!
        {
          _id: user._id,
          name: user.name,
          email: user.email
        },
        SERVER_SECRET_KEY,  // private key used to 'sign' the token
        { expiresIn: '72h' } // expiry time/life of token
      );

      res.json({ user, token });

    } else {
      // No match! Failed login
      res.sendStatus(401); // 401 == Bad Credentials / Authentication Failed
    }

  } catch( err ){
    console.log('Login error', req.body, err);
    res.sendStatus(500);
  }


}); // POST /login


// Example of a protected route that requires an authentication token
app.get('/profile', checkAuth(),  (req, res) => {
  // checkAuth provides req.user when the token is valid
  console.log('Profile access allowed for authenticated user', req.user);
  res.json( req.user );
});

// Define an error handler function for Express to use whenever
// there is an authentication error
app.use( (err, req, res, next) => {
  if( err.name === 'UnauthorizedError' ){
    console.log('Unauthorised request', req.path);
    res.status(401).json({ error: 'Invalid token' });
  } else {
    res.json(404); // generic "not found" response
  }
}); // auth error handler



// so we can require() & start-stop the server from test suite:
module.exports = server;
