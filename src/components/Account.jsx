import React from 'react'

export const Account = () => (
  <React.Fragment>
    <head>
      <meta name='theme-color' content='#7952b3'></meta>
      <link href='signin.css' rel='stylesheet' />
      <link
        rel='icon'
        href='/BugItLogo.png'
        sizes='32x32'
        type='image/png'
      ></link>
    </head>
    <body class='text-center'>
      <form class='form-floating row g-3'>
        <div class='col-md-6'>
          <label for='floatingInput'>Email address</label>
          <label for='inputEmail4' class='form-label'>
            Email
          </label>
          <input
            type='email'
            class='form-control'
            id='floatingInput'
            placeholder='name@example.com'
          />
        </div>
        <div class='col-md-6'>
          <label for='inputPassword4' class='form-label'>
            Password
          </label>
          <input type='password' class='form-control' id='inputPassword4' />
        </div>
        <div class='col-12'>
          <label for='inputAddress' class='form-label'>
            Address
          </label>
          <input
            type='text'
            class='form-control'
            id='inputAddress'
            placeholder='1234 Main St'
          />
        </div>
        <div class='col-12'>
          <label for='inputAddress2' class='form-label'>
            Address 2
          </label>
          <input
            type='text'
            class='form-control'
            id='inputAddress2'
            placeholder='Apartment, studio, or floor'
          />
        </div>
        <div class='col-md-6'>
          <label for='inputCity' class='form-label'>
            City
          </label>
          <input type='text' class='form-control' id='inputCity' />
        </div>
        <div class='col-md-4'>
          <label for='inputState' class='form-label'>
            State
          </label>
          <select id='inputState' class='form-select'>
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div class='col-md-2'>
          <label for='inputZip' class='form-label'>
            Zip
          </label>
          <input type='text' class='form-control' id='inputZip' />
        </div>
        <div class='col-12'>
          <div class='form-check'>
            <input class='form-check-input' type='checkbox' id='gridCheck' />
            <label class='form-check-label' for='gridCheck'>
              Check me out
            </label>
          </div>
        </div>
        <div class='col-12'>
          <button type='submit' class='btn btn-primary'>
            Sign in
          </button>
        </div>
      </form>
    </body>
  </React.Fragment>
)
