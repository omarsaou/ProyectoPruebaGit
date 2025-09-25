// src/pages/HomeGuest.jsx
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import EventBox from './EventBox';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff6b35, #ffcc29);
  font-family: "Comic Sans MS", "Chewy", cursive, sans-serif;
  background-image: url('https://www.transparenttextures.com/patterns/food.png');
  background-size: 300px;
  background-blend-mode: overlay;
  color: #5e3000;
`;

const EmptyMessage = styled.p`
  text-align: center;
  color: #a87c00;
  font-size: 1.2rem;
  margin-top: 1.5rem;
  font-weight: 600;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 0.6);
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
        <EmptyMessage>
          ¡Ups! Aún no hay eventos programados... 🍔<br />
          ¡Pero pronto habrá una GRAN FIESTA CARNÍVORA! 🥩
        </EmptyMessage>
      </EventBox>
      <Footer />
    </PageContainer>
  );
}