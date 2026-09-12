import { useState } from 'react';
import Container from '../components/ui/Container';
import Input from '../components/ui/Input';
import Dropdown from '../components/ui/Dropdown';
import Button from '../components/ui/Button';
import { useBooking } from '../context/BookingContext';
import { treks } from '../data/treks';
export default function Booking() {
  const { trip, setTrip, travelers, setTravelers, date, setDate, total } =
    useBooking();
  const [done, setDone] = useState(false);
  return (
    <section className="section page-top">
      <Container>
        <div className="booking-head">
          <span className="overline">SECURE BOOKING</span>
          <h1>Book Your Adventure</h1>
          <p>
            Reserve with a 20% deposit. Final details are confirmed by our
            Kathmandu team.
          </p>
        </div>
        <div className="checkout">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
            }}
          >
            <h2>01 · Trip details</h2>
            <Dropdown
              label="Expedition"
              value={trip.slug}
              onChange={(e) =>
                setTrip(treks.find((t) => t.slug === e.target.value))
              }
            >
              {treks.map((t) => (
                <option value={t.slug} key={t.slug}>
                  {t.name}
                </option>
              ))}
            </Dropdown>
            <div className="form-row">
              <Input
                label="Departure"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
              <Input
                label="Travelers"
                type="number"
                min="1"
                max="12"
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
              />
            </div>
            <h2>02 · Lead traveler</h2>
            <div className="form-row">
              <Input label="Full name" required />
              <Input label="Email" type="email" required />
            </div>
            <Input label="Phone / WhatsApp" required />
            <Button type="submit">Request Booking</Button>
            {done && (
              <p className="success">
                Adventure requested! Check your email for the next steps.
              </p>
            )}
          </form>
          <aside className="summary">
            <img src={trip.image} alt={trip.name} />
            <span className="overline">YOUR EXPEDITION</span>
            <h3>{trip.name}</h3>
            <p>
              {date} · {travelers} traveler{travelers > 1 ? 's' : ''}
            </p>
            <div>
              <span>Trip total</span>
              <strong>${total.toLocaleString()}</strong>
            </div>
            <div>
              <span>20% deposit</span>
              <strong>${(total * 0.2).toLocaleString()}</strong>
            </div>
            <small>Secure booking · Transparent pricing</small>
          </aside>
        </div>
      </Container>
    </section>
  );
}
