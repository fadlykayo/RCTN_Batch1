import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';

import Home from './';
import store from "../../configs";

test('Home renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}>
      <Home/>
    </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
