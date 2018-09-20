import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'emotion';

import './style.css';
import style from './style.js';

const linkStyle = {
  fontSize: 20,
  color: 'pink',
};

const myStyle = css`
  font-size: 20px;
  color: pink;
`

export default class Link extends Component {
  render() {
    return (
      // <a className="header_title" >{this.props.title}</a>
      // <a style={linkStyle} >{this.props.title}</a>
      // <a style={style.link} >{this.props.title}</a>
      // <a className={css(style.link)} >{this.props.title}</a>
      <a className={myStyle} >{this.props.title}</a>
    )
  }
}
