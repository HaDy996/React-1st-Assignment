import React, { useState } from 'react'
import ComponentTitle from '../ComponentTilte/ComponentTitle'

const images = Object.values(import.meta.glob('../../assets/images/*.{png,jpg,jpeg,PNG,JPEG}',
  {
    as: 'url', eager : true
  }
))
export default function Portfolio() {
  const [openModal,setOpenModal] = useState(false);
  const [imgSrc,setImgSrc] = useState("")
  
  return (
    <>
      <ComponentTitle text ={"portfolio component"} />
      
      <div className="row">
        {images.map((image,index) => <div key={index} className='sm:w-full md:w-1/2 lg:w-1/3 p-4'>
          <img src={image} className='w-full rounded-lg' alt="" onClick={(e) => {
            console.log(e.target.getAttribute('src'));
            setImgSrc(e.target.getAttribute('src'))
            setOpenModal(true);
          }} />
        </div>)}
        {openModal && <div className='fixed inset-0 z-30 center'>
          <div className='inset-0 bg-indigo-950 opacity-50 absolute' onClick={() => {
            setOpenModal(false)
          }}></div> 
          <img src={imgSrc} className='w-[600px] z-20' alt=''/>
        </div>}
      </div>

    </>
  )
}
