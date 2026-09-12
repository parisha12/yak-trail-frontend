import { Navigate, useParams, Link } from 'react-router-dom';
import { getTrek } from '../data/treks';
import Container from '../components/ui/Container';
import Badge from '../components/ui/Badge';
import { useBooking } from '../context/BookingContext';
export default function TrekDetail() {
  const { slug } = useParams(),
    trek = getTrek(slug),
    { setTrip } = useBooking();
  if (!trek) return <Navigate to="/treks" />;
  return (
    <>
      <section
        className="detail-hero"
        style={{
          backgroundImage: `linear-gradient(90deg,rgba(10,20,15,.9),rgba(10,20,15,.1)),url(${trek.image})`,
        }}
      >
        <Container>
          <Badge>{trek.region} REGION</Badge>
          <h1>{trek.name}</h1>
          <p>{trek.summary}</p>
        </Container>
      </section>
      <section className="stats">
        <Container className="stats__grid">
          <div>
            <b>{trek.days}</b>
            <span>Days</span>
          </div>
          <div>
            <b>{trek.altitude}</b>
            <span>Highest Point</span>
          </div>
          <div>
            <b>{trek.difficulty}</b>
            <span>Difficulty</span>
          </div>
          <div>
            <b>${trek.price}</b>
            <span>From</span>
          </div>
        </Container>
      </section>
      <section className="section">
        <Container className="detail-layout">
          <div>
            <span className="overline">THE EXPERIENCE</span>
            <h2>A Trail Into Thin Air</h2>
            <p>
              Climb gradually through forest, river valleys and stone-built
              villages into the open world of the high Himalayas. Rest days
              protect your pace while local guides bring every place to life.
            </p>
            <h3>What’s included</h3>
            <ul className="check-list">
              <li>Licensed local expedition leader</li>
              <li>Tea-house accommodation and meals</li>
              <li>Permits, ground transfers and porter support</li>
              <li>Emergency oxygen and medical kit</li>
            </ul>
            <h3>Route highlights</h3>
            <div className="route">
              Kathmandu → Lukla → Namche → Tengboche → Base Camp → Kala Patthar
            </div>
          </div>
          <aside className="booking-card">
            <span>FROM</span>
            <strong>${trek.price}</strong>
            <small>per explorer</small>
            <p>Best season: {trek.season}</p>
            <Link
              className="btn btn--primary"
              to="/booking"
              onClick={() => setTrip(trek)}
            >
              Book This Trek
            </Link>
          </aside>
        </Container>
      </section>
    </>
  );
}
