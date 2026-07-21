import React from 'react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#F0D8B5] text-[#39141D] font-heading font-bold text-[11px] sm:text-xs tracking-[0.18em] uppercase py-2.5 px-4 text-center border-b border-[#39141D]/10 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        <span>EDIÇÃO FUNDADORA</span>
        <span className="opacity-40">•</span>
        <span>02 DE AGOSTO</span>
        <span className="opacity-40">•</span>
        <span>MÁXIMO DE 15 PARTICIPANTES</span>
      </div>
    </div>
  );
};
