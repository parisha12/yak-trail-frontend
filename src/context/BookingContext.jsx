import { createContext, useContext, useMemo, useState } from 'react';
import { treks } from '../data/treks';
const BookingContext = createContext(null);
export function BookingProvider({ children }) {
  const [trip, setTrip] = useState(treks[0]);
  const [travelers, setTravelers] = useState(1);
  const [date, setDate] = useState('2026-10-12');
  const total = useMemo(() => trip.price * travelers, [trip, travelers]);
  return (
    <BookingContext.Provider
      value={{ trip, setTrip, travelers, setTravelers, date, setDate, total }}
    >
      {children}
    </BookingContext.Provider>
  );
}
export const useBooking = () => useContext(BookingContext);
