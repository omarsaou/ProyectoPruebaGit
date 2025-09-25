import styled from 'styled-components';
import { useState } from 'react';
import ModalListFood from './ModalListFood';

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
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 90%;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2d3748;
`;

const Buttons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  font-size: 1rem;
`;

const GuestBtn = styled(Button)`
  background-color: #e2e8f0;
  color: #4a5568;
  &:hover {
    background-color: #cbd5e0;
  }
`;

const CookBtn = styled(Button)`
  background-color: #e53e3e;
  color: white;
  &:hover {
    background-color: #c53030;
  }
`;

const CloseBtn = styled.button`
  margin-top: 1.5rem;
  color: #718096;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
`;

export default function ModalEnroll({ event, onClose, onEnrollAs }) {
  const [showFoodModal, setShowFoodModal] = useState(false);

  const handleCook = () => {
    setShowFoodModal(true);
  };

  const handleFoodSubmit = (foodList) => {
    onEnrollAs(event, 'cook', foodList);
    onClose();
  };

  if (showFoodModal) {
    return <ModalListFood onClose={() => setShowFoodModal(false)} onSubmit={handleFoodSubmit} />;
  }

  return (
    <Overlay onClick={onClose}>
      <ModalBox onClick={e => e.stopPropagation()}>
        <Title>¿Cómo te quieres inscribir en <strong>{event.title}</strong>?</Title>
        <Buttons>
          <GuestBtn onClick={() => { onEnrollAs(event, 'guest'); onClose(); }}>
            Como Invitado
          </GuestBtn>
          <CookBtn onClick={handleCook}>
            Como Cocinero
          </CookBtn>
        </Buttons>
        <CloseBtn onClick={onClose}>Cancelar</CloseBtn>
      </ModalBox>
    </Overlay>
  );
}