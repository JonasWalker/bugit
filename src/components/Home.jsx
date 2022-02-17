import { render } from '@testing-library/react';
import React from 'react';
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css';
const bugsInfo = [
  {
    software: 'BugIt',
    name: 'Jonas',
    date: 'never',
    type: 'Optimize',
    status: 'In Progress',
    priority: 'Low',
    estimatedTime: 'trust',
  },
  {
    software: 'BugIt',
    name: 'Hunter',
    date: 'never',
    type: 'Optimize',
    status: 'In Progress',
    priority: 'Low',
    estimatedTime: 'trust',
  },
  {
    software: 'BugIt',
    name: 'Jarod',
    date: 'never',
    type: 'Optimize',
    status: 'In Progress',
    priority: 'Low',
    estimatedTime: 'trust',
  },
  {
    software: 'BugIt',
    name: 'Ben',
    date: 'never',
    type: 'Optimize',
    status: 'In Progress',
    priority: 'Low',
    estimatedTime: 'trust',
  },
];

function renderBug(bug, index) {
  return (
    <tr key={index}>
      <td>{bug.software}</td>
      <td>{bug.name}</td>
      <td>{bug.date}</td>
      <td>{bug.type}</td>
      <td>{bug.status}</td>
      <td>{bug.priority}</td>
      <td>{bug.estimatedTime}</td>
    </tr>
  );
}

function addBug() {
  console.log('added bug');
  const newBug = {
    software: 'BugIt',
    name: 'Jonas 2',
    date: 'never',
    type: 'Optimize',
    status: 'In Progress',
    priority: 'Low',
    estimatedTime: 'trust trust',
  };
  document.getElementById('myTable').insertRow(newBug);
  // bugsInfo.push(newBug);
  renderBug(bugsInfo);
  document.getElementById('myTbody').insertRow(1);
  renderBug(bugsInfo);
  console.log(bugsInfo);
  return;
}

function deleteBug() {
  console.log('deleted bug');
  document.getElementById('myTable').deleteRow(1);
  return;
}

export const Home = () => (
  <body>
    <h1>BugIt</h1>
    <div class="table-responsive">
      <table class="table table-striped table-sm" id="myTable">
        <thead>
          <tr>
            <th>Software</th>
            <th>Name</th>
            <th>Date</th>
            <th>Type</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Estimated Time</th>
          </tr>
        </thead>
        <tbody id="myTbody">{bugsInfo.map(renderBug)}</tbody>
      </table>
    </div>
    <div>
      <button type="button" class="btn btn-success" onClick={addBug}>
        Add
      </button>
      <button type="button" class="btn btn-danger" onClick={deleteBug}>
        Delete
      </button>
    </div>
  </body>
);
