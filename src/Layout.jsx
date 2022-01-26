import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Outlet,
} from 'react-router-dom'

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <div
        class='d-flex flex-column flex-shrink-0 bg-light'
        style={{ float: 'left' }}
      >
        <a
          href='/#'
          class='d-block p-3 link-dark text-decoration-none'
          title='Icon-only'
          data-bs-toggle='tooltip'
          data-bs-placement='right'
        >
          <span class='visually-hidden'>Icon-only</span>
        </a>
        <ul class='nav nav-pills nav-flush flex-column mb-auto text-center'>
          <li class='nav-item'>
            <a
              href='/#'
              class='nav-link active py-3 border-bottom'
              aria-current='page'
              title='Home'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              0
            </a>
          </li>
          <li>
            <a
              href='/#'
              class='nav-link py-3 border-bottom'
              title='Dashboard'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='/#'
              class='nav-link py-3 border-bottom'
              title='Orders'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='/#'
              class='nav-link py-3 border-bottom'
              title='Products'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='/#'
              class='nav-link py-3 border-bottom'
              title='Customers'
              data-bs-toggle='tooltip'
              data-bs-placement='right'
            >
              4
            </a>
          </li>
        </ul>
      </div>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <Outlet />
    </div>
  )
}

export default Layout
