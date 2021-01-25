const { expect } = require('chai');

const Request = require('request');

describe('Express server', () => {

  // beforeEach() - the callback runs once before _every_ test
  // before()  - the callback runs once at the start of the whole test suite

  let server;
  before( done => {
    server = require('../server');
    done(); // This signals that it's safe to start running tests
  });

  after( () => {
    server.close(); // Shut down the server when we're finished testing
  });


  describe('GET /flights', () => {

    const response = {};

    before( done => {
      // Make HTTP request
      Request.get('http://localhost:1337/flights', (err, res, body) => {
        // console.log('response', body);
        response.status = res.statusCode;
        response.body = body;
        response.data = JSON.parse( body );
        done(); // Safe to run the test examples
      }); // get()

    }); // before()

    it('returns an HTTP status of 200 success', () => {
      expect( response.status ).to.equal( 200 );
    });

    it('returns a valid JSON object with the correct number of flights', () => {
      // TODO: Use a test version of the DB with test flights inserted before
      // each test (just like in Rails RSpec) instead of queryy
      expect( response.data.length ).to.equal( 3 );
    });

    it('returns the correct list of flights', () => {
      expect( response.data[0].flight_number ).to.equal('123');
    });


  }); // GET /flights



});
