import React from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { Layers, Compass, Scissors, Target, FileText, Award, BookOpen, Smartphone } from 'lucide-react';

export const DeliverablesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#15060A] text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          <SectionEyebrow className="mx-auto">ENTREGÁVEIS OFICIAIS</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            TUDO O QUE VOCÊ VAI VIVER NO <span className="text-[#F0D8B5]">BEJOTA EXPERIENCE.</span>
          </h2>
        </div>

        {/* Modular Grid System */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Main Hero Module - Immersion */}
          <div className="md:col-span-12 bg-[#39141D] border-2 border-[#F0D8B5]/30 p-8 sm:p-10 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
            <div className="space-y-3 max-w-2xl relative z-10">
              <span className="text-xs font-heading font-extrabold tracking-[0.25em] text-[#F0D8B5] uppercase bg-[#240C12] px-3.5 py-1.5 rounded border border-[#F0D8B5]/20 inline-block">
                MÓDULO PRINCIPAL
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white uppercase tracking-wide">
                IMERSÃO PRESENCIAL DE UM DIA INTEIRO
              </h3>
              <p className="text-white/80 font-light text-base leading-relaxed">
                Acesso completo a toda a programação técnica, estratégica e comportamental dentro da operação real da Barbearia BEJOTA em Itapipoca/CE, conduzida pessoalmente por Breno Lavor.
              </p>
            </div>

            <div className="shrink-0 bg-[#240C12] p-6 rounded-xl border border-[#F0D8B5]/20 text-center text-[#F0D8B5]">
              <Layers className="w-10 h-10 mx-auto mb-2" />
              <span className="font-heading font-bold text-xs uppercase tracking-widest block">ACESSO TOTAL</span>
            </div>
          </div>

          {/* Medium Modules */}
          <div className="md:col-span-4 bg-[#240C12] border border-[#F0D8B5]/15 p-6 sm:p-8 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#F0D8B5]/10 flex items-center justify-center text-[#F0D8B5]">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white uppercase">TOUR GUIADO & OPERAÇÃO</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Visita técnica comentada sobre ambiente, arquitetura, recepção, fluxo de atendimento e decisões da marca.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#240C12] border border-[#F0D8B5]/15 p-6 sm:p-8 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#F0D8B5]/10 flex items-center justify-center text-[#F0D8B5]">
              <Scissors className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white uppercase">DEMONSTRAÇÃO TÉCNICA AO VIVO</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Acompanhamento próximo de diagnóstico, raciocínio profissional, execução e acabamento.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#240C12] border border-[#F0D8B5]/15 p-6 sm:p-8 rounded-2xl space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#F0D8B5]/10 flex items-center justify-center text-[#F0D8B5]">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-white uppercase">HOT SEATS & PLANO DE 90 DIAS</h4>
            <p className="text-xs text-white/70 font-light leading-relaxed">
              Análise ao vivo de desafios reais da turma + construção do plano de ação individual.
            </p>
          </div>

          {/* Compact Modules */}
          <div className="md:col-span-3 bg-[#1B090F] border border-[#F0D8B5]/10 p-6 rounded-xl space-y-3">
            <BookOpen className="w-6 h-6 text-[#F0D8B5]" />
            <h5 className="font-heading font-bold text-sm text-white uppercase">WORKBOOK EXCLUSIVO</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed">
              Material físico "Passaporte Além da Cadeira" para acompanhamento e exercícios.
            </p>
          </div>

          <div className="md:col-span-3 bg-[#1B090F] border border-[#F0D8B5]/10 p-6 rounded-xl space-y-3">
            <BejotaSymbol size={24} color="#F0D8B5" />
            <h5 className="font-heading font-bold text-sm text-white uppercase">KIT EDIÇÃO FUNDADORA</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed">
              Kit oficial de credenciamento com itens selecionados para a experiência.
            </p>
          </div>

          <div className="md:col-span-3 bg-[#1B090F] border border-[#F0D8B5]/10 p-6 rounded-xl space-y-3">
            <Award className="w-6 h-6 text-[#F0D8B5]" />
            <h5 className="font-heading font-bold text-sm text-white uppercase">CERTIFICADO OFICIAL</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed">
              Certificação presencial de participação na Edição Fundadora.
            </p>
          </div>

          <div className="md:col-span-3 bg-[#1B090F] border border-[#F0D8B5]/10 p-6 rounded-xl space-y-3">
            <Smartphone className="w-6 h-6 text-[#F0D8B5]" />
            <h5 className="font-heading font-bold text-sm text-white uppercase">MATERIAIS DIGITAIS</h5>
            <p className="text-[11px] text-white/60 font-light leading-relaxed">
              Ferramentas de diagnóstico e materiais complementares pós-evento.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
