import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './components/Organisms/Header';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tanggal: new Date().toString(),
      info: {
        location: 'Jakarta, Indonesia',
        numberOfMembers: '1078',
        headOrganizer: 'Hacktiv8',
        memberOrganizer: 'Twinky, Winky, Dipsy, Lala, Poh',
      },
      twitter: '@JakartaJS',
      hashTag: '#jakartajs',
      meetups: [
        {
          id: 39,
          date: '27 November 2017',
          topic: 'JakartaJS with kumparan',
          participants: '139'
        },
        {
          id: 40,
          date: '27 September 2017',
          topic: 'JakartaJS with bibli',
          participants: '239'
        },
        {
          id: 41,
          date: '27 October 2017',
          topic: 'JakartaJS with Hacktiv8',
          participants: '39'
        }
      ]
    };
  };

  renderBody() {
    return (
      <div className="body">
        { this.renderProfile() }
        { this.renderNextMeetup() }
      </div>
    );
  };

  renderProfile() {
    return (
      <div className="row">
        <img alt="placeholder" src="https://via.placeholder.com/200x200"/>
        <div className="row_right">
          <h3 className="row_right_title">Hacktiv8 Meetup</h3>
          <div className="row_right_info">
            <div className="row_right_info_content">
              <div>Location</div>
              <div>Members</div>
              <div>Organizer</div>
            </div>
            <div className="row_right_info_content">
              <div>Jakarta, Indonesia</div>
              <div>1078</div>
              <div>Hacktiv8</div>
            </div>
          </div>
          <button className="button">Join Us</button>
        </div>
      </div>
    );
  };

  renderNextMeetup() {
    return (
      <div>
        <h3>Next Meetup</h3>
        <div className="column">
          <h4 style={{marginTop: 0, marginBottom: 10,}}>Awesome meetup and event</h4>
          <div>29 Januari 2019</div>
            <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
            <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
            <div>It has survived not only five centuries, but also the leap into electronic typesetting.</div>
            <div>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
          <div>Lorem Ipsum is simply dummy text of the printing.</div>
          <p>See you there!</p>
          <p>Best, Twinky, Winky, Dipsy, Lala, Poh. JakartaJS Organizer.</p>
        </div>
      </div>
    );
  };

  render() {
    return (
      <div className="root">
        <Header date={this.state.tanggal}/>
        { this.renderBody() }
      </div>
    );
  }
};
