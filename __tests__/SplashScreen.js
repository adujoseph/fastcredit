import Splashscreen from '../src/screen/splashScreen/SplashScreen';
import React from 'react';
import renderer from 'react-test-renderer';
import 'react-native';

test('Renders snapshot as expected', () => {
  const tree = renderer.create(<Splashscreen />).toJSON();
  expect(tree).toMatchSnapshot();
});
