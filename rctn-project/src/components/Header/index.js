import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_left">
          <a className="header_title" >Qtemu</a>
          <a className="header_title" >Create Meetup</a>
          <a className="header_title" >Explore</a>
        </div>
        <a className="header_title">Login</a>
      </div>
    )
  }
}
