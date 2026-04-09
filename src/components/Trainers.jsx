import React from 'react';
import { motion } from 'framer-motion';

const trainers = [
  { name: "Thiago Silva", role: "Head Coach - Musculação", img: "https://images.unsplash.com/photo-1567598508481-65985588e295?q=80&w=1000&auto=format&fit=crop" },
  { name: "Amanda Costa", role: "Especialista em Funcional", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1000&auto=format&fit=crop" },
  { name: "Carlos Mendes", role: "Alta Performance", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop" }
];

const Trainers = () => {
  return (
    <section id="trainers" className="py-24 bg-[#121212] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gym-green uppercase mb-2">Autoridade</h2>
          <h3 className="text-4xl md:text-5xl font-display uppercase tracking-tight text-white mb-4">Conheça nossos Especialistas</h3>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
        >
          {trainers.map((t, idx) => (
            <motion.div 
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
              }}
              whileHover={{ y: -10 }}
              className="group relative h-[400px] rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 transition-opacity group-hover:from-black/90"></div>
              <img src={t.img} alt={t.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
              
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <h4 className="text-3xl font-display tracking-wider text-white mb-1">{t.name}</h4>
                <p className="text-gym-green font-semibold">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Trainers;
