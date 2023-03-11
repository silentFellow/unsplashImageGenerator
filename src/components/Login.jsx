import React, { useState } from 'react'

const Login = (props) => {

  const [show, setShow] = useState(false)

  return (
    <div className="flex justify-center items-center h-[80%]">
      <div className="mb-[60px] flex flex-col justify-center items-center rounded-[30px]  h-[600px] w-1/2 bg-whiteSmoke shadow-2xl">
        
        <div className="mail text-dark w-[63%]">
          <input type="text" minLength={'12'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER EMAIL HERE' required />
        </div>

        <div className="pass text-dark w-[63%] flex">
          <input type={`${show ? 'text' : 'password'}`} minLength={'9'} className='border-2 border-ascent bg-light text-dark font-black px-3 py-2 my-4 rounded-[30px] w-full' placeholder='ENTER PASSWORD HERE' required />
        </div>

        <div className="check flex justify-start w-[63%] items-center">
          <input type="checkbox" className='h-[18px] w-[18px] mx-3' />
          <label htmlFor="check" className='text-ascent text-[24px]'>Accept terms and conditions</label>
        </div>

        <div className="flex justify-between items-center w-[36%] space-x-12 mt-3">
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">SUBMIT</button>
          <button className="bg-dark text-light rounded-xl h-[36px] w-[90px] hover:bg-ascent hover:text-dark hover:font-black">RESET</button>
        </div>

      </div>
    </div>
  )
}

const states = () => {

}

export default Login