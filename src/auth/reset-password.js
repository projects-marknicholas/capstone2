// Hooks
import React, { useState } from 'react';

// Assets
import Logo from '../assets/img/logo.png';

// CSS
import '../assets/css/auth.css';

const ResetPassword = () => {
  return(
    <>
      <div className="auth">
        <form>
          <div className="logo">
            <img src={Logo} alt='logo' />
            <h1>UPSHD Calamba School Automate</h1>
          </div>
          <div className="header">
            <h1>Reset Password</h1>
            <p>Create your new password to continue</p>
          </div>
          <div className="form-group">
            <label>
              <span>New Password</span>
              <input
                type='password'
                autoComplete='off'
                name='new_password'
                id='new_password'
              />
            </label>
            <label>
              <span>Confirm Password</span>
              <input
                type='confirm_password'
                autoComplete='off'
                name='confirm_password'
                id='confirm_password'
              />
            </label>
          </div>
          <div className="log-btn">
            <button className='log'>Reset</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ResetPassword;