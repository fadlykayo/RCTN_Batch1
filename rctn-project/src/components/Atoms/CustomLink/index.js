import React, { Component } from 'react';
import {
  Link,
  Route,
} from "react-router-dom";
import { css } from 'emotion';

// import PropTypes from 'prop-types';

import './style.css';
import style from './style.js';

export default class CustomLink extends Component {
  render() {
    return (
      <Route
        path={this.props.to}
        exact={this.props.exact}
        children={({ match }) => {
          return (
            <Link className={ match ? css(style.header_title) : ''} to={this.props.to}>{this.props.title}</Link>
          )}
        }
      />
    );

    // return (
    //   <Link className={css(style.header_title)} to={this.props.to}>{this.props.title}</Link>
    // );
  }
}
