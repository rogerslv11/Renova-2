import { motion } from 'motion/react';
import { ClipboardSignature, Search, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function HowWeWork() {
  const steps = [
    {
      number: '01',
      title: 'Contato & Pré-Diagnóstico',
      focus: 'Análise Rápida',
      duration: 'Retorno em minutos',
      description: 'Análise ágil de dimensões e análise inicial de imagens/vídeos via WhatsApp ou formulário integrado.',
      icon: <ClipboardSignature className="w-5 h-5" />,
      color: 'from-blue-500 to-indigo-600 shadow-blue-500/10 text-blue-500 bg-blue-50/50 border-blue-100'
    },
    {
      number: '02',
      title: 'Visita Técnica Gratuita',
      focus: 'Diagnóstico Especializado',
      duration: 'Agendamento Flexível',
      description: 'Nossa equipe qualificada inspeciona patologias do concreto, fissuras estruturais e faz testes de impermeabilização hidráulica.',
      icon: <Search className="w-5 h-5" />,
      color: 'from-cyan-500 to-blue-600 shadow-cyan-500/10 text-cyan-600 bg-cyan-50/50 border-cyan-100'
    },
    {
      number: '03',
      title: 'Execução de Elite',
      focus: 'Alto Padrão Técnico',
      duration: 'Cronograma Estrito',
      description: 'Intervenções limpas, aplicação de resinas puras, revestimento reforçado com fibra de vidro ou pastilhas nobres.',
      icon: <Sparkles className="w-5 h-5" />,
      color: 'from-blue-600 to-primary shadow-blue-600/10 text-primary bg-primary/5 border-primary/10'
    },
    {
      number: '04',
      title: 'Impermeabilização & Garantia',
      focus: 'Segurança Contratual',
      duration: 'Garantia de Longo Prazo',
      description: 'Enchimento assistido, 72h de teste estático monitorado, laudo técnico com emissão de ART e termo contratual de garantia.',
      icon: <CheckCircle2 className="w-5 h-5" />,
      color: 'from-emerald-500 to-teal-600 shadow-emerald-500/10 text-emerald-600 bg-emerald-50/50 border-emerald-100'
    }
  ];

  return (
    <section id="como-trabalhamos" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Blueprint grid background */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none" 
        style={{ 
          backgroundImage: `
            radial-gradient(#0077FF 1.5px, transparent 1.5px),
            linear-gradient(to right, rgba(0,119,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,119,255,0.15) 1px, transparent 1px)
          `, 
          backgroundSize: '32px 32px, 160px 160px, 160px 160px' 
        }} 
      />

      {/* Decorative Blur Background Bubbles */}
      <div className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-blue-100/20 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-[450px] h-[450px] bg-cyan-100/25 rounded-full filter blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 gsap-reveal">
          <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase font-mono px-3.5 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
            Fluxo de Trabalho
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4.5xl text-slate-900 tracking-tight mt-6 leading-none">
            Processo de Engenharia <br /> Transparente e Ágil
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-5 mx-auto" />
          <p className="text-slate-500 text-sm sm:text-base mt-5 leading-relaxed">
            Desde o primeiro diagnóstico via WhatsApp até a entrega técnica com laudo e ART, cada etapa é executada com rigor para garantir sua tranquilidade.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 gsap-stagger-container">
          {steps.map((step, index) => (
            <div key={index} className="gsap-stagger-item group relative h-full">
              {/* Connector Line (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-slate-100 -z-10">
                  <div className="h-full bg-gradient-to-r from-primary/30 to-transparent w-0 group-hover:w-full transition-all duration-1000 ease-in-out" />
                </div>
              )}

              <div className="bg-white border border-slate-100 p-8 rounded-3.5xl hover:border-primary/20 hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-300 h-full flex flex-col">
                {/* Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-display font-black text-4xl text-slate-100 group-hover:text-primary/10 transition-colors">
                    {step.number}
                  </span>
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border transition-all duration-300 shadow-lg ${step.color} group-hover:scale-110 group-hover:rotate-3`}>
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display font-bold text-slate-900 text-base sm:text-lg group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-3 mb-4">
                  <span className="text-[9px] font-mono font-bold text-primary bg-primary/5 border border-primary/10 px-2 py-0.5 rounded uppercase">
                    {step.focus}
                  </span>
                  <span className="text-[9px] font-mono font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2 py-0.5 rounded uppercase">
                    {step.duration}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed flex-grow">
                  {step.description}
                </p>

                <div className="mt-6 pt-4 border-t border-slate-50">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-400 group-hover:text-primary transition-colors">
                    <span>Avançar para etapa {index + 2 < 10 ? `0${index + 2}` : index + 2}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Callout */}
        <div className="mt-20 text-center gsap-reveal">
          <p className="text-slate-500 text-sm font-medium mb-6">Pronto para dar o primeiro passo na renovação da sua piscina?</p>
          <a
            href="https://api.whatsapp.com/send/?phone=555192756700&text&type=phone_number&app_absent=0"
            target="_blank"
            referrerPolicy="no-referrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-900 hover:bg-primary text-white font-bold rounded-2.5xl transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-1 active:translate-y-0 group"
          >
            <span>Iniciar Pré-Diagnóstico via WhatsApp</span>
            <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
