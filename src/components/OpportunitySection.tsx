import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { CheckCircle2 } from 'lucide-react';

export const OpportunitySection: React.FC = () => {
  const callouts = [
    "Aprender a aumentar valor percebido.",
    "Construir uma experiência que gera recorrência.",
    "Fortalecer autoridade e posicionamento.",
    "Entender ticket, frequência e ocupação.",
    "Enxergar processos e próximos níveis."
  ];

  return (
    <section id="experiencia" className="py-20 sm:py-28 bg-[#1B090F] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Image & Brand Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-[#F0D8B5]/25 shadow-2xl bg-[#39141D]">
              <img 
                src="/atendendo.jpg" 
                alt="Breno Lavor em atendimento na BEJOTA" 
                className="w-full h-[520px] sm:h-[620px] lg:h-[660px] object-cover object-top filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15060A] via-transparent to-transparent opacity-80" />
              
              {/* Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#39141D]/90 backdrop-blur-md border border-[#F0D8B5]/30">
                <div className="flex items-center gap-3">
                  <BejotaSymbol size={24} color="#F0D8B5" />
                  <div>
                    <span className="block text-[11px] font-heading font-extrabold tracking-widest text-[#F0D8B5] uppercase">VISÃO BEJOTA</span>
                    <span className="text-xs text-white/80 font-light">Técnica alinhada a posicionamento estratégico.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Backdrops & Accents */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#F0D8B5]/20 rounded-2xl pointer-events-none hidden sm:block" />
          </div>

          {/* Column 2: Content & Thesis */}
          <div className="lg:col-span-7 space-y-6">
            <SectionEyebrow>O QUE EXISTE ALÉM DA TÉCNICA?</SectionEyebrow>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
              O PRÓXIMO NÍVEL COMEÇA QUANDO VOCÊ ENXERGA A PROFISSÃO COMO <span className="text-[#F0D8B5]">CARREIRA E NEGÓCIO.</span>
            </h2>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed">
              A técnica coloca você na cadeira. Mas experiência, posicionamento, ticket, retenção, processos e visão de negócio determinam o valor que o mercado percebe e até onde você consegue crescer.
            </p>

            {/* 5 Small Callouts */}
            <div className="space-y-3.5 pt-2">
              {callouts.map((text, idx) => (
                <div key={idx} className="flex items-center gap-3.5 p-3 rounded-lg bg-[#240C12]/50 border border-[#F0D8B5]/10 hover:border-[#F0D8B5]/30 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-[#F0D8B5] shrink-0" />
                  <span className="text-sm font-heading font-medium text-white/90">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
