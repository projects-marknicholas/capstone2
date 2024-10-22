// Hooks
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Assets
import Logo from '../assets/img/logo.png';
import MicrosoftSvg from '../assets/svg/microsoft.svg';

// CSS
import '../assets/css/auth.css';

const Login = () => {
  return(
    <>
      <div className="auth">
        <form>
          <div className="logo">
            <img src={Logo} alt='logo' />
            <h1>UPSHD Calamba School Automate</h1>
          </div>
          <div className="header">
            <h1>Welcome Back!</h1>
            <p>It’s time to catch up! Sign in to your account.</p>
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
            <label>
              <span>Password</span>
              <input
                type='password'
                autoComplete='off'
                name='password'
                id='password'
              />
            </label>
          </div>
          <div className="log-btn">
            <div className='forgot'>
              <Link to='/auth/forgot-password'>Forgot Password?</Link>
            </div>
            <button className='log'>Login</button>
            <button className='sign'>
              <img src={MicrosoftSvg} alt='microsoft'/>
              Sign in with Microsoft
            </button>
            <span>Not registered yet? <Link to='/auth/register'>Create an Account</Link></span>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;