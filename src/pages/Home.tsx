import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import PartnerMarquee from '../components/PartnerMarquee';
import About from '../components/About';
import Differentiators from '../components/Differentiators';
import HowWeWork from '../components/HowWeWork';
import Leadership from '../components/Leadership';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

interface HomeProps {
  onCtaClick: (id: string) => void;
}

export default function Home({ onCtaClick }: HomeProps) {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <Hero onCtaClick={onCtaClick} />

      {/* Before/After sliding comparisons and Masonry Photo portfolio */}
      <Gallery />

      {/* Dynamic Services Grid (with interactive detail overlays) */}
      <Services />

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

      {/* Interactive FAQ Accordeon */}
      <FAQ />
    </main>
  );
}
