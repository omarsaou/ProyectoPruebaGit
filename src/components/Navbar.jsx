import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e53e3e;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const AuthGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Button = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 1rem;
  transition: all 0.2s ease;
`;

const LoginBtn = styled(Button)`
  background-color: #e53e3e;
  color: white;
  &:hover {
    background-color: #c53030;
  }
`;

const RegisterBtn = styled(Button)`
  background: transparent;
  color: #e53e3e;
  border: 2px solid #e53e3e;
  &:hover {
    background-color: #fef7f7;
  }
`;

const LogoutBtn = styled(Button)`
  background-color: #2d3748;
  color: white;
  &:hover {
    background-color: #1a202c;
  }
`;

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <Nav>
      <Logo>🍔 La Fiesta de la Hamburguesa</Logo>
      <AuthGroup>
        {user ? (
          <LogoutBtn onClick={logout}>Cerrar Sesión</LogoutBtn>
        ) : (
          <>
            <StyledLink to="/login">
              <LoginBtn>Iniciar Sesión</LoginBtn>
            </StyledLink>
            <StyledLink to="/register">
              <RegisterBtn>Registrarse</RegisterBtn>
            </StyledLink>
          </>
        )}
      </AuthGroup>
    </Nav>
  );
}