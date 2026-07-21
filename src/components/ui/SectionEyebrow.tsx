import React from 'react';
import { BejotaSymbol } from './BejotaSymbol';

interface SectionEyebrowProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export const SectionEyebrow: React.FC<SectionEyebrowProps> = ({ 
  children, 
  dark = false, 
  className = "" 
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-[0.2em] uppercase font-heading ${
      dark 
        ? 'bg-[#39141D]/80 text-[#F0D8B5] border border-[#F0D8B5]/20' 
        : 'bg-[#F0D8B5]/10 text-[#F0D8B5] border border-[#F0D8B5]/30'
    } ${className}`}>
      <BejotaSymbol size={12} color="#F0D8B5" />
      <span>{children}</span>
    </div>
  );
};
