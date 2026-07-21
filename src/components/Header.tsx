import React, { useState, useEffect } from 'react';
import { handleCtaClick } from '../config/eventConfig';
import { BejotaSymbol } from './ui/BejotaSymbol';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'A experiência', href: '#experiencia' },
    { label: 'Para quem é', href: '#para-quem-e' },
    { label: 'Programação', href: '#programacao' },
    { label: 'Breno Lavor', href: '#breno-lavor' },
    { label: 'Investimento', href: '#oferta' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#39141D]/90 backdrop-blur-md border-b border-[#F0D8B5]/15 py-3 shadow-2xl' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#F0D8B5] rounded"
          aria-label="BEJOTA Experience - Início"
        >
          <BejotaSymbol size={28} color="#F0D8B5" className="transition-transform duration-300 group-hover:scale-110" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold tracking-[0.22em] text-white text-base sm:text-lg leading-none">
              BRENO LAVOR
            </span>
            <span className="font-heading font-semibold text-[10px] tracking-[0.3em] text-[#F0D8B5]/90 uppercase mt-0.5">
              BEJOTA EXPERIENCE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs uppercase tracking-widest font-heading font-medium text-white/80 hover:text-[#F0D8B5] transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleCtaClick('header')}
            className="bg-[#F0D8B5] text-[#39141D] hover:bg-white font-heading font-bold text-xs uppercase tracking-widest px-4 sm:px-6 py-2.5 rounded-full transition-all duration-200 shadow-lg hover:shadow-[#F0D8B5]/20 focus:outline-none focus:ring-2 focus:ring-[#F0D8B5]"
          >
            <span className="hidden sm:inline">GARANTIR MINHA VAGA</span>
            <span className="sm:hidden">GARANTIR VAGA</span>
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white/80 hover:text-[#F0D8B5] focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#240C12] border-b border-[#F0D8B5]/20 px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm uppercase tracking-widest font-heading font-medium text-white/90 hover:text-[#F0D8B5] py-2 border-b border-white/5"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
