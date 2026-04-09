import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const stats = [
  { value: "6,154", label: "Alunos Ativos desde Janeiro 2024" },
  { value: "350", label: "Membros Focados em Fisiculturismo" },
  { value: "90%", label: "Membros que batem a meta em 3 - 6 meses" },
  { value: "20%", label: "Aumento de Massa Muscular com Treino Personalizado" }
];

const SuccessStories = () => {
  return (
    <section className="py-24 bg-[#E60000] relative overflow-hidden text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Top Left: Title */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="flex gap-2 mb-6">
              <ArrowRight className="w-8 h-8" />
              <ArrowRight className="w-8 h-8 -ml-4" />
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-black uppercase tracking-wider mb-4 leading-tight">
              Histórias de Sucesso
            </h2>
            <p className="text-sm font-sans font-bold opacity-80 max-w-sm mb-8">
              Não acredite apenas em nossa palavra. Ouça histórias reais de nossos alunos revolucionando suas vidas na Academia Ritmo & Forma.
            </p>
            
            <div className="flex gap-4">
              <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-[#E60000] transition-colors">
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-black text-[#E60000] flex items-center justify-center hover:bg-black/80 transition-colors">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top Right: Images / Video Thumbnails */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4 h-64 md:h-80">
            <div className="rounded-xl bg-black overflow-hidden relative group cursor-pointer shadow-lg transform -skew-x-[4deg]">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop" alt="Workout" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-full">Davi P.</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl bg-black overflow-hidden relative group cursor-pointer shadow-lg transform -skew-x-[4deg]">
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" alt="Workout" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-4 left-4 bg-white px-3 py-1 text-xs font-bold rounded-full">Alice M.</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Row: Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#FF1A1A] p-6 rounded-xl shadow-sm border border-red-500 hover:shadow-md transition-shadow transform -skew-x-[2deg]"
            >
              <h4 className="text-4xl font-display font-black mb-2 tracking-wide">{stat.value}</h4>
              <p className="text-xs font-bold uppercase leading-snug">{stat.label}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SuccessStories;
