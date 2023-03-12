import React, { useState } from 'react'
import Nav from './components/Nav'
import Login from './components/Login'

const App = () => {

  const [active, setActive] = useState('in')

  return (
      <div className="h-screen bg-light flex flex-col">
        <Nav active={active} setActive={setActive} />
        <Login active={active} />
      </div>
  )
}

export default App