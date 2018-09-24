import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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

export default class Profile extends Component {
  render() {
    return (
      <div className="row">

        <img alt="placeholder" src="https://via.placeholder.com/200x200"/>

        <Section className="section_right">
          <SectionTitle className="section_title_right" title={'Next Meetup'}/>
          <SectionContent className="section_content_right">
            <div className="row_right_info_content">
              <div>Location</div>
              <div>Members</div>
              <div>Organizer</div>
            </div>
            <div className="row_right_info_content">
              <div>{this.props.location}</div>
              <div>1078</div>
              <div>Hacktiv8</div>
            </div>
          </SectionContent>
          <Button title={'Join Us'}></Button>
        </Section>
        
      </div>
    );
  }
}
