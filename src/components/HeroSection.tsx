import React from 'react';
import { handleCtaClick, eventConfig } from '../config/eventConfig';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { Calendar, Clock, MapPin, Users, ArrowRight, ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[1200px] sm:min-h-[1300px] md:min-h-0 md:aspect-[1920/800] flex flex-col justify-between overflow-hidden bg-[#15060A]">
      {/* Editorial Photography Background Layer (1920x800 Desktop & 1080x1920 Mobile) */}
      <div className="absolute inset-0 z-0">
        <picture className="w-full h-full block">
          <source media="(max-width: 767px)" srcSet="/bgmobile-breno.jpg" />
          <img 
            src="/bgpc-breno.jpg" 
            alt="Breno Lavor — BEJOTA Experience" 
            className="w-full h-full object-cover object-bottom md:object-cover md:object-top"
          />
        </picture>
      </div>

      {/* Main Content Area - Aligned to top on mobile so it sits cleanly above Breno's head */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 md:pt-12 pb-96 sm:pb-[420px] md:pb-8 w-full my-0 md:my-auto text-center md:text-left">
        <div className="max-w-2xl lg:max-w-3xl space-y-4 sm:space-y-6 md:space-y-7 mx-auto md:mx-0">
          
          {/* Eyebrow Badge */}
          <SectionEyebrow className="mx-auto md:mx-0">
            {eventConfig.eventName}
          </SectionEyebrow>

          {/* Headline Principal */}
          <h1 className="font-heading font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-[1.05] text-center md:text-left">
            EXISTE MUITO <br />
            <span className="text-[#F0D8B5] italic font-normal">ALÉM DA CADEIRA.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-light leading-relaxed max-w-xl md:max-w-2xl mx-auto md:mx-0 text-center md:text-left">
            Um dia inteiro dentro da BEJOTA para entender, na prática, como técnica, experiência, posicionamento e visão de negócio podem aumentar o seu valor e o seu faturamento.
          </p>

          {/* Special Announcement Text */}
          <div className="inline-block py-2 px-4 rounded bg-[#39141D]/90 border-l-2 border-[#F0D8B5] backdrop-blur-md mx-auto md:mx-0 text-center md:text-left">
            <p className="text-[11px] sm:text-xs md:text-sm font-heading font-semibold text-[#F0D8B5] tracking-wider uppercase">
              PELA PRIMEIRA VEZ, A BEJOTA ABRE SUA OPERAÇÃO PARA UMA TURMA DE PROFISSIONAIS.
            </p>
          </div>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-[#F0D8B5]/20 justify-items-center md:justify-items-start text-left">
            <div className="flex items-center gap-2 text-white/90">
              <Calendar className="w-4 h-4 text-[#F0D8B5] shrink-0" />
              <div>
                <span className="block text-[9px] sm:text-[10px] text-white/50 font-heading uppercase tracking-wider">Data</span>
                <span className="text-[11px] sm:text-xs font-semibold font-heading tracking-wide">02 DE AGOSTO DE 2026</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4 text-[#F0D8B5] shrink-0" />
              <div>
                <span className="block text-[9px] sm:text-[10px] text-white/50 font-heading uppercase tracking-wider">Horário</span>
                <span className="text-[11px] sm:text-xs font-semibold font-heading tracking-wide">08H30 ÀS 18H40</span>
              </div>
            </div>

            <a 
              href={eventConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white/90 hover:text-[#F0D8B5] transition-colors group cursor-pointer"
            >
              <MapPin className="w-4 h-4 text-[#F0D8B5] shrink-0 group-hover:scale-110 transition-transform" />
              <div>
                <span className="block text-[9px] sm:text-[10px] text-white/50 font-heading uppercase tracking-wider">Local</span>
                <span className="text-[11px] sm:text-xs font-semibold font-heading tracking-wide underline underline-offset-2">ITAPIPOCA / CE</span>
              </div>
            </a>

            <div className="flex items-center gap-2 text-white/90">
              <Users className="w-4 h-4 text-[#F0D8B5] shrink-0" />
              <div>
                <span className="block text-[9px] sm:text-[10px] text-white/50 font-heading uppercase tracking-wider">Capacidade</span>
                <span className="text-[11px] sm:text-xs font-semibold font-heading tracking-wide text-[#F0D8B5]">15 VAGAS MÁX.</span>
              </div>
            </div>
          </div>

          {/* CTAs & Microcopy */}
          <div className="pt-1 space-y-3">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
              <button
                onClick={() => handleCtaClick('hero')}
                className="w-full sm:w-auto bg-[#F0D8B5] text-[#39141D] hover:bg-white font-heading font-extrabold text-xs sm:text-base uppercase tracking-widest px-7 py-3.5 sm:py-4 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#F0D8B5]/10 flex items-center justify-center gap-2.5 group"
              >
                <span>GARANTIR MINHA VAGA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#experiencia"
                className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white font-heading font-semibold text-xs sm:text-sm uppercase tracking-widest px-6 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-[#F0D8B5]/50 transition-all duration-200 flex items-center justify-center gap-2 text-center"
              >
                <span>CONHECER A EXPERIÊNCIA</span>
                <ChevronDown className="w-4 h-4 text-[#F0D8B5]" />
              </a>
            </div>

            <p className="text-[11px] sm:text-xs text-white/60 font-light italic text-center md:text-left">
              Imersão presencial dentro da operação BEJOTA. Vagas extremamente limitadas.
            </p>
          </div>

        </div>
      </div>

      {/* Sub-Hero Horizontal Bar (Marquee) */}
      <div className="relative z-10 bg-[#F0D8B5] text-[#39141D] py-3 border-t border-b border-[#39141D]/20 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-4 font-heading font-bold text-xs sm:text-sm tracking-[0.25em] uppercase shrink-0">
              <span>TÉCNICA</span>
              <span className="opacity-40">•</span>
              <span>EXPERIÊNCIA</span>
              <span className="opacity-40">•</span>
              <span>POSICIONAMENTO</span>
              <span className="opacity-40">•</span>
              <span>FATURAMENTO</span>
              <span className="opacity-40">•</span>
              <span>NEGÓCIO</span>
              <span className="opacity-40">•</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
