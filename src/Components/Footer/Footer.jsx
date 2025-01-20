import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className="upperFooter bg-[#2C3E50] inset-x-0 p-[40px] text-white flex justify-evenly">

        <div className="container flex m-14">
        <div className="location text-center w-1/3">
          <h3 className='uppercase text-2xl font-bold'>location</h3>
          <p className='mt-2'>2215 John Daniel Drive</p>
          <p className='mt-4'>Clark, MO 65243</p>
        </div>

        <div className="social text-center w-1/3">
          <h3 className='uppercase text-2xl font-bold'>Around The Web</h3>

          <div className="socialIcons flex justify-center items-center gap-2 mt-2">
            <div className="circle flex relative items-center">
              <i className="fa-brands fa-facebook absolute top-1/2 translate-x-3 -translate-y-1/2 cursor-pointer"></i>
            </div>
            <div className="circle flex relative items-center">
              <i className="fa-brands fa-twitter absolute top-1/2 translate-x-3 -translate-y-1/2 cursor-pointer"></i>
            </div>
            <div className="circle flex relative items-center">
              <i className="fa-brands fa-linkedin-in absolute top-1/2 translate-x-3 -translate-y-1/2 cursor-pointer"></i>
            </div>
            <div className="circle flex relative items-center">
              <i className="fa-solid fa-globe absolute top-1/2 translate-x-3 -translate-y-1/2 cursor-pointer"></i>
            </div>
          </div>
        </div>

        <div className="freelancer text-center w-1/3">
          <h3 className='uppercase text-2xl font-bold'>About FreeLancer</h3>
          <p className='mt-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
        </div>

      </div>

      <div className="loweFooter bg-[#1A252F] inset-x-0 p-[10px] text-white flex justify-center items-center">
          <p className='p-3 items-center'>Copyright © Your Website 2021</p>
      </div>
    </div>
  )
}

