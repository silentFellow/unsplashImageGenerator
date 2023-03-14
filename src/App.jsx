import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'
import Hero from './components/Hero'

import AuthProvider from './contexts/authContext'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <div className="h-screen bg-light flex flex-col">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signIn' element={<Nav />} />
            <Route path='/signUp' element={<Nav />} />
          </Routes>
          <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/signUp' element={<SignUp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App