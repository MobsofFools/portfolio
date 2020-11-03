import React from 'react'

function SkillItem(props) {
    return(
        <>
        <div className='skill_item'>
            <p className='skill_name'>{props.skillname}</p>
        </div>
        </>
    );
}