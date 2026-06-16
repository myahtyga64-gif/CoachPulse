import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

function App() {
  const [screen, setScreen] = useState('landing');
  const [user, setUser] = useState(null);

  if (screen === 'login') {
    return <LoginPage onLogin={(email) => {
      setUser({ email });
      setScreen('dashboard');
    }} />;
  }

  if (screen === 'dashboard') {
    return <Dashboard user={user} onLogout={() => {
      setUser(null);
      setScreen('landing');
    }} />;
  }

  return <LandingPage onStart={() => setScreen('login')} />;
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
