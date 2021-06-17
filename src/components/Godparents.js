import React from 'react';
import { Link } from 'react-router-dom';
import { FaFire } from 'react-icons/fa';
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
                        <h1 className="godparents__heading">MY GODPARENTS</h1>
                        <div className="godparents__container">
                            <Link to="/sign-up" className="godparents__container-card">
                                <div className="godparents__container-cardInfo">
                                    <div className="icon">
                                        <FaFire />
                                    </div>
                                    <h3>Secondary</h3>
                                    <ul className="godparents__container-features">
                                        <li>Dnell Alix</li>
                                        <li>Jazlin Baldoz</li>
                                        <li>Mikayla Carpio</li>
                                        <li>Gabbie Estioko</li>
                                        <li>Ashley Fernandez</li>
                                        <li>Claudine Fernandez</li>
                                        <li>Cheryl Rasay</li>
                                    </ul>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="godparents__container-card">
                                <div className="godparents__container-cardInfo">
                                    <div className="icon">
                                        <BsXDiamondFill />
                                    </div>
                                    <h3>Primary</h3>
                                    <h4>May Estioko</h4>
                                    <p>and</p>
                                    <h4>Chris Rasay</h4>
                                </div>
                            </Link>
                            <Link to="/sign-up" className="godparents__container-card">
                                <div className="godparents__container-cardInfo">
                                    <div className="icon">
                                        <GiCrystalize />
                                    </div>
                                    <h3>Secondary</h3>
                                    <ul className="godparents__container-features">
                                        <li>Julian Austria</li>
                                        <li>Paul Estioko</li>
                                        <li>Vincent Estioko</li>
                                        <li>AJ Fernandez</li>
                                        <li>Ryan Hilario</li>
                                        <li>Jason Ibarra</li>
                                        <li>Steven Law</li>
                                    </ul>
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
