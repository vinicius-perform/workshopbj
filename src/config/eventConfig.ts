export interface EventConfig {
  eventName: string;
  edition: string;
  date: string;
  endDate: string;
  dateDisplay: string;
  weekdayDisplay: string;
  timeDisplay: string;
  timezone: string;
  city: string;
  venue: string;
  price: number;
  capacity: number;
  checkoutUrl: string;
  whatsappUrl: string;
  mapsUrl: string;
  instagramBreno: string;
  instagramBejota: string;
  whatsappMessage: string;
}

export const eventConfig: EventConfig = {
  eventName: "BEJOTA Experience — Além da Cadeira",
  edition: "Edição Fundadora",
  date: "2026-08-02T08:30:00-03:00",
  endDate: "2026-08-02T18:40:00-03:00",
  dateDisplay: "02 de agosto de 2026",
  weekdayDisplay: "Domingo",
  timeDisplay: "08h30 às 18h40",
  timezone: "America/Fortaleza",
  city: "Itapipoca/CE",
  venue: "Barbearia BEJOTA",
  price: 497,
  capacity: 15,
  checkoutUrl: "", // Preencha quando disponível
  whatsappUrl: "https://wa.me/558881822272",
  mapsUrl: "https://share.google/OqxqgGEw5O17YdI7h",
  instagramBreno: "https://www.instagram.com/brenolavor.bj/",
  instagramBejota: "https://www.instagram.com/barbeariabejota/",
  whatsappMessage: encodeURIComponent("Olá, vim do site e quero me inscrever para o Workshop"),
};

/**
 * Função utilitária para lidar com ações de clique em CTAs
 */
export const handleCtaClick = (source: string = 'cta') => {
  // Rastreamento de evento
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', `${source}_click`, {
      event_category: 'conversion',
      event_label: eventConfig.eventName,
    });
  }

  // Scroll suave para a seção de programação
  const scheduleElement = document.getElementById('programacao');
  if (scheduleElement) {
    scheduleElement.scrollIntoView({ behavior: 'smooth' });
  } else if (eventConfig.checkoutUrl && eventConfig.checkoutUrl.trim() !== "") {
    window.open(eventConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
  } else if (eventConfig.whatsappUrl && eventConfig.whatsappUrl.trim() !== "") {
    const fullWhatsappUrl = `${eventConfig.whatsappUrl}?text=${eventConfig.whatsappMessage}`;
    window.open(fullWhatsappUrl, '_blank', 'noopener,noreferrer');
  }
};
