import React from 'react';
import './components/FontAwesome'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Welcome from './pages/Welcome'
import StudentSignup from './pages/student/StudentSignup'
import StudentSignin from './pages/student/StudentSignin'
import ParentSignup from './pages/parent/ParentSignup'
import ParentSignin from './pages/parent/ParentSignin'
import AdminSignin from './pages/admin/AdminSignin'

const App = () => {
  return (
    <Router>
      <Route exact path='/' component={ Welcome } />
      <Route path='/students/signup' component={StudentSignup} />
      <Route path='/students/signin' component={StudentSignin} />
      <Route path='/parents/signup' component={ParentSignup} />
      <Route path='/parents/signin' component={ParentSignin} />
      <Route path='/admin/signin' component={AdminSignin} />
      {/*
      <Route path='/signin' component={Signin} />
      <Route path='/guest/mathematics' component={Mathematics} />
      <Route path='/guest/english' component={English} />
      <Route path='/guest/basic-science' component={BasicScience} />
      <Route path='/guest/basic-technology' component={BasicTechnology} />
      <Route path='/guest/social-studies' component={SocialStudies} />
      <Route path='/guest/civic-education' component={CivicEducation} /> */}
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
