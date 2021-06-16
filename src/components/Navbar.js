import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoFlowerOutline } from 'react-icons/io5';
import { Button } from './Button';
import './Navbar.css';
import { IconContext } from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                            <IoFlowerOutline className="navbar_icon" />
                            Kiala Elyse
                        </Link>
                        <div className="menu-icon" onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/milestones" className="nav-links" onClick={closeMobileMenu}>
                                    Milestones
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/baptism" className="nav-links" onClick={closeMobileMenu}>
                                    My Baptism
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/thanks" className="nav-links" onClick={closeMobileMenu}>
                                    Thank You
                                </Link>
                            </li>
                            <li className="nav-btn">
                                {button ? (
                                    <Link to='/message' className="btn-link">
                                        <Button buttonStyle='btn--outline'>
                                            LEAVE A MESSAGE
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to='/message' className="btn-link">
                                        <Button buttonStyle='btn--outline'
                                            buttonSize='btn--mobile' 
                                            onClick={closeMobileMenu}>
                                            LEAVE A MESSAGE
                                        </Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
