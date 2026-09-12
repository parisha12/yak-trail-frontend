import { Link } from 'react-router-dom';
export default function Logo() {
  return (
    <Link className="logo" to="/">
      <span className="logo__mark">Y</span>
      <span>
        YAK TRAIL<small>EXPEDITIONS</small>
      </span>
    </Link>
  );
}
