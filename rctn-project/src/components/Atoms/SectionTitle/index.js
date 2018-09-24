import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.css';

export default class SectionTitle extends Component {
  render() {
    return (
      <h3 className={this.props.className}>{this.props.title}</h3>
    );
  }
}
