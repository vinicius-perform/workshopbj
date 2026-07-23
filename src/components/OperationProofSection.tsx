import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { Check } from 'lucide-react';

export const OperationProofSection: React.FC = () => {
  const proofItems = [
    "Estrutura e decisões de ambiente",
    "Recepção e fluxo do cliente",
    "Padrões de experiência premium",
    "Processos visíveis de atendimento",
    "Rotina de equipe e postura",
    "Posicionamento de marca no mercado",
    "Aprendizados reais de crescimento",
    "Decisões aplicadas no dia a dia"
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#1B090F] text-white relative overflow-hidden border-t border-[#39141D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <SectionEyebrow className="mx-auto">VOCÊ VAI VER DE PERTO</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            NÃO É UMA TEORIA CRIADA PARA UM SLIDE. <span className="text-[#F0D8B5]">É UMA EXPERIÊNCIA CONSTRUÍDA DENTRO DE UMA OPERAÇÃO REAL.</span>
          </h2>
        </div>

        {/* Operational Proof Gallery & Checklist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Editorial Photo Composition */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden border border-[#F0D8B5]/20 shadow-xl h-64 sm:h-80">
                <img 
                  src="/IMG_8274.jpg" 
                  alt="Operação em movimento na Barbearia BEJOTA" 
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="bg-[#39141D] p-5 rounded-xl border border-[#F0D8B5]/20">
                <BejotaSymbol size={20} color="#F0D8B5" className="mb-2" />
                <p className="text-xs font-heading font-semibold uppercase tracking-wider text-[#F0D8B5]">
                  FLUXO DE CLIENTES EM TEMPO REAL
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="bg-[#240C12] p-5 rounded-xl border border-[#F0D8B5]/20 text-right">
                <span className="text-xs font-heading font-semibold uppercase tracking-wider text-[#F0D8B5] block mb-1">
                  PADRÃO BEJOTA
                </span>
                <p className="text-xs text-white/70">Ambiente desenhado para percepção de alto ticket.</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-[#F0D8B5]/20 shadow-xl h-64 sm:h-80">
                <img 
                  src="/IMG_8428.jpg" 
                  alt="Estrutura da Barbearia BEJOTA" 
                  className="w-full h-full object-cover filter brightness-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Checklist Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#240C12] p-8 rounded-2xl border border-[#F0D8B5]/20 space-y-6 shadow-2xl">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#F0D8B5] block mb-2">
                  VALIDAÇÃO PRÁTICA
                </span>
                <h3 className="font-heading font-extrabold text-xl text-white uppercase">
                  O QUE ESTARÁ ABERTO PARA SUA ANÁLISE:
                </h3>
              </div>

              <div className="space-y-3">
                {proofItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-white/90 font-light border-b border-white/5 pb-2.5">
                    <div className="w-5 h-5 rounded-full bg-[#F0D8B5]/20 text-[#F0D8B5] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/60 italic font-light pt-2">
                * Sem dados fictícios ou simulações. A vivência ocorre dentro do ambiente onde os atendimentos reais acontecem.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
