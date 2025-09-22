// src/pages/EventDetails.jsx
import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom"; // 👈 IMPORTAMOS EL HOOK

const Container = styled.div`
  padding: 2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const Title = styled.h2`
  color: #d62828;
  text-align: center;
  margin-bottom: 1.5rem;
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
  font-size: 1.1rem;
`;

export default function EventDetails() {
  const { id } = useParams(); // 👈 ESTA ES LA LÍNEA QUE ARREGLA EL ERROR

  return (
    <Container>
      <Title>Evento ID: {id} 🍔</Title>
      <Form>
        <Input type="text" placeholder="¿Qué voy a llevar?" />
        <Button type="submit">Confirmar inscripción</Button>
      </Form>
    </Container>
  );
}