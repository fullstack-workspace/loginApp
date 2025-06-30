import { Link } from '@modern-js/runtime/router';
import '../index.css';
import { useState, useEffect } from 'react';
import React from 'react';

const Register = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3051/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await response.json();
    console.log('Response from API:', data);

    // register().then((response) => {
    //   console.log('Response from API:', response);
    // });
  };

  return (
    <>
      <div className="login-container">
        <h2>Registration</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              required 
              value={form.username}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              required 
              value={form.email}
              onChange={handleFormChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              required 
              value={form.password}
              onChange={handleFormChange}
            />
          </div>
          <button type="submit" className="login-btn" onClick={handleRegister}>Create an account</button>
        </form>
        <div className="form-footer">
          Have an account? <Link to="/">Login</Link>
        </div>
      </div>
    </>
  );
};

export default Register;
