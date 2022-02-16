import React from 'react'
import './CSS/Login.css'
import BugItLogo from './images/BugItLogo.jpg'

export const Account = () => (
  <React.Fragment>
    <body>
      <div class='container'>
        <main class='form-signup'>
          {/* class="form-floating col row g-3" */}
          <div class='col'>
            {/* <div class="col-md-7 col-lg-8"> */}
            <form>
              <div class='row g-3'>
                <img
                  class='logo'
                  rel='icon'
                  src={BugItLogo}
                  alt='Logo'
                  width='100px'
                  height='100px'
                />
                <h1 class='h3 mb-3 fw-normal text-center'>Your Account</h1>
                <div class='col-6'>
                  <label for='inputFirstName' class='form-label'>
                    First Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputFirstName'
                    placeholder='John'
                  />
                </div>
                <div class='col-6'>
                  <label for='inputLastName' class='form-label'>
                    Last Name
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputLastName'
                    placeholder='Doe'
                  />
                </div>
                <div class='col-12'>
                  <label for='inputEmail' class='form-label'>
                    Email
                  </label>
                  <input
                    type='email'
                    class='form-control'
                    id='inputAddress'
                    placeholder='name@example.com'
                  />
                </div>
                <div class='col-12'>
                  <label for='inputPhoneNumber' class='form-label'>
                    Phone Number
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputPhoneNumber'
                    placeholder='(XXX)XXX-XXXX'
                    pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                  />
                </div>
                <div class='col-12'>
                  <label for='inputCompany' class='form-label'>
                    Company
                  </label>
                  <input
                    type='text'
                    class='form-control'
                    id='inputCompany'
                    placeholder='BugIt'
                  />
                </div>
                <div class='col text-center'>
                  <a
                    href='/#home'
                    class='w-50 btn btn-md btn-primary'
                    type='submit'
                  >
                    Save
                  </a>
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </body>
  </React.Fragment>
)
