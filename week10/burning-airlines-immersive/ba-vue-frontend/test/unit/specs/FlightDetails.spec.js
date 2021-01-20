import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import axios from 'axios'; // the component will use this version of axios (including our fake 'get' method)

import FlightDetails from '@/components/FlightDetails';

const testFlight = {
  id: 1,
  flight_number: 'Test Flight 1',
  departure_date_formatted: 'Test Departure Date 1',
  origin: 'SYD',
  destination: 'MEL',
  airplane: { name: 'Test Plane 1', rows: 6, cols: 3 },
  reservations: [
    {
      row: 1,
      col: 1,
      user_id: 1
    },
    {
      row: 2,
      col: 2,
      user_id: 2
    },
  ]
};

// Create a fake stub for the axios.get which this component will use
// This 'stub' allows us to control what our fake version returns!
// Because the real axios.get returns a promise which resolves to the API
// data, and our component expects that, our fake version also has to
// return a resolved promise with a flight object in it - the same structure
// of data which the Rails API endpoint would return, including the relevant
// associations needed by the component.
axios.get = sinon.stub().returns(  Promise.resolve( { data: testFlight } ) );

describe('<FlightDetails>', () => {

  let wrapper;

  beforeEach( () => {

    wrapper = mount( FlightDetails, {
      propsData: { id: 1 } // i.e. fake the router URL param/prop
    });

  }); // beforeEach

  it('shows a loading message until the flight loads', async () => {

    expect( wrapper.props('id') ).to.equal( 1 );

    expect( wrapper.text() ).to.contain('Loading flight details');

    await wrapper.vm.$nextTick();  // wait for axios promise to resolve with the API data

    // console.log('flight', wrapper.vm.flight);

    expect( wrapper.vm.flight ).to.deep.equal( testFlight );

    expect( wrapper.text() ).to.not.contain('Loading flight details');

    // Check state

  }); // it shows a loading message


  it('shows the relevant flight details', async () => {

    await wrapper.vm.$nextTick(); // wait for axios result

    expect( wrapper.find('h2.flight_number').text() ).to.equal( testFlight.flight_number );

    expect( wrapper.find('.departure_date').text() ).to.contain( testFlight.departure_date_formatted );

    expect( wrapper.find('.origin').text() ).to.contain( testFlight.origin );
    expect( wrapper.find('.destination').text() ).to.contain( testFlight.destination );

  }); // it shows the flight details

  // TODO: test that the seating diagram has the right size (compared to the
  // testFlight plane configuration), and test that reserved seats are marked
  // appropriately in the diagram - i.e. that they have a "reserved" class
  // or similar. Test that seats reserved by the current user have a different
  // class again.


}); // describe
