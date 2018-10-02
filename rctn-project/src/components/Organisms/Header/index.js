import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import {
  UserActionCreator,
} from '../../../actions';

import './style.css';

const mapStateToProps = (state) => {
  return {
    members: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (data) => dispatch(UserActionCreator.register(data)),
  };
};

class Header extends Component {
  onClickHeader() {
    this.props.register()
  }

  render() {
    return (
      <div className="header">
        {this.props.children}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
