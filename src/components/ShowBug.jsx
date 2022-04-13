//import { render } from '@testing-library/react'
import React, { Component, TextArea, useState, useEffect, Link } from 'react';
import BugItLogo from './images/BugItLogo.jpg';
import './CSS/CreateAccount.css';

// var pathname = window.location.pathname;
// console.log(pathname);
// pathname = pathname.substring(9);
// console.log(pathname)

const ShowBug = (props) => {
  //set bugIDToSearch to the URL location
  var bugIDToSearch = window.location.pathname;
  //set bugIDToSearch to the bug ID       deletes "/showbug/"
  bugIDToSearch = bugIDToSearch.substring(9);

  return <h3>{bugIDToSearch}</h3>;
};

export default ShowBug;
