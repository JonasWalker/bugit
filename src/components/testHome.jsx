//import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react';
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';

const Home = (props) => {
  const data = require('./data.json');
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
      setModalInfo(row);
      toggleTrueFalse();
    },
  };

  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  const priorityOptions = [
    { label: 'High', value: 'high' },
    { label: 'Moderate', value: 'moderate' },
    { label: 'Low', value: 'low' },
  ];

  const typeOptions = [
    { label: 'Optimize', value: 'optimize' },
    { label: 'Crash', value: 'crash' },
    { label: 'Upgrade', value: 'upgrade' },
  ];

  const statusOptions = [
    { label: 'In progress', value: 'inProgress' },
    { label: 'Stuck', value: 'stuck' },
  ];

  // const ModalContent = () => {
  //   return (
  //     <Modal show={show} onHide={handleClose}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>{modalInfo.name}</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <h1>Bug Info</h1>
  //         <ul>
  //           <ol>Bug ID: {modalInfo.id}</ol>
  //           <ol>Creator Name: {modalInfo.name}</ol>
  //           <ol>Date Created: {modalInfo.date}</ol>
  //           <ol>Bug Type: {modalInfo.type}</ol>
  //           <ol>Status: {modalInfo.status}</ol>
  //           <ol>Priority: {modalInfo.priority}</ol>
  //           <ol>Estimated Time: {modalInfo.estimatedTime}</ol>
  //         </ul>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={handleClose}>
  //           Close
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   );
  // };

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="user">
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Owner"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="date"
                  required
                  className="form-control"
                  placeholder="Todays date"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6 ">
                <Select options={typeOptions} placeholder="Set Type" />
              </div>
              <div className="col-sm-6 ">
                <Select options={statusOptions} placeholder="Set status" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <Select options={priorityOptions} placeholder="Set Priority" />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  required
                  className="form-control"
                  placeholder="Estimated Time"
                />
              </div>
              <div className="col-sm-12">
                <input
                  type="text"
                  required
                  className="form-control text-center"
                  placeholder="Bug description"
                />
              </div>
            </div>
            <div className="row justify-content-center">
              <button
                className="text-center btn btn-md btn-primary"
                type="submit"
              >
                Create Bug
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
    },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
    },
    {
      dataField: 'type',
      text: 'Type',
      sort: true,
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true,
    },
    {
      dataField: 'priority',
      text: 'Priority',
      sort: true,
    },
    {
      dataField: 'estimatedTime',
      text: 'Estimated Time',
      sort: true,
    },
  ];

  const defaultSorted = [
    {
      dataField: 'name',
      order: 'desc',
    },
  ];

  // const expandRow = {
  //   onlyOneExpanding: true,
  //   renderer: (row) => (
  //     <div>
  //       <p>{`This Expand row is belong to rowKey ${row.id}`}</p>
  //       <p>
  //         You can render anything here, also you can add additional data on
  //         every row object
  //       </p>
  //       <p>
  //         expandRow.renderer callback will pass the origin row object to you
  //       </p>
  //     </div>
  //   ),
  // };
  const options = {
    sizePerPageList: [
      {
        text: '5',
        value: 5,
      },
      {
        text: '10',
        value: 10,
      },
      {
        text: 'All',
        value: data.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  return (
    <React.Fragment>
      <BootstrapTable
        keyField="id"
        data={data}
        columns={columns}
        // expandRow={expandRow}
        defaultSorted={defaultSorted}
        pagination={paginationFactory(options)}
        rowEvents={rowEvents}
      />

      {show ? <ModalContent /> : null}
    </React.Fragment>
  );
};
export default Home;
