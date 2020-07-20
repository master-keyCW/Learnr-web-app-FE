import React, {useEffect, useRef} from 'react'
import NavBar from '../../components/navbar/NavBar'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import '../../styles/Sign.css'
import { Link } from 'react-router-dom'
import {gsap, Power3} from 'gsap'

const StudentSignin = () => {
  let signForm = useRef(null)
  useEffect(() => {
    gsap.from(signForm, 1.5, {y: -1200, ease: Power3.easeOut})
  })


  return (
    <React.Fragment>
      <NavBar />
      <div className="sign-bg container-fluid px-0">
        <div className="container pt-5">
          <div className="mx-auto signup-form--wrap">
          <p className="text-center demo-category" style={{fontSize: '24px'}}>
            Welcome Back
          </p>
            <div ref={form => signForm = form} className="bg-white signup-form">
              <span className="text-center mb-3 d-block" style={{fontSize: '18px'}}>Sign In</span>
              <Form>
                <Form.Group controlId="formBasicUsername">
                  <Form.Label className="small">Username *</Form.Label>
                  <Form.Control type="text" placeholder="Enter username" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="small">Password *</Form.Label>
                  <Form.Control type="password" placeholder="Enter password" />
                  {/* <Form.Text className="text-muted">
                    Password must have at least 8 characters.
                  </Form.Text> */}
                </Form.Group>

                <Link style={{color: '#2342C0'}} className="float-right" to="">Forgot Password?</Link>
                <Button style={{fontSize: '20px'}} className="general-btn-2 my-3 py-3" variant="primary" type="submit">
                  Sign In
                </Button>
              </Form>
              <span className="text-center d-block pb-5">Don't have an account? <Link style={{color: '#2342C0'}} to="/students/signup">Create an account</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignin