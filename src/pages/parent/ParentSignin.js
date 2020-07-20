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
              <span className="text-center mb-3 d-block" style={{fontSize: '18px'}}>Sign in<br /><span style={{color: '#999999'}}>with one of these services</span></span>
              <div className="row">
                <Link to="" className="col mr-2 d-flex align-items-center bg-white border rounded text-dark py-2 pr-4 my-3 d-block">
                  <img width="27px" className="mr-2" src={require('../../images/icons8-facebook-old.svg')} alt="" />
                  Facebook
                </Link>
                <Link to="" className="col ml-2 d-flex align-items-center bg-white border rounded text-dark py-2 pr-4 my-3 d-block">
                  <img width="24px" className="mr-2" src={require('../../images/icons8-google.svg')} alt="" />
                  Google
                </Link>
              </div>
              <div className="my-2 d-flex align-items-center justify-content-center">
                <div className="hLine"></div><span className="mx-2">or</span><div className="hLine"></div>
              </div>
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
              <span className="text-center d-block pb-5">Don't have an account? <Link style={{color: '#2342C0'}} to="/parents/signup">Create an account</Link></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default StudentSignin