import React from 'react'

function ContactItem(props) {
    return(
        <>
            <p className='contact_info'>
                <i className={props.src} />
                {props.type}: {props.info} 
            </p> 
        </>
    );
}
export default ContactItem