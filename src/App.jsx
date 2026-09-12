import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Treks from './pages/Treks';
import TrekDetail from './pages/TrekDetail';
import About from './pages/About';
import Journal from './pages/Journal';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import NotFound from './pages/NotFound';

function ScrollTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollTop />

      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/treks/:slug" element={<TrekDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
