import React from 'react'
import { Col } from 'reactstrap'

function SkillItem(props) {
    return(
        <>
        <Col>
        <div className='skill_item'>
            <img className='skill_img'  src={props.src} alt={props.alt}/>
            <p className='skill_name'>{props.skillname}</p>
        </div>
        </Col>
        </>
    );
}
export default SkillItem