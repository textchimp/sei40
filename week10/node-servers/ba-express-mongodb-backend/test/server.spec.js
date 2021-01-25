const { expect } = require('chai'); // assertion library
const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

const mongoose = require('mongoose');

describe('Express server', () => {

  let server;

  before( () => {
    // Start server! (once, at start of test suite)
    server = require('../server');
  });

  after( () => {
    // stop server (once, at the end of test suite - this prevents the server from staying open when we run multiple rounds of tests in watch mode)
    server.close();

    // Delete the Mongoose Flight model so it doesn't cause already-compiled
    // errors if we load the server more than once (in watch mode)
    delete mongoose.connection.models.Flight;
  });


  describe('GET /flights', () => {

    let response;

    before( async () => {
      // Make an axios HTTP request to the running server
      response = await axios.get(`${BASE_URL}/flights`);
    }); // before

    it('returns an HTTP 200 success status', () => {
      // test goes here
      expect( response.status ).to.equal( 200 );
    });

    it('returns a valid JSON object with the correct number of flights', () => {
      expect( response.data.length ).to.equal( 3 );
      // TODO: we won't necessarily know how many flights there should be!
      // Get the server to connect to a test database, NOT the live 'ba'
      // Once that's working, we would seed the test DB before each
      // request, to make our tests completely predictable/deterministic
    });

    it('contains the correct information about the flights', () => {
      expect( response.data[0].flight_number ).to.equal('BA123');
    });


  }); // describe GET /flights


  describe('GET /flights/search/:origin/:destination', () => {

    let response;

    before( async () => {
      response = await axios.get(`${BASE_URL}/flights/search/SYD/MEL`);
    });

    it('returns an HTTP 200 success status', () => {
      expect( response.status ).to.equal( 200 );
    });

    it('returns the correct number of results', () => {
      expect( response.data.length ).to.equal( 2 )
    });

    it('returns only flights with the searched origin and destination', () => {

      response.data.forEach( flight => {
        expect( flight.origin ).to.equal('SYD');
        expect( flight.destination ).to.equal('MEL');
      });

    });

  }); // describe GET /flights/search/:origin/:destination


  describe('GET /flights/:flight_number', () => {

    let response;

    before( async () => {
      response = await axios.get(`${BASE_URL}/flights/BA123`);
    });

    it('returns an HTTP 200 success status', () => {
      expect( response.status ).to.equal( 200 );
    });

    it('returns the correct flight object', () => {
      expect( response.data.flight_number ).to.equal('BA123');
      expect( response.data.airplane.rows ).to.be.a('number');
      expect( response.data.airplane.cols ).to.be.a('number');
      expect( response.data.reservations ).to.be.an('array');
      // TODO: if we seed a test version of the database in this
      // test suite, we can do more specific tests for things like
      // a certain number of reservations for our test flight
    });


  }); // describe GET /flights/:flight_number



}); // describe Express server
