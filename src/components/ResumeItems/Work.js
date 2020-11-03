import React from 'react'
import ResumeItem from './ResumeItem'
import './ResumeItem.css'

function Work() {
    return(
        <>
            <ResumeItem
                date='2020-Current'
                header='Couresy Clerk'
                location='Real Canadian Superstore'
                content='Cart Pusher and Price Checker, deal with people that cant read signs'    
            />

            <ResumeItem
                date='2016-2019 Summers'
                header='Junior Engineer'
                location='Western Water Resources Inc.'
                content='Worked effectively under pressure to meet critical deadlines, which enabled managers to consistently produce reports according to schedule. 
                Took initiative to learn additional software to assist with and expedite projects, allowing company resources to be reallocated to acquire more contracts. Used Civil3D, PCSWMM, and other software.'    
            />
        </>
    );
}
export default Work