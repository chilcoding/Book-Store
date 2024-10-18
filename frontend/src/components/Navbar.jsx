import React, { useEffect, useState } from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import Logout from './Logout'
import { useAuth } from '../context/AuthProvider'

const Navbar = () => {
    const [authUser, setAuthUser] = useAuth()

    

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setSticky(true)
            } else {
                setSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    const navItems = (    // For Use This Multiple Time Use 
        <>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/course'>Course</a></li>
            <li><a href='/contact'>Contact</a></li>
            
        </>
    )



    const navSearch = (    // For Use This Multiple Time Use 
        <>
            <label className=" flex justifier-center items-center gap-2">
                <input type="text" className="grow py-2 px-2 rounded-md bg-transparent" placeholder="Search" />
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6 opacity-70 cursor-pointer">
                    <path
                        fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
            </label>
        </>
    )



    return (
        <div className=''>
            <div className={`navbar fixed top-0 left-0 z-50  ${sticky ? " bg-base-200  shadow-md duration-300 transition-all ease-in-out " : ""
                }`}>
                <div className="navbar-start">
                    <div className="dropdown py-4">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 shadow-md rounded-box z-[1] mt-3 w-52 p-2">
                            <div className="searchSm md:hidden">
                                {navSearch}
                            </div>
                            {navItems}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-2xl font-bold cursor-pointer text-red-600">Book Store</Link>
                </div>

                <div className="navbar-end space-x-6">

                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>
                    <div className="search-container hidden md:block">
                        {navSearch}
                    </div>


                    {
                        authUser ? <Logout/> : 
                    <div className="nav-btn" >
                       <a className="btn" onClick={()=>document.getElementById("my_modal_3").showModal()} >Login</a>
                        <Login/>
                    </div> 
                    }
                   
                </div>
            </div>
        </div>
    )
}

export default Navbar
