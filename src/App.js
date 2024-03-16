// App.js

import React, { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

function App() {
  const [isRegistration, setIsRegistration] = useState(true);

  const handleToggleForm = () => {
    setIsRegistration(!isRegistration);
  };

  const handleRegistration = (formData) => {
    console.log('Register:', formData);
    // Send registration data to backend
  };

  const handleLogin = (formData) => {
    console.log('Login:', formData);
    // Send login data to backend
  };

  return (
    <div className="App">
      <h1>TendawifiProvider</h1>
      <div className="form-container">
        {isRegistration ? (
          <>
            <RegistrationForm onRegister={handleRegistration} />
            <p>Already have an account? <button onClick={handleToggleForm}>Login</button></p>
          </>
        ) : (
          <>
            <LoginForm onLogin={handleLogin} />
            <p>Don't have an account? <button onClick={handleToggleForm}>Register</button></p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;

