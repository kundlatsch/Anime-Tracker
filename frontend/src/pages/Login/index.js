import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

import './styles.css';

function Login() {

  let history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleRegisterClick() {
    history.push("/register");
  }

  const handleLogin = () => {
    // The login validation was desable to facilitate the app
    // navigation while de backend is not implemented.
    // if (username.length() > 0 && password.length() > 0) {
    //   // TODO: integrate with backend
    // }
    history.push("/userHome");
  };

  return (
    <div className="center-container" id="login-page">
      <div className="default-container">
        <h1>Login</h1>
        <input 
          type="text"
          className="default-input"
          id="login-input"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input 
          type="password"
          className="default-input"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          className="green-button"
          id="login-button"
          onClick={handleLogin}
        >
          Login
        </button>

        <p onClick={handleRegisterClick}>
          Don't have an account? Click here to register
        </p>
      </div>
    </div>
    
  )
}

export default Login