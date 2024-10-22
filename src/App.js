// React
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// CSS
import './assets/css/colors.css';
import './assets/css/default.css';

// Auth
import Login from './auth/login';
import Register from './auth/register';
import ForgotPassword from './auth/forgot-password';
import ResetPassword from './auth/reset-password';

// Student
import StudentHome from './student/home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Auth */}
          <Route path='/auth/login' element={ <Login/> }/>
          <Route path='/auth/register' element={ <Register/> }/>
          <Route path='/auth/forgot-password' element={ <ForgotPassword/> }/>
          <Route path='/auth/reset-password' element={ <ResetPassword/> }/>

          {/* Student */}
          <Route path='/student/home' element={ <StudentHome/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
