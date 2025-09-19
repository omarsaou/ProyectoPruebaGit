// src/pages/EventDetails.jsx
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #d62828;
  text-align: center;
`;

const Form = styled.form`
  margin-top: 1.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 2px solid #ffd700;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #d62828;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export default function EventDetails({ match }) {
  const eventId = match.params.id; // ID del evento

  return (
    <Container>
      <Title>Evento: Fiesta de la Hamburguesa</Title>
      <p>ID del evento: {eventId}</p>
      <Form>
        <Input type="text" placeholder="¿Qué voy a llevar?" />
        <Button type="submit">Confirmar inscripción</Button>
      </Form>
    </Container>
  );
}