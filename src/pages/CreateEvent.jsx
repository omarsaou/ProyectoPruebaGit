// src/pages/CreateEvent.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffcc29, #ff6b35);
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
  padding: 2rem;
`;

const Card = styled.div`
  background: #fdf4e3;
  padding: 2.5rem;
  border-radius: 2rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  text-align: center;
  border: 4px solid #d62828;
  position: relative;
  overflow: hidden;

  &::before {
    content: "📋";
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    opacity: 0.3;
  }
`;

const Title = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.8rem;
  color: #d62828;
  text-shadow: 2px 2px 0 #ffd700, 4px 4px 0 rgba(0,0,0,0.1);
  letter-spacing: -0.5px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
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
    transform: translateY(-3px);
    box-shadow: 0 6px 0 #a81e1e;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #a81e1e;
  }
`;

const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  color: #d62828;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px dotted #ffd700;
  padding-bottom: 0.3rem;

  &:hover {
    color: #ff6b35;
    border-bottom-style: solid;
  }
`;

export default function CreateEvent() {
  return (
    <Container>
      <Card>
        <Title>Crear Nuevo Evento 🍔</Title>
        <Form>
          <Input type="text" placeholder="Nombre del evento (¡Ponle chispa!)" />
          <Input type="date" placeholder="Fecha" />
          <Input type="text" placeholder="Lugar (¿Dónde montamos la fiesta?)" />
          <Button type="submit">¡CREAR EVENTO YA!</Button>
        </Form>
        <BackLink to="/home">← Volver a la lista de eventos</BackLink>
      </Card>
    </Container>
  );
}