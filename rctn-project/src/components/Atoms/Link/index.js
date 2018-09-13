import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class Link extends Component {
  render() {
    return (
      <a className="header_title" >{this.props.title}</a>
    )
  }
}
