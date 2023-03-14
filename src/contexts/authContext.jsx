import React, { createContext, useContext, useState } from 'react'
import { auth, google } from '../fireBase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

export const authContext = createContext();

export const useAuth = () => useContext(authContext)

const AuthProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState('')

  const login = (email, pass) => signInWithEmailAndPassword(auth, email, pass);

  const googleSignIn = () => signInWithPopup(auth, google);

  const signUpWithEmail = (email, pass) => createUserWithEmailAndPassword(auth, email, pass);

  const dynamicValue = {
    currentUser, 
    login, 
    googleSignIn, 
    signUpWithEmail
  }

  return (
    <authContext.Provider value={dynamicValue}>
      { children }
    </authContext.Provider>
  )
}

export default AuthProvider