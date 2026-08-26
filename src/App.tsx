import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { trackPageView, trackVirtualPageView } from './lib/gtm';
import Preloader from './components/Preloader';
import ScrollAnimationController from './components/ScrollAnimationController';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import PartnerMarquee from './components/PartnerMarquee';
import HowWeWork from './components/HowWeWork';
import Differentiators from './components/Differentiators';
import Gallery from './components/Gallery';
import Leadership from './components/Leadership';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTopButton from './components/BackToTopButton';

export default function App() {
  useEffect(() => {
    // Track initial page load on the SPA
    trackPageView();
  }, []);

  // Universal smooth scroll handler that works for elements and coordinates
  const scrollToSection = (id: string) => {
    if (id === 'contato') {
      window.open('https://api.whatsapp.com/send/?phone=555192756700&text&type=phone_number&app_absent=0', '_blank', 'noreferrer');
      return;
    }
    const targetElement = document.getElementById(id);
    if (targetElement) {
      // Track virtual page view for SPA section navigation
      trackVirtualPageView(`/${id}`);

      // Offset calculation for sticky header spacing on scrolling
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
      {/* Premium Aquatic Preloader Splash */}
      <Preloader />

      {/* Global Scroll Animation Controller via GSAP ScrollTrigger */}
      <ScrollAnimationController />

      {/* Global Bottom Utilities */}
      <FloatingWhatsApp />
      <BackToTopButton />

      {/* Header Sticky Navigation (includes scroll reading progress bar) */}
      <Header 
        onNavClick={scrollToSection} 
      />

      {/* Main Single Page Layout Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onCtaClick={handleCtaClick} />

        {/* Before/After sliding comparisons and Masonry Photo portfolio */}
        <Gallery />

        {/* Portfólio de parceiros e clientes corporativos */}
        <PartnerMarquee />

        {/* Company Overview Section */}
        <About />

        {/* Standardized Glassmorphism Differentiators */}
        <Differentiators />

        {/* Structural Horizontal Timeline workflow */}
        <HowWeWork />

        {/* Victor's Leadership & Bio */}
        <Leadership />

        {/* Dynamic Services Grid (with interactive detail overlays) */}
        <Services />

        {/* Interactive FAQ Accordeon */}
        <FAQ />
      </main>

      {/* Structured Footer map */}
      <Footer onNavClick={scrollToSection} />
    </div>
  );
}
