import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
// import {
//   FaFacebook,
//   FaInstagram,
//   FaYoutube,
//   FaTwitter,
//   FaLinkedin
// } from 'react-icons/fa';
import { IoFlowerOutline } from 'react-icons/io5';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>The Ceremony</h2>
            <h3>St. Elizabeth Church</h3>
            <p>750 Sequoia Dr</p>
            <p>Milpitas, CA 95035</p>
            <h3>Time:</h3>
            <p>12:00PM - 1:00PM</p>
          </div>
          <div className='footer-link-items'>
            <h2>Join Us After</h2>
            <h3>Cataldi Park</h3>
            <p>2900 Cataldi Dr</p>
            <p>San Jose, CA 95132</p>
            <h3>Time:</h3>
            <p>2:00PM - 6:00PM</p>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Info</h2>
            <h3>My Dad</h3>
            <p>750 Sequoia Dr</p>
            <p>(408) 655-5671</p>
            <h3>My Mom</h3>
            <p>(408) 707-0470</p>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <IoFlowerOutline className='navbar-icon' />
              KIALA ELYSE
            </Link>
          </div>
          <small className='website-rights'>WEBSITE DEVELOPED BY MY UNCLE PAUL © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;