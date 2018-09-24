import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './style.css';

export default class Button extends Component {
  render() {
    return (
      <button className="button">{this.props.title}</button>
    );
  }
}
