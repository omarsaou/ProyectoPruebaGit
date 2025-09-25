import styled from 'styled-components';

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  overflow: hidden;
  max-width: 320px;
  margin: 1rem;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.25rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  color: #2d3748;
  margin-bottom: 0.5rem;
`;

const Info = styled.div`
  display: flex;
  align-items: center;
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 0.25rem;
  svg {
    margin-right: 0.4rem;
    width: 16px;
    height: 16px;
  }
`;

const EnrollButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${props => props.enrolled ? '#e2e8f0' : '#e53e3e'};
  color: ${props => props.enrolled ? '#718096' : 'white'};
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: ${props => props.enrolled ? 'default' : 'pointer'};
  margin-top: 1rem;
  &:hover {
    background-color: ${props => props.enrolled ? '#e2e8f0' : '#c53030'};
  }
`;

export default function EventCard({ event, onEnroll, enrolled = false }) {
  return (
    <Card>
      <Image src={event.image || 'https://via.placeholder.com/320x180?text=Evento'} alt={event.title} />
      <Content>
        <Title>{event.title}</Title>
        <Info>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {event.date}
        </Info>
        <Info>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {event.time}
        </Info>
        <Info>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          {event.location}
        </Info>
        <EnrollButton
          enrolled={enrolled}
          onClick={() => !enrolled && onEnroll(event)}
          disabled={enrolled}
        >
          {enrolled ? 'Inscrito' : 'Inscríbete'}
        </EnrollButton>
      </Content>
    </Card>
  );
}