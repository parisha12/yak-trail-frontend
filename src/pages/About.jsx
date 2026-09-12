import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import yak from '../assets/images/himalayan_yak.jpg';
export default function About() {
  return (
    <>
      <section className="page-banner">
        <Container>
          <span className="overline">OUR STORY</span>
          <h1>Born Close to the Mountains</h1>
        </Container>
      </section>
      <section className="section">
        <Container className="split">
          <img src={yak} alt="Himalayan yak" />
          <div>
            <SectionTitle
              eyebrow="WHY YAK TRAIL"
              title="Exploration With Roots"
            />
            <p>
              Yak Trail began with a simple belief: the best Himalayan journeys
              should be guided by the people who call these valleys home.
            </p>
            <p>
              We build small, unhurried expeditions that support local
              livelihoods and leave room for genuine encounters.
            </p>
            <div className="numbers">
              <div>
                <b>14+</b>
                <span>Years guiding</span>
              </div>
              <div>
                <b>2,800</b>
                <span>Happy trekkers</span>
              </div>
              <div>
                <b>96%</b>
                <span>Local team</span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
