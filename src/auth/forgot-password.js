// Hooks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../assets/img/logo.png';

// CSS
import '../assets/css/auth.css';

const ForgotPassword = () => {
  return(
    <>
      <div className="auth">
        <form>
          <div className="logo">
            <img src={Logo} alt='logo' />
            <h1>UPSHD Calamba School Automate</h1>
          </div>
          <div className="header">
            <h1>Forgot Password</h1>
            <p>Have you forgotten your password?</p>
          </div>
          <div className="form-group">
            <label>
              <span>Email</span>
              <input
                type='email'
                autoComplete='off'
                name='email'
                id='email'
              />
            </label>
          </div>
          <div className="log-btn">
            <button className='log'>Send reset link</button>
            <span>Already have an account? <Link to='/auth/login'>Sign in</Link></span>
          </div>
        </form>
      </div>
    </>
  );
}

export default ForgotPassword;