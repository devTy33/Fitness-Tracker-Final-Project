import React, { useState } from 'react';
import './log.css';

import {Routes, Route, useNavigate} from 'react-router-dom';

function CreateAccount() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    /*
    // Apply the shake animation to the submit button
    const submitButton = document.querySelector('.my-button');
    submitButton.classList.add('shake');

    // Remove the shake animation after a short delay (adjust as needed)
    setTimeout(() => {
      submitButton.classList.remove('shake');
    }, 500);

    const errorText = document.querySelector('.error-text');
    errorText.style.opacity = 1; // Make the message visible
    setTimeout(() => {
      errorText.style.opacity = 0; // Fade out the message
    }, 2000); // Adjust the fade-out duration as needed
    */
    const uname = username;
    const pw = password;
    const data={
      name: uname,
      password: pw
    }
    
    // calls the API succesfuly 
    fetch('/CreateAccount', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json()).then((r) => {
      alert(JSON.stringify(r));
      if(r.message == 'User already exists'){
        const submitButton = document.querySelector('.my-button');
        submitButton.classList.add('shake');
        setTimeout(() => {
          submitButton.classList.remove('shake');
        }, 500);
    
        const errorText = document.querySelector('.error-text');        // change to user already exists
        errorText.style.opacity = 1;
      }
      else{
        navigate('/home')
      }
    }).catch((error) => {
      alert('Error:', error);
    });
  
    //console.log('Username:', username);
    //console.log('Password:', password);

  };

  return (

    <div className="container">
      <div className="box-container">
        <div className="login-title">Create Account</div>
        {/* <div class="title">TrendStrength Fitness Tracker</div> */}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            className="input"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            className="input"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <div class = "title-screen">TrendStrength Fitness Tracker</div>

        <button type="submit" className="my-button" onClick={handleSubmit}>
          Submit
        </button>
        

        {/*Error message*/}
        <div className = "error-text">
          Incorrect Password
        </div>

      </div>
    </div>
  );
}

export default CreateAccount;