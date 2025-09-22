// src/pages/Profile.jsx
import React from "react";
import styled from "styled-components";
import { useUser } from "../UserContext";

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #ffcc29, #ff6b35);
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
`;

const ProfileCard = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background: #fdf4e3;
  border-radius: 2rem;
  padding: 2.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  border: 4px solid #d62828;
  position: relative;

  &::before {
    content: "👑";
    position: absolute;
    top: 15px;
    right: 20px;
    font-size: 2rem;
    opacity: 0.3;
  }
`;

const Title = styled.h1`
  color: #d62828;
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 0 #ffd700;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
`;

const InfoItem = styled.div`
  background: #fff9f0;
  padding: 1rem;
  border-radius: 1rem;
  border: 2px solid #ffd700;
`;

const Label = styled.p`
  font-weight: bold;
  color: #5e3000;
  margin: 0 0 0.3rem 0;
  font-size: 0.95rem;
`;

const Value = styled.p`
  color: #a87c00;
  margin: 0;
  font-size: 1.1rem;
`;

const SectionTitle = styled.h2`
  color: #d62828;
  font-size: 1.8rem;
  margin: 2rem 0 1rem 0;
  text-align: center;
  text-shadow: 1px 1px 0 #ffd700;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const TaskCard = styled.div`
  background: ${props => props.joined ? '#e8f5e9' : '#fff9f0'};
  border: 2px solid ${props => props.joined ? '#4caf50' : '#ffd700'};
  padding: 1.2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const TaskTitle = styled.h3`
  color: #5e3000;
  margin: 0 0 0.5rem 0;
`;

const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: bold;
  background: ${props => props.joined ? '#4caf50' : '#ffd700'};
  color: ${props => props.joined ? 'white' : '#5e3000'};
`;

const LogoutButton = styled.button`
  display: block;
  margin: 2rem auto 0 auto;
  padding: 0.8rem 2rem;
  background: #d62828;
  color: white;
  border: none;
  border-radius: 50px;
  font-size: 1.1rem;
  font-weight: bold;
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

// 👇 MAPEO DE ROLES — ¡ESTO ES LO QUE FALTABA!
const ROLE_LABELS = {
  ayudante: "Ayudante de cocina 🔪",
  ayudado: "Invitado de honor 🍔👑",
  "": "Sin rol asignado"
};

export default function Profile() {
  const { userRole } = useUser();

  // 👇 Obtenemos el nombre amigable del rol
  const roleName = ROLE_LABELS[userRole] || ROLE_LABELS[""];

  const user = {
    name: localStorage.getItem('nombreUsuario') || "Usuario",
    email: "usuario@email.com", // puedes mejorarlo después
    dob: "1990-01-01", // puedes mejorarlo después
    dni: "00000000X", // puedes mejorarlo después
    role: roleName, // 👈 ¡USAMOS EL NOMBRE AMIGABLE!
  };

  // Mock de tareas
  const tasks = [
    { id: 1, title: "Reparto de comida", joined: true },
    { id: 2, title: "Clases de apoyo escolar", joined: false },
  ];

  // Mock de eventos
  const events = [
    { id: 1, title: "Donación de ropa", joined: true },
    { id: 2, title: "Transporte solidario", joined: false },
  ];

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogueado');
    localStorage.removeItem('nombreUsuario');
    localStorage.removeItem('userRole');
    window.location.href = '/login';
  };

  return (
    <Container>
      <ProfileCard>
        <Title>Perfil de {user.name} 🍔</Title>

        {/* Información básica */}
        <InfoGrid>
          <InfoItem>
            <Label>Nombre:</Label>
            <Value>{user.name}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Correo:</Label>
            <Value>{user.email}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Fecha de nacimiento:</Label>
            <Value>{user.dob}</Value>
          </InfoItem>
          <InfoItem>
            <Label>DNI/NIE:</Label>
            <Value>{user.dni}</Value>
          </InfoItem>
          <InfoItem>
            <Label>Rol:</Label>
            <Value>{user.role}</Value> {/* 👈 ¡AHORA MUESTRA EL NOMBRE COMPLETO! */}
          </InfoItem>
        </InfoGrid>

        {/* Tareas asignadas */}
        <SectionTitle>Tus Tareas</SectionTitle>
        <TaskGrid>
          {tasks.map(task => (
            <TaskCard key={task.id} joined={task.joined}>
              <TaskTitle>{task.title}</TaskTitle>
              <StatusBadge joined={task.joined}>
                {task.joined ? '✅ Unido' : 'No unido'}
              </StatusBadge>
            </TaskCard>
          ))}
        </TaskGrid>

        {/* Eventos asignados */}
        <SectionTitle>Tus Eventos</SectionTitle>
        <TaskGrid>
          {events.map(event => (
            <TaskCard key={event.id} joined={event.joined}>
              <TaskTitle>{event.title}</TaskTitle>
              <StatusBadge joined={event.joined}>
                {event.joined ? '✅ Unido' : 'No unido'}
              </StatusBadge>
            </TaskCard>
          ))}
        </TaskGrid>

        <LogoutButton onClick={handleLogout}>
          Cerrar sesión 🍔
        </LogoutButton>
      </ProfileCard>
    </Container>
  );
}