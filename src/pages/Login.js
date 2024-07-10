import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/Login.css';

import user from '../assets/user.png';
import email from '../assets/email.png';
import password from '../assets/password.png';

const Login = () => {
  const [action, setAction] = useState('Sign Up');

  return (
    <div>
      <Navbar />
      <h1>Login</h1>
      
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          {/* The action hides the user's name from the Login screen */}
          {action === "Login" ? null : (
            <div className='input'>
              <img src={user} alt='user' />
              <input type='text' placeholder='Full Name' />
            </div>
          )}

          <div className='input'>
            <img src={email} alt='envelope for email' />
            <input type='email' placeholder='janedoe@gmail.com' />
          </div>

          <div className='input'>
            <img src={password} alt='lock for password' />
            <input type='password' placeholder='**********' />
          </div>
        </div>

        {/* The action hides the forgot password from the Sign Up screen */}
        {action === "Sign Up" ? null : (
          <div className='forgot-password'>
            Lost Password? <span>Click Here!</span>
          </div>
        )}

        <div className='submit-container'>
          {/* Action sets to where if you select Login, Sign Up is grayed out.
              onClick=>setAction sets to where you can select Sign Up or Login
              and it stays on its own screen */}
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
