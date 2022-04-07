//import { render } from '@testing-library/react'
import React, { TextArea, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
//import ShowBug from './components/ShowBug';

import filterFactory, {
  textFilter,
  dateFilter,
  selectFilter,
} from 'react-bootstrap-table2-filter';

const Home = (props) => {
  const data2 = require('./data.json');

  //modal stuff
  const data = require('./data.json');
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  //modal stuff
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [owner, setOwner] = useState('');
  const [timeCreated, setDate] = useState('');

  //modal stuff
  const rowEvents = {
    onClick: (e, row) => {
      setModalInfo(row);
      toggleTrueFalse();
    },
  };
  //modal stuff
  const toggleTrueFalse = () => {
    setShowModal(handleShow);
  };

  function closeModalWithOutSaving() {
    handleClose();
  }

  function closeModalWithSaving() {
    handleClose();
  }
  //modal stuff
  const priorityOptions = [
    { label: 'High', value: 'high' },
    { label: 'Moderate', value: 'moderate' },
    { label: 'Low', value: 'low' },
  ];
  //modal stuff
  const typeOptions = [
    { label: 'Optimize', value: 'optimize' },
    { label: 'Crash', value: 'crash' },
    { label: 'Upgrade', value: 'upgrade' },
  ];
  //modal stuff
  const statusOptions = [
    { label: 'In progress', value: 'inProgress' },
    { label: 'Stuck', value: 'stuck' },
  ];
  //modal stuff
  function autoPopulatePriority(priority) {
    for (let i = 0; i < priorityOptions.length; i++) {
      if (priorityOptions[i].value.toLowerCase() === priority.toLowerCase())
        console.log(priorityOptions[i]);
      return priorityOptions[i];
    }
  }
  //modal stuff
  function autoPopulateTypeOptions(type) {
    for (let i = 0; i < typeOptions.length; i++) {
      if (typeOptions[i].value.toLowerCase() === type.toLowerCase())
        return typeOptions[i];
    }
  }
  //modal stuff
  function autoPopulateStatusOptions(status) {
    for (let i = 0; i < statusOptions.length; i++) {
      if (statusOptions[i].value.toLowerCase() === status.toLowerCase())
        return statusOptions[i];
    }
  }

  const ModalContent = () => {
    return (
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{modalInfo.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="user">
            <div className="form-group row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <input
                  id="ownerField"
                  type="text"
                  defaultValue={modalInfo.name}
                  required
                  className="form-control"
                  placeholder="Owner"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="date"
                  defaultValue={modalInfo.date}
                  required
                  className="form-control"
                  placeholder="Todays date"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6 ">
                <Select
                  options={typeOptions}
                  defaultValue={autoPopulateTypeOptions(modalInfo.type)}
                  placeholder="Set Type"
                />
              </div>
              <div className="col-sm-6 ">
                <Select
                  options={statusOptions}
                  defaultValue={autoPopulateStatusOptions(modalInfo.status)}
                  placeholder="Set status"
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">
                <Select
                  options={priorityOptions}
                  defaultValue={autoPopulatePriority(modalInfo.priority)}
                  placeholder="Set Priority"
                />
              </div>
              <div className="col-sm-6">
                <input
                  type="text"
                  defaultValue={modalInfo.estimatedTime}
                  required
                  className="form-control"
                  placeholder="Estimated Time"
                />
              </div>
              <div className="col-sm-12">
                <textArea
                  type="text"
                  required
                  className="form-control text-center"
                  placeholder="Bug description"
                  rows={3}
                />
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/showbug">
            <Button class="btn btn-success">Show Bug</Button>
          </Link>
          <Button variant="primary" onClick={closeModalWithSaving}>
            Save
          </Button>
          <Button variant="secondary" onClick={closeModalWithOutSaving}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  const typeSelectOptions = {
    0: 'Optimize',
    1: 'Crash',
    2: 'Upgrade',
  };

  const statusSelectOptions = {
    0: 'In Progress',
    1: 'Stuck',
  };

  const prioritySelectOptions = {
    0: 'High',
    1: 'Moderate',
    2: 'Low',
  };

  const columns = [
    {
      dataField: 'id',
      text: 'ID',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'name',
      text: 'Name',
      sort: true,
      filter: textFilter(),
    },
    {
      dataField: 'date',
      text: 'Date',
      sort: true,
      filter: dateFilter(),
    },
    {
      dataField: 'type',
      text: 'Type',
      sort: true,
      // formatter: (cell) => typeSelectOptions[cell],
      // filter: selectFilter({
      //   options: typeSelectOptions,
      // }),
    },
    {
      dataField: 'status',
      text: 'Status',
      sort: true,
      // formatter: (cell) => statusSelectOptions[cell],
      // filter: selectFilter({
      //   options: statusSelectOptions,
      // }),
    },
    {
      dataField: 'priority',
      text: 'Priority',
      sort: true,
      // formatter: (cell) => prioritySelectOptions[cell],
      // filter: selectFilter({
      //   options: prioritySelectOptions,
      // }),
    },
    {
      dataField: 'estimatedTime',
      text: 'Estimated Time',
      sort: true,
      filter: textFilter(),
    },
  ];

  // const defaultSorted = [
  //   {
  //     dataField: 'name',
  //     order: 'desc',
  //   },
  // ];

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

  function tempTest() {
    let showBug = new ShowBug();
  }

  return (
    <React.Fragment>
      <Button class="btn btn-success">Test</Button>
      <BootstrapTable
        keyField="id"
        data={data2}
        columns={columns}
        //expandRow={expandRow}
        //defaultSorted={defaultSorted}
        pagination={paginationFactory(options)}
        rowEvents={rowEvents}
        filter={filterFactory()}
      />
      {/* {show ? <ModalContent /> : null} */}
      <div class="border-top my-3"></div>
      <Form className="user">
        <div className="form-group row">
          <div className="col-sm-6 mb-3 mb-sm-0">
            <input
              type="text"
              required
              defaultValue={modalInfo.name}
              onChange={(e) => setOwner(e.target.value)}
              className="form-control"
              placeholder="Owner"
            />
          </div>
          <div className="col-sm-6">
            <input
              type="date"
              required
              defaultValue={modalInfo.date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
              placeholder="Todays date"
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6 ">
            <input
              type="text"
              required
              defaultValue={modalInfo.type}
              //onChange={(e) => setType(e.target.value)}
              className="form-control"
              placeholder="Set Type"
            />

            {/* <Select
                       options={this.state.typeOptions} 
                       onChange = {setStatus(this.handleChange.bind(this))}
                       placeholder = 'Set Type' 
                       />     */}
          </div>
          <div className="col-sm-6 ">
            <input
              type="text"
              required
              defaultValue={modalInfo.status}
              //onChange={(e) => setStatus(e.target.value)}
              className="form-control"
              placeholder="Set Status"
            />
            {/*<Select
                       options={statusOptions} 
                       onChange = {setStatus}
                       placeholder = 'Set status'
                       />  */}
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-6">
            <input
              type="text"
              required
              defaultValue={modalInfo.priority}
              //onChange={(e) => setPriority(e.target.value)}
              className="form-control"
              placeholder="Set Priority"
            />

            {/*<Select
                       options={priorityOptions} 
                       onChange = {setPriority}
                       placeholder = 'Set Priority'                      
                       /> */}
          </div>
          <div className="col-sm-6">
            <input
              type="text"
              required
              defaultValue={modalInfo.estimatedTime}
              //onChange={(e) => setEstimatedTime(e.target.value)}
              className="form-control"
              placeholder="Estimated Time"
            />
          </div>
          <div className="col-sm-12">
            <input
              type="text"
              required
              //onChange={(e) => setBugDescription(e.target.value)}
              className="form-control text-center"
              placeholder="Bug description"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <button className="text-center btn btn-md btn-primary" type="submit">
            Create Bug
          </button>
        </div>
      </Form>
    </React.Fragment>
  );
};
export default Home;
