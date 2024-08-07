import React, { useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import axios from 'axios';
import '../styles/Login.css';
import { useNavigate } from "react-router-dom";

import user from '../assets/user.png';
import email from '../assets/email.png';
import password from '../assets/password.png';

const Login = () => {
  const navigate= useNavigate();
  const [action, setAction] = useState('Sign Up');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, [name]: value });
  };

  const handleSubmit = async (e, currentAction) => {
    e.preventDefault();
    try {
      if (currentAction === 'Sign Up') {
        const response = await axios.post('http://localhost:3500/register', {
          name: formData.name,
          email: formData.email,
          password: formData.password
        });
        localStorage.setItem('token', response.data.data);
        navigate('/home');
      } else {
        const response = await axios.post('http://localhost:3500/login', {
          email: formData.email,
          password: formData.password
        });
        localStorage.setItem('token', response.data.data);
        navigate('/home');
      }
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className='login-container'>
      <div className='container'>
        <div className='header'>
          <div className='text'>{action}</div>
          <div className='underline'></div>
        </div>

        <form className='inputs' onSubmit={handleSubmit}>
          {/* The action hides the user's name from the Login screen */}
          {action === "Login" ? null : (
            <div className='input'>
              <img src={user} alt='user' />
              <input 
              type='text' 
              name= 'name'
              placeholder='Full Name' 
              value= {formData.name}
              onChange={handleChange}/>
            </div>
          )}

          <div className='input'>
            <img src={email} alt='envelope for email' />
            <input 
            type='email' 
            name='email'
            placeholder='janedoe@gmail.com'
            value= {formData.email}
            onChange={handleChange} />
          </div>

          <div className='input'>
            <img src={password} alt='lock for password' />
            <input 
            type='password'
            name='password' 
            placeholder='**********'
            value={formData.password}
            onChange={handleChange} />
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
          <button
            type='button'
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={(e) => {setAction("Sign Up");
            handleSubmit(e, "Sign Up")}}
          >
            Sign Up
          </button>
          <button
            type='button'
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={(e) => {setAction("Login");
            handleSubmit(e, "Login")}}
          >
            Login
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
