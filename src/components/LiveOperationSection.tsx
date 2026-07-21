import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { CheckCircle2 } from 'lucide-react';

export const LiveOperationSection: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Tour Guiado pela Operação BEJOTA",
      desc: "Conheça a estrutura, o ambiente, o fluxo e as decisões por trás da experiência."
    },
    {
      number: "02",
      title: "Técnica ao Vivo & Diagnóstico",
      desc: "Acompanhe diagnóstico, raciocínio profissional, execução e finalização de perto."
    },
    {
      number: "03",
      title: "Jornada do Cliente & Fidelização",
      desc: "Entenda o que acontece antes, durante e depois do atendimento para gerar recorrência."
    },
    {
      number: "04",
      title: "Habilidade em Faturamento",
      desc: "Conecte ticket médio, frequência, ocupação e percepção de valor na cadeira."
    },
    {
      number: "05",
      title: "Hot Seats & Diagnóstico de Gargalos",
      desc: "Análise ao vivo de desafios reais da turma direcionados por Breno Lavor."
    },
    {
      number: "06",
      title: "Construção do Plano de 90 Dias",
      desc: "Organize os próximos passos práticos de acordo com o momento da sua carreira."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#15060A] text-white relative overflow-hidden border-t border-[#39141D]">
      {/* Background Subtle Lighting */}
      <div className="absolute top-1/3 -left-48 w-96 h-96 bg-[#39141D]/40 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#F0D8B5]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Section Title Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-14">
          <SectionEyebrow className="mx-auto">A BEJOTA COMO CASE VIVO</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            NA PRÁTICA, É ASSIM QUE A SUA <br />
            <span className="text-[#F0D8B5]">IMERSÃO ACONTECE NA BEJOTA:</span>
          </h2>
        </div>

        {/* 2-Column Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: Stacked Pill Cards */}
          <div className="lg:col-span-6 space-y-3.5">
            {steps.map((step) => (
              <div 
                key={step.number}
                className="bg-[#240C12]/80 backdrop-blur-md border border-[#F0D8B5]/20 p-4 sm:p-5 rounded-2xl transition-all duration-300 hover:border-[#F0D8B5]/50 hover:bg-[#39141D]/70 shadow-lg flex items-start gap-4 group"
              >
                <div className="w-9 h-9 rounded-full bg-[#39141D] border border-[#F0D8B5]/30 flex items-center justify-center shrink-0 text-[#F0D8B5] mt-0.5 shadow-md">
                  <CheckCircle2 className="w-5 h-5 text-[#F0D8B5]" />
                </div>

                <div className="flex-1 space-y-0.5">
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[#F0D8B5] transition-colors leading-snug">
                    <span className="text-[#F0D8B5]/70 mr-2">{step.number}.</span>
                    {step.title}
                  </h3>
                  <p className="text-xs text-white/60 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Featured Cards + Floating 3D Element */}
          <div className="lg:col-span-6 relative space-y-6">
            
            {/* Top Light Beige Featured Card */}
            <div className="bg-[#F0D8B5] text-[#39141D] rounded-3xl p-7 sm:p-9 shadow-2xl relative border-2 border-[#39141D]/10">
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.25em] text-[#39141D]/60 block mb-1">
                VISÃO CLARA
              </span>
              
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#39141D] uppercase mb-4 leading-tight">
                AGORA ENTENDA ISSO COM CLAREZA:
              </h3>

              <p className="text-sm font-normal text-[#39141D]/90 leading-relaxed mb-4">
                Sem uma operação estruturada e posicionamento de alto valor, a barbearia perde dinheiro e você continua preso ao relógio. Com o método BEJOTA, o seu faturamento e o seu valor percebido crescem juntos.
              </p>

              <p className="text-xs font-semibold text-[#39141D] leading-relaxed border-t border-[#39141D]/15 pt-3">
                Por isso, essa imersão presencial foi desenhada para profissionais que desejam dominar o que existe além da cadeira.
              </p>
            </div>

            {/* Bottom Dark Wine Featured Card */}
            <div className="bg-[#39141D] border-2 border-[#F0D8B5]/30 rounded-3xl p-7 sm:p-9 text-white shadow-2xl relative">
              <span className="text-[10px] font-heading font-extrabold uppercase tracking-[0.25em] text-[#F0D8B5] block mb-1">
                O SEGREDO DA PROFISSÃO
              </span>

              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white uppercase mb-3 leading-tight">
                E AQUI ESTÁ O QUE NINGUÉM TE CONTOU ATÉ HOJE:
              </h3>

              <p className="text-sm text-white/80 font-light leading-relaxed">
                Você não precisa de anos de tentativas frustradas ou teorias distantes. <strong className="text-[#F0D8B5] font-semibold">Você precisa vivenciar uma operação real e aplicar o método.</strong>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Section: Method & Rule Pills */}
        <div className="bg-[#240C12] border border-[#F0D8B5]/20 rounded-3xl p-8 sm:p-10 text-center space-y-6 shadow-2xl relative">
          <div className="space-y-2">
            <span className="text-xs font-heading font-bold uppercase tracking-[0.2em] text-[#F0D8B5]">
              O RESULTADO DO MÉTODO CERTO
            </span>
            <h3 className="font-heading font-extrabold text-xl sm:text-3xl text-white uppercase tracking-wide">
              E QUANDO VOCÊ TEM O <span className="text-[#F0D8B5]">MÉTODO CERTO...</span>
            </h3>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="bg-[#F0D8B5] text-[#39141D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md">
              SEM DEPENDER SOMENTE DE MAIS HORAS.
            </div>

            <div className="bg-[#F0D8B5] text-[#39141D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md">
              SEM DIMINUIR SEU PREÇO PARA COMPETIR.
            </div>

            <div className="bg-[#F0D8B5] text-[#39141D] font-heading font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3 rounded-full shadow-md">
              SEM CONSTRUIR UMA OPERAÇÃO QUE DEPENDE DE VOCÊ PARA TUDO.
            </div>
          </div>

          <p className="font-heading font-extrabold text-base sm:text-xl text-[#F0D8B5] uppercase tracking-widest pt-2">
            A BEJOTA SERÁ O LOCAL, O PALCO, A PROVA E PARTE DO CONTEÚDO.
          </p>
        </div>

      </div>
    </section>
  );
};
