import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #d62828;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const EventCard = styled.div`
  background: #fdf4e3;
  border: 2px solid #ffd700;
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const EventTitle = styled.h3`
  margin: 0 0 0.5rem 0;
  color: #5e3000;
`;

const EventInfo = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #a87c00;
`;

const Button = styled.button`
  background: #d62828;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
`;

export default function Home() {
  const eventos = [
    { id: 1, nombre: "Fiesta de la Hamburguesa", fecha: "2025-04-15", lugar: "Plaza Mayor" },
    { id: 2, nombre: "Concurso de Salsas", fecha: "2025-04-20", lugar: "Café Delicias" }
  ];

  return (
    <Container>
      <Title>Lista de Eventos 🍔</Title>
      {eventos.map(evento => (
        <EventCard key={evento.id}>
          <EventTitle>{evento.nombre}</EventTitle>
          <EventInfo>📅 {evento.fecha} | 📍 {evento.lugar}</EventInfo>
          <Button onClick={() => window.location.href = `/event/${evento.id}`}>Inscribirme</Button>
        </EventCard>
      ))}
    </Container>
  );
}