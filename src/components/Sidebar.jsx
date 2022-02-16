import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from 'react-router-dom'
import './CSS/sidebar.css'

function Sidebar() {
  return (
    <body>
      <main>
        <div
          class='d-flex flex-column flex-shrink-0 bg-light'
          style={{ float: 'left' }}
        >
          <ul class='nav nav-pills nav-flush flex-column mb-auto text-center'>
            <li>
              <a
                href='/login'
                class='nav-link active py-3 border-bottom'
                aria-current='page'
                title='login'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                Login
              </a>
            </li>
            <li>
              <a
                href='/createAccount'
                class='nav-link active py-3 border-bottom'
                aria-current='page'
                title='signup'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                Sign up
              </a>
            </li>
            <li>
              <a
                // href points refer to the destination ex: www.abc.com/home   or.com/about
                href='/#home'
                class='nav-link py-3 border-bottom'
                title='Home'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                Home
              </a>
            </li>
            <li>
              <a
                href='/about'
                class='nav-link py-3 border-bottom'
                title='About'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                About
              </a>
            </li>
            <li>
              <a
                href='/contact'
                class='nav-link py-3 border-bottom'
                title='Contact'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href='/nomatch'
                class='nav-link py-3 border-bottom'
                title='NoMatch'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href='/nomatch'
                class='nav-link py-3 border-bottom'
                title='nomatch'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href='/nomatch'
                class='nav-link py-3 border-bottom'
                title='NoMatch'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href='/nomatch'
                class='nav-link py-3 border-bottom'
                title='NoMatch'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href='/nomatch'
                class='nav-link py-3 border-bottom'
                title='NoMatch'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                {' '}
              </a>
            </li>
            <li>
              <a
                href='/account'
                class='nav-link py-3 border-bottom'
                title='Account'
                data-bs-toggle='tooltip'
                data-bs-placement='right'
              >
                Account
              </a>
            </li>
            <a
              href='/account'
              class='nav-link py-3 border-bottom'
              title='Account'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              Account
            </a>
          </ul>
          <div class='dropdown'>
            <button
              class='btn btn-secondary dropdown-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
            >
              Dropdown button
            </button>
            <ul class='dropdown-menu' aria-labelledby='dropdownMenuButton1'>
              <li>
                <a class='dropdown-item' href='/account'>
                  Action
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='/contact'>
                  Another action
                </a>
              </li>
              <li>
                <a class='dropdown-item' href='/about'>
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
        <Outlet />
      </main>
    </body>
  )
}

export default Sidebar
