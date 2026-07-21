import React, { useState, useEffect } from 'react';
import { eventConfig } from '../config/eventConfig';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const targetDate = new Date(eventConfig.date).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
        isExpired: false,
      };
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isExpired) {
    return (
      <div className="bg-[#39141D] text-[#F0D8B5] py-3 px-6 rounded-xl border border-[#F0D8B5]/30 text-center font-heading font-extrabold tracking-widest text-sm uppercase">
        A EXPERIÊNCIA COMEÇOU.
      </div>
    );
  }

  return (
    <div className="bg-[#15060A]/80 border border-[#F0D8B5]/30 p-4 sm:p-5 rounded-2xl">
      <span className="text-[10px] font-heading font-bold uppercase tracking-[0.25em] text-[#F0D8B5] block text-center mb-3">
        TEMPO RESTANTE PARA O ENCONTRO PRESENCIAL
      </span>

      <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
        <div className="bg-[#240C12] p-2.5 sm:p-3 rounded-lg border border-[#F0D8B5]/20">
          <span className="font-heading font-extrabold text-xl sm:text-3xl text-white block">
            {String(timeLeft.days).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-heading uppercase text-[#F0D8B5] tracking-wider">DIAS</span>
        </div>

        <div className="bg-[#240C12] p-2.5 sm:p-3 rounded-lg border border-[#F0D8B5]/20">
          <span className="font-heading font-extrabold text-xl sm:text-3xl text-white block">
            {String(timeLeft.hours).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-heading uppercase text-[#F0D8B5] tracking-wider">HORAS</span>
        </div>

        <div className="bg-[#240C12] p-2.5 sm:p-3 rounded-lg border border-[#F0D8B5]/20">
          <span className="font-heading font-extrabold text-xl sm:text-3xl text-white block">
            {String(timeLeft.minutes).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-heading uppercase text-[#F0D8B5] tracking-wider">MINUTOS</span>
        </div>

        <div className="bg-[#240C12] p-2.5 sm:p-3 rounded-lg border border-[#F0D8B5]/20">
          <span className="font-heading font-extrabold text-xl sm:text-3xl text-red-400 block animate-pulse">
            {String(timeLeft.seconds).padStart(2, '0')}
          </span>
          <span className="text-[9px] sm:text-[10px] font-heading uppercase text-[#F0D8B5] tracking-wider">SEGUNDOS</span>
        </div>
      </div>
    </div>
  );
};
