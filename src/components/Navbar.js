import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoFlowerOutline } from 'react-icons/io5';

function Navbar() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    return (
        <>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to="/" className="navbar-logo">
                        <IoFlowerOutline className="navbar_icon" />
                        Kiala Elyse
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/milestones" className="nav-links">
                                Milestones
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/baptism" className="nav-links">
                                My Baptism
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/thanks" className="nav-links">
                                Thank You
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
