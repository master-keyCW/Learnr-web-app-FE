import React from 'react'
// import {Link} from 'react-router-dom'
// import Dropdown from 'react-bootstrap/Dropdown'
import SubjectCard from '../SubjectCard'
// import Mathematics from '../../images/maths.png'
import English from '../../images/english.png'
import BasicScience from '../../images/basic-sci.png'
import BasicTech from '../../images/basic-tech.png'
import SocialSci from '../../images/social-studies.png'
import CivicEdu from '../../images/civic-edu.png'
import '../../styles/Style.css'
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Js2 = () => {
  const toSubjectMaths = () => {
    window.open('/subjects/mathematics', '_self');
  }
  const toSubjectEng = () => {
      window.open('/subjects/english', '_self');
  }
  const toSubjectBasSci = () => {
      window.open('/subjects/basic-science', '_self');
  }
  const toSubjectBasTech = () => {
      window.open('/subjects/basic-technology', '_self');
  }
  const toSubjectSocStud = () => {
      window.open('/subjects/social-studies', '_self');
  }
  const toSubjectCivEdu = () => {
      window.open('/subjects/civic-education', '_self');
  }

  const subjectListJS2 = [
    <SubjectCard
      image={require('../../images/maths-2.jpg')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={English}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'250 Topics'}
    />,
    <SubjectCard
      image={BasicScience}
      goToSubject={toSubjectBasSci}
      subject={'Basic Science'}
      topicSize={'300 Topics'}
    />,
    <SubjectCard
      image={BasicTech}
      goToSubject={toSubjectBasTech}
      subject={'Basic Technology'}
      topicSize={'400 Topics'}
    />,
    <SubjectCard
      image={SocialSci}
      goToSubject={toSubjectSocStud}
      subject={'Social Science'}
      topicSize={'350 Topics'}
    />,
    <SubjectCard
      image={CivicEdu}
      goToSubject={toSubjectCivEdu}
      subject={'Civic Education'}
      topicSize={'40 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div className="subject-card--wrap">
          {subjectListJS2.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Js2