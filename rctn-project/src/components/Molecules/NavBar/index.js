import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.css';

export default class NavBar extends Component {
  render() {
    return (
      <div className="header_left">
        {this.props.children}
      </div>
    )
  }
}
