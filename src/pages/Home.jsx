// src/pages/Home.jsx
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(135deg, #ffcc29, #ff6b35);
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
  color: #5e3000;
  overflow-x: hidden;
  position: relative;
`;

const Title = styled.h1`
  font-size: clamp(2rem, 8vw, 3.5rem);
  color: #d62828;
  text-align: center;
  margin: 1rem 0 2rem 0;
  text-shadow: 3px 3px 0 #ffd700, 5px 5px 0 rgba(0,0,0,0.15);
  letter-spacing: -1px;
  position: relative;

  &::after {
    content: "🍔";
    position: absolute;
    right: -2rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 2.5rem;
    opacity: 0.5;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(-50%) rotate(0deg); }
    50% { transform: translateY(-60%) rotate(10deg); }
  }
`;

const EventsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 2rem;
`;

const EventCard = styled.div`
  background: rgba(253, 244, 227, 0.9);
  border: 3px solid #ffd700;
  border-radius: 1.8rem;
  padding: 1.8rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  text-align: center;
  backdrop-filter: blur(4px);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 16px 32px rgba(0,0,0,0.2);
    border-color: #d62828;

    background: linear-gradient(135deg, #d62828, #ff6b35, #ffd700, #a87c00, #c2eabd, #d0f0c0);
    background-size: 600% 600%;
    animation: gradientToPickle 3.5s ease forwards;

    .event-title {
      color: #2e5933;
      text-shadow: 1px 1px 0 #fff;
      transform: scale(1.05);
    }

    .event-info {
      color: #2e5933;
      text-shadow: 1px 1px 0 rgba(255,255,255,0.7);
    }
  }

  @keyframes gradientToPickle {
    0% { background-position: 0% 50%; }
    30% { background-position: 20% 50%; }
    60% { background-position: 60% 50%; }
    85% { background-position: 90% 50%; }
    100% { background-position: 100% 50%; }
  }
`;

const EventTitle = styled.h3`
  margin: 0 0 0.8rem 0;
  color: #5e3000;
  font-size: clamp(1.3rem, 4vw, 1.8rem);
  font-weight: bold;
  transition: all 0.3s ease;
  transform: scale(1);
  class: event-title;
`;

const EventInfo = styled.p`
  margin: 0.6rem 0;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #a87c00;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.3s ease;
  class: event-info;
`;

const Button = styled.button`
  background: #d62828;
  color: white;
  border: none;
  padding: 0.8rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: bold;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 0 #a81e1e;
  position: relative;
  overflow: hidden;

  &:hover {
    background: #ff6b35;
    transform: translateY(-3px);
    box-shadow: 0 8px 0 #a81e1e;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #a81e1e;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s;
  }

  &:hover::after {
    left: 100%;
  }
`;

// 👇 BOTÓN CENTRADO (opcional, puedes dejarlo o quitarlo)
const CreateButton = styled(Link)`
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  font-size: clamp(1.1rem, 4vw, 1.4rem);
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 6px 0 #1b5e20;
  transition: all 0.3s ease;
  display: inline-block;
  margin: 2.5rem auto 1rem auto;
  position: relative;
  z-index: 10;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
  backdrop-filter: blur(4px);
  border: 2px solid rgba(255,255,255,0.3);

  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: 0 10px 0 #1b5e20;
    background: linear-gradient(135deg, #66bb6a, #388e3c);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #1b5e20;
  }

  &::before {
    content: "🥒";
    margin-right: 0.5rem;
    display: inline;
    animation: bounce 2s infinite;
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
`;

// 👇 BOTÓN FLOTANTE MEJORADO — ¡GRANDE, CLARO, CON TEXTO!
const FloatingActionButton = styled(Link)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, #ff6b35, #d62828);
  color: white;
  border: none;
  border-radius: 1.5rem;
  padding: 1rem 1.8rem;
  font-size: clamp(1rem, 3vw, 1.3rem);
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 6px 0 #a81e1e;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(8px);
  border: 3px solid #ffd700;
  min-width: 200px;
  text-align: center;
  animation: pulse 2s infinite;

  &:hover {
    transform: translateY(-6px) scale(1.08);
    box-shadow: 0 12px 0 #a81e1e;
    background: linear-gradient(135deg, #d62828, #ff6b35);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #a81e1e;
  }

  &::before {
    content: "🎉 ";
    margin-right: 0.5rem;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
`;

const NoEvents = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #a87c00;
  margin: 2rem 0;
`;

export default function Home() {
  const eventos = [
    { id: 1, nombre: "Fiesta de la Hamburguesa", fecha: "2025-04-15", lugar: "Plaza Mayor" },
    { id: 2, nombre: "Concurso de Salsas", fecha: "2025-04-20", lugar: "Café Delicias" },
    { id: 3, nombre: "BBQ en el Parque", fecha: "2025-05-05", lugar: "Parque Central" }
  ];

  return (
    <Container>
      <Title>¡Bienvenido a la Fiesta! 🍔</Title>

      <EventsContainer>
        {eventos.length > 0 ? (
          eventos.map(evento => (
            <EventCard key={evento.id}>
              <EventTitle className="event-title">{evento.nombre}</EventTitle>
              <EventInfo className="event-info">📅 {evento.fecha} | 📍 {evento.lugar}</EventInfo>
              <Button onClick={() => window.location.href = `/event/${evento.id}`}>
                ¡INSCRÍBETE YA!
              </Button>
            </EventCard>
          ))
        ) : (
          <NoEvents>Aún no hay eventos programados. ¡Sé el primero en crear uno!</NoEvents>
        )}
      </EventsContainer>

      {/* 👇 BOTÓN CENTRADO (opcional) */}
      <CreateButton to="/create-event">
        ¡CREA TU PROPIO EVENTO!
      </CreateButton>

    
    </Container>
  );
}