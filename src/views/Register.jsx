import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f9fa;
  padding: 1rem;
`;

const Card = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #2d3748;
  font-size: 1.75rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #4a5568;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #e53e3e;
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 1rem;
  background: white;
  &:focus {
    outline: none;
    border-color: #e53e3e;
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  background-color: #e53e3e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #c53030;
  }
`;

const Error = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  text-align: center;
`;

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Email inválido.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    register(email, role);
    navigate('/');
  };

  return (
    <Page>
      <Card>
        <Title>Registrarse</Title>
        {error && <Error>{error}</Error>}
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
            />
          </InputGroup>
          <InputGroup>
            <Label>Contraseña</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </InputGroup>
          <InputGroup>
            <Label>Rol</Label>
            <Select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="user">Usuario (asistente)</option>
              <option value="admin">Administrador</option>
            </Select>
          </InputGroup>
          <Button type="submit">Crear Cuenta</Button>
        </Form>
      </Card>
    </Page>
  );
}