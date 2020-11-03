import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>Hi</h1>
      <p>Hire me pls</p>
      <div className='hero-btns'>
        <Button
          path='/resume'
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          style={{ textDecoration: 'none' }}
        >
            RESUME
        </Button>
        <Button
          path='/projects' 
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          style={{ textDecoration: 'none' }}
        >
            PROJECTS
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;