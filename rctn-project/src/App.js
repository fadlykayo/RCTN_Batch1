import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
// import PropTypes from 'prop-types';

import {
  Header,
  Profile,
  Section,
  PastMeetup,
} from './components/Organisms';
import {
  SectionContent,
} from './components/Molecules';
import {
  SectionTitle,
} from './components/Atoms';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tanggal: new Date().toString(),
      info: {
        location: 'Jakarta, Indonesia',
        date: '29 January 2019',
        numberOfMembers: '1078',
        headOrganizer: 'Hacktiv8',
        memberOrganizer: 'Best, Twinky, Winky, Dipsy, Lala, Poh. JakartaJS Organizer.',
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

  render() {
    return (
      <div className="root">

        <Header/>

        <div className="body">

          <Profile
            classNameSection={'section_right'}
            classNameInfo={'row_right_info_content'}
            leftList={['Location', 'Members', 'Organizer']}
            rightList={[this.state.info.location, this.state.info.numberOfMembers, this.state.info.headOrganizer]}
            title={'Hacktiv8 Meetup'}
            button
          />

          <Section>

            <SectionTitle title={'Next Meetup'}/>

            <SectionContent className="section_content_column_grey">
              <h4 style={{marginTop: 0, marginBottom: 10,}}>Awesome meetup and event</h4>
              <div>{this.state.info.date}</div>
                <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                <div>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                <div>It has survived not only five centuries, but also the leap into electronic typesetting.</div>
                <div>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.</div>
              <div>Lorem Ipsum is simply dummy text of the printing.</div>
              <p>See you there!</p>
              <p>{this.state.info.memberOrganizer}</p>
            </SectionContent>

          </Section>

          <Section>

            <SectionTitle title={'About Meetup'}/>

            <SectionContent className="section_content_column_white">
              <div style={{marginBottom: 15,}}>Come and meet other developers interested in Javascript and it's library in Greater Jakarta area.</div>
              <div>Twitter {this.state.twitter} and we use hashtag #jakartajs</div>
            </SectionContent>

          </Section>

          <Section>

            <SectionTitle title={'Members'}/>

            <Profile
              classNameSection={'section_right_alt'}
              classNameInfo={'row_right_info_content_alt'}
              leftList={['Fadly Kayo']}
              rightList={['4 others']}
              title={'Organizers'}
              circleThumbnail
            />

          </Section>

          <PastMeetup
            meetups = {this.state.meetups}
          />

        </div>

      </div>
    );
  }
};

// <Router>
//   <div className="root">
//     <ul>
//       <li>
//         <Link to="/">Home</Link>
//       </li>
//       <li>
//         <Link to="/about">About</Link>
//       </li>
//       <li>
//         <Link to="/topics">Topics</Link>
//       </li>
//     </ul>
//
//     <hr />
//
//     <Route exact path="/" component={Home} />
//     <Route path="/about" component={About} />
//     <Route path="/topics" component={Topics} />
//   </div>
// </Router>
