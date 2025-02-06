import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (username === '' || password === '') {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate login logic (replace this with your actual login logic)
    if (username === 'admin' && password === 'password') {
      console.log('Logging in with:', { username, password });
      onLogin(); // Call the onLogin function passed from App
      navigate("/user-data"); // Redirect to user data page
    } else {
      setError('Invalid username or password.'); // Set error message for invalid login
    }

    // Reset fields
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', marginTop: '30vh' }}>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;