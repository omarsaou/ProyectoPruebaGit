// src/components/EventBox.jsx
import styled from 'styled-components';

const EventBoxContainer = styled.section`
  padding: 2.5rem 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2.4rem;
  color: #d62828;
  margin-bottom: 2rem;
  font-weight: bold;
  text-shadow: 2px 2px 0 #ffd700;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);

  &::after {
    content: " 🍔 🥩 🍟 ";
    display: block;
    font-size: 1.2rem;
    margin-top: 0.5rem;
    color: #ff6b35;
  }
`;

export default function EventBox({ children }) {
  return (
    <EventBoxContainer id="events">
      <Title>¡PRÓXIMOS EVENTOS!</Title>
      {children}
    </EventBoxContainer>
  );
}