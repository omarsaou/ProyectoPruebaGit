// src/pages/NotFound.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #ffcc29, #ff6b35);
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
  padding: 2rem;
  text-align: center;
  color: #5e3000;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 12vw, 6rem);
  color: #d62828;
  margin: 0;
  text-shadow: 3px 3px 0 #ffd700, 5px 5px 0 rgba(0,0,0,0.2);
  letter-spacing: -2px;
  position: relative;

  &::before {
    content: "❌";
    position: absolute;
    left: -3rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 1.5em;
    animation: shake 0.5s ease-in-out;
  }

  @keyframes shake {
    0%, 100% { transform: translateY(-50%) rotate(0deg); }
    25% { transform: translateY(-50%) rotate(-10deg); }
    75% { transform: translateY(-50%) rotate(10deg); }
  }
`;

const Subtitle = styled.h2`
  font-size: clamp(1.5rem, 6vw, 2.5rem);
  color: #5e3000;
  margin: 1rem 0;
  text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
`;

const Message = styled.p`
  font-size: clamp(1.1rem, 4vw, 1.5rem);
  color: #a87c00;
  margin: 1.5rem 0;
  max-width: 600px;
  line-height: 1.5;
`;

const Button = styled(Link)`
  background: #d62828;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  font-size: clamp(1.1rem, 4vw, 1.4rem);
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 5px 0 #a81e1e;
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 2rem;

  &:hover {
    background: #ff6b35;
    transform: translateY(-3px);
    box-shadow: 0 8px 0 #a81e1e;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #a81e1e;
  }

  &::before {
    content: "⬅️ ";
    margin-right: 0.5rem;
  }
`;

const Emoji = styled.div`
  font-size: clamp(4rem, 16vw, 8rem);
  margin: 1rem 0;
  animation: bounce 2s infinite;

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`;

export default function NotFound() {
  return (
    <Container>
      <Emoji>🍔</Emoji>
      <Title>404</Title>
      <Subtitle>¡Ups! Hamburguesa Perdida</Subtitle>
      <Message>
        Esta página se cayó del plato... 🍽️<br />
        O nunca existió. Pero no te preocupes, ¡aquí la fiesta sigue!
      </Message>
      <Button to="/home">
        Volver a la Fiesta
      </Button>
    </Container>
  );
}