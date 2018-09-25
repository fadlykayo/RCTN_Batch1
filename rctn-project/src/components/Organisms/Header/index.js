import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        {this.props.children}
      </div>
    );
  }
}
