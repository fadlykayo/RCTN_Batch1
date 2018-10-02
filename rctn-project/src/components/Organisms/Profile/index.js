import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import {
  UserActionCreator,
} from '../../../actions';
import {
  Section,
} from '../';
import {
  SectionContent,
} from '../../Molecules';
import {
  SectionTitle,
  Button,
} from '../../Atoms';
import './style.css';

const mapStateToProps = (state) => {
  return {
    members: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (data) => dispatch(UserActionCreator.login(data)),
  };
};

class Profile extends Component {
  onClickLogin = (data) => {
    this.props.login({
      name: 'fadly',
      email: 'fadly.kayo@gmail.com',
    });
  };

  renderImage() {
    if (this.props.circleThumbnail) {
      return (<img alt="thumbnail_circle" src="https://via.placeholder.com/80x80" style={{height: 80, width: 80, borderRadius: 50}}/>);
    } else {
      return (<img alt="placeholder" src="https://via.placeholder.com/200x200"/>);
    }
  };

  renderLeftList() {
    if (this.props.leftList) {
      return this.props.leftList.map((title, index) => {
        return (<div key={index}>{title}</div>);
      });
    };

    return null;
  };

  renderRightList() {
    if (this.props.rightList) {
      return this.props.rightList.map((title, index) => {
        return (<div key={index}>{title}</div>);
      });
    };

    return null;
  };

  renderButton() {
    if (this.props.button) {
      return (<Button title={'Join Us'} onClick={this.onClickLogin}></Button>);
    };

    return null;
  };

  render() {
    console.log(this.props.members);
    return (
      <div className="row">

        { this.renderImage() }

        <Section className={this.props.classNameSection}>

          <SectionTitle className="section_title_right" title={this.props.title}/>

          <SectionContent className="section_content_right">
            <div className={this.props.classNameInfo}>
              { this.renderLeftList() }
            </div>
            <div className={this.props.classNameInfo}>
              { this.renderRightList() }
            </div>
          </SectionContent>

          { this.renderButton() }

        </Section>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
