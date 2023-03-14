import React, { useState } from 'react'
import reset from './SignUp'
import { Link } from 'react-router-dom'
import { logoDark } from '../assets/icons'

const Nav = () => {

  const [active, setActive] = useState('in')

  return (
    <>
      <div className="flex mt-[1%] mb-[2%] mx-[9%] mob:mx-[12%] items-center justify-between h-1/5">
        
        <img 
          src={logoDark} 
          alt="logo" 
          className='h-[120px] w-[120px] mob:h-[150px] mob:w-[150px] sm:h-[180px] sm:w-[180px]'
        />

        <div className="flex justify-center space-x-3 mob:space-x-4 sm:space-x-8 md:space-x-9">
          <Link to="/signUp" className={`${active == 'up' ? 'border-b-2 border-ascent' : 'border-b-0'} text-dark font-black text-[15px] mob:text-[18px] hover:opacity-[70%]`} onClick={() => {
            setActive('up');
          }}>
            SIGN UP
          </Link>
          <Link to="/signIn" className={`${active == 'in' ? 'border-b-2 border-ascent' : 'border-b-0'} text-dark font-black text-[15px] mob:text-[18px] hover:opacity-[70%]`} onClick={() => {
            setActive('in');
          }}>
            SIGN IN
          </Link>
        </div>
      </div>
      
    </>
  )
}

export default Nav