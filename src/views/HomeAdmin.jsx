// src/pages/HomeAdmin.jsx
import { useState } from 'react';
import { useApp } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import EventBox from './EventBox';
import EventCard from '../components/EventCard';
import ModalEnroll from '../components/ModalEnroll';
import ModalCreateEvent from '../components/ModalCreateEvent';
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

export default function HomeAdmin() {
  const { events, isEnrolled, enrollUser, createEvent } = useApp();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

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
      <Banner 
        onScrollToEvents={scrollToEvents} 
        onCreateEvent={() => setShowCreateModal(true)} 
      />
      <EventBox>
        <EventsGrid>
          {events.map(event => (
            <EventCard
              key={event.id}
              event={event}
              enrolled={isEnrolled(event.id)}
              onEnroll={handleEnroll}
            />
          ))}
        </EventsGrid>
      </EventBox>
      <Footer />

      {selectedEvent && (
        <ModalEnroll
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
          onEnrollAs={handleEnrollAs}
        />
      )}

      {showCreateModal && (
        <ModalCreateEvent
          onClose={() => setShowCreateModal(false)}
          onCreate={createEvent}
        />
      )}
    </PageContainer>
  );
}