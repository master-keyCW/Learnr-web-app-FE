import React, {useEffect, useRef} from 'react'
import SubjectCard from '../SubjectCard'
import '../../styles/Style.css'
import {gsap, TweenMax} from 'gsap'


const Ss1 = () => {
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

  let subCards = useRef(null)
  let subCards2 = useRef(null)
  let subCards3 = useRef(null)
  let category = useRef(null)
  let category2 = useRef(null)


  useEffect(() => {
    TweenMax.to(subCards, 0, {css: {visibility: 'visible'}})
    TweenMax.to(subCards2, 0, {css: {visibility: 'visible'}})
    TweenMax.to(subCards3, 0, {css: {visibility: 'visible'}})
    gsap.from(subCards, 1, {scale: 0.2})
    gsap.from(subCards2, 1, {scale: 0.2})
    gsap.from(subCards3, 1, {scale: 0.2})
    gsap.fromTo(category, 0.3, {opacity: 0}, {opacity: 1, delay: 1})
    gsap.fromTo(category2, 0.3, {opacity: 0}, {opacity: 1, delay: 1})
  })

  const subjectListSS1General = [
    <SubjectCard
      image={require('../../images/senior-maths.png')}
      goToSubject={toSubjectMaths}
      subject={'Mathematics'}
      topicSize={'23 Topics'}
    />,
    <SubjectCard
      image={require('../../images/senior-english.png')}
      goToSubject={toSubjectEng}
      subject={'English'}
      topicSize={'25 Topics'}
    />,
    <SubjectCard
      image={require('../../images/economics.png')}
      goToSubject={toSubjectBasSci}
      subject={'Economics'}
      topicSize={'40 Topics'}
    />,
  ]

  const subjectListSS1Science = [
    <SubjectCard
      image={require('../../images/biology.png')}
      goToSubject={toSubjectBasTech}
      subject={'Biology'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/physics.png')}
      goToSubject={toSubjectSocStud}
      subject={'Physcs'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/chemistry.png')}
      goToSubject={toSubjectCivEdu}
      subject={'Chemistry'}
      topicSize={'30 Topics'}
    />,
  ]

  const subjectListSS1Arts = [
    <SubjectCard
      image={require('../../images/literature.png')}
      goToSubject={toSubjectBasTech}
      subject={'Literature'}
      topicSize={'40 Topics'}
    />,
    <SubjectCard
      image={require('../../images/government.png')}
      goToSubject={toSubjectSocStud}
      subject={'Government'}
      topicSize={'35 Topics'}
    />,
    <SubjectCard
      image={require('../../images/crs.png')}
      goToSubject={toSubjectCivEdu}
      subject={'C.R.S'}
      topicSize={'30 Topics'}
    />,
  ]

  return (
    <React.Fragment>
      <div ref={cards => subCards = cards} className="subject-card--wrap">
          {subjectListSS1General.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={cat => category = cat} className="class-category">Science</span>
      <div ref={cards2 => subCards2 = cards2} className="subject-card--wrap">
          {subjectListSS1Science.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
      <span ref={cat2 => category2 = cat2} className="class-category">Arts</span>
      <div ref={cards3 => subCards3 = cards3} className="subject-card--wrap">
          {subjectListSS1Arts.map((subject, index) => (
            <div className="subject-card d-flex flex-column align-items-center" key={index}>{subject}</div>
          ))}
      </div>
    </React.Fragment>
  )

}

export default Ss1