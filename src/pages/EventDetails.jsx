// src/pages/EventDetails.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";

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
  margin-top: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.5rem;
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

const SectionTitle = styled.h3`
  color: #d62828;
  font-size: 1.6rem;
  margin: 2rem 0 1rem 0;
  text-align: center;
  text-shadow: 1px 1px 0 #ffd700;
`;

const IngredientGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0;
`;

const IngredientButton = styled.button`
  background: ${props => props.selected ? '#4caf50' : '#d62828'};
  color: white;
  border: none;
  padding: 0.8rem 0.5rem;
  border-radius: 0.8rem;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: bold;
  transition: all 0.3s ease;
  box-shadow: 0 4px 0 ${props => props.selected ? '#2e7d32' : '#a81e1e'};
  width: 100%;
  text-align: center;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 0 ${props => props.selected ? '#2e7d32' : '#a81e1e'};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 0 ${props => props.selected ? '#2e7d32' : '#a81e1e'};
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

const CountdownTimer = styled.div`
  background: #ff6b35;
  color: white;
  padding: 1rem;
  border-radius: 1rem;
  margin: 1.5rem 0;
  font-weight: bold;
  font-size: 1.2rem;
  box-shadow: 0 4px 0 #a81e1e;
`;

const EVENT_NAMES = {
  1: "Fiesta de la Hamburguesa",
  2: "Concurso de Salsas",
  3: "BBQ en el Parque",
  4: "Taller de Cocina"
};

const DING_SOUND = "https://assets.mixkit.co/sfx/preview/mixkit-bell-notification-933.mp3";

export default function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const eventName = EVENT_NAMES[id] || `Evento ID: ${id}`;

  const ingredients = [
    { id: 1, name: "Carne de Ternera" },
    { id: 2, name: "Pollo" },
    { id: 3, name: "Vegetariana" },
    { id: 4, name: "Pan Normal" },
    { id: 5, name: "Pan Integral" },
    { id: 6, name: "Pan Brioche" },
    { id: 7, name: "Lechuga" },
    { id: 8, name: "Tomate" },
    { id: 9, name: "Cebolla" },
    { id: 10, name: "Pepinillos" },
    { id: 11, name: "Queso Cheddar" },
    { id: 12, name: "Queso Azul" },
    { id: 13, name: "Kétchup" },
    { id: 14, name: "Mostaza" },
    { id: 15, name: "Mayonesa" },
    { id: 16, name: "Salsa Barbacoa" },
    { id: 17, name: "Bacon" },
    { id: 18, name: "Huevo Frito" },
    { id: 19, name: "Aguacate" },
    { id: 20, name: "Champiñones" },
  ];

  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 4, minutes: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes } = prev;
        if (minutes > 0) {
          minutes--;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
        }
        return { days, hours, minutes };
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const playDing = () => {
    const audio = new Audio(DING_SOUND);
    audio.play().catch(e => console.log("Sonido no reproducido:", e));
  };

  const toggleIngredient = (ingredientId) => {
    setSelectedIngredients(prev =>
      prev.includes(ingredientId)
        ? prev.filter(id => id !== ingredientId)
        : [...prev, ingredientId]
    );
    playDing();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userName = localStorage.getItem('nombreUsuario') || 'Anónimo';

    const userIngredientsKey = `userIngredients_${userName}`;
    const newIngredients = selectedIngredients.map(id => ingredients.find(i => i.id === id)?.name).filter(Boolean);
    localStorage.setItem(userIngredientsKey, JSON.stringify(newIngredients));

    let eventosGuardados = JSON.parse(localStorage.getItem('eventos') || '[]');
    const eventoIndex = eventosGuardados.findIndex(e => e.id == id);
    if (eventoIndex !== -1) {
      eventosGuardados[eventoIndex].joined = true;
      eventosGuardados[eventoIndex].usuario = userName;
    } else {
      eventosGuardados.push({
        id: parseInt(id),
        nombre: eventName,
        joined: true,
        usuario: userName
      });
    }
    localStorage.setItem('eventos', JSON.stringify(eventosGuardados));

    navigate('/profile');
  };

  return (
    <Container>
      <Card>
        <Title>{eventName} 🍔</Title>

        <CountdownTimer>
          ¡Faltan {timeLeft.days} días, {timeLeft.hours} horas y {timeLeft.minutes} minutos!
        </CountdownTimer>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="¿Qué nombre quieres que aparezca en tu placa de hamburguesa?"
          />

          <SectionTitle>¿Qué ingredientes llevas? 🍔</SectionTitle>
          <IngredientGrid>
            {ingredients.map(ingrediente => (
              <IngredientButton
                key={ingrediente.id}
                selected={selectedIngredients.includes(ingrediente.id)}
                onClick={() => toggleIngredient(ingrediente.id)}
                type="button"
              >
                {ingrediente.name} {selectedIngredients.includes(ingrediente.id) && "✅"}
              </IngredientButton>
            ))}
          </IngredientGrid>

          <Button type="submit">
            ¡CONFIRMAR INSCRIPCIÓN!
          </Button>
        </Form>
      </Card>
    </Container>
  );
}