import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { trackPageView } from './lib/gtm';
import Header from './components/Header';
import Home from './pages/Home';
import Decks from './pages/Decks';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTopButton from './components/BackToTopButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView();
  }, [location]);

  const scrollToSection = (id: string) => {
    if (id === 'contato') {
      window.open('https://api.whatsapp.com/send/?phone=555192756700&text&type=phone_number&app_absent=0', '_blank', 'noreferrer');
      return;
    }

    if (id === 'decks') {
      navigate('/decks');
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-bg-soft text-slate-800 antialiased font-sans flex flex-col justify-between overflow-x-hidden">
      <ScrollToTop />
      <FloatingWhatsApp />
      <BackToTopButton />

      <Header onNavClick={scrollToSection} />

      <Routes>
        <Route path="/" element={<Home onCtaClick={scrollToSection} />} />
        <Route path="/decks" element={<Decks onCtaClick={scrollToSection} />} />
        <Route path="*" element={<Home onCtaClick={scrollToSection} />} />
      </Routes>

      <Footer onNavClick={scrollToSection} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
