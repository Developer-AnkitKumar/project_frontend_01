import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [verifyCode, setVerifyCode] = useState('');

  const navigate = useNavigate(); // For navigation

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password, verifyCode });
      if (response.data) {
        alert('Login Successful!');
        localStorage.setItem('userData', JSON.stringify(response.data.user));
        navigate('/verify');
      }
    } catch (error) {
      setError('Invalid Email, Password, or Verify Code!');
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
  <div className="form-group">
    <label>Email</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label>Password</label>
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
    />
  </div>
  <div className="form-group">
    <label>Verify Code</label>
    <input
      type="text"
      value={verifyCode}
      onChange={(e) => setVerifyCode(e.target.value)}
      required
    />
  </div>
  <button type="submit" className="login-button">Login</button>
</form>
    </div>
  );
}

export default LoginForm;
