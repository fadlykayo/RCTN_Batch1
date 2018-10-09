import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// Configuration for enzyme
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// Configuration for redux-mock-store
const middlewares = [];
const mockStore = configureStore(middlewares);

import Home from './';

describe('Describe component <Home/>', () => {
  test('Home renders correctly', () => {
    const tree = renderer.create(
      <Provider store={mockStore({user: {members: [], user: {name: 'fadly123123'},}})}>
        <Home/>
      </Provider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Home has props className body', () => {
    const tree = renderer.create(
      <Provider store={mockStore({user: {members: [], user: {name: 'fadly'},}})}>
        <Home/>
      </Provider>
    ).toJSON();

    expect(tree.props.className).toMatch('body');
  });
});
