import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import About from '../components/About';
import FAQ from '../components/FAQ';

interface DecksProps {
  onCtaClick: (id: string) => void;
}

export default function Decks({ onCtaClick }: DecksProps) {
  const deckTitle = (
    <>
      Valorize sua piscina com um deck <br className="hidden sm:inline" />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-blue-200 to-white font-black pb-1 inline-block">
        bonito, resistente e bem instalado.
      </span>
    </>
  );

  const deckSubtitle = "Fazemos decks para piscinas com acabamento de alto padrão, pensados para combinar com sua área externa e deixar o espaço muito mais bonito e agradável.";

  return (
    <main className="flex-grow">
      {/* Hero Section with Deck Texts */}
      <Hero 
        onCtaClick={onCtaClick} 
        title={deckTitle}
        subtitle={deckSubtitle}
        badge="Especialista em Engenharia de Decks"
      />

      {/* Before/After sliding comparisons and Masonry Photo portfolio */}
      <Gallery />

      {/* Company Overview Section */}
      <About />

      {/* Interactive FAQ Accordeon */}
      <FAQ />
    </main>
  );
}
