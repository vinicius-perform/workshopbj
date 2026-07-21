import React, { useState, useEffect } from 'react';
import { handleCtaClick } from '../config/eventConfig';
import { ArrowRight } from 'lucide-react';

export const MobileStickyCTA: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA only after scrolling past the first screen (300px)
      const scrollY = window.scrollY;
      const offerElement = document.getElementById('oferta');
      const faqElement = document.getElementById('faq');

      let hideForOffer = false;
      if (offerElement) {
        const rect = offerElement.getBoundingClientRect();
        // Hide if the main offer card is visible on screen
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          hideForOffer = true;
        }
      }

      if (faqElement) {
        const rect = faqElement.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          hideForOffer = true;
        }
      }

      setVisible(scrollY > 350 && !hideForOffer);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#39141D]/95 backdrop-blur-md border-t border-[#F0D8B5]/30 p-3 sm:p-4 shadow-2xl transition-all duration-300 pb-[calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-3">
        
        <div>
          <span className="text-[9px] font-heading font-semibold uppercase tracking-wider text-[#F0D8B5] block">
            EDIÇÃO FUNDADORA
          </span>
          <div className="flex items-baseline gap-1 text-white font-heading font-extrabold text-lg leading-none">
            <span className="text-xs text-[#F0D8B5]">R$</span>
            <span>497</span>
          </div>
        </div>

        <button
          onClick={() => handleCtaClick('mobile_sticky')}
          className="flex-1 bg-[#F0D8B5] text-[#39141D] hover:bg-white font-heading font-extrabold text-xs uppercase tracking-wider py-3 px-4 rounded-full transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
        >
          <span>GARANTIR MINHA VAGA</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
};
