import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import Login from './views/Login';
import Register from './views/Register';
import HomeGuest from './views/HomeGuest';
import HomeUser from './views/HomeUser';
import HomeAdmin from './views/HomeAdmin';

function ProtectedHome() {
  const { user } = useAuth();

  if (!user) return <HomeGuest />;
  if (user.role === 'user') return <HomeUser />;
  if (user.role === 'admin') return <HomeAdmin />;
  
  return <HomeGuest />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<ProtectedHome />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}