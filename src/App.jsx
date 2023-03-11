import React from 'react'
import Nav from './components/Nav'
import Login from './components/Login'

const App = () => {
  return (
    <div className="h-screen bg-light flex flex-col">
      <Nav />
      <Login />
    </div>
  )
}

export default App