import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ComponentTitle({text}) {
    const {pathname} = useLocation();
    
    return (
        <>
            <h1 className={`${pathname === "/" || pathname === "/about" ? "text-white" : "text-[#2C3E50]"} text-[40px] font-bold uppercase`}>{text}</h1>
            <div className='flex items-center justify-center mb-3'>
                <div className={`${pathname === "/" || pathname === "/about" ? "bg-white" : "bg-[#2C3E50]"} line me-3`}></div>
                <div className={`${pathname === "/" || pathname === "/about" ? "text-white" : "text-[#2C3E50]"} star `}>
                    <i className="fa-solid fa-star"></i>
                </div>
                <div className={`${pathname === "/" || pathname === "/about" ? "bg-white" : "bg-[#2C3E50]"} line ms-3`}></div>
            </div>
        </>
    )
}
