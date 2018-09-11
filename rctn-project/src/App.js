import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  renderHeader() {
    return (
      <div className="header">
        <h1 style={{color: 'white'}}>JUDUL</h1>
      </div>
    );
  };

  render() {
    return (
      <div>
        { this.renderHeader() }
        <h1>Halo, Hacktiv8!</h1>
      </div>
    );
  }
};
