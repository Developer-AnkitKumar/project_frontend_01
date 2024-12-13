import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();
  const[showMessage, setShowMesaage] = useState(false);

  useEffect(() => {
    setShowMesaage(true)
    localStorage.removeItem('userData');
    
    navigate('/loginForm');
  },[navigate]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
     {showMessage && <h2>You have been logged out.</h2>}
    </div>
  );
}

export default Logout;