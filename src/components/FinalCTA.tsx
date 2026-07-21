import React from 'react';
import { handleCtaClick } from '../config/eventConfig';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { ArrowRight } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#39141D] text-white relative overflow-hidden">
      {/* Subtle Giant Watermark Symbol in Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none">
        <BejotaSymbol size={500} color="#F0D8B5" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold tracking-[0.25em] uppercase font-heading bg-[#240C12] text-[#F0D8B5] border border-[#F0D8B5]/30">
          <BejotaSymbol size={14} color="#F0D8B5" />
          <span>DECISÃO DE CARREIRA</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-tight">
          A TÉCNICA COLOCOU VOCÊ NA CADEIRA. <br />
          <span className="text-[#F0D8B5]">O QUE VOCÊ VAI CONSTRUIR ALÉM DELA?</span>
        </h2>

        <p className="text-base sm:text-lg text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
          No dia 02 de agosto, a BEJOTA abrirá sua operação para um grupo de apenas 15 profissionais. Entre para a Edição Fundadora e construa uma visão mais ampla sobre sua carreira, seu valor e seu negócio.
        </p>

        <div className="pt-4 space-y-4">
          <button
            onClick={() => handleCtaClick('final_cta')}
            className="inline-flex items-center justify-center gap-3 bg-[#F0D8B5] text-[#39141D] hover:bg-white font-heading font-extrabold text-base sm:text-lg uppercase tracking-widest px-10 py-5 rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-2xl group"
          >
            <span>GARANTIR MINHA VAGA</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <p className="text-xs font-heading font-semibold text-[#F0D8B5] tracking-widest uppercase block">
            DOMINGO • 02 DE AGOSTO • ITAPIPOCA / CE
          </p>
        </div>

      </div>
    </section>
  );
};
