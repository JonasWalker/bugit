import React from 'react';
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css';
const players = [
  { software: 'BugIt', name: 'Jonas', date: 'never' },
  { software: 'BugIt', name: 'Hunter', date: 'never' },
  { software: 'BugIt', name: 'Jarod', date: 'never' },
  { software: 'BugIt', name: 'Ben', date: 'never' },
];

const renderBug = (bug, index) => {
  return (
    <tr key={index}>
      <td>{bug.software}</td>
      <td>{bug.name}</td>
      <td>{bug.date}</td>
    </tr>
  );
};

export const Home = () => (
  <body>
    <h1>BugIt</h1>
    <main>
      <table>
        <thead>
          <tr>
            <th>Software</th>
            <th>Name</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>{players.map(renderBug)}</tbody>
      </table>
    </main>
  </body>
);
