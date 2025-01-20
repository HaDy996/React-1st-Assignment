import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Layout() {
    //! To know the path of component dynamic we use [ useLocation ] Hook and the pathname inside it
    const {pathname} = useLocation();
    console.log( pathname);
    
    return (
        <>
            <Navbar />
            <div className={`${pathname === "/" || pathname === "/about" ? "bg-[#1ABC9C]" : "bg-white"} min-h-dvh center pt-40`}> 
                <div className="container text-center ">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>


    )
}
