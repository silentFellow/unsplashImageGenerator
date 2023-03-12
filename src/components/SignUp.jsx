import React, { useState, useRef } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'
import { AiFillLock, AiFillUnlock } from 'react-icons/ai'

import { auth, google } from '../fireBase.js'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const SignUp = () => {

  const [show, setShow] = useState(false)
  const [cShow, setCShow] = useState(false)
  const [check, setCheck] = useState(false)
  const [error, setError] = useState(false)

  const signUpEmail = useRef();
  const signUpPass = useRef();
  const signUpCPass = useRef();

  const reset = () => {
    signUpEmail.current.value = ''
    signUpPass.current.value = ''
    signUpCPass.current.value = ''
    setCheck(false)
  }

  const signUp = async () => {
    if(signUpPass.current.value != signUpCPass.current.value) {
      setError("Password And Confirm Password Does Not Match")
    }
    else if(check == 0) {
      setError("Please Accept Terms And Conditions")
    }
    else {
      setError('')
      try {
        await createUserWithEmailAndPassword(auth, signUpEmail.current.value, signUpPass.current.value)
        setError('SIGN-UP SUCCESSFUL')
        reset()
      }
      catch {
        setError('ENTER VALID EMAIL AND PASSWORD...')
      }
    }
  }

  const signGoogle = async () => {
      setError('')
      try {
        await signInWithPopup(auth, google)
        setError('SIGN-UP SUCCESSFUL')
        reset()
      }
      catch {
        setError('CANNOT LOGIN, TRY AGAIN LATER...')
      }
  }

  return (

    <div className="flex justify-center items-center h-[80%]">
      <div className="mb-[60px] flex flex-col justify-center items-center rounded-[30px]  h-[600px] w-1/2 bg-whiteSmoke shadow-2xl">

      <div className={`${error == '' ? 'hidden' : "flex justify-center items-center bg-ascent text-[#121820] w-[63%] h-[6%] rounded-md font-black tracking-wider"}`}>{error}</div>
        
        <div className="mail text-dark w-[63%]">
          <input type="text" minLength={'12'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER EMAIL HERE' required ref={signUpEmail} />
        </div>

        <div className="pass text-dark w-[63%] flex relative">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER PASSWORD HERE' required ref={signUpPass} />
          <span className="absolute left-[90%] top-[33%] text-[24px] text-dark" onClick={() => setShow(!show)}>
            {show ? <AiFillLock /> : <AiFillUnlock />}
          </span>
        </div>

        <div className="cPass text-dark w-[63%] flex relative">
          <input type={`${cShow ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full relative' placeholder='ENTER CONFIRM PASSWORD HERE' required ref={signUpCPass} />
          <span className="absolute left-[90%] top-[33%] text-[24px] text-dark" onClick={() => setCShow(!cShow)}>
            {show ? <AiFillLock /> : <AiFillUnlock />}
          </span>
        </div>

        <div className="check flex justify-start w-[63%] items-center">
          <input type="checkbox" className='h-[18px] w-[18px] mx-3' checked={check} />
          <label htmlFor="check" className='text-ascent text-[24px] font-fonty cursor-pointer' onClick={() => setCheck(!check)}>Accept terms and conditions</label>
        </div>

        <div className="flex justify-between items-center w-[36%] space-x-12 mt-3">
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black"
            onClick={() => signUp()}>
            SIGN UP
          </button>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black"
            onClick={() => reset()}
          >
            RESET
          </button>
        </div>

        <div className="flex justify-center w-[63%] items-center text-[30px] font-black my-2 font-fonty tracking-widest text-dark">OR</div>

        <div className="flex justify-center items-center bg-darkBg2 text-[#121820] w-[27%] h-[33px] rounded-full space-x-2 my-1 hover:opacity-90"
          onClick={() => signGoogle()}
        >
          <FcGoogle className='h-[18px] w-[18px]' />
          <a className="font-fonty text-light cursor-pointer">SIGN WITH GOOGLE</a>
        </div>

        <div className="flex justify-center items-center bg-darkBg2 text-[#121820] w-[27%] h-[33px] rounded-full space-x-2 my-1 hover:opacity-90">
          <FaGithub className='h-[18px] w-[18px] text-light' />
          <a className="font-fonty text-light cursor-pointer">SIGN WITH GITHUB</a>
        </div>

        <div className="flex justify-center items-center bg-darkBg2 text-[#121820] w-[27%] h-[33px] rounded-full space-x-2 my-1 hover:opacity-90">
          <GrFacebook className='h-[18px] w-[18px] text-light' />
          <a className="font-fonty text-light cursor-pointer">SIGN WITH FACEBOOK</a>
        </div>

      </div>
    </div>
  )
}

export default SignUp