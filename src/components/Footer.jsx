import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #2d3748;
  color: white;
  text-align: center;
  padding: 2rem 1rem;
  font-family: 'Segoe UI', sans-serif;
  margin-top: auto;
`;

const Copyright = styled.p`
  margin-bottom: 1rem;
  opacity: 0.9;
`;

const TopButton = styled.button`
  padding: 0.6rem 1.5rem;
  background-color: #e53e3e;
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  &:hover {
    background-color: #c53030;
  }
`;

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <FooterContainer>
      <Copyright>© 2024 La Fiesta de la Hamburguesa. Todos los derechos reservados.</Copyright>
      <TopButton onClick={scrollToTop}>Volver arriba</TopButton>
    </FooterContainer>
  );
}