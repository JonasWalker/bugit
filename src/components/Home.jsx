//import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react';
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css';
import Data from './data.json';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next';

function readJson(bugs, index) {
  return (
    <tr key={index}>
      <td>{bugs.software}</td>
      <td>{bugs.name}</td>
      <td>{bugs.date}</td>
      <td>{bugs.type}</td>
      <td>{bugs.status}</td>
      <td>{bugs.priority}</td>
      <td>{bugs.estimatedTime}</td>
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
  document.getElementById('myTbody').insertRow(newBug);
  return;
}

function deleteBug() {
  // console.log('deleted bug');
  // document.getElementById('myTable').deleteRow(1);
  // return;
}

// function showUser() {
//   const [user, setuser] = useState({ Email: '', Password: '' })
//   useEffect(() => {
//     var a = localStorage.getItem('myData')
//     var b = JSON.parse(a)
//     console.log(b.Name)
//     setuser(b)
//     console.log(user.Name)
//   }, [])
//   return (
//     <>
//       <div class='bottomleft'>{user.Name}</div>
//     </>
//   )
// }

function MyVerticallyCenteredModal(props, bugs, index) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <tr key={index}>
          <td>{bugs.software}</td>
          <td>{bugs.name}</td>
          <td>{bugs.date}</td>
          <td>{bugs.type}</td>
          <td>{bugs.status}</td>
          <td>{bugs.priority}</td>
          <td>{bugs.estimatedTime}</td>
        </tr>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Home = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const columns = [
    {
      dataField: 'software',
      text: 'software',
    },
    {
      dataField: 'name',
      text: 'Product Name',
    },
    {
      dataField: 'price',
      text: 'Product Price',
    },
  ];

  const selectRow = {
    mode: 'checkbox',
    clickToSelect: true,
    clickToExpand: true,
  };

  const expandRow = {
    showExpandColumn: true,
    renderer: (row) => (
      <div>
        <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
        <p>
          You can render anything here, also you can add additional data on
          every row object
        </p>
        <p>
          expandRow.renderer callback will pass the origin row object to you
        </p>
      </div>
    ),
  };

  return (
    <React.Fragment>
      <body>
        <h1>BugIt</h1>
        <div class="table-responsive">
          <BootstrapTable
            keyField="id"
            data={Data.map(readJson)}
            columns={columns}
            selectRow={selectRow}
            expandRow={expandRow}
          >
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
            <tbody id="myTbody">{Data.map(readJson)}</tbody>
          </BootstrapTable>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => setModalShow(true)}
          >
            Add
          </button>
          <button type="button" class="btn btn-danger" onClick={deleteBug}>
            Delete
          </button>
        </div>
      </body>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </React.Fragment>
  );
};
export default Home;
