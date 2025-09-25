import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useApp = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Fiesta de Verano',
      date: '2025-07-20',
      time: '18:00',
      location: 'Parque Central',
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 2,
      title: 'BBQ Nocturno',
      date: '2025-08-10',
      time: '20:00',
      location: 'Jardín Privado',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
    }
  ]);

  const [enrollments, setEnrollments] = useState({});

  useEffect(() => {
    const savedEvents = localStorage.getItem('events');
    const savedEnrollments = localStorage.getItem('enrollments');
    if (savedEvents) setEvents(JSON.parse(savedEvents));
    if (savedEnrollments) setEnrollments(JSON.parse(savedEnrollments));
  }, []);

  useEffect(() => {
    localStorage.setItem('events', JSON.stringify(events));
    localStorage.setItem('enrollments', JSON.stringify(enrollments));
  }, [events, enrollments]);

  const enrollUser = (eventId, role, food = null) => {
    setEnrollments(prev => ({
      ...prev,
      [eventId]: { role, food }
    }));
  };

  const createEvent = (eventData) => {
    const newEvent = {
      id: Date.now(),
      ...eventData
    };
    setEvents(prev => [...prev, newEvent]);
  };

  const isEnrolled = (eventId) => !!enrollments[eventId];

  return (
    <AppContext.Provider value={{
      events,
      enrollments,
      isEnrolled,
      enrollUser,
      createEvent
    }}>
      {children}
    </AppContext.Provider>
  );
};