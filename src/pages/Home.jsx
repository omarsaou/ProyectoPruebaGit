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

// Animación de rebote reutilizable
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
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
    animation: ${bounce} 2s infinite;
  }
`;

const EventsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin-bottom: 2rem;
  padding: 0 1rem;
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
`;

const EventInfo = styled.p`
  margin: 0.6rem 0;
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: #a87c00;
  font-weight: 500;
  line-height: 1.4;
  transition: all 0.3s ease;
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

const NoEvents = styled.p`
  text-align: center;
  font-size: 1.4rem;
  color: #d62828;
  margin-top: 2rem;
  font-weight: bold;
`;

// 👇 BOTÓN CENTRADO — EL ÚNICO QUE QUEDA (con pepinillo 🥒)
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
    animation: ${bounce} 2s infinite;
  }
`;

// 👇 BOTÓN DE PERFIL — ESTILO BACON 🥓 (sólido, sin texturas, sin cuadros)
const ProfileButton = styled(Link)`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: #d48b4c; /* Color sólido de bacon dorado */
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: clamp(1rem, 3vw, 1.2rem);
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 4px 0 #8c401a;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  border: 2px solid #ffd700; /* Borde mostaza */

  &:hover {
    background: #e59e5f; /* Bacon más claro al pasar el ratón */
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 0 #8c401a;
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #8c401a;
  }

  &::before {
    content: "🥓 ";
    margin-right: 0.5rem;
    text-shadow: 1px 1px 0 rgba(0,0,0,0.3);
  }
`;

// Importamos keyframes aquí para usarlo en múltiples componentes
const keyframes = (strings, ...values) => {
  const anim = styled.keyframes(strings, ...values);
  return anim;
};

// Creamos la animación una sola vez
// (Eliminado bounceAnim porque no se usa)

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

      {/* 👇 ÚNICO BOTÓN DE CREAR EVENTO — EL DEL PEPINILLO 🥒 */}
      <CreateButton to="/create-event">
        ¡CREA TU PROPIO EVENTO!
      </CreateButton>

      {/* 👇 BOTÓN DE PERFIL — ESTILO BACON 🥓 */}
      <ProfileButton to="/profile">
        Mi Perfil
      </ProfileButton>
    </Container>
  );
}