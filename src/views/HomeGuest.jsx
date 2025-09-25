import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import EventBox from './EventBox';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function HomeGuest() {
  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <PageContainer>
      <Navbar />
      <Banner onScrollToEvents={scrollToEvents} />
      <EventBox>
        <p style={{ textAlign: 'center', color: '#718096' }}>No hay eventos disponibles aún.</p>
      </EventBox>
      <Footer />
    </PageContainer>
  );
}