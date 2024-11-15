import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3002/signup", {
        email,
        password,
      });

      const result = response.data;

      if (response.status === 200) {
        alert(result.message);
        navigate("/"); // Redirect to homepage on success
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("An error occurred during signup.");
    }
  };

  return (
    <div className='container p-5 mt-5'>
      <div className='row'>
        <div className='col-8'>
          <img src='media/images/signup.png' alt='Signup' />
        </div>
        <div className='col-4 mt-5 p-3'>
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit} className="needs-validation" noValidate>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email</label>
              <input 
                type='email' 
                className='form-control' 
                id='email' 
                placeholder='Enter your email' 
                required 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input 
                type='password' 
                className='form-control' 
                id='password' 
                placeholder='Enter your password' 
                required 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary w-100'>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
