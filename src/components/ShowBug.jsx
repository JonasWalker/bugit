//import { render } from '@testing-library/react'
import React, { Component, TextArea, useState, useEffect, Link } from 'react';
import BugItLogo from './images/BugItLogo.jpg';
import './CSS/CreateAccount.css';
import { useLocation } from 'react-router-dom';


function Profile() {
  const location = useLocation();
  const from = location.state;
  return from;
}

class Showbug extends Component {
  constructor(props) {
    // Calling super class constructor
    super(props);

    // Creating state
    this.state = {
      data: 'My name is User',
    };

    // Binding event handler
    this.handleEvent = this.handleEvent.bind(this);
  }


  handleEvent() {
    console.log(this.props);
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.data} />
        <br></br> <br></br>
        <button onClick={this.handleEvent}>Please Click</button>
      </div>
    );
  }
}

export default Showbug;
