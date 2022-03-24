//import { render } from '@testing-library/react'
import React, { TextArea, useState, useEffect, Link } from 'react';
import BugItLogo from './images/BugItLogo.jpg';
import './CSS/CreateAccount.css';
import { Button } from 'react-bootstrap';
import Select from 'react-select';

const ShowBug = (props) => {
  const data = require('./data.json');

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

  function autoPopulatePriority(priority) {
    for (let i = 0; i < priorityOptions.length; i++) {
      if (priorityOptions[i].value.toLowerCase() === priority.toLowerCase())
        console.log(priorityOptions[i]);
      return priorityOptions[i];
    }
  }

  function autoPopulateTypeOptions(type) {
    for (let i = 0; i < typeOptions.length; i++) {
      if (typeOptions[i].value.toLowerCase() === type.toLowerCase())
        return typeOptions[i];
    }
  }

  function autoPopulateStatusOptions(status) {
    for (let i = 0; i < statusOptions.length; i++) {
      if (statusOptions[i].value.toLowerCase() === status.toLowerCase())
        return statusOptions[i];
    }
  }

  const [owner, setOwner] = useState('');
  const [timeCreated, setDate] = useState('');
  const [type, setType] = useState('');
  const [status, setStatus] = useState('');
  const [priority, setPriority] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('');
  const [description, setBugDescription] = useState('');
  const [redirect, setRedirect] = useState(false);
  const submit = async (e) => {
    e.preventDefault();

    await fetch('get-bug-by-id', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        owner: owner,
        timeCreated: timeCreated,
        type: type,
        status: status,
        priority: priority,
        estimatedTime: estimatedTime,
        description: description,
      }),
    }).then(function (response) {
      if (response.status === 200) setRedirect(true);
      else alert('Invalid credientials, please try again');
    });
  };
  // if (redirect) return <Navigate to='/#home' />

  /*onChangeFunc=({value}) =>
    {
      (e) => {value(e.target.value)}
    }
  */

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <img
            className="logo"
            rel="icon"
            src={BugItLogo}
            alt="Logo"
            width="100px"
            height="100px"
          />
          {/* <div className='col-sm-12 btn btn-primary' style={{ margin: '6px' }}>
          Add New Contact
        </div> */}
        </div>
        <div
          className="card o-hidden border-0 shadow-lg my-5"
          style={{ marginTop: '5rem!important' }}
        >
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4">Create a New Bug</h1>
                  </div>
                  <form onSubmit={submit} className="user">
                    <div className="form-group row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          required
                          onChange={(e) => setOwner(e.target.value)}
                          className="form-control"
                          placeholder="Owner"
                        />
                      </div>
                      <div className="col-sm-6">
                        <input
                          type="date"
                          required
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
                          onChange={(e) => setType(e.target.value)}
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
                          onChange={(e) => setStatus(e.target.value)}
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
                          onChange={(e) => setPriority(e.target.value)}
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
                          onChange={(e) => setEstimatedTime(e.target.value)}
                          className="form-control"
                          placeholder="Estimated Time"
                        />
                      </div>
                      <div className="col-sm-12">
                        <input
                          type="text"
                          required
                          onChange={(e) => setBugDescription(e.target.value)}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ShowBug;
