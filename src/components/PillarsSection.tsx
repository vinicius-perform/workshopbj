import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { ShieldCheck, HelpCircle } from 'lucide-react';

export const PillarsSection: React.FC = () => {
  const pillars = [
    {
      number: "01",
      name: "TÉCNICA",
      highlight: "A base da excelência",
      description: "Diagnóstico preciso, raciocínio profissional, tomada de decisão técnica e execução de altíssimo nível.",
      theme: "bg-[#240C12] text-white border-[#F0D8B5]/20"
    },
    {
      number: "02",
      name: "EXPERIÊNCIA",
      highlight: "O que gera valor percebido",
      description: "Percepção de valor intencional, jornada completa do cliente, ambiente, fidelização e recorrência natural.",
      theme: "bg-[#F0D8B5] text-[#39141D] border-[#39141D]/20"
    },
    {
      number: "03",
      name: "POSICIONAMENTO",
      highlight: "Autoridade e diferenciação",
      description: "Construção de autoridade, comunicação clara de diferenciais e geração de demanda qualificada.",
      theme: "bg-[#240C12] text-white border-[#F0D8B5]/20"
    },
    {
      number: "04",
      name: "FATURAMENTO",
      highlight: "Inteligência financeira de cadeira",
      description: "Gestão de ticket médio, frequência de retorno, taxa de ocupação, retenção e monetização eficiente do tempo.",
      theme: "bg-[#39141D] text-[#F0D8B5] border-[#F0D8B5]/30"
    },
    {
      number: "05",
      name: "NEGÓCIO",
      highlight: "Visão além do trabalho braçal",
      description: "Visão de carreira no longo prazo, processos operacionais claros, gestão de dados e preparação para os próximos níveis.",
      theme: "bg-white text-[#39141D] border-white"
    }
  ];

  return (
    <section id="metodo" className="py-20 sm:py-28 bg-[#39141D] text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F0D8B5]/10 rounded-full filter blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <SectionEyebrow dark className="mx-auto">O QUE VOCÊ PRECISA ENXERGAR</SectionEyebrow>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            CINCO PILARES DEFINEM O QUE <span className="text-[#F0D8B5]">EXISTE ALÉM DA CADEIRA.</span>
          </h2>
        </div>

        {/* 5 Horizontal Pillars List */}
        <div className="space-y-4 mb-16">
          {pillars.map((pillar) => (
            <div 
              key={pillar.number}
              className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6 ${pillar.theme}`}
            >
              <div className="flex items-center gap-6">
                <span className="font-heading font-extrabold text-4xl sm:text-5xl opacity-40 shrink-0">
                  {pillar.number}
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="font-heading font-extrabold text-xl sm:text-2xl uppercase tracking-wide">
                      {pillar.name}
                    </h3>
                    <BejotaSymbol size={16} />
                  </div>
                  <span className="text-xs font-heading font-semibold uppercase tracking-wider opacity-70 block mt-1">
                    {pillar.highlight}
                  </span>
                </div>
              </div>

              <div className="md:max-w-xl">
                <p className="text-sm sm:text-base font-light leading-relaxed opacity-90">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Rules Callouts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
          <div className="bg-[#240C12] border border-[#F0D8B5]/20 p-5 rounded-xl flex items-center gap-3 text-white">
            <ShieldCheck className="w-5 h-5 text-[#F0D8B5] shrink-0" />
            <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide">
              SEM DEPENDER SOMENTE DE MAIS HORAS.
            </span>
          </div>

          <div className="bg-[#240C12] border border-[#F0D8B5]/20 p-5 rounded-xl flex items-center gap-3 text-white">
            <ShieldCheck className="w-5 h-5 text-[#F0D8B5] shrink-0" />
            <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide">
              SEM DIMINUIR SEU VALOR PARA COMPETIR.
            </span>
          </div>

          <div className="bg-[#240C12] border border-[#F0D8B5]/20 p-5 rounded-xl flex items-center gap-3 text-white">
            <ShieldCheck className="w-5 h-5 text-[#F0D8B5] shrink-0" />
            <span className="font-heading font-bold text-xs sm:text-sm uppercase tracking-wide">
              SEM DEPENDER DE VOCÊ PARA TUDO.
            </span>
          </div>
        </div>

        {/* Reflection Question Box */}
        <div className="bg-[#15060A] border-2 border-[#F0D8B5] p-8 sm:p-12 rounded-2xl text-center relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="inline-flex p-3 rounded-full bg-[#F0D8B5]/10 text-[#F0D8B5] mb-2">
              <HelpCircle className="w-8 h-8" />
            </div>

            <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-[#F0D8B5] uppercase tracking-wide leading-snug">
              ATÉ ONDE A SUA TÉCNICA PODE LEVAR VOCÊ SEM POSICIONAMENTO, EXPERIÊNCIA E VISÃO DE NEGÓCIO?
            </h3>

            <p className="text-sm text-white/70 font-light max-w-xl mx-auto">
              No BEJOTA Experience, você vai conectar essas pontas para transformar o seu conhecimento em um negócio sólido e altamente valorizado.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
