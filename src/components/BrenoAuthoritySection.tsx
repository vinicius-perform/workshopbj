import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';

export const BrenoAuthoritySection: React.FC = () => {
  return (
    <section id="breno-lavor" className="py-20 sm:py-28 bg-[#39141D] text-white relative overflow-hidden">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#F0D8B5]/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Photography Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-[#F0D8B5]/30 shadow-2xl bg-[#240C12]">
              <img 
                src="/BRENO.png" 
                alt="Breno Lavor — Barbearia BEJOTA" 
                className="w-full h-[480px] sm:h-[580px] object-cover object-top filter brightness-95 contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#240C12] via-transparent to-transparent opacity-70" />
              
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl bg-[#15060A]/90 backdrop-blur-md border border-[#F0D8B5]/20">
                <span className="font-heading font-extrabold text-sm text-[#F0D8B5] tracking-widest uppercase block mb-1">
                  BRENO LAVOR
                </span>
                <span className="text-xs text-white/70 font-light block">
                  Fundador da Barbearia BEJOTA & Idealizador da Imersão
                </span>
              </div>
            </div>

            {/* Subtle Brand Motif Background Accent */}
            <div className="absolute -top-6 -left-6 opacity-20 pointer-events-none hidden sm:block">
              <BejotaSymbol size={180} color="#F0D8B5" />
            </div>
          </div>

          {/* Bio & Authority Content */}
          <div className="lg:col-span-7 space-y-6">
            <SectionEyebrow dark>QUEM CONDUZ A EXPERIÊNCIA</SectionEyebrow>

            <div className="space-y-2">
              <h2 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-none">
                BRENO LAVOR
              </h2>
              <p className="font-heading font-semibold text-sm sm:text-base text-[#F0D8B5] tracking-widest uppercase">
                BARBEIRO, EMPREENDEDOR E O NOME À FRENTE DA VISÃO BEJOTA.
              </p>
            </div>

            <div className="space-y-4 text-white/85 font-light text-base leading-relaxed border-t border-[#F0D8B5]/20 pt-6">
              <p>
                Breno Lavor conduzirá os participantes por aprendizados, decisões e experiências construídas dentro do próprio mercado.
              </p>

              <p>
                Em vez de apresentar uma teoria distante da realidade, ele abrirá o raciocínio por trás da técnica, da experiência, do posicionamento e da evolução da BEJOTA.
              </p>

              <p>
                O objetivo não é entregar uma fórmula pronta. É ajudar cada participante a enxergar com mais clareza onde está, quais decisões estão limitando seu crescimento e o que precisa construir nos próximos 90 dias.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
