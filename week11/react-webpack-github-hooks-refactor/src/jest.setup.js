// Jest runs this code before any of the specific
// spec files - you can do your one-off test
// initialisation here

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
