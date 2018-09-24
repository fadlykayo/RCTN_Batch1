import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { css } from 'emotion';

import './style.css';
import style from './style.js';

export default class Link extends Component {
  render() {
    return (
      // <a className="header_title" >{this.props.title}</a>
      // <a style={linkStyle} >{this.props.title}</a>
      // <a style={style.header_title} >{this.props.title}</a>
      <a className={css(style.header_title)} onClick={null}>{this.props.title}</a>
    )
  }
}

// todo: variant, classes in example
