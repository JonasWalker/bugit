import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Layout from './Layout'
import { Home } from './Home'
import { About } from './About'
import { Contact } from './Contact'
import { NoMatch } from './NoMatch'
import { Component } from 'react'
import { Login } from './Login'
import { Signup } from './Signup'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='signup' element={<Signup />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          {/* destination not recognized ex: www.abc.com/home or.com/about */}
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}
