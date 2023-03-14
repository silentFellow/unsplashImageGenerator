import React, { useState, useRef } from 'react'
import { AiFillLock, AiFillUnlock } from 'react-icons/ai'
import { FiPhone } from 'react-icons/fi'
import { auth, google } from '../fireBase.js'
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth'

const SignIn = () => {

  const [show, setShow] = useState(false)
  const [check, setCheck] = useState(false)
  const [error, setError] = useState(false)
  const signInEmail = useRef();
  const signInPass = useRef();
  const phone = useRef();

  const reset = () => {
    setCheck(false)
    signInEmail.current.value = ''
    signInPass.current.value = ''
  }

  return (
    <div className="flex justify-center items-center h-[80%]">
      <div className="flex flex-col justify-center items-center rounded-[30px] h-full md:w-1/2 bg-whiteSmoke shadow-2xl w-[90%] mob:w-[80%] lg:w-[60%] mb-[9%]">

        <div className={`${error == '' ? 'hidden' : "flex justify-center items-center bg-ascent text-[#121820] w-[81%] mob:w-[72%] lg:w-[63%] h-[6%] rounded-md font-black tracking-wider"}`}>
          {error}
        </div>

        <div className="mail text-dark w-[81%] mob:w-[72%] lg:w-[63%]">
          <input type="text" minLength={'12'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full placeholder:text-[12px] placeholder:text-ascent' placeholder='ENTER EMAIL HERE' required ref={signInEmail} />
        </div>

        <div className="pass text-dark flex relative w-[81%] mob:w-[72%] lg:w-[63%]">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full placeholder:text-[12px] placeholder:text-ascent' placeholder='ENTER PASSWORD HERE' required ref={signInPass} />
          <span className="absolute left-[85%] md:left-[90%] top-[33%] text-[24px] text-dark" onClick={() => setShow(!show)}>
            {show ? <AiFillLock /> : <AiFillUnlock />}
          </span>
        </div>

        <div className="check flex justify-start items-center w-[81%] mob:w-[72%] lg:w-[63%]">
          <input type="checkbox" className='h-[12px] w-[12px] mx-2 md:h-[18px] lg:w-[18px]}' onClick={() => setCheck(!check)} checked={check} />
          <label htmlFor="check" className='text-ascent text-[21px] md:text-[24px] font-fonty cursor-pointer' onClick={() => setCheck(!check)}>Accept terms and conditions</label>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center w-[39%] md:w-[36%] sm:space-x-12 mt-3">
          <button className="bg-dark text-light rounded-xl h-[30px] w-[90%] mb-[6px] sm:w-[63px] text-[15px] lg:h-[36px] lg:w-[90px] md:hover:bg-ascent md:hover:text-dark md:hover:font-black">SIGN IN</button>
          <button className="bg-dark text-light rounded-xl h-[30px] w-[90%] sm:w-[63px] text-[15px] lg:h-[36px] lg:w-[90px] md:hover:bg-ascent md:hover:text-dark md:hover:font-black"
            onClick={() => reset()}
          >
            RESET
          </button>
        </div>

        <div className="flex justify-center w-[63%] items-center text-[30px] font-black mt-2 mb-[-3px] font-fonty tracking-widest text-dark">OR</div>

        <div className="phone flex justify-center items-center relative w-[81%] mob:w-[72%] lg:w-[63%]">
          <input type="tel" 
            className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full placeholder:text-[12px] placeholder:text-ascent'
            placeholder='VERIFY WITH PHONE'
          />
          <FiPhone className='absolute top-[50%] left-[90%] translate-y-[-50%]'/>
        </div>

        <div className="flex justify-center items-center w-[36%] mt-3" ref={phone}>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] md:hover:bg-ascent md:hover:text-dark md:hover:font-black"
            onClick={() => phoneSignIn()}
          >
            VERIFY
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignIn