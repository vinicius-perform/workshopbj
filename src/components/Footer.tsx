import React, { useState } from 'react';
import { eventConfig } from '../config/eventConfig';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { LegalModal } from './ui/LegalModal';
import { Instagram, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#15060A] text-white border-t border-[#39141D] py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-white/10">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center gap-4 text-center md:text-left">
            <BejotaSymbol size={36} color="#F0D8B5" />
            <div>
              <span className="font-heading font-extrabold text-lg text-white uppercase tracking-wider block">
                BRENO LAVOR
              </span>
              <span className="font-heading font-semibold text-xs text-[#F0D8B5] tracking-widest uppercase block">
                BEJOTA EXPERIENCE — ALÉM DA CADEIRA
              </span>
              <span className="text-xs text-white/50 font-light block mt-0.5">
                Uma experiência presencial de Breno Lavor e Barbearia BEJOTA.
              </span>
            </div>
          </div>

          {/* Social Links & Location */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-heading font-semibold uppercase tracking-wider">
            <div className="flex items-center gap-2 text-white/70">
              <MapPin size={16} className="text-[#F0D8B5]" />
              <span>{eventConfig.city}</span>
            </div>

            <a 
              href={eventConfig.instagramBreno} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F0D8B5] hover:text-white transition-colors"
            >
              <Instagram size={16} />
              <span>@brenolavor.bj</span>
            </a>

            <a 
              href={eventConfig.instagramBejota} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#F0D8B5] hover:text-white transition-colors"
            >
              <Instagram size={16} />
              <span>@barbeariabejota</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 font-light">
          <p>© {currentYear} {eventConfig.eventName}. Todos os direitos reservados.</p>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setModalType('privacy')}
              className="hover:text-[#F0D8B5] transition-colors focus:outline-none"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button 
              onClick={() => setModalType('terms')}
              className="hover:text-[#F0D8B5] transition-colors focus:outline-none"
            >
              Termos de Uso
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modal Popup */}
      <LegalModal 
        isOpen={!!modalType} 
        type={modalType} 
        onClose={() => setModalType(null)} 
      />
    </footer>
  );
};
