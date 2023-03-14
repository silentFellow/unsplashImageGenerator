import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Home from './components/Home'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  return (
    <BrowserRouter>
      <div className="h-screen bg-light flex flex-col">
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
        <Routes>
          <Route path='/signIn' element={
            <>
              <Nav />
              <SignIn />
            </>
          }/>
        </Routes>
        <Routes>
          <Route path='/signUp' element={
            <>
              <Nav />
              <SignUp />
            </>
          }/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App