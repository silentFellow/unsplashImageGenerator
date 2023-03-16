import React from 'react'

const Cards = (props) => {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-light text-dark rounded-[24px] lg:hover:opacity-70 hover:shadow-[3px_6px_6px_9px] hover:shadow-ascent h-[450px] mob:h-[400px] sm:h-[360px] md:h-[350px] lg:h-[330px]">
      <img 
        src={props.src} 
        alt="image is missing" 
        className='h-full w-full' 
      />
    </div>
  )
}

export default Cards