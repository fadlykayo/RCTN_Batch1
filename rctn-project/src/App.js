import React, { Component } from 'react';
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import store from "./configs";
// import PropTypes from 'prop-types';

import {
  Home,
  Login,
  CreateMeetup,
  Explore,
} from './pages';
import {
  Header,
} from './components/Organisms';
import {
  NavBar,
} from './components/Molecules';
import {
  CustomLink,
} from './components/Atoms';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="root">

            <Header>
              <NavBar>
                <CustomLink exact to="/" title='Qtemu'/>
                <CustomLink to="/create" title='Create Meetup'/>
                <CustomLink to="/explore" title='Explore'/>
              </NavBar>
              <CustomLink to="/login" title='Login'/>
            </Header>

            <Route exact path="/" component={Home}/>
            <Route path="/create" component={CreateMeetup}/>
            <Route path="/explore" component={Explore}/>
            <Route path="/login" component={Login}/>

          </div>
        </Router>
      </Provider>
    );
  }
};
