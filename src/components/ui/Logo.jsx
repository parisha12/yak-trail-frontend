import { Link } from 'react-router-dom';
import logo from '../../assets/images/yak-trail-logo.png';

export default function Logo() {
  return (
    <Link className="logo" to="/">
      <img
        src={logo}
        alt="Yak Trail Expeditions"
        className="logo__image"
      />
    </Link>
  );
  
}
