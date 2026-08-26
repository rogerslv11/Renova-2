import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Award, Star, Briefcase, Quote, Sparkles, Target } from 'lucide-react';
import { gsap } from 'gsap';
import { teamMembers } from '../mockData';
import { TeamMember } from '../types';

interface TeamMemberCardProps {
  member: TeamMember;
  idx: number;
}

function TeamMemberCard({ member, idx }: TeamMemberCardProps) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setCoords({ x, y });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const handleImageMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageRef.current || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const magneticX = x * 0.12;
    const magneticY = y * 0.12;

    gsap.to(imageRef.current, {
      x: magneticX,
      y: magneticY,
      duration: 0.45,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  const handleImageMouseLeave = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      x: 0,
      y: 0,
      scale: 1,
      duration: 0.65,
      ease: 'power3.out',
      overwrite: 'auto'
    });
  };

  const handleImageMouseEnter = () => {
    if (!imageRef.current) return;
    gsap.to(imageRef.current, {
      scale: 1.12,
      duration: 0.55,
      ease: 'power2.out',
      overwrite: 'auto'
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(${isHovered ? 1.03 : 1}, ${isHovered ? 1.03 : 1}, 1)`,
        transition: isHovered ? 'transform 0.08s ease-out, shadow 0.4s ease' : 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), shadow 0.6s ease',
        transformStyle: 'preserve-3d',
      }}
      className="gsap-stagger-item group relative bg-slate-50/60 rounded-3.5xl p-6 border border-slate-100/80 hover:bg-white hover:border-primary/25 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 cursor-default flex flex-col justify-between overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-10"
        style={{
          opacity: isHovered ? 0.6 : 0,
          background: `radial-gradient(circle 180px at ${coords.x}px ${coords.y}px, rgba(14, 165, 233, 0.16), transparent 85%)`,
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-500 z-10"
        style={{
          opacity: isHovered ? 0.4 : 0,
          background: `radial-gradient(circle 280px at ${coords.x}px ${coords.y}px, rgba(255, 255, 255, 0.3), transparent 100%)`,
        }}
      />

      <div style={{ transform: 'translateZ(30px)' }} className="transition-transform duration-300 relative z-20 flex flex-col h-full">
        <div 
          ref={containerRef}
          onMouseMove={handleImageMouseMove}
          onMouseLeave={handleImageMouseLeave}
          onMouseEnter={handleImageMouseEnter}
          className="relative w-full h-80 sm:h-96 rounded-2.5xl overflow-hidden mb-6 border border-slate-100 shadow-inner bg-slate-100 cursor-pointer"
        >
          <img 
            ref={imageRef}
            src={member.image} 
            alt={member.name} 
            className="w-full h-full object-cover object-top"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/15 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300 pointer-events-none" />
          
          {member.experience && (
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md text-primary font-semibold text-xs py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-md border border-white/50 pointer-events-none">
              <Briefcase className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>{member.experience}</span>
            </div>
          )}

          <div className="absolute bottom-5 left-5 right-5 text-white pointer-events-none">
            <span className="text-xs font-bold tracking-widest uppercase text-cyan-300 block mb-1">
              {member.role}
            </span>
            <h4 className="font-display font-extrabold text-xl leading-tight">
              {member.name}
            </h4>
          </div>
        </div>

        <div className="flex-grow flex flex-col justify-between space-y-4">
          {member.bio && (
            <p className="text-slate-600 text-sm leading-relaxed italic group-hover:text-slate-700 transition-colors">
              "{member.bio}"
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-12 pt-20 border-t border-slate-100 relative">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 text-[120px] font-display font-black text-slate-50 select-none pointer-events-none whitespace-nowrap opacity-50">
            LIDERANÇA
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">
            <div className="lg:col-span-5">
              <div className="mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-primary border border-blue-100 mb-4">
                  <Star className="w-3 h-3 fill-primary" />
                  <span className="text-[10px] font-bold tracking-widest uppercase font-mono">Expertise Técnica de Elite</span>
                </div>
                <h3 className="font-display font-black text-4xl sm:text-5xl text-slate-900 tracking-tight leading-none">
                  Victor <br />
                  Joaquim
                </h3>
                <p className="text-slate-500 font-medium mt-4 text-lg">Especialista</p>
              </div>
              
              <div className="gsap-stagger-container relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-primary/5 to-accent/5 rounded-[4rem] -z-10 blur-2xl" />
                <TeamMemberCard member={teamMembers[0]} idx={0} />
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-4">
                {[
                  { label: 'Impermeabilização', icon: <ShieldAlert className="w-4 h-4" /> },
                  { label: 'Reformas Premium', icon: <Sparkles className="w-4 h-4" /> },
                  { label: 'Vazamentos', icon: <Target className="w-4 h-4" /> },
                  { label: 'Reservatórios', icon: <Briefcase className="w-4 h-4" /> },
                ].map((item, i) => (
                  <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="relative">
                <Quote className="absolute -top-10 -left-10 w-20 h-20 text-slate-100 -z-10" />
                
                <div className="space-y-8 text-slate-600 text-lg sm:text-xl leading-relaxed text-justify sm:text-left">
                  <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:text-primary first-letter:mr-3 first-letter:float-left">
                    Sou natural da cidade de Rivera, no Uruguai, e vivo no Brasil desde 1986. Há mais de 20 anos resido em Gravataí (RS), onde construí minha família, minha carreira e minha história. Hoje sou brasileiro naturalizado e tenho orgulho de contribuir com o desenvolvimento da nossa região por meio do meu trabalho.
                  </p>
                  
                  <p>
                    Minha trajetória profissional na construção civil começou muito antes de chegar ao Rio Grande do Sul. Trabalhei como ajudante de obras e participei de importantes construções em Punta del Este, no Uruguai, adquirindo experiência prática em obras de grande porte.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                    <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                      <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/20">
                        <Award className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-900 mb-2">Legado em Fibra</h5>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Aprendi as técnicas de fibra de vidro com o Sr. Raul, referência na região, unindo esse saber à minha base sólida técnica na construção civil.
                      </p>
                    </div>
                    <div className="p-6 rounded-2xl bg-cyan-50/50 border border-cyan-100/50">
                      <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center text-white mb-4 shadow-lg shadow-accent/20">
                        <Briefcase className="w-5 h-5" />
                      </div>
                      <h5 className="font-bold text-slate-900 mb-2">Experiência Corporativa</h5>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        Atuei por sete anos no acompanhamento de obras para a Katerra, participando de grandes empreendimentos em parceria com o Grupo Zaffari.
                      </p>
                    </div>
                  </div>

                  <p>
                    Há mais de cinco anos iniciei a <strong>Renova</strong>, um nome que considero um propósito. Acredito que recebi o dom de renovar estruturas e devolver vida a ambientes que precisam de recuperação, entregando sempre soluções duráveis e seguras.
                  </p>

                  <p>
                    Cristão há 26 anos e pastor há 10, participo de trabalhos missionários e contribuo tecnicamente na construção e manutenção de templos. Para mim, servir ao Reino vai além da pregação: é colocar as mãos à obra para edificar o que glorifica ao Senhor.
                  </p>

                  <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:bg-primary/20 transition-all duration-700" />
                    <p className="relative z-10 italic text-lg sm:text-xl font-medium leading-relaxed">
                      "Hoje, aos 53 anos, minha história é construída sobre três pilares: fé em Deus, compromisso com a família e excelência no trabalho. Renovar estruturas é importante, mas renovar vidas é o meu maior propósito."
                    </p>
                    <div className="mt-6 flex items-center gap-3 relative z-10">
                      <div className="w-8 h-px bg-primary" />
                      <span className="text-sm font-mono tracking-widest uppercase text-slate-400">Victor Joaquim</span>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://api.whatsapp.com/send/?phone=555192756700&text&type=phone_number&app_absent=0"
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-2xl transition-all shadow-lg shadow-primary/20 hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Falar diretamente com o Victor</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
