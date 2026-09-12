import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../ui/Logo';
import { navigation } from '../../constants/navigation';
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container header__inner">
        <Logo />
        <nav className={open ? 'nav nav--open' : 'nav'}>
          {navigation.map((n) => (
            <NavLink key={n.to} onClick={() => setOpen(false)} to={n.to}>
              {n.label}
            </NavLink>
          ))}
          <Link
            className="btn btn--primary"
            to="/booking"
            onClick={() => setOpen(false)}
          >
            Book Adventure
          </Link>
        </nav>
        <button
          className="menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? '×' : '☰'}
        </button>
      </div>
    </header>
  );
}
