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
`;

const EventsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    </PageContainer>
  );
}