import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/NavBar.css';

const NavBar = () => {
    const [click, setClick] = useState<boolean>(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
        <>
            <nav className='navbar bg-red-400'>
                <div className='navbar-container'>
                    <div className="text-4xl text-blue-400 flex flex-shrink-0 items-center">
                        <Link to='/home1' className='navbar-logo flex items-center' onClick={closeMobileMenu}>
                            <img
                                alt="Your Company"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                className="h-8 w-auto"
                            />
                            <span className="ml-2">Home</span>
                        </Link>
                    </div>
                </div>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <div className='nav-links'>
                            <div className="text-2xl text-green-400">
                                <Link to="/todolist">
                                    todolist
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-links'>
                            <div className="text-2xl text-green-400">
                                <Link to="/test2">
                                    test2
                                </Link>
                            </div>
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-links'>
                            <div className="text-2xl text-green-400">
                                <Link to="/test3">
                                    test3
                                </Link>
                            </div>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
