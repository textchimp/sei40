import Vue from 'vue';
import { mount } from '@vue/test-utils';
import sinon from 'sinon';
import flushPromises from 'flush-promises';

import FlightSearchResults from '@/components/FlightSearchResults';

describe( '<FlightSearchResults>', () => {

  it( 'should show a loading message until the data loads', async () => {

    const wrapper = mount(FlightSearchResults, {
      propsData: { origin: 'SYD', destination: 'MEL' }
    });
    // console.log( 'props', wrapper.props() );

    expect( wrapper.text() ).to.contain('Loading results');

    // HOW do I wait until the axios request has loaded,
    // (i.e its promise has resolved), and only then check
    // that the loading message is gone?

    // await wrapper.vm.$nextTick(); // Wait for all component's promises to resolve
    // await flushPromises();
    //
    // console.log( 'flights', wrapper.vm.flights );
    //
    // expect( wrapper.text() ).to.not.contain('Loading results');


  }); // it should show a loading message





}); // describe
