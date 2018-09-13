import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../Molecules/NavBar';
import Link from '../../Atoms/Link';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Navbar>
          <Link title='Qtemu'/>
          <Link title='Create Meetup'/>
          <Link title='Explore'/>
        </Navbar>
        <a className="header_title">Login</a>
      </div>
    )
  }
}
