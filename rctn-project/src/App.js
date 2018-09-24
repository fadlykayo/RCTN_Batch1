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
            location={this.state.info.location}
            numberOfMembers={this.state.info.numberOfMembers}
            headOrganizer={this.state.info.headOrganizer}
          />

          <Section>
            <SectionTitle title={'Next Meetup'}/>
            <SectionContent className="section_content_column">
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
