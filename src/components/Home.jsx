import React from 'react'
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css'
const players = [
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
]

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
  )
}

function addBug() {
  console.log('added bug')
}

function deleteBug() {
  console.log('deleted bug')
}

export const Home = () => (
  <body>
    <h1>BugIt</h1>
    <div class='table-responsive'>
      <table class='table table-striped table-sm'>
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
        <tbody>{players.map(renderBug)}</tbody>
      </table>
    </div>
    <div>
      <button type='button' class='btn btn-success' onClick='addBug()'>
        Add
      </button>
      <button type='button' class='btn btn-danger' onClick='deleteBug()'>
        Delete
      </button>
    </div>
  </body>
)
