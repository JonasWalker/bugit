//import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react';
//import BugItLogo from './images/BugItLogo.jpg';
import './CSS/home.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select';

//https://www.javascripttutorial.net/javascript-fetch-api/
const Home = (props) => {
  const trackISS = 'https://api.wheretheiss.at/v1/satellites/25544';
  //   console.log('test')
  const data2 = require('./data.json');
  //   console.log('test')

  const [allBugs, setBugs] = useState([]);

  // async function getISS() {
  //   var myInit = {
  //     method: 'GET',
  //   };
  //   let myRequest = new Request(trackISS, myInit);
  //   fetch(myRequest)
  //     .then((response) => response.json())
  //     .then((bugsFromServer) => {
  //       setBugs(bugsFromServer);
  //     });
  // }

  // useEffect(() => {
  //   getISS([]);
  // });

  // function test(responseJson) {
  //   setBugs(responseJson);
  //   console.log('allBugs', allBugs);
  // }

  async function getAllBugs() {
    //const getBugsUrl = 'https://localhost:7075/get-all-bugs';
    var myInit = {
      method: 'POST',
      Headers: {
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'default',
    };
    let myRequest = new Request(trackISS, myInit);
    fetch(myRequest)
      .then(function (resp) {
        return resp.json();
      })
      .then(function (data) {
        console.log(data);
      });
  }

  // async function getAllBugs() {
  //   const getBugsUrl = 'https://localhost:7075/get-all-bugs';
  //   var myInit = {
  //     method: 'POST',
  //     Headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     mode: 'cors',
  //     cache: 'default',
  //   };
  //   let myRequest = new Request(trackISS, myInit);
  //   fetch(myRequest)
  //     .then(function (resp) {
  //       return resp.json();
  //     })
  //     .then(function (data) {
  //       console.log(data);
  //     });
  //   return bugs;
  // }
  //   const getBugsUrl = 'https://localhost:7075/get-all-bugs'

  //   var myInit = {
  //     method: 'POST',
  //     Headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     mode: 'cors',
  //     cache: 'default',
  //   }

  //   let myRequest = new Request(getBugsUrl, myInit)

  //   async function getAllBugs() {
  //     fetch(myRequest)
  //       .then(function (resp) {
  //         return resp.json()
  //       })
  //       .then(function (data) {
  //         console.log(data)
  //       })
  //   }

  //modal stuff
  const data = require('./data.json');
  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);
  //modal stuff
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //modal stuff
  const rowEvents = {
    onClick: (e, row) => {
      console.log(row);
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
      if (priorityOptions[i].value === priority) return priorityOptions[i];
    }
  }
  //modal stuff
  function autoPopulateTypeOptions(type) {
    for (let i = 0; i < typeOptions.length; i++) {
      if (typeOptions[i].value === type) return typeOptions[i];
    }
  }
  //modal stuff
  function autoPopulateStatusOptions(status) {
    for (let i = 0; i < statusOptions.length; i++) {
      if (statusOptions[i].value === status) return statusOptions[i];
    }
  }

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

  // const columns = [
  //   {
  //     dataField: 'altitude',
  //     text: 'altitude',
  //     sort: true,
  //   },
  //   {
  //     dataField: 'daynum',
  //     text: 'daynum',
  //     sort: true,
  //   },
  //   {
  //     dataField: 'footprint',
  //     text: 'footprint',
  //     sort: true,
  //   },
  //   {
  //     dataField: 'id',
  //     text: 'id',
  //     sort: true,
  //   },
  //   {
  //     dataField: 'latitude',
  //     text: 'latitude',
  //     sort: true,
  //   },
  //   {
  //     dataField: 'longitude',
  //     text: 'longitude',
  //     sort: true,
  //   },
  //   {
  //     dataField: 'name',
  //     text: 'name',
  //     sort: true,
  //   },
  // ];

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

  // const defaultSorted = [
  //   {
  //     dataField: 'name',
  //     order: 'desc',
  //   },
  // ];

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
      <Button variant="primary">Test</Button>
      <BootstrapTable
        keyField="id"
        data={data2}
        columns={columns}
        //expandRow={expandRow}
        //defaultSorted={defaultSorted}
        pagination={paginationFactory(options)}
        rowEvents={rowEvents}
      />
      {show ? <ModalContent /> : null}
    </React.Fragment>
  );
};
export default Home;
