import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import PartnerMarquee from '../components/PartnerMarquee';
import About from '../components/About';
import Differentiators from '../components/Differentiators';
import HowWeWork from '../components/HowWeWork';
import Leadership from '../components/Leadership';
import Services from '../components/Services';
import FAQ from '../components/FAQ';

interface HomePoolsProps {
  onCtaClick: (id: string) => void;
}

export default function HomePools({ onCtaClick }: HomePoolsProps) {
  const originalTitle = (
    <>
      Somos o ponto final em seus <br className="hidden sm:inline" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-200 to-white font-black pb-1 inline-block">
        problemas com piscina.
      </span>
    </>
  );

  const originalSubtitle = "Especialista em piscinas de fibra e alvenaria. Realizamos reformas estruturais, impermeabilização definitiva, correção de vazamentos e revitalizações de alto padrão com garantia contratual.";

  return (
    <main className="flex-grow">
      {/* Hero Section with Original Texts */}
      <Hero 
        onCtaClick={onCtaClick} 
        title={originalTitle}
        subtitle={originalSubtitle}
        badge="Especialista em Engenharia de Piscinas"
      />

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
