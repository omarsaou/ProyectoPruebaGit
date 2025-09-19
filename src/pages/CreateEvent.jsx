import styled from "styled-components";


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
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.8rem;
  border: 2px solid #ffd700;
  border-radius: 0.5rem;
  font-size: 1rem;
`;

const Button = styled.button`
  background: #d62828;
  color: white;
  border: none;
  padding: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.1rem;
`;

export default function CreateEvent() {
  return (
    <Container>
      <Title>Crear Nuevo Evento 🍔</Title>
      <Form>
        <Input type="text" placeholder="Nombre del evento" />
        <Input type="date" placeholder="Fecha" />
        <Input type="text" placeholder="Lugar" />
        <Button type="submit">Crear evento</Button>
      </Form>
    </Container>
  );
}