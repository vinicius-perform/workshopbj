import React from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PainSection } from './components/PainSection';
import { OpportunitySection } from './components/OpportunitySection';
import { LiveOperationSection } from './components/LiveOperationSection';
import { PillarsSection } from './components/PillarsSection';
import { BenefitsMarquee } from './components/BenefitsMarquee';
import { AudienceSection } from './components/AudienceSection';
import { OperationProofSection } from './components/OperationProofSection';
import { BrenoAuthoritySection } from './components/BrenoAuthoritySection';
import { ScheduleSection } from './components/ScheduleSection';
import { FounderEditionSection } from './components/FounderEditionSection';
import { OfferSection } from './components/OfferSection';
import { FAQSection } from './components/FAQSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { MobileStickyCTA } from './components/MobileStickyCTA';

export function App() {
  return (
    <div className="min-h-screen bg-[#15060A] text-white flex flex-col font-inter selection:bg-[#F0D8B5] selection:text-[#39141D]">
      {/* Main Content Flow */}
      <main className="flex-1">
        {/* 3. Hero Section */}
        <HeroSection />

        {/* 4. Seção de Identificação com a Dor */}
        <PainSection />

        {/* 5. Seção de Apresentação da Oportunidade */}
        <OpportunitySection />

        {/* 6. Seção "Como Funciona na Prática" */}
        <LiveOperationSection />

        {/* 7. Seção do Método e dos Cinco Pilares */}
        <PillarsSection />

        {/* 8. Faixa Horizontal de Benefícios */}
        <BenefitsMarquee />

        {/* 9. Seção "Para Quem É" */}
        <AudienceSection />

        {/* 10. Seção de Prova pela Operação */}
        <OperationProofSection />

        {/* 11. Seção de Autoridade de Breno Lavor */}
        <BrenoAuthoritySection />

        {/* 12. Seção de Programação */}
        <ScheduleSection />

        {/* 14. Seção da Edição Fundadora */}
        <FounderEditionSection />

        {/* 15. Seção de Oferta Principal com Contador */}
        <OfferSection />

        {/* 16. FAQ Accordion */}
        <FAQSection />

        {/* 17. CTA Final */}
        <FinalCTA />
      </main>

      {/* 18. Rodapé */}
      <Footer />
    </div>
  );
}

export default App;
