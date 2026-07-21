import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  type: 'terms' | 'privacy' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, type, onClose }) => {
  if (!isOpen || !type) return null;

  const isTerms = type === 'terms';
  const title = isTerms ? 'Termos de Uso' : 'Política de Privacidade';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#240C12] border border-[#F0D8B5]/30 rounded-2xl w-full max-w-2xl max-h-[80vh] flex flex-col shadow-2xl text-white overflow-hidden">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-[#F0D8B5]/20 flex items-center justify-between bg-[#39141D]">
          <h3 className="font-heading font-extrabold text-xl text-[#F0D8B5] uppercase">{title}</h3>
          <button 
            onClick={onClose} 
            className="p-1 rounded-lg hover:bg-white/10 text-white/70 hover:text-white"
            aria-label="Fechar janela"
          >
            <X size={24} />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-sm font-light text-white/80 leading-relaxed">
          {isTerms ? (
            <>
              <p>
                Este site é a página oficial de apresentação e inscrição do evento <strong>BEJOTA Experience — Além da Cadeira (Edição Fundadora)</strong>, idealizado por Breno Lavor e realizado na Barbearia BEJOTA em Itapipoca/CE.
              </p>
              <h4 className="font-heading font-bold text-white uppercase text-base pt-2">1. Inscrições e Vagas</h4>
              <p>
                A Edição Fundadora possui um limite estrito de 15 participantes presenciais. A garantia da vaga ocorre mediante a confirmação da taxa de investimento individual.
              </p>
              <h4 className="font-heading font-bold text-white uppercase text-base pt-2">2. Direitos de Imagem</h4>
              <p>
                Durante a experiência presencial no dia 02 de agosto de 2026, poderão ser realizados registros fotográficos e em vídeo para fins documentais e educacionais do ecossistema BEJOTA.
              </p>
            </>
          ) : (
            <>
              <p>
                A sua privacidade é fundamental para nós. Esta política descreve como as informações coletadas durante a navegação e pré-inscrição do <strong>BEJOTA Experience</strong> são tratadas.
              </p>
              <h4 className="font-heading font-bold text-white uppercase text-base pt-2">1. Coleta de Dados</h4>
              <p>
                Coletamos apenas as informações fornecidas voluntariamente por você para contato, confirmação de inscrição e envio do Diagnóstico Além da Cadeira.
              </p>
              <h4 className="font-heading font-bold text-white uppercase text-base pt-2">2. Uso de Dados</h4>
              <p>
                Seus dados não serão vendidos ou compartilhados com terceiros não relacionados à execução e atendimento do evento.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#F0D8B5]/20 bg-[#15060A] text-right">
          <button
            onClick={onClose}
            className="bg-[#F0D8B5] text-[#39141D] font-heading font-bold text-xs uppercase px-6 py-2.5 rounded-full hover:bg-white transition-colors"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
