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
      >
        <Link className={css(style.header_title)} to={this.props.to}>{this.props.title}</Link>
      </Route>
    );
  }
}
//
// const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => (
//   <Route
//     path={to}
//     exact={activeOnlyWhenExact}
//     children={({ match }) => (
//       <div className={match ? "active" : ""}>
//         {match ? "> " : ""}
//         <Link to={to}>{label}</Link>
//       </div>
//     )}
//   />
// );
