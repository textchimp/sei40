import Vue from 'vue';
import { mount } from '@vue/test-utils';

import FlightSearch from '@/components/FlightSearch';

import sinon from 'sinon';

// karma - "test runner", watches for changes to specs/components
// and re-runs our tests for us; finds all the '.spec.js' files
// and runs the describe & it blocks within them

// chai - assertion library, it gives us the 'expect(x).to.equal(y)'
// syntax for writing down our assertions

// vue-test-utils - makes it easy to mount components into a DOM
// and retrieve contents from the component with DOM-query methods
// i.e. wrapper.findAll('li')
// it also lets us interact with our component, triggering clicks,
// dropdown selections, text input, etc

// sinon - lets us create 'fake functions' aka spies/stubs,
// so we can give those fake functions to the component
// to use and we can assert that the fake functions were called.
// This is also called "mocking".

// Our component is going to call 'this.$router.push()', so it's
// that push method inside an object that we need to mock
const $router = { push: sinon.spy()  }

xdescribe( '<FlightSearch>', () => {

  it( 'should render the correct contents', async () => {

    const wrapper = mount(FlightSearch, {
      mocks: { $router } // provide our mock to the component, i.e. this.$router
    });

    // basic example assertion: check that certain tags
    // appear on the page, with certain contents
    // "chai" is our assertion library - it gives
    // us the 'expect x to equal y' syntax for making
    // assertions about our code, similar to RSpec

    // console.log( wrapper.html() );

    expect( wrapper.text() ).to.contain('Search Flights');

    const heading = wrapper.find('h2.header');
    expect( heading.text() ).to.equal('Search Flights');

    const selects = wrapper.findAll('select');
    expect( selects.length ).to.equal( 2 );

    const originOption = selects.at(0).findAll('option').at(1);

    // Simulate the user actually clicking on this option in the dropdown
    // This is an async operation which returns a promise, so we either
    // have to attach a .then() to it, and do our expect() assertions
    // inside the .then() callback... or just use await! 😍
    await originOption.setSelected();
    // Check that our state has updated to reflect this selection
    // console.log( 'new value of origin:', wrapper.vm.origin );
    expect( wrapper.vm.origin ).to.equal( originOption.text() );


    const destinationOption = selects.at(1).findAll('option').at(2);
    await destinationOption.setSelected();
    expect( wrapper.vm.destination ).to.equal( destinationOption.text() ); // MEL

    // "DON'T TEST THE FRAMEWORK ITSELF!"


    // simulate user click
    await wrapper.find('button').trigger('click');

    // After clicking, we expect a specific route to
    // have been pushed:
    expect( $router.push ).to.have.been.calledWith(sinon.match({
      name: 'SearchResults',
      params: {
        origin: originOption.text(),
        destination: destinationOption.text()
      }
    }));



  }); // it


}); // describe
