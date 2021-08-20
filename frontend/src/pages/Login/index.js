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
    history.push("/userHome");
  };

  return (
    <div className="center-container" id="login-page">
      <div className="default-container">
        <h1>Login</h1>
        <input 
          type="text"
          class="default-input"
          id="login-input"
          placeholder="Username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input 
          type="password"
          class="default-input"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          class="green-button"
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