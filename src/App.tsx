import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { trackPageView, trackVirtualPageView } from './lib/gtm';
import Preloader from './components/Preloader';
import ScrollAnimationController from './components/ScrollAnimationController';
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
      // Use a small delay to allow navigation to complete before scrolling
      setTimeout(() => {
        const targetElement = document.getElementById(id);
        if (targetElement) {
          const headerOffset = 80;
          const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - headerOffset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    const targetElement = document.getElementById(id);
    if (targetElement) {
      trackVirtualPageView(`/${id}`);
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCtaClick = (id: string) => {
    scrollToSection(id);
  };

  return (
    <div className="min-h-screen bg-bg-soft text-slate-800 antialiased font-sans flex flex-col justify-between overflow-x-hidden">
      <Preloader />
      <ScrollAnimationController />
      <ScrollToTop />
      
      <FloatingWhatsApp />
      <BackToTopButton />

      <Header onNavClick={scrollToSection} />

      <Routes>
        <Route index element={<Home onCtaClick={handleCtaClick} />} />
        <Route path="decks" element={<Decks onCtaClick={handleCtaClick} />} />
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
