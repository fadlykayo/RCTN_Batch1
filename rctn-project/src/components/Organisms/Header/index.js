import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import {
  NavBar,
} from '../../Molecules';
import {
  CustomLink,
} from '../../Atoms';
import './style.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar>
          <CustomLink title='Qtemu'/>
          <CustomLink title='Create Meetup'/>
          <CustomLink title='Explore'/>
        </NavBar>
        <CustomLink title='Login'/>
      </div>
    );
  }
}
