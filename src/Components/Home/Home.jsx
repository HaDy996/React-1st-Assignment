import React from 'react'
import ComponentTitle from '../ComponentTilte/ComponentTitle'
import avatar  from '../../assets/images/avataaars.svg'



export default function Home() {
  
  return (
      <>
        <img className='w-[250px] mx-auto mb-10' src={avatar} alt=""  />

        <ComponentTitle text ={"Start Framework"} />

        <p className='text-white'>Graphic Artist - Web Designer - Illustrator</p>

      </>
  )
}
