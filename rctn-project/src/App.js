import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
// import PropTypes from 'prop-types';

import {
  Home,
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
      <Router>
        <div className="root">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/about" component={Home} />

        </div>
      </Router>
    );
  }
};

// <Header>
//   <NavBar>
//     <CustomLink to="/" title='Qtemu'/>
//     <CustomLink to="/about" title='Create Meetup'/>
//     <CustomLink to="/about" title='Explore'/>
//   </NavBar>
//   <CustomLink title='Login'/>
// </Header>
