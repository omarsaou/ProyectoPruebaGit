import styled from 'styled-components';
import { useState } from 'react';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #4a5568;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: inherit;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: flex-end;
`;

const Button = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  border: none;
`;

const CancelBtn = styled(Button)`
  background: #e2e8f0;
  color: #4a5568;
`;

const CreateBtn = styled(Button)`
  background: #e53e3e;
  color: white;
`;

export default function ModalCreateEvent({ onClose, onCreate }) {
  const [formData, setFormData] = useState({
    title: '',
    date: '',
    time: '',
    location: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(formData);
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <Title>Crear Nuevo Evento</Title>
        <Form onSubmit={handleSubmit}>
          <InputGroup>
            <Label>Nombre del evento</Label>
            <Input name="title" value={formData.title} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Fecha</Label>
            <Input name="date" type="date" value={formData.date} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Hora</Label>
            <Input name="time" type="time" value={formData.time} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>Ubicación</Label>
            <Input name="location" value={formData.location} onChange={handleChange} required />
          </InputGroup>
          <InputGroup>
            <Label>URL de imagen (opcional)</Label>
            <Input name="image" value={formData.image} onChange={handleChange} placeholder="https://..." />
          </InputGroup>
          <ButtonGroup>
            <CancelBtn type="button" onClick={onClose}>Cancelar</CancelBtn>
            <CreateBtn type="submit">Crear Evento</CreateBtn>
          </ButtonGroup>
        </Form>
      </ModalBox>
    </Overlay>
  );
}