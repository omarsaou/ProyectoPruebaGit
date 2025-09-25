import { useAuth } from '../context/AuthContext';
import styled from 'styled-components';

const BannerContainer = styled.div`
  position: relative;
  height: 400px;
  background-image: url('https://images.unsplash.com/photo-1594221708779-94802650530b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 0 1rem;
`;

const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  padding: 0.75rem 1.75rem;
  background-color: #e53e3e;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #c53030;
  }
`;

const SecondaryButton = styled(PrimaryButton)`
  background-color: white;
  color: #e53e3e;
  &:hover {
    background-color: #f8f8f8;
  }
`;

export default function Banner({ onScrollToEvents, onCreateEvent }) {
  const { user } = useAuth();

  return (
    <BannerContainer>
      <Overlay />
      <Content>
        <Title>¡Únete a la Fiesta!</Title>
        <Buttons>
          <PrimaryButton onClick={onScrollToEvents}>
            Ver Eventos
          </PrimaryButton>
          {user?.role === 'admin' && (
            <SecondaryButton onClick={onCreateEvent}>
              Crear Evento
            </SecondaryButton>
          )}
        </Buttons>
      </Content>
    </BannerContainer>
  );
}