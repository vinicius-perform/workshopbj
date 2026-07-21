import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';

export const FounderEditionSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#39141D] text-white relative overflow-hidden border-t border-[#F0D8B5]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <SectionEyebrow dark className="mx-auto">OPORTUNIDADE ÚNICA</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            VOCÊ NÃO ESTÁ ENTRANDO EM MAIS UMA TURMA. <span className="text-[#F0D8B5]">ESTÁ ENTRANDO NA PRIMEIRA.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-2xl mx-auto">
            A Edição Fundadora foi desenhada para um grupo reduzido de profissionais. A proximidade permitirá aprofundar discussões, analisar desafios reais e construir uma experiência mais participativa.
          </p>
        </div>

        {/* 3 Giant Stat Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          
          <div className="bg-[#240C12] border-2 border-[#F0D8B5]/30 p-8 rounded-2xl text-center space-y-2 shadow-2xl">
            <span className="font-heading font-extrabold text-6xl sm:text-7xl text-[#F0D8B5] block">01</span>
            <span className="font-heading font-bold text-base text-white uppercase tracking-widest block">
              EDIÇÃO FUNDADORA
            </span>
            <p className="text-xs text-white/60 font-light">Abertura inédita da operação BEJOTA.</p>
          </div>

          <div className="bg-[#240C12] border-2 border-[#F0D8B5]/30 p-8 rounded-2xl text-center space-y-2 shadow-2xl">
            <span className="font-heading font-extrabold text-6xl sm:text-7xl text-[#F0D8B5] block">01</span>
            <span className="font-heading font-bold text-base text-white uppercase tracking-widest block">
              DIA DE IMERSÃO
            </span>
            <p className="text-xs text-white/60 font-light">Programação contínua de 10 horas práticas.</p>
          </div>

          <div className="bg-[#240C12] border-2 border-[#F0D8B5]/30 p-8 rounded-2xl text-center space-y-2 shadow-2xl">
            <span className="font-heading font-extrabold text-6xl sm:text-7xl text-[#F0D8B5] block">15</span>
            <span className="font-heading font-bold text-base text-white uppercase tracking-widest block">
              PARTICIPANTES NO MÁXIMO
            </span>
            <p className="text-xs text-[#F0D8B5] font-light">Limite Rígido para proximidade total.</p>
          </div>

        </div>

        {/* Complementary Text Box */}
        <div className="bg-[#15060A]/80 border border-[#F0D8B5]/20 p-6 sm:p-8 rounded-xl text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base text-white/90 font-light leading-relaxed">
            "O tamanho reduzido não é uma limitação. É o que torna possível observar, perguntar, participar e receber direcionamentos com mais proximidade."
          </p>
        </div>

      </div>
    </section>
  );
};
