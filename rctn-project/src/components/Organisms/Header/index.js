import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import {
  NavBar,
} from '../../Molecules';
import {
  Link,
} from '../../Atoms';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar>
          <Link title='Qtemu'/>
          <Link title='Create Meetup'/>
          <Link title='Explore'/>
        </NavBar>
        <Link title='Login'/>
      </div>
    )
  }
}
