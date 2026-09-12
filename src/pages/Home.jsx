import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import TrekCard from '../components/treks/TrekCard';
import PillarCard from '../components/home/PillarCard';
import { treks } from '../data/treks';
export default function Home() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero__content">
            <span className="overline">NEPAL · TIBET · BHUTAN</span>
            <h1>
              INTO THE WILD.
              <br />
              <em>INTO THE HIMALAYAS.</em>
            </h1>
            <p>
              Small-group expeditions led by local experts. Raw trails, honest
              encounters and peaks that stay with you.
            </p>
            <div className="actions">
              <Link className="btn btn--primary" to="/treks">
                Explore Treks
              </Link>
              <Link className="btn btn--ghost" to="/about">
                Our Story
              </Link>
            </div>
          </div>
        </Container>
      </section>
      <section className="pillars">
        <Container className="pillar-grid">
          <PillarCard
            number="01"
            title="Handpicked Trails"
            text="Routes chosen for wonder, not crowds."
          />
          <PillarCard
            number="02"
            title="Local Guides"
            text="Mountain people leading mountain journeys."
          />
          <PillarCard
            number="03"
            title="Safety First"
            text="Measured acclimatization and trusted support."
          />
          <PillarCard
            number="04"
            title="True Connection"
            text="Travel that respects culture and place."
          />
        </Container>
      </section>
      <section className="section">
        <Container>
          <SectionTitle
            eyebrow="SIGNATURE JOURNEYS"
            title="Trails Worth Taking"
            text="From renowned base camps to remote high passes."
          />
          <div className="card-grid">
            {treks.slice(0, 3).map((t) => (
              <TrekCard trek={t} key={t.slug} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
