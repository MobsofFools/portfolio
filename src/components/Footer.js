import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-media-wrap'>
        <small className='website-rights'>Built with React</small>
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