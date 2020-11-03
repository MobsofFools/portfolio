import React from 'react';
import { Container } from 'reactstrap';
import Education from './ResumeItems/Education';
import Work from './ResumeItems/Work';
import Skills from './ResumeItems/Skills';
import './ResumeItems/ResumeItem.css';

const Resume = () => {
  
  return (
    <div>
      <Container>
        <h2>Resume</h2>
        <p className='resume_descriptor'>Skills</p>
        <Skills/>
        <p className='resume_descriptor'>Education</p>
        <Education/>
        <p className='resume_descriptor'>Employment History</p>
        <Work/>
      </Container>
    </div>
  );
}
  
  export default Resume;