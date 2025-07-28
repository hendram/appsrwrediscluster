import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import RwMain from './RwMain';
import { AuthProvider } from './AuthContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RwMain />
    </AuthProvider>
  </React.StrictMode>
);
