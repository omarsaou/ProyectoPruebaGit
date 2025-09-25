import styled from 'styled-components';

const EventBoxContainer = styled.section`
  padding: 2rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #2d3748;
  margin-bottom: 2rem;
  font-weight: 700;
`;

export default function EventBox({ children }) {
  return (
    <EventBoxContainer id="events">
      <Title>Próximos Eventos</Title>
      {children}
    </EventBoxContainer>
  );
}