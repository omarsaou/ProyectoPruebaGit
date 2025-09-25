// src/pages/HomeUser.jsx
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import EventBox from './EventBox';
import EventCard from '../components/EventCard';
import ModalEnroll from '../components/ModalEnroll';
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

const EventsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  padding: 0 1rem 2rem;
`;

export default function HomeUser() {
  const { events, isEnrolled, enrollUser } = useApp();
  const [selectedEvent, setSelectedEvent] = useState(null);

  const scrollToEvents = () => {
    document.getElementById('events')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnroll = (event) => {
    setSelectedEvent(event);
  };

  const handleEnrollAs = (event, role, food = null) => {
    enrollUser(event.id, role, food);
  };

  return (
    <PageContainer>
      <Navbar />
      <Banner onScrollToEvents={scrollToEvents} />
      <EventBox>
        {events.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              color: '#a87c00',
              fontSize: '1.2rem',
              marginTop: '1.5rem',
              fontWeight: '600',
              textShadow: '1px 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            ¡No hay eventos... pero la parrilla se está calentando! 🔥
          </p>
        ) : (
          <EventsGrid>
            {events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                enrolled={isEnrolled(event.id)}
                onEnroll={handleEnroll}
              />
            ))}
          </EventsGrid>
        )}
      </EventBox>
      <Footer />

      {selectedEvent && (
        <ModalEnroll
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onEnrollAs={handleEnrollAs}
        />
      )}
    </PageContainer>
  );
}