import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const reviews = [
  { name: "João Pedro", role: "Aluno há 1 ano", text: "Ótima estrutura e ambiente top. Máquinas imbatíveis em Boa Vista.", initial: "J" },
  { name: "Mariana Souza", role: "Atleta", text: "Melhor academia da região! Atendimento sensacional e treinos focados.", initial: "M" },
  { name: "Lucas Farias", role: "Local Guide", text: "Treino aqui todos os dias, recomendo muito. Excelente climatização.", initial: "L" },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-[#121212] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <Star className="w-8 h-8 fill-gym-gold text-gym-gold stroke-gym-gold" />
            <Star className="w-8 h-8 fill-gym-gold text-gym-gold stroke-gym-gold" />
            <Star className="w-8 h-8 fill-gym-gold text-gym-gold stroke-gym-gold" />
            <Star className="w-8 h-8 fill-gym-gold text-gym-gold stroke-gym-gold" />
            <Star className="w-8 h-8 fill-gym-gold text-gym-gold stroke-gym-gold" />
          </div>
          <h2 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-4">Aprovada por quem entende</h2>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {reviews.map((r, idx) => (
            <motion.div 
              key={idx}
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="bg-zinc-900 border border-white/5 p-8 rounded-3xl relative"
            >
              <div className="text-gym-green text-6xl absolute top-4 right-6 opacity-20 font-serif">"</div>
              <p className="text-xl text-gray-300 italic mb-8 relative z-10 font-light">"{r.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-xl text-white">
                  {r.initial}
                </div>
                <div>
                  <h4 className="font-bold text-white">{r.name}</h4>
                  <p className="text-sm text-gym-green">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
