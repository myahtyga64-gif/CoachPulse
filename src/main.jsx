import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./services/firebase";import React, { useEffect, useState } from "react";
import { createRoot } from 'react-dom/client';
import './styles/global.css';

import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import LoginPage from './pages/LoginPage';

function App() {
  const [screen, setScreen] = useState('landing');
  const [user, setUser] = useState(null);
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
    if (firebaseUser) {
      setUser({ email: firebaseUser.email });
      setScreen("dashboard");
    }
  });

  return () => unsubscribe();
}, []);
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
