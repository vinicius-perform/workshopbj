import React from 'react';
import { BejotaSymbol } from './ui/BejotaSymbol';

export const ScheduleSection: React.FC = () => {
  const scheduleItems = [
    { time: "08h30", title: "RECEPÇÃO E ACOLHIMENTO", desc: "Credenciamento, kit, fotografia, networking e diagnóstico inicial." },
    { time: "09h00", title: "EXISTE MUITO ALÉM DA CADEIRA", desc: "A história de Breno conectada à tese central da experiência." },
    { time: "09h45", title: "BEJOTA POR DENTRO", desc: "Tour pela estrutura, pelo fluxo, pela experiência e pela operação." },
    { time: "10h45", title: "TÉCNICA AO VIVO", desc: "Diagnóstico, tomada de decisão, execução e finalização." },
    { time: "12h30", title: "INTERVALO E NETWORKING", desc: "Momento de conexão, conversa e troca entre os participantes." },
    { time: "14h00", title: "A JORNADA DO CLIENTE BEJOTA", desc: "Da chegada ao pós-venda, à fidelização e à recorrência." },
    { time: "15h00", title: "HABILIDADE EM FATURAMENTO", desc: "Ticket, frequência, retenção, posicionamento e aquisição." },
    { time: "16h00", title: "HOT SEATS", desc: "Análise ao vivo de desafios reais da turma." },
    { time: "17h00", title: "PLANO DE 90 DIAS", desc: "Construção dos próximos passos individuais." },
    { time: "17h45", title: "O PRÓXIMO PASSO", desc: "Direcionamentos para transformar clareza em implementação." },
    { time: "18h20", title: "VISÃO DO ECOSSISTEMA", desc: "Uma visão dos caminhos possíveis de crescimento profissional e empresarial." },
    { time: "18h40", title: "ENCERRAMENTO", desc: "Conclusões, registros e networking." }
  ];

  return (
    <section id="programacao" className="py-20 sm:py-28 bg-[#F8EEE0] text-[#39141D] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase font-heading bg-[#39141D] text-[#F0D8B5]">
            <BejotaSymbol size={12} color="#F0D8B5" />
            <span>02 DE AGOSTO DE 2026</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[#39141D] leading-tight">
            UM DIA INTEIRO PARA ENXERGAR SUA PROFISSÃO E SEU NEGÓCIO DE <span className="underline decoration-[#39141D]/30 decoration-wavy underline-offset-8">OUTRA FORMA.</span>
          </h2>
        </div>

        {/* Editorial Schedule Timeline */}
        <div className="bg-white rounded-2xl border-2 border-[#39141D]/15 shadow-2xl overflow-hidden divide-y divide-[#39141D]/10">
          {scheduleItems.map((item, index) => (
            <div 
              key={item.time} 
              className={`p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 transition-colors duration-200 hover:bg-[#F0D8B5]/20 ${
                index % 2 === 1 ? 'bg-[#F8EEE0]/50' : 'bg-white'
              }`}
            >
              {/* Time Column */}
              <div className="shrink-0 w-24 sm:w-28">
                <span className="font-heading font-extrabold text-lg sm:text-xl text-[#39141D] bg-[#39141D]/10 px-3 py-1 rounded inline-block">
                  {item.time}
                </span>
              </div>

              {/* Title & Description */}
              <div className="flex-1 space-y-1">
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#39141D] uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#39141D]/80 font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Icon Marker */}
              <div className="shrink-0 hidden sm:block">
                <BejotaSymbol size={14} color="#39141D" className="opacity-30" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
