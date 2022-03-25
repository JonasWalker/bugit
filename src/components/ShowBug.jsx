//import { render } from '@testing-library/react'
import React, { TextArea, useState, useEffect, Link } from 'react';
import BugItLogo from './images/BugItLogo.jpg';
import './CSS/CreateAccount.css';
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import { useLocation } from 'react-router-dom';

function Profile() {
  const location = useLocation();
  const from = location.state;
  return from;
}

const ShowBug = (props) => {
  console.log("test");
  return (
    <React.Fragment>
      <h2>Test</h2>
    </React.Fragment>
  );
};
export default ShowBug;
