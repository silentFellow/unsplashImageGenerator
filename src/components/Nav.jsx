import React, { useState } from 'react'
import reset from './Login'

const Nav = ({setActive, active}) => {

  return (
    <>
      <div className="mt-[-30px] mx-[81px] flex items-center justify-between h-1/5">
        
        <img 
          src="src\assets\logoDark.svg" 
          alt="logo" 
          className='h-[180px] w-[180px]'
        />

        <div className="flex justify-center space-x-9">
          <a href="#" className={`${active == 'up' ? 'border-b-2 border-ascent' : 'border-b-0'} text-dark font-black text-[18px] hover:opacity-[70%]`} onClick={() => {
            setActive('up');
          }}>
            SIGN UP
          </a>
          <a href="#" className={`${active == 'in' ? 'border-b-2 border-ascent' : 'border-b-0'} text-dark font-black text-[18px] hover:opacity-[70%]`} onClick={() => {
            setActive('in');
          }}>
            SIGN IN
          </a>
        </div>
      </div>
      
    </>
  )
}

export default Nav