import React from 'react';
import { Container } from 'reactstrap';
import ContactItem from './ContactItem';
import './Contact.css'


function Contact() {
    return (
        <>
        <Container>
            <div className='contact_container'>
            <h1>
                Contact Me
            </h1>
            <div className='contact_box'>
                <ContactItem
                    src='fas fa-envelope contact_img'
                    type='Email'
                    info='edvinlin@gmail.com'
                />
                <ContactItem
                    src='fas fa-phone-square-alt contact_img'
                    type='Cellphone'
                    info='(403) 891-3299'
                />
                <ContactItem
                    src='fab fa-github-square contact_img'
                    type='GitHub'
                    info='github.com/MobsofFools'
                />
                <ContactItem
                    src='fab fa-linkedin contact_img'
                    type='LinkedIn'
                    info='linkedin.com/in/edvinlin'
                />                                
                <ContactItem
                    src='fab fa-discord contact_img'
                    type='Discord'
                    info='Mobs#0001'
                    />
                </div>            
            </div>         
        </Container>
        </>
    );
}
export default Contact