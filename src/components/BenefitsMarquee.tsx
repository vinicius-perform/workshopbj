import React from 'react';

export const BenefitsMarquee: React.FC = () => {
  const items = [
    "MAIS VALOR PERCEBIDO",
    "MAIS CLAREZA",
    "MAIS RECORRÊNCIA",
    "MELHOR POSICIONAMENTO",
    "VISÃO DE NEGÓCIO",
    "DIREÇÃO PARA 90 DIAS"
  ];

  return (
    <div className="bg-[#F0D8B5] text-[#39141D] py-4 border-y border-[#39141D]/20 overflow-hidden relative z-20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(6)].map((_, arrayIndex) => (
          <div key={arrayIndex} className="flex items-center gap-8 mx-4 font-heading font-extrabold text-xs sm:text-sm tracking-[0.25em] uppercase shrink-0">
            {items.map((item, itemIndex) => (
              <React.Fragment key={itemIndex}>
                <span>{item}</span>
                <span className="opacity-40">•</span>
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
