import React, {Component} from 'react';

import './style.css';

export default class Card extends Component {

  render() {
    return (
      <div>
        <div className = 'CardItem'>
          <h3 className="bold">27 November 2018</h3>
          <hr />
          <div className = 'make-inline'>
            <div content = {'#' + this.props.id} className = 'space5px bold'/>
            <div content = {this.props.topic} className ='bold'/>
          </div>
          <div className = 'make-inline'>
            <div content = {this.props.participants} className = 'space5px bold'/>
            <div content = 'went'/>
          </div>
          <button className = 'view'>View</button>
        </div>
      </div>
    )
  }
}
