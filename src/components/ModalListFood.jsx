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
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: #2d3748;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: #4a5568;
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-family: inherit;
  resize: vertical;
  min-height: 100px;
  margin-bottom: 1.5rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
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

const SubmitBtn = styled(Button)`
  background: #e53e3e;
  color: white;
`;

export default function ModalListFood({ onClose, onSubmit }) {
  const [foodList, setFoodList] = useState('');

  const handleSubmit = () => {
    if (foodList.trim()) {
      onSubmit(foodList);
    }
  };

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <Title>¿Qué vas a cocinar?</Title>
        <Label>Describe los platos que traerás:</Label>
        <Textarea
          value={foodList}
          onChange={(e) => setFoodList(e.target.value)}
          placeholder="Ej: Hamburguesa clásica, papas fritas, ensalada..."
        />
        <Buttons>
          <CancelBtn onClick={onClose}>Cancelar</CancelBtn>
          <SubmitBtn onClick={handleSubmit}>Confirmar</SubmitBtn>
        </Buttons>
      </ModalBox>
    </Overlay>
  );
}