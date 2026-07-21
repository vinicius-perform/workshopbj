import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { CheckCircle2, XCircle } from 'lucide-react';

export const AudienceSection: React.FC = () => {
  const notForItems = [
    {
      title: "Quem nunca cortou cabelo",
      desc: "Não é um curso básico para iniciantes absolutos do zero."
    },
    {
      title: "Quem busca fórmulas mágicas",
      desc: "Não prometemos enriquecimento rápido sem trabalho real."
    },
    {
      title: "Quem não quer aplicar processos",
      desc: "É uma imersão prática para quem está disposto a mudar a rotina."
    },
    {
      title: "Quem busca apenas técnica isolada",
      desc: "O evento conecta técnica a posicionamento, experiência e negócio."
    }
  ];

  const forItems = [
    {
      title: "Barbeiro em Crescimento",
      desc: "Precisa consolidar a agenda, construir posicionamento e demanda."
    },
    {
      title: "Barbeiro com Agenda Cheia",
      desc: "Quer monetizar melhor o tempo, aumentar ticket médio e recorrência."
    },
    {
      title: "Futuro Dono de Barbearia",
      desc: "Deseja transformar habilidade técnica em uma operação estruturada."
    },
    {
      title: "Dono Operador",
      desc: "Está preso à cadeira e precisa organizar processos, gestão e equipe."
    },
    {
      title: "Dono em Crescimento",
      desc: "Precisa melhorar aquisição, retenção, gestão de números e previsibilidade."
    }
  ];

  return (
    <section id="para-quem-e" className="py-20 sm:py-28 bg-[#15060A] text-white relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#39141D]/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <SectionEyebrow className="mx-auto">ALINHAMENTO DE PERFIL</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            O WORKSHOP FOI <span className="text-[#F0D8B5]">FEITO PRA QUEM?</span>
          </h2>
        </div>

        {/* 2-Column Side-by-Side Comparison Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Para quem NÃO é? (Dark Wine Card) */}
          <div className="bg-[#240C12] border-2 border-red-900/40 p-7 sm:p-10 rounded-3xl space-y-8 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <XCircle size={140} className="text-red-500" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 border-b border-red-900/40 pb-5">
                <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.25em] text-red-400 block">
                    ALINHAMENTO
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white uppercase">
                    PARA QUEM NÃO É?
                  </h3>
                </div>
              </div>

              <div className="space-y-4">
                {notForItems.map((item, idx) => (
                  <div key={idx} className="bg-[#15060A]/80 border border-red-900/30 p-4 rounded-2xl flex items-start gap-3.5">
                    <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-white uppercase">{item.title}</h4>
                      <p className="text-xs text-white/60 font-light leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-950/40 border border-red-500/20 p-4 rounded-xl text-center relative z-10 mt-4">
              <span className="text-xs font-heading font-semibold text-red-300 uppercase tracking-wider block">
                EXPERIÊNCIA EXCLUSIVA PARA QUEM JÁ ATUA NO MERCADO
              </span>
            </div>
          </div>

          {/* Right Column: Para quem É? (Light Beige Featured Card) */}
          <div className="bg-[#F0D8B5] text-[#39141D] rounded-3xl p-7 sm:p-10 space-y-8 shadow-2xl flex flex-col justify-between border-2 border-[#39141D]/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
              <BejotaSymbol size={140} color="#39141D" />
            </div>

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#39141D]/15 pb-5">
                <div className="w-10 h-10 rounded-xl bg-[#39141D] flex items-center justify-center text-[#F0D8B5] shrink-0 shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.25em] text-[#39141D]/70 block">
                    PÚBLICO ALVO
                  </span>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#39141D] uppercase">
                    PARA QUEM É?
                  </h3>
                </div>
              </div>

              <div className="space-y-3.5">
                {forItems.map((item, idx) => (
                  <div key={idx} className="bg-white/80 backdrop-blur-sm border border-[#39141D]/10 p-4 rounded-2xl flex items-start gap-3.5 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-[#39141D] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[#39141D] uppercase">{item.title}</h4>
                      <p className="text-xs text-[#39141D]/80 font-normal leading-relaxed mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#39141D] text-[#F0D8B5] p-4 rounded-xl text-center relative z-10 mt-4">
              <span className="text-xs font-heading font-bold uppercase tracking-wider block">
                FOCADO EM AUMENTAR O SEU VALOR PERCEBIDO E SEU FATURAMENTO
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
