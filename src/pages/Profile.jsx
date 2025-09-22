// src/pages/Profile.jsx
import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useUser } from "../UserContext";

const Container = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #ffcc29, #ff6b35);
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
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

const IngredientSelector = styled.div`
  margin-top: 1.5rem;
  text-align: center;
  background: #fff9f0;
  border: 2px solid #ffd700;
  border-radius: 1rem;
  padding: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
`;

const IngredientList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 1rem;
`;

const IngredientTag = styled.span`
  background: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  animation: fadeInUp 0.5s ease-out;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const TaskCard = styled.div`
  background: #e8f5e9;
  border: 2px solid #4caf50;
  padding: 1.2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  animation: fadeInUp 0.5s ease-out;
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
  background: #4caf50;
  color: white;
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

// 👇 ANIMACIONES
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BurgerContainer = styled.div`
  margin: 2rem auto;
  width: 200px;
  height: 300px;
  position: relative;
  background: transparent;
`;

const BurgerLayer = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  background: ${props => props.color};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  color: white;
  text-shadow: 1px 1px 0 rgba(0,0,0,0.5);
  animation: slideIn 0.5s ease-out forwards;
  animation-delay: ${props => props.index * 0.1}s;
`;

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ROLE_LABELS = {
  ayudante: "Ayudante de cocina 🔪",
  ayudado: "Invitado de honor 🍔👑",
  "": "Sin rol asignado"
};

export default function Profile() {
  const { userRole } = useUser();
  const roleName = ROLE_LABELS[userRole] || ROLE_LABELS[""];

  const user = {
    name: localStorage.getItem('nombreUsuario') || "Usuario",
    email: localStorage.getItem('userEmail') || "usuario@email.com",
    dob: localStorage.getItem('userDob') || "1990-01-01",
    dni: localStorage.getItem('userDni') || "00000000X",
    role: roleName,
  };

  const [ingredients, setIngredients] = useState([]);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const userName = user.name;

    // 👇 CARGAR INGREDIENTES (SIEMPRE)
    const userIngredientsKey = `userIngredients_${userName}`;
    const savedIngredients = JSON.parse(localStorage.getItem(userIngredientsKey) || '[]');
    setIngredients(savedIngredients);

    // 👇 CARGAR EVENTOS (SIEMPRE)
    const eventosGuardados = JSON.parse(localStorage.getItem('eventos') || '[]');
    setEvents(eventosGuardados);
  }, []);

  const renderBurger = () => {
    const layerMap = {
      "Pan Normal": { color: "#e0a85c", height: 30 },
      "Pan Integral": { color: "#8B4513", height: 30 },
      "Pan Brioche": { color: "#f0c878", height: 30 },
      "Carne de Ternera": { color: "#8b0000", height: 25 },
      "Pollo": { color: "#f2c67a", height: 25 },
      "Vegetariana": { color: "#228B22", height: 25 },
      "Queso Cheddar": { color: "#FFA500", height: 15 },
      "Queso Azul": { color: "#4169E1", height: 15 },
      "Lechuga": { color: "#32CD32", height: 10 },
      "Tomate": { color: "#FF6347", height: 10 },
      "Cebolla": { color: "#FFD700", height: 10 },
      "Pepinillos": { color: "#006400", height: 10 },
      "Bacon": { color: "#DC143C", height: 15 },
      "Huevo Frito": { color: "#FFF8DC", height: 20, border: "2px solid #FFA500" },
      "Aguacate": { color: "#568203", height: 15 },
      "Champiñones": { color: "#8B4513", height: 15 },
      "Kétchup": { color: "#B22222", height: 8 },
      "Mostaza": { color: "#FFD700", height: 8 },
      "Mayonesa": { color: "#F5F5DC", height: 8 },
      "Salsa Barbacoa": { color: "#8B0000", height: 8 },
    };

    const selectedLayers = ingredients.filter(ing => layerMap[ing]);

    let yPos = 300;
    return (
      <BurgerContainer>
        {selectedLayers.map((ing, index) => {
          const layer = layerMap[ing];
          yPos -= layer.height;
          return (
            <BurgerLayer
              key={index}
              color={layer.color}
              index={index}
              style={{
                top: `${yPos}px`,
                height: `${layer.height}px`,
                border: layer.border || "none"
              }}
            >
              {ing}
            </BurgerLayer>
          );
        })}
      </BurgerContainer>
    );
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <Container>
      <ProfileCard>
        <Title>Perfil de {user.name} 🍔</Title>

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
            <Value>{user.role}</Value>
          </InfoItem>
        </InfoGrid>

        <SectionTitle>¿Qué ingredientes llevas? 🍔</SectionTitle>
        <IngredientSelector>
          {ingredients.length > 0 ? (
            <IngredientList>
              {ingredients.map((ing, index) => (
                <IngredientTag key={index}>
                  {ing} ✅
                </IngredientTag>
              ))}
            </IngredientList>
          ) : (
            <p style={{ animation: 'fadeInUp 0.5s ease-out' }}>Aún no has seleccionado ingredientes.</p>
          )}
        </IngredientSelector>

        <SectionTitle>Tu Hamburguesa Personalizada 🍔</SectionTitle>
        {ingredients.length > 0 ? (
          renderBurger()
        ) : (
          <p style={{ animation: 'fadeInUp 0.5s ease-out' }}>Selecciona ingredientes en un evento para ver tu hamburguesa aquí.</p>
        )}

        <SectionTitle>Tus Eventos</SectionTitle>
        {events.length > 0 ? (
          <TaskGrid>
            {events
              .filter(event => event.usuario === user.name && event.joined)
              .map(event => (
                <TaskCard key={event.id}>
                  <TaskTitle>{event.nombre}</TaskTitle>
                  <StatusBadge>✅ Unido</StatusBadge>
                </TaskCard>
              ))}
          </TaskGrid>
        ) : (
          <p style={{ animation: 'fadeInUp 0.5s ease-out' }}>No estás inscrito en ningún evento.</p>
        )}

        <LogoutButton onClick={handleLogout}>
          Cerrar sesión 🍔
        </LogoutButton>
      </ProfileCard>
    </Container>
  );
}