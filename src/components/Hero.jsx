import React, { useState } from 'react'
import Cards from './Cards'

import { AiOutlineSearch } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

const Hero = () => {

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('1');
  const [search, setSearch] = useState('');

  return (
    <div className="flex flex-col mx-[2%] sm:mx-[3%] md:mx-[4%] mt-[-21%] sm:mt-[-19%] md:mt-[-12%] lg:mt-[-8%] py-5 px-3 md:px-4 lg:px-9 bg-dark text-light rounded-xl">
      <div className="flex justify-between items-center w-full">

        <div className="block md:hidden" onClick={() => setToggle(!toggle)}>
          {!toggle ? <GiHamburgerMenu className='text-ascent h-[25px] w-[25px]' /> : <AiOutlineClose className='text-ascent h-[25px] w-[25px]' />}
        </div>

        <div className="hidden md:flex justify-between items-center text-ascent md:text-[13px] lg:text-[15px] md:w-[47%] lg:w-[51%] xl:w-[36%]">
          <button className={`${active == '1' ? 'border-b-2 border-ascent lg:hover:text-light p-2' : 'lg:hover:text-light p-2'}`} onClick={() => setActive('1')}>
            NEW VIDEOS
          </button>
          <button className={`${active == '2' ? 'border-b-2 border-ascent lg:hover:text-light p-2' : 'lg:hover:text-light p-2'}`} onClick={() => setActive('2')}>
            TRENDING
          </button>
          <button className={`${active == '3' ? 'border-b-2 border-ascent lg:hover:text-light p-2' : 'lg:hover:text-light p-2'}`} onClick={() => setActive('3')}>
            BASED ON YOUR SEARCH 
          </button>
        </div>
        <div className={`${toggle ? 'hidden' : "flex justify-center items-center w-[72%] md:w-[36%] lg:w-[30%] relative"}`}>
          <input type="search" placeholder='Look Out...' className='h-[27px] w-full rounded-full text-dark p-4 font-bold tracking-[2px] placeholder:text-ascent' />
          <span className="absolute right-[4%]">
            <AiOutlineSearch className='text-ascent h-[27px] w-[27px] cursor-pointer'/>
          </span>
        </div>
        <div className={`${!toggle ? 'hidden' : "flex justify-between items-center text-ascent w-[81%] text-[10px] sm:text-[16px]"}`}>
          <button className={`${active == '1' ? 'border-b-2 border-ascent lg:hover:text-light p-2' : 'lg:hover:text-light p-2'}`} onClick={() => setActive('1')}>
            NEW VIDEOS
          </button>
          <button className={`${active == '2' ? 'border-b-2 border-ascent lg:hover:text-light p-2' : 'lg:hover:text-light p-2'}`} onClick={() => setActive('2')}>
            TRENDING
          </button>
          <button className={`${active == '3' ? 'border-b-2 border-ascent lg:hover:text-light p-2' : 'lg:hover:text-light p-2'}`} onClick={() => setActive('3')}>
            BASED ON YOUR SEARCH 
          </button>
        </div>
      </div>
      <div className='flex flex-wrap justify-around items-center mt-[9%] sm:mt-[3%] gap-[27px]'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  )
}

export default Hero