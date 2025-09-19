import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProvider } from './UserContext'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>  {/* 👈 ENVOLVEMOS LA APP */}
      <App />
    </UserProvider>
  </React.StrictMode>
);
