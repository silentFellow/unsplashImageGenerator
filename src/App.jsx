import React, { useState, useEffect } from 'react'
import Nav from './components/Nav'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

const App = () => {

  const [active, setActive] = useState('in')

  return (
    <BrowserRouter>
    <div className="h-screen bg-light flex flex-col">
      <Nav active={active} setActive={setActive}/>
      <Routes>
        <Route path='/' exact element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App