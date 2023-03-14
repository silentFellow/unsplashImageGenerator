import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CgProfile } from 'react-icons/cg'
import { logoDark } from '../assets/icons'

const Home = () => {

  const [profile, setProfile] = useState(false)

  return (
    <div className="bg-light">
      <div className="h-[15%] mt-[30px] mx-[9%] mob:[12%] flex justify-between items-center text-dark relative">
        <img 
          src={logoDark} 
          alt="logo" 
          className='h-[180px] w-[180px]'
        />
        
        <button>
          <CgProfile size={'24px'} className='text-dark' onClick={() => setProfile(!profile)}/>
        </button>

        <div className={`${profile ? "h-[90px] w-[90px] flex flex-col bg-dark text-ascent font-fonty p-3 absolute justify-around items-start rounded-3xl right-[0%] top-[70%] z-10" : 'hidden'}`}>
          <Link to='/signIn' className='hover:text-light'>Sign In</Link>
          <Link className='hover:text-light'>Sign Out</Link>
        </div>
      </div>
    </div>
  )
}

export default Home