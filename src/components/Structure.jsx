import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Activity, ShieldCheck, HeartPulse, Wind, Maximize } from 'lucide-react';

const facilities = [
  { icon: <Dumbbell className="w-8 h-8" />, title: "Musculação Completa" },
  { icon: <Activity className="w-8 h-8" />, title: "Área de Cardio" },
  { icon: <HeartPulse className="w-8 h-8" />, title: "Treinos Funcionais" },
  { icon: <ShieldCheck className="w-8 h-8" />, title: "Acompanhamento Profissional" },
  { icon: <Wind className="w-8 h-8" />, title: "Ambiente Climatizado" },
  { icon: <Maximize className="w-8 h-8" />, title: "Espaço Amplo" }
];

const Structure = () => {
  return (
    <section id="structure" className="py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gym-green uppercase mb-2">Infraestrutura</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-4">Estrutura Feita <br/> Para o seu Sucesso</h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
        >
          {facilities.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
              }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-gym-green/50 transition-colors group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400 group-hover:text-gym-green group-hover:bg-gym-green/10 transition-colors mb-6">
                 {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white tracking-wide">{item.title}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Structure;
