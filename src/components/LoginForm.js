import React, { useState } from 'react';

const LoginForm = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
    // Reset form fields after submission if needed
    setFormData({
      email: '',
      password: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login Form</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
