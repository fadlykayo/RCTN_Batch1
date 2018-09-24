import React, {Component} from 'react';

import Card from '../../Molecules/Card';
import './style.css';

export default class PastMeetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpened: false,
    }
  }

  renderSeeAll() {
    return this.props.meetups.map((eachMeetup, index) => {
      return (
       <Card
          key = {index}
          date = {eachMeetup.date}
          id = {eachMeetup.id}
          topic = {eachMeetup.topic}
          participants = {eachMeetup.participants}
       />
      )
    })
  }

  renderCard() {
    return this.props.meetups.map((eachMeetup, index) => {
      if (index <= 2) {
        return (
         <Card
            key = {index}
            date = {eachMeetup.date}
            id = {eachMeetup.id}
            topic = {eachMeetup.topic}
            participants = {eachMeetup.participants}
         />
        )
      } else {
        return null;
      }
    })
  }

  renderContent() {
    if (this.state.isOpened) {
      return this.renderSeeAll();
    } else {
      return this.renderCard();
    }
  }

  render() {
    return (
      <div>
        <div className="PastMeetup">
          <div className='Subtitle'>Past Meetup</div>
          <div className='SeeAll' onClick={() => this.setState({isOpened: true})}>See All</div>

          <div className = 'CardGroup'>
           {this.renderContent()}
          </div>
        </div>
      </div>
    )
  }
}
