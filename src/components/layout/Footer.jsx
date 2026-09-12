import { Link } from 'react-router-dom';
import Logo from '../ui/Logo';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div>
          <Logo />
          <p>Into the Wild. Into the Himalayas.</p>
        </div>
        <div>
          <b>Explore</b>
          <Link to="/treks">All Treks</Link>
          <Link to="/about">Our Story</Link>
          <Link to="/journal">Journal</Link>
        </div>
        <div>
          <b>Base Camp</b>
          <p>Thamel, Kathmandu, Nepal</p>
          <p>hello@yaktrail.com</p>
          <p>+977 980-000-0000</p>
        </div>
      </div>
      <div className="container footer__bottom">
        © 2026 Yak Trail Expeditions · Leave only footprints.
      </div>
    </footer>
  );
}
