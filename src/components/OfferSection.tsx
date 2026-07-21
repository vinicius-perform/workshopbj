import React from 'react';
import { handleCtaClick, eventConfig } from '../config/eventConfig';
import { Countdown } from './Countdown';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { Check, ShieldCheck, MapPin, Calendar, Clock, Users, ArrowRight } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const summaryDeliverables = [
    "Um dia inteiro dentro da operação BEJOTA.",
    "Tour guiado pela estrutura física e ambiental.",
    "Demonstração técnica ao vivo de corte e acabamento.",
    "Experiência, posicionamento, faturamento e visão de negócio.",
    "Hot seats e diagnóstico estratégico ao vivo.",
    "Construção do plano individual para os próximos 90 dias.",
    "Workbook impresso, kit de credenciamento, certificado e materiais digitais."
  ];

  return (
    <section id="oferta" className="py-20 sm:py-28 bg-[#15060A] text-white relative overflow-hidden">
      {/* Background Subtle Gradient Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39141D]/40 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase font-heading bg-[#39141D] text-[#F0D8B5] border border-[#F0D8B5]/30">
            <BejotaSymbol size={12} color="#F0D8B5" />
            <span>EDIÇÃO LIMITADA A 15 PROFISSIONAIS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
            GARANTA SEU PASSAPORTE PARA A <br />
            <span className="text-[#F0D8B5]">EDIÇÃO FUNDADORA</span>
          </h2>
        </div>

        {/* Central High-Conversion Offer Card */}
        <div className="bg-[#F0D8B5] text-[#39141D] rounded-3xl p-6 sm:p-12 shadow-2xl border-4 border-[#39141D]/20 relative overflow-hidden">
          
          {/* Subtle Background Mark */}
          <div className="absolute -top-12 -right-12 opacity-10 pointer-events-none">
            <BejotaSymbol size={280} color="#39141D" />
          </div>

          <div className="relative z-10 space-y-8">
            
            {/* Top Event Badge & Info Header */}
            <div className="border-b border-[#39141D]/15 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <span className="font-heading font-extrabold text-xs tracking-[0.2em] text-[#39141D]/70 uppercase block">
                  {eventConfig.edition}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl uppercase tracking-tight text-[#39141D]">
                  {eventConfig.eventName}
                </h3>
              </div>

              <div className="bg-[#39141D] text-[#F0D8B5] px-4 py-2 rounded-xl text-center shrink-0">
                <span className="font-heading font-bold text-xs uppercase tracking-widest block">LIMITE RÍGIDO</span>
                <span className="font-heading font-extrabold text-sm uppercase">15 PARTICIPANTES</span>
              </div>
            </div>

            {/* Quick Details Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-[#39141D]/10 p-3 rounded-xl flex items-center gap-2.5">
                <Calendar className="w-4 h-4 text-[#39141D] shrink-0" />
                <div>
                  <span className="block text-[9px] uppercase font-heading font-semibold text-[#39141D]/60">Data</span>
                  <span className="text-xs font-heading font-bold">02 DE AGOSTO DE 2026</span>
                </div>
              </div>

              <div className="bg-[#39141D]/10 p-3 rounded-xl flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#39141D] shrink-0" />
                <div>
                  <span className="block text-[9px] uppercase font-heading font-semibold text-[#39141D]/60">Horário</span>
                  <span className="text-xs font-heading font-bold">08H30 ÀS 18H40</span>
                </div>
              </div>

              <div className="bg-[#39141D]/10 p-3 rounded-xl flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#39141D] shrink-0" />
                <div>
                  <span className="block text-[9px] uppercase font-heading font-semibold text-[#39141D]/60">Local</span>
                  <span className="text-xs font-heading font-bold">ITAPIPOCA / CE</span>
                </div>
              </div>

              <div className="bg-[#39141D]/10 p-3 rounded-xl flex items-center gap-2.5">
                <Users className="w-4 h-4 text-[#39141D] shrink-0" />
                <div>
                  <span className="block text-[9px] uppercase font-heading font-semibold text-[#39141D]/60">Formato</span>
                  <span className="text-xs font-heading font-bold">IMERSÃO PRESENCIAL</span>
                </div>
              </div>
            </div>



            {/* Pricing Section */}
            <div className="bg-[#39141D] text-white p-8 rounded-2xl text-center space-y-4 shadow-xl border-2 border-[#39141D]">
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-[0.25em] text-[#F0D8B5] block mb-1">
                  INVESTIMENTO OFICIAL — EDIÇÃO FUNDADORA
                </span>
                
                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-heading font-bold text-xl text-[#F0D8B5]">R$</span>
                  <span className="font-heading font-extrabold text-5xl sm:text-7xl text-white tracking-tight">
                    497
                  </span>
                </div>
                
                <span className="text-xs text-white/70 font-light block mt-2">
                  Investimento único para participar da experiência presencial.
                </span>
              </div>

              {/* Action CTA Button */}
              <button
                onClick={() => {
                  const fullWhatsappUrl = `${eventConfig.whatsappUrl}?text=${eventConfig.whatsappMessage}`;
                  window.open(fullWhatsappUrl, '_blank', 'noopener,noreferrer');
                }}
                className="w-full bg-[#F0D8B5] text-[#39141D] hover:bg-white font-heading font-extrabold text-sm sm:text-base uppercase tracking-widest py-3.5 sm:py-4 px-6 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-2xl flex items-center justify-center gap-3 group"
              >
                <span>GARANTIR MINHA VAGA</span>
                <ArrowRight className="w-4.5 h-4.5 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-2 text-xs text-white/80 font-light pt-1">
                <ShieldCheck className="w-4 h-4 text-[#F0D8B5]" />
                <span>Após a confirmação da inscrição, você receberá as orientações e o Diagnóstico Além da Cadeira.</span>
              </div>
            </div>

            {/* Countdown Integration */}
            <div className="pt-2">
              <Countdown />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
