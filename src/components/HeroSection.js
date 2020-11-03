import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {Link} from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Hi</h1>
      <p>Hire me pls</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <Link to='/resume' style={{ textDecoration: 'none' }}>
            RESUME
          </Link>
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          <Link to='/projects' style={{ textDecoration: 'none' }}>
            PROJECTS
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;