import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'
import { GrFacebook } from 'react-icons/gr'

const Login = ({active}) => {

  const [show, setShow] = useState(false)

  return (
    <div className="flex justify-center items-center h-[80%]">
      <div className={`${active == 'in' ? "mb-[60px] flex flex-col justify-center items-center rounded-[30px]  h-[600px] w-1/2 bg-whiteSmoke shadow-2xl" : 'hidden'}`}>
        
        <div className="mail text-dark w-[63%]">
          <input type="text" minLength={'12'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER EMAIL HERE' required />
        </div>

        <div className="pass text-dark w-[63%] flex">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER PASSWORD HERE' required />
        </div>

        <div className="check flex justify-start w-[63%] items-center">
          <input type="checkbox" className='h-[18px] w-[18px] mx-3' />
          <label htmlFor="check" className='text-ascent text-[24px] font-fonty'>Accept terms and conditions</label>
        </div>

        <div className="flex justify-between items-center w-[36%] space-x-12 mt-3">
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">SUBMIT</button>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">RESET</button>
        </div>
      </div>

      <div className={`${active == 'up' ? "mb-[60px] flex flex-col justify-center items-center rounded-[30px]  h-[600px] w-1/2 bg-whiteSmoke shadow-2xl" : 'hidden'}`}>
        
        <div className="mail text-dark w-[63%]">
          <input type="text" minLength={'12'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER EMAIL HERE' required />
        </div>

        <div className="pass text-dark w-[63%] flex">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER PASSWORD HERE' required />
        </div>

        <div className="pass text-dark w-[63%] flex">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER CONFIRM PASSWORD HERE' required />
        </div>

        <div className="check flex justify-start w-[63%] items-center">
          <input type="checkbox" className='h-[18px] w-[18px] mx-3' />
          <label htmlFor="check" className='text-ascent text-[24px] font-fonty'>Accept terms and conditions</label>
        </div>

        <div className="flex justify-between items-center w-[36%] space-x-12 mt-3">
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">SUBMIT</button>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">RESET</button>
        </div>

        <div className="flex justify-center w-[63%] items-center text-[30px] font-black my-2 font-fonty tracking-widest text-dark">OR</div>

        <div className="flex justify-center items-center bg-darkBg2 text-[#121820] w-[27%] h-[33px] rounded-full space-x-2 my-1 hover:opacity-90">
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

const states = () => {

}

export default Login