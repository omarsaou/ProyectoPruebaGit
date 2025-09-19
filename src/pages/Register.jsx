// src/pages/Register.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
    content: "🥩";
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

const DateInput = styled.input`
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

  /* Ocultar el calendario nativo */
  &::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-top: -10px;
    margin-left: 10px;
  }

  /* Para Firefox */
  &::-moz-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
    height: 20px;
    width: 20px;
    margin-top: -10px;
    margin-left: 10px;
  }
`;

const Select = styled.select`
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
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23a87c00' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 1em;

  &:focus {
    border-color: #d62828;
    background-color: #fff;
    box-shadow: 0 0 8px rgba(214, 40, 40, 0.3);
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

export default function Register() {
  return (
    <Container>
      <Card>
        <Title>¡ÚNETE A LA FIESTA! 🍔</Title>
        <form>
          <Input type="text" placeholder="¿Cómo te llamas, carnívoro?" />
          <Input type="email" placeholder="Tu correo (para las ofertas secretas 🍟)" />
          <Input type="password" placeholder="Contraseña (más protegida que la receta del chef 🔐)" />
          <DateInput type="date" placeholder="Fecha de nacimiento" />
          <Input type="text" placeholder="DNI / NIE (para saber quién se come qué 😄)" />
          <Select>
            <option value="">Organizador del evento 🍽️</option>
            <option value="ayudante">Ayudante de cocina 🔪</option>
            <option value="ayudado">Invitado de honor 🍔👑</option>
          </Select>
          <Button type="submit">¡QUIERO MI HAMBURGUESA!</Button>
        </form>
        <FooterText>
          ¿Ya estás en la fiesta? <Link to="/login">ENTRA AQUÍ</Link>
        </FooterText>
      </Card>
    </Container>
  );
}