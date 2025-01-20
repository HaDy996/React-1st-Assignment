import React from 'react'
import ComponentTitle from '../ComponentTilte/ComponentTitle'

export default function About() {
  return (
    <>
      <ComponentTitle text={"about component"} />
      <div className="container flex text-white mt-5">
        <div className="left ps-5 me-4">
          <p className=' text-start'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
        <div className="right">
          <p className=' text-start'>
            Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
          </p>
        </div>
      </div>
    </>
  )
}
