import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  //! to handle and detect UserScroll
  const handleScroll = () => {
    if (window.scrollY > 22) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }
  const [isScrolling, setScrolling] = useState(false)
  window.addEventListener("scroll", handleScroll)

  return (
    <nav className={`${isScrolling === false ? "py-8" : "py-3"} transition-[padding] duration-700 fixed inset-x-0 z-10 bg-[#2C3E50]`}>
      <div className="container text-white flex justify-between font-sans">
        <h2>
          <Link to={""} className="uppercase text-[32px] font-bold">Start Framework</Link>
        </h2>
        <ul className='center gap-x-6'>
          <li>
            <NavLink to={"about"} className={'uppercase font-bold p-2'}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={"portfolio"} className={'uppercase font-bold p-2'}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to={"Contact"} className={'uppercase font-bold p-2'}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
