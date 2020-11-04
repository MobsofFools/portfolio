import React from 'react'
import './ResumeItem.css'

function ResumeItem(props) {

    return(
        <>
        <div className='box_shadow'>
            <ul>
                <li className='resume_item'>
                    <p className='resume_date'>{props.date}</p>
                    <p className='resume_header'>{props.header}</p>
                    <p className='resume_location'>{props.location}</p>
                    <p className='resume_content'>{props.content}</p>
                </li>
            </ul>
        </div>
        </>
    );
}
export default ResumeItem;