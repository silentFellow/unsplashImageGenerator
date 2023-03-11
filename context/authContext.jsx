import React,{ createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../fireBase'

const userContext = createContext()

const authContext = ({ children }) => {

  const [currentUser, setCurrentUser] = useState()

  const signUp = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })

    return unSubscribe
  }, [])

  const value = {
    currentUser
    signUp
  }

  return (
    <userContext.Provider value={ value }>
      (children)
    </userContext.Provider>
  )
}

export default authContext