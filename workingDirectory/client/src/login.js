import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Login(){
    const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  let history = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    const { username, password } = formData;
    //alert(JSON.stringify(formData));

    const data = {
        username: username,
        password: password,
      };
    // Add your authentication logic here to send the data to your backend.
    fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }).then((response) => {
        return response.json(); // Parse the JSON response
    })

    .then((data) => {
        alert('Response from the server: ' + JSON.stringify(data));

        if (data.message === 'Login successful') {
            // Successful login, navigate to the 'Home' page
            //alert("yay");
            history('/home');
        } else {
            alert("login failed");
            //history.push('/home');

        }
    })
      .catch((error) => {
        console.error('Network error:', error);
      });
    
  };

  return (
    <div className="login-page">
      <button type="submit" className="create-account-button">
        Create Account
      </button>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit">Log In</button>
      </form>
    </div>
  );
}
export default Login;