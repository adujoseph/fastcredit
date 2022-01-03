import React from 'react';
import {create} from 'react-test-renderer';
import Splashscreen from '../src/screen/splashScreen/SplashScreen';

const tree = create(<Splashscreen />).toJSON();
test('renders correctly', () => {
  expect(tree).toMatchSnapshot();
});
