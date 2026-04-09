import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: "Preciso ter experiência para treinar na Ritmo e Forma?", a: "De forma alguma! Nossa equipe de treinadores está preparada para montar treinos para todos os níveis, do iniciante ao atleta avançado. Você terá acompanhamento desde o primeiro dia." },
  { q: "Tem personal trainer disponível na academia?", a: "Sim, além dos professores de sala que prestam suporte geral, possuímos um plano exclusivo VIP que inclui aulas direcionadas 100% com nossos Personal Trainers." },
  { q: "Qual o horário de funcionamento?", a: "Abrimos de segunda a sexta, das 05:30 às 23:00, e aos sábados das 08:00 às 14:00." },
  { q: "Quais são os planos e taxas disponíveis?", a: "Trabalhamos com opções flexíveis: Mensal (R$120), Trimestral (R$100/mês) e Anual (R$85/mês). Não cobramos taxa de matrícula nem anuidade extra." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-gym-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-4">Dúvidas Frequentes</h2>
          <p className="text-gray-400">Tudo o que você precisa saber antes de começar.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-zinc-900 border border-white/5 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                >
                  <span className="text-lg font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gym-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-400">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
