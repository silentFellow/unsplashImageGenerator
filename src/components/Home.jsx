import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { CgProfile } from 'react-icons/cg'

const Home = () => {

  const [profile, setProfile] = useState(false)

  return (
    <div className="h-screen bg-light">
      <div className="h-[15%] mt-[30px] mx-[12%] flex justify-between items-center text-dark relative">
        <img 
          src="src\assets\logoDark.svg" 
          alt="logo" 
          className='h-[180px] w-[180px]'
        />
        
        <button>
          <CgProfile size={'24px'} className='text-dark' onClick={() => setProfile(!profile)}/>
        </button>

        <div className={`${profile ? "h-[90px] w-[90px] flex flex-col bg-dark text-ascent font-fonty p-3 absolute justify-around items-start rounded-3xl right-[0%] top-[70%] z-10" : 'hidden'}`}>
          <Link to='/signIn'>Sign In</Link>
          <Link>Sign Out</Link>
        </div>
      </div>
    </div>
  )
}

export default Home