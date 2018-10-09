import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Login from './';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('Describe component <Login/>', () => {
  test('Login renders correctly', () => {
    const tree = renderer.create(
      <Login/>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Login has props className body', () => {
    const tree = renderer.create(
      <Login/>
    ).toJSON();

    // console.log('tree', tree);

    expect(tree.props.className).toMatch('body');
  });

  test('Login renders Ini Login', () => {
    const container = document.createElement('div');

    ReactDOM.render(
      <Login/>, container
    );

    // console.log('container', container);

    expect(container.textContent).toMatch('Ini Login')
  })

  test('Login has props username and allows us to set props', () => {
    const wrapper = mount(
      <Login username='fadly'/>
    );

    expect(wrapper.props().username).toEqual('fadly');

    wrapper.setProps({ username: 'hacktiv8' });

    expect(wrapper.props().username).toEqual('hacktiv8');
  });
});
