// Hooks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../assets/img/logo.png';

// CSS
import '../assets/css/auth.css';

const Register = () => {
  return(
    <>
      <div className="auth">
        <form>
          <div className="logo">
            <img src={Logo} alt='logo' />
            <h1>UPSHD Calamba School Automate</h1>
          </div>
          <div className="header">
            <h1>Welcome!</h1>
            <p>Let’s get familiar! Register an account.</p>
          </div>
          <div className="form-group">
            <label>
              <span>First name</span>
              <input
                type='text'
                autoComplete='off'
                name='first_name'
                id='first_name'
              />
            </label>
            <label>
              <span>Last name</span>
              <input
                type='text'
                autoComplete='off'
                name='last_name'
                id='last_name'
              />
            </label>
            <label>
              <span>Email</span>
              <input
                type='email'
                autoComplete='off'
                name='email'
                id='email'
              />
            </label>
            <label>
              <span>Password</span>
              <input
                type='password'
                autoComplete='off'
                name='password'
                id='password'
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type='password'
                autoComplete='off'
                name='confirm_password'
                id='confirm_password'
              />
            </label>
          </div>
          <div className="log-btn">
            <button className='log'>Register</button>
            <span>Already have an account? <Link to='/auth/login'>Sign in</Link></span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;