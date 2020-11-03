import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Contact Me</h2>
            <Link to='/'>Contact</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.linkedin.com/in/edvinlin/">LinkedIn</a>
            <a href="https://github.com/MobsofFools">GitHub</a>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              Edvin Lin
            </Link>
          </div>
          <small className='website-rights'>Edvin Lin © 2020</small>
          <div className='social-icons'>
            <a
              className='social-icon-link twitter'
              href="https://github.com/MobsofFools"
              aria-label='GitHub'
            >
              <i className='fab fa-github' />
            </a>
            <a
              className='social-icon-link twitter'
              href="https://www.linkedin.com/in/edvinlin/"
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;