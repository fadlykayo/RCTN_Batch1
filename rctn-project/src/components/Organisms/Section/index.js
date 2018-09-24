import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.css';

export default class Section extends Component {
  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
