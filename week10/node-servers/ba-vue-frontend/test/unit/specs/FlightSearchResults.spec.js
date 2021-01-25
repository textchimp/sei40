import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
// import flushPromises from 'flush-promises';

import FlightSearchResults from '@/components/FlightSearchResults';

// By importing axios here in our test spec,
// THIS is the version of axios which the
// component will be using
// (even though the component still has its
// own 'import axios' code)
import axios from 'axios';

const fakeSearchResults = [
  {
    id: 1,
    flight_number: 'Test Flight 1',
    departure_date_formatted: 'Test Departure Date 1',
    origin: 'SYD',
    destination: 'MEL',
    airplane: { name: 'Test Plane 1' }
  },
  {
    id: 2,
    flight_number: 'Test Flight 2',
    departure_date_formatted: 'Test Departure Date 2',
    origin: 'SYD',
    destination: 'MEL',
    airplane: { name: 'Test Plane 2' }
  },
];




xdescribe( '<FlightSearchResults>', () => {


  let wrapper;
  const $router = { push: sinon.spy()  };

  beforeEach( () => {

    // TODO: WHAT THE FUCK IS GOING ON HERE?! Messes with FlightDetails stub
    axios.get = sinon.stub().returns( Promise.resolve( {data: fakeSearchResults} ) );

    // Write the test setup code only once here
    // - it will be run at the start of each it() example,
    //   making their code less repetitive

    wrapper = mount(FlightSearchResults, {
      propsData: { origin: 'SYD', destination: 'MEL' },
      mocks: { $router,  } // so we can test this.$router.push()
    });

  }); // beforeEach


  it( 'should show a loading message until the data loads', async () => {

    // console.log( 'props', wrapper.props() );

    expect( wrapper.text() ).to.contain('Loading results');

    // HOW do I wait until the axios request has loaded,
    // (i.e its promise has resolved), and only then check
    // that the loading message is gone?

    await wrapper.vm.$nextTick(); // Wait for all component's promises to resolve

    // console.log( 'flights', wrapper.vm.flights );
    expect( wrapper.text() ).to.not.contain('Loading results');

  }); // it should show a loading message



  it('should render a list of flight results', async() => {

    // Check that the axios.get() method was called with the right URL
    // (for these props SYD & MEL)
    expect( axios.get ).to.have.been.calledWith('http://localhost:3000/flights/search/SYD/MEL');

    await wrapper.vm.$nextTick();

    // Check that the search result data ended up in our component state
    // expect( wrapper.vm.flights.length ).to.equal( 2 );
    // expect( wrapper.vm.flights[0].id ).to.equal( 1 );

    // Check the whole thing at once!
    // use .deep.equal to check all the object keys & vals
    expect( wrapper.vm.flights ).to.deep.equal( fakeSearchResults );

    // Check the flights are actually rendered onto the DOM
    const resultDivs = wrapper.findAll('div.result');

    expect( resultDivs.length ).to.equal( 2 ); // because fakeSearchResults.length is 2

    expect( resultDivs.at(0).text() ).to.contain( fakeSearchResults[0].flight_number );
    expect( resultDivs.at(0).text() ).to.contain( fakeSearchResults[0].departure_date_formatted );
    expect( resultDivs.at(0).text() ).to.contain( fakeSearchResults[0].origin );
    expect( resultDivs.at(0).text() ).to.contain( fakeSearchResults[0].destination );

    // Check that when you click a result, the correct flight show route is
    // pushed onto the router

  }); // it should render the flight results


  it('pushes the correct route onto the router when a result is clicked', async () => {

    await wrapper.vm.$nextTick(); // wait for the axios promise to resolve

    const firstResult = wrapper.find('div.result'); // first result

    await firstResult.trigger('click');

    // What do we expect to be true now?
    // expect( $router.push ).to.have.been.called;
    expect( $router.push ).to.have.been.calledWith( sinon.match({
      name: 'FlightDetails',
      params: { id: fakeSearchResults[0].id }
    }));

  }); // it pushes the correct route


}); // describe
