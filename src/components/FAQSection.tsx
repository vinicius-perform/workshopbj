import React, { useState } from 'react';
import { SectionEyebrow } from './ui/SectionEyebrow';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FAQItem[] = [
    {
      id: 'faq-1',
      question: 'PARA QUEM É O BEJOTA EXPERIENCE?',
      answer: 'É para barbeiros em crescimento, profissionais com agenda cheia, futuros donos e donos de barbearia que desejam evoluir em técnica, experiência, posicionamento, faturamento e visão de negócio.'
    },
    {
      id: 'faq-2',
      question: 'PRECISO SER DONO DE BARBEARIA?',
      answer: 'Não. A experiência também é indicada para barbeiros que desejam fortalecer a carreira, consolidar a agenda, aumentar o valor percebido ou se preparar para empreender.'
    },
    {
      id: 'faq-3',
      question: 'É UM CURSO PARA INICIANTES?',
      answer: 'Não. O BEJOTA Experience não é um curso básico para quem nunca cortou cabelo. A experiência foi desenhada para profissionais que já vivem o mercado.'
    },
    {
      id: 'faq-4',
      question: 'QUANDO E ONDE ACONTECE?',
      answer: 'No domingo, dia 02 de agosto de 2026, dentro da Barbearia BEJOTA, em Itapipoca/CE.'
    },
    {
      id: 'faq-5',
      question: 'QUAL É O HORÁRIO?',
      answer: 'A programação começa às 08h30 e tem encerramento previsto para as 18h40.'
    },
    {
      id: 'faq-6',
      question: 'O QUE VOU APRENDER?',
      answer: 'A experiência conecta técnica, jornada do cliente, posicionamento, ticket, retenção, faturamento, processos, carreira e visão de negócio.'
    },
    {
      id: 'faq-7',
      question: 'O QUE RECEBO AO PARTICIPAR?',
      answer: 'Você participa da imersão, do tour, da demonstração técnica, dos conteúdos, dos hot seats e do diagnóstico. Também recebe plano de 90 dias, workbook, kit, certificado e materiais digitais.'
    },
    {
      id: 'faq-8',
      question: 'COMO FUNCIONA A INSCRIÇÃO?',
      answer: 'Após o pagamento, você receberá a confirmação, as orientações e o link para responder ao Diagnóstico Além da Cadeira.'
    },
    {
      id: 'faq-9',
      question: 'QUANTAS VAGAS ESTÃO DISPONÍVEIS?',
      answer: 'A Edição Fundadora terá no máximo 15 participantes.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#1B090F] text-white relative overflow-hidden border-t border-[#39141D]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <SectionEyebrow>TIRA-DÚVIDAS</SectionEyebrow>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white leading-tight">
            PERGUNTAS <span className="text-[#F0D8B5]">FREQUENTES</span>
          </h2>
        </div>

        {/* Accessible Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="bg-[#240C12] border border-[#F0D8B5]/15 rounded-2xl overflow-hidden transition-all duration-200 hover:border-[#F0D8B5]/30"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`answer-${faq.id}`}
                  id={`question-${faq.id}`}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-white uppercase tracking-wide focus:outline-none focus:bg-[#39141D]/60"
                >
                  <span className={isOpen ? 'text-[#F0D8B5]' : 'text-white'}>{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full bg-[#39141D] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 text-[#F0D8B5]' : 'text-white/60'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div 
                    id={`answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`question-${faq.id}`}
                    className="px-6 pb-6 pt-2 text-sm sm:text-base text-white/80 font-light leading-relaxed border-t border-white/5"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
