import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { AlertCircle } from 'lucide-react';

export const PainSection: React.FC = () => {
  const painPoints = [
    {
      number: "01",
      title: "Sua agenda oscila mesmo com uma boa entrega.",
      description: "Você faz um excelente corte, mas o retorno e a frequência do cliente ainda acontecem no acaso, sem previsibilidade."
    },
    {
      number: "02",
      title: "Você trabalha cada vez mais, mas não sente evolução proporcional.",
      description: "Os dias são exaustivos na cadeira, mas no final do mês o faturamento estagna na mesma barreira."
    },
    {
      number: "03",
      title: "Você tem dificuldade para comunicar valor e se diferenciar.",
      description: "No mercado local, os clientes continuam comparando o seu trabalho com a barbearia comum pelo menor preço."
    },
    {
      number: "04",
      title: "O seu faturamento depende completamente da sua presença na cadeira.",
      description: "Se você se ausenta, adoece ou precisa tirar folga, o faturamento da sua operação cai imediatamente para zero."
    },
    {
      number: "05",
      title: "Você não enxerga com clareza o próximo nível da carreira ou da barbearia.",
      description: "Falta um direcionamento claro dos passos estratégicos a seguir nos próximos meses para mudar esse cenário."
    }
  ];

  return (
    <section id="dor" className="py-20 sm:py-28 bg-[#15060A] text-white relative overflow-hidden border-b border-[#39141D]">
      {/* Background Subtle Geometric Lighting */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39141D]/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Centered Section Header */}
        <div className="max-w-4xl mx-auto space-y-4 mb-14 text-center">
          <SectionEyebrow className="mx-auto">DIAGNÓSTICO PROFISSIONAL</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            VOCÊ PODE SER EXCELENTE NA CADEIRA E AINDA ESTAR <br className="hidden sm:inline" />
            <span className="text-[#F0D8B5]">LONGE DA CARREIRA QUE DESEJA.</span>
          </h2>

          <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl mx-auto">
            Você domina a técnica, atende bem e trabalha muito. Mas sente que o seu crescimento ainda depende totalmente das suas horas disponíveis?
          </p>
        </div>

        {/* Centered Stacked / Grid Cards Container */}
        <div className="max-w-4xl mx-auto space-y-4 mb-12 text-left">
          {painPoints.map((item) => (
            <div 
              key={item.number}
              className="bg-[#240C12]/80 backdrop-blur-md border border-[#F0D8B5]/20 p-5 sm:p-7 rounded-2xl transition-all duration-300 hover:border-[#F0D8B5]/50 hover:bg-[#39141D]/60 shadow-xl flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#39141D] border border-[#F0D8B5]/30 flex items-center justify-center shrink-0 text-[#F0D8B5] font-heading font-bold text-base tracking-widest shadow-inner">
                {item.number}
              </div>

              <div className="flex-1 space-y-1">
                <h3 className="font-heading font-bold text-base sm:text-lg text-white group-hover:text-[#F0D8B5] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <BejotaSymbol size={20} color="#F0D8B5" className="opacity-30 group-hover:opacity-100 transition-opacity hidden sm:block shrink-0" />
            </div>
          ))}
        </div>

        {/* Centered Conclusion Box */}
        <div className="max-w-4xl mx-auto bg-[#39141D] border-2 border-[#F0D8B5]/50 p-6 sm:p-10 rounded-2xl relative overflow-hidden shadow-2xl text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <BejotaSymbol size={180} color="#F0D8B5" />
          </div>

          <div className="relative z-10 space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#F0D8B5]/15 border border-[#F0D8B5]/40 flex items-center justify-center mx-auto text-[#F0D8B5] shadow-lg">
              <AlertCircle className="w-6 h-6" />
            </div>

            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#F0D8B5] block">
              A VERDADE SOBRE O PRÓXIMO NÍVEL
            </span>

            <p className="font-heading font-extrabold text-base sm:text-xl text-white uppercase leading-snug tracking-wide max-w-3xl mx-auto">
              SE VOCÊ SE IDENTIFICOU COM ALGUM DESSES PONTOS, O SEU PRÓXIMO NÍVEL NÃO DEPENDE APENAS DE APRENDER MAIS UMA TÉCNICA.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
