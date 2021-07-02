import React from 'react';
import './ThankYou.css';
import { Link } from 'react-router-dom';
import { TiSocialInstagram } from 'react-icons/ti';

function ThankYou({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
    return (<>
        <div className="home__about-section">
            <div className="container">
                <div className="row home__about-row"
                    style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                >
                    <div className="col">
                        <div className="home__about-text-wrapper">
                            <h1 className="top-line">
                                Just wanted to say...
                            </h1>
                            <h1 className={lightText ? 'heading' : 'heading dark'}>
                                Thank You!
                            </h1>
                            <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                We would like to extend our thank you to everyone who came and helped make this party possible. For those who traveled far and near, we thank you all for making that time to celebrate with us. This past year has brought unpredictable surprises for everybody and we are so glad we were able to give Ellie this special moment to and celebrate her dedication to Christ and her first birthday. Again, thank you everyone for making this special day memorable! We would like to extend a special thank you to everyone who contributed to this special day. Below are our locals vendors list with special shout outs to our helping hands.
                            </p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="home__about-text-wrapper">
                            <div className="row">
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Cake/Cupcakes
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Glenda U. Estioko<br />
                                        <Link
                                            className='social-icon-link'
                                            to={
                                                '//www.instagram.com/whippedupjustforyou/'
                                            }
                                            target='_blank'
                                            aria-label='Instagram'
                                        >
                                            <TiSocialInstagram />
                                        </Link>
                                        <a className="igLink" href="https://www.instagram.com/whippedupjustforyou/">
                                            @whippedupjustforyou
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Cakepops
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Clarisa Bayaoa<br />
                                        <Link
                                            className='social-icon-link'
                                            to={
                                                '//www.instagram.com/popsbyisa/'
                                            }
                                            target='_blank'
                                            aria-label='Instagram'
                                        >
                                            <TiSocialInstagram />
                                        </Link>
                                        <a className="igLink" href="https://www.instagram.com/popsbyisa/">
                                            @popsbyisa
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Macarons
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Ashley Fontanilla<br />
                                        <Link
                                            className='social-icon-link'
                                            to={
                                                '//www.instagram.com/projectbakeitup/'
                                            }
                                            target='_blank'
                                            aria-label='Instagram'
                                        >
                                            <TiSocialInstagram />
                                        </Link>
                                        <a className="igLink" href="https://www.instagram.com/projectbakeitup/">
                                            @projectbakeitup
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Cookies
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Elaine Fontanilla<br />
                                        <Link
                                            className='social-icon-link'
                                            to={
                                                '//www.instagram.com/ecakesdelight/'
                                            }
                                            target='_blank'
                                            aria-label='Instagram'
                                        >
                                            <TiSocialInstagram />
                                        </Link>
                                        <a className="igLink" href="https://www.instagram.com/ecakesdelight">
                                            @ecakesdelight
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Cupcakes
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Jazlin Baldoz
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Coffee Bar
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Patrick Cadiz<br />
                                        <Link
                                            className='social-icon-link'
                                            to={
                                                '//www.instagram.com/patsbrews/'
                                            }
                                            target='_blank'
                                            aria-label='Instagram'
                                        >
                                            <TiSocialInstagram />
                                        </Link>
                                        <a className="igLink" href="https://www.instagram.com/patsbrews">
                                            @patsbrews
                                        </a>
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Balloon Arch
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Paul Joseph Estioko <br />
                                        Jazlin Baldoz <br />
                                        Mikayla Estioko Carpio <br />
                                        Alyssa Fernandez
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Lechon
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Emma + Dom Fernandez<br />
                                        Heather Carpio + Andy Evangelista
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Tables/Chairs/Tent
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Emarie + Rodel Baldoz
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Tables/Chairs
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Jane Estioko
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Food
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Rowena + Ghil Hilario <br />
                                        Delia + Elpidio Estioko
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Dessert Table
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        May Estioko <br />
                                        Paul Joseph Estioko
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Venue Assistance
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Seymour Estioko
                                    </p>
                                </div>
                                <div className="col">
                                    <h1 className="top-line-2">
                                        Party Supplies
                                    </h1>
                                    <p className={lightTextDesc ? 'home__about-subtitle' : 'home__about-subtitle dark'}>
                                        Marlen Cabrera
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default ThankYou;
