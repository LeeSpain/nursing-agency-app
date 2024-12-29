import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../services/auth';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin123') { // Simple check
      Auth.login(() => navigate('/admin'));
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Admin Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginTop: '1rem' }}
      />
      <br />
      <button onClick={handleLogin} style={{ marginTop: '1rem' }}>
        Login
      </button>
    </div>
  );
}
