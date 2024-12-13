import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    verifyPassword: '',
    roomNo: '',
    pinCode: ''
  });
  const [verifyPassword, setVerifyPassword] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  //   if (formData.password !== verifyPassword) {
  //     alert('Passwords do not match!');
  //     return;
  //   }
  //   const verifyCode = generateVerifyCode(formData.pinCode, formData.roomNo);
  //   alert(`Registration Successful! VerifyCode: ${verifyCode}`);
  //   navigate('/verify', { state: { ...formData, verifyCode } });
  // };
  const verifyCode = generateVerifyCode(formData.pinCode, formData.roomNo);
    alert(`Registration Successful! Your Verify Code: ${verifyCode}`);

    const userData = { ...formData, verifyCode };
    localStorage.setItem('userData', JSON.stringify(userData));

    
    navigate('/login');
  };

  const generateVerifyCode = (pinCode, roomNo) => {
    return (parseInt(pinCode + roomNo) % 10000).toString().padStart(4, '0');
  };

  return (
    <div className="registration-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        {/* <input type="verifyPassword" name="verifyPassword" placeholder="verifyPassword" value={formData.password} onChange={handleChange} required /> */}
        <input type="password" placeholder="Verify Password" value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)} required />
        <input type="text" name="roomNo" placeholder="Room No" value={formData.roomNo} onChange={handleChange} required />
        <input type="text" name="pinCode" placeholder="Pin Code" value={formData.pinCode} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegistrationForm;


//BSJ4LCRC2U8RC8A3Q8Y5JWYM