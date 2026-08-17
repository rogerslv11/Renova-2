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

    </section>
  );
}
