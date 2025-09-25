// src/pages/Login.jsx
import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ff6b35, #ffcc29);
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
`;

const Card = styled.div`
  background: #fdf4e3;
  padding: 2.5rem;
  border-radius: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 450px;
  text-align: center;
  border: 4px solid #d62828;
  position: relative;
  overflow: hidden;

  &::before {
    content: "🍔";
    position: absolute;
    top: 15px;
    left: 15px;
    font-size: 2rem;
    opacity: 0.3;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.8rem;
  color: #d62828;
  text-shadow: 2px 2px 0 #ffd700;
  letter-spacing: -0.5px;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.2rem;
  border: 3px solid #ffd700;
  border-radius: 50px;
  font-size: 1.1rem;
  outline: none;
  background: #fff9f0;
  font-family: inherit;
  transition: all 0.3s ease;
  text-align: center;
  box-sizing: border-box;

  &:focus {
    border-color: #d62828;
    background: #fff;
    transform: scale(1.02);
    box-shadow: 0 0 8px rgba(214, 40, 40, 0.3);
  }

  &::placeholder {
    color: #a87c00;
    text-align: center;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background: #d62828;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 #a81e1e;

  &:hover {
    background: #ff6b35;
    transform: translateY(-2px);
    box-shadow: 0 6px 0 #a81e1e;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #a81e1e;
  }
`;

const Error = styled.p`
  color: #d62828;
  font-size: 0.95rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 1px 1px 0 #fff;
`;

const FooterText = styled.p`
  margin-top: 1.5rem;
  font-size: 1rem;
  color: #5e3000;
  font-weight: 500;

  a {
    color: #d62828;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 2px dotted #ffd700;
    padding-bottom: 2px;

    &:hover {
      color: #ff6b35;
      border-bottom-style: solid;
    }
  }
`;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("¡Ups! Completa todos los campos carnívoro 🥩");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Email inválido. ¿Eres humano o robot? 🤖");
      return;
    }

    // Llamada a login (como en el código original)
    login(email, "user");
    navigate("/");
  };

  return (
    <Container>
      <Card>
        <Title>¡ENTRA A LA FIESTA! 🍔</Title>
        {error && <Error>{error}</Error>}
        <form onSubmit={handleSubmit}>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Tu correo (para las ofertas secretas 🍟)"
          />
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Contraseña (más protegida que la receta del chef 🔐)"
          />
          <Button type="submit">¡DAME MI HAMBURGUESA!</Button>
        </form>
        <FooterText>
          ¿Aún no estás en la fiesta? <Link to="/register">ÚNETE AQUÍ</Link>
        </FooterText>
      </Card>
    </Container>
  );
}