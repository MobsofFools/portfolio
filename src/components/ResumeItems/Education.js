import React from 'react'
import './ResumeItem.css'
import ResumeItem from './ResumeItem';


  
function Education() {
    
    return(
    <>
    <ResumeItem
        date='2020-2020'
        header='Object Oriented Software Development Certificate (OOSD)'
        location='Southern Alberta Institute of Technology'
        content='Developed skills with multiple programming languages and IDEs to successfully complete coursework achieving a 4.0 GPA. 
        Used HTML5, CSS, Bootstrap, JavaScript and jQuery, Nodejs and MongoDB to develop websites,
        ASP.NET with C#, MySQL to develop web forms, ASP.NET MVC and ASP.NET Core to develop simple web applications. 
        Java to develop desktop GUI applications, and Android APKs, and RESTful APIs. 
        Learned advanced SQL to develop functions, stored procedures, triggers, cursors. 
        Learned Linux Command Line Disk, File, User Management, cron scheduling, and bash scripting. 
        Learned Python for GPIO control on Raspberry Pi
        '    
    />
    <ResumeItem 
        date='2014-2019'
        header='Bachelor of Applied Science in Chemical and Biological Engineering'
        location='University of British Columbia'
        content='Developed technical report writing skills, lab safety and aseptic lab technique,
        ability to work under pressure, time management, teamwork, and adaptability.
        '
    />
    </>
    );
}
export default Education