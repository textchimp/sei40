import React from 'react';
import Search from './Search';
import { mount, shallow } from 'enzyme';


describe('Search component', () => {

  let wrapper;

  let routerPush = { push: jest.fn() };

  beforeEach( () => {
    wrapper = mount( <Search history={ routerPush } /> );
    // wrapper = shallow( <Search /> );
  });

  it('mounts without errors', () => {

    expect( wrapper.text() ).toContain('Search by Username');

    const button = wrapper.find('button');
    expect( button.length ).toEqual( 1 );
    expect( button.text() ).toEqual( 'Search' );

    const textInput = wrapper.find('input[type="text"]');
    expect( textInput.length ).toEqual( 1 );

    // How do I test that when i enter a username into the
    // form and click 'Search', this component pushes the
    // correct path onto the router?
    //
    // 0. Simulate typing into the form, and simulate clicking
    // on the button - you might need 'mount' instead of
    // 'shallow' for the click/typing simulation to work

    textInput.simulate('change', { target: { value: 'ispzz' }  });
    // Don't test the framework! Don't test the implementation
    button.simulate('click');

    // 1. Fake the router props, props.history.push ??

    // 2. Use a jest.fn() to mock the push method, and
    // assert that it was called with the correct path string

    expect( routerPush.push ).toHaveBeenCalledWith('/profile/ispzz');

    //
    // How to mock axios functions in Jest?


  }); // it mounts without errors

}); // describe Search component
