import React from 'react'
import { Container, Row } from 'reactstrap'
import './ResumeItem.css'
import SkillItem from './SkillItem';
import JavaIcon from '../../img/icons/java.png'
import ReactIcon from '../../img/icons/react.png'
import CSIcon from '../../img/icons/csharp.png'
import CSSIcon from '../../img/icons/css.png'
import HTML5Icon from '../../img/icons/html5.png'
import BootstrapIcon from '../../img/icons/bootstrap.png'
import JavascriptIcon from '../../img/icons/javascript.png'
import jQueryIcon from '../../img/icons/jquery.png'
import SQLIcon from '../../img/icons/sql-file.png'
import PythonIcon from '../../img/icons/python.png'
import NetCore from '../../img/icons/NET_Core.png'
import VisualStudio from '../../img/icons/visual-studio.png'
import AutoCAD from '../../img/icons/autocad.png'
import GitHubIcon from '../../img/icons/github.png'
import LinuxIcon from '../../img/icons/linux.png'

function Skills() {
    return(
        <>
        <Container>
            <Row>
                <SkillItem
                src={HTML5Icon}
                alt=''
                skillname='HTML5'
                />
                <SkillItem
                src={CSSIcon}
                alt=''
                skillname='CSS3'
                />
                <SkillItem
                src={BootstrapIcon}
                alt=''
                skillname='Bootstrap'
                />
                <SkillItem
                src={JavascriptIcon}
                alt=''
                skillname='Javascript'
                />
                <SkillItem
                src={jQueryIcon}
                alt=''
                skillname='jQuery'
                />                                
            </Row>
            <Row>
                <SkillItem
                src={ReactIcon}
                alt=''
                skillname='React'
                />
                <SkillItem
                src={JavaIcon}
                alt='Java'
                skillname='Java'
                />
                <SkillItem
                src={CSIcon}
                alt=''
                skillname='C#'
                />
                <SkillItem
                src={NetCore}
                alt=''
                skillname='.NET Core'
                />
                <SkillItem
                src={VisualStudio}
                alt=''
                skillname='Windows Forms'
                />                                
            </Row>
            <Row>
                <SkillItem
                src={SQLIcon}
                alt=''
                skillname='SQL'
                />
                <SkillItem
                src={PythonIcon}
                alt=''
                skillname='Python'
                />  
                <SkillItem
                src={GitHubIcon}
                alt=''
                skillname='GitHub'
                />
                <SkillItem
                src={LinuxIcon}
                alt=''
                skillname='Linux'
                />
                <SkillItem
                src={AutoCAD}
                alt=''
                skillname='AutoCAD'
                />
                              
            </Row>
        </Container>
        </>
    );
}
export default Skills