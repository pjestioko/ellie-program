import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
import { Button } from './Button';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import './Godparents.css';

function Godparents() {
    return (
        <IconContext.Provider value={{ color: '#fff', size: 64 }}>
            <div>
                <div className="godparents__section">
                    <div className="godparents__wrapper">
                        <h1 className="godparents__heading">Godparents</h1>
                        <div className="godparents__container">
                            <Link to="/sign-up" className="godparents__container-card">
                                <div className="godparents__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Starter</h3>
                                    <h4>$8.99</h4>
                                    <p>per month</p>
                                    <ul className="godparents__container-features">
                                        <li>100 transactions</li>
                                        <li>2% cash back</li>
                                        <li>$10,000 limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="godparents__container-card">
                                <div className="godparents__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Gold</h3>
                                    <h4>$29.99</h4>
                                    <p>per month</p>
                                    <ul className="godparents__container-features">
                                        <li>1000 transactions</li>
                                        <li>2.5% cash back</li>
                                        <li>$100,000 limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="godparents__container-card">
                                <div className="godparents__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Diamond</h3>
                                    <h4>$99.99</h4>
                                    <p>per month</p>
                                    <ul className="godparents__container-features">
                                        <li>Unlimited transactions</li>
                                        <li>2.5% cash back</li>
                                        <li>$100,000 limit</li>
                                    </ul>
                                    <Button buttonSize='btn--wide' buttonColor='primary'>
                                        Choose Plan
                                    </Button>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
}

export default Godparents
