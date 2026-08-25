import { motion } from 'motion/react';
import { Award, Users, Zap, CheckCircle2, Wrench, ClipboardList, Check, Eye } from 'lucide-react';
import { trackWhatsAppClick } from '../lib/gtm';
import { differentiatorsData } from '../mockData';

export default function Differentiators() {
  // Map icons from mockData values with refined styles
  const renderIcon = (iconName: string, isHovered = false) => {
    const props = { className: `w-5 h-5 transition-transform duration-300 ${isHovered ? 'scale-110 text-white' : 'text-primary'}` };
    switch (iconName) {
      case 'Award': return <Award {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Zap': return <Zap {...props} />;
      case 'CheckCircle': return <CheckCircle2 {...props} />;
      case 'Wrench': return <Wrench {...props} />;
      case 'ClipboardList': return <ClipboardList {...props} />;
      default: return <Award {...props} />;
    }
  };

  // Helper tags for engineering authenticity
  const getDifferentiatorMeta = (id: number) => {
    switch (id) {
      case 1: return { tag: 'Solidez', detail: 'Fundação sólida' };
      case 2: return { tag: 'Foco Técnico', detail: 'Especialistas focados' };
      case 3: return { tag: 'Conformidade', detail: 'Laudos com ART' };
      case 4: return { tag: 'Garantia', detail: 'Segurança em cartório' };
      case 5: return { tag: 'Profissionalismo', detail: 'Sem terceirização' };
      case 6: return { tag: 'Logística', detail: 'Atendimento ágil' };
      default: return { tag: 'Qualidade', detail: 'Padrão premium' };
    }
  };

  return (
    <section id="diferenciais" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle ambient grid & radial highlight */}
      <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#0077ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-100/20 rounded-full filter blur-3xl animate-pulse-slow select-none pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24 gsap-reveal">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase font-mono px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            Diferenciais
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-6 leading-none">
            Por Que Escolher a Renova?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-5 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-5 leading-relaxed max-w-2xl mx-auto">
            Unimos o rigor técnico tradicional com tecnologias modernas para oferecer a melhor experiência em conservação e impermeabilização.
          </p>
        </div>

        {/* 3x2 Grid of Highly Refined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 gsap-stagger-container">
          {differentiatorsData.map((diff) => {
            const meta = getDifferentiatorMeta(diff.id);
            return (
              <div
                key={diff.id}
                className="gsap-stagger-item group relative bg-white border border-slate-100 p-8 rounded-3xl hover:border-primary/20 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Decorative Side Highlight Line */}
                <div className="absolute top-8 left-0 w-1 h-12 bg-primary rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex flex-col h-full justify-between">
                  <div>
                    {/* Floating Circle with Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50/75 text-primary flex items-center justify-center group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 border border-blue-50">
                        {renderIcon(diff.iconName)}
                      </div>
                      <span className="font-mono text-[9px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded uppercase tracking-wider">
                        {meta.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg group-hover:text-primary transition-colors">
                      {diff.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  {/* Micro label details */}
                  <div className="border-t border-slate-50 pt-4 mt-6 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-slate-400 font-medium">
                      {meta.detail}
                    </span>
                    <span className="text-[10px] text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      Confiável <Check className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
