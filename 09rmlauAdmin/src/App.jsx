import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import RegistrationForm from './component/RegistrationForm';
import LoginForm from './component/LoginForm';
import VerificationPage from './component/VerificationPage';
import Logout from './component/Logout';
import './styles/Header.css';
import './styles/RegistrationForm.css';
import './styles/LoginForm.css';
import './styles/VerificationPage.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          {/* <Route path="/login" element={<LoginForm onSuccess={() => window.location.href = '/pass'} />} /> */}
          <Route path="/login" element={<LoginForm />} />
          <Route path="/verify" element={<VerificationPage />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
