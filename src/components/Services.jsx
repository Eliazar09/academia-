import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Area */}
        <div className="flex items-center gap-4 mb-12">
          <div className="flex text-[#E60000]">
            <ChevronRight className="w-8 h-8 -mr-4" />
            <ChevronRight className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white tracking-wider">
            Modalidades e Treino
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Dark Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-[#141414] rounded-2xl p-8 border border-white/5"
          >
            <h3 className="text-xl font-bold text-white uppercase mb-4 tracking-wide">Nós Oferecemos</h3>
            <p className="text-sm text-gray-400 mb-8 leading-relaxed">
              Sessões de teste grátis para novos alunos, ambiente totalmente focado em performance.
            </p>
            <Button variant="outline" className="w-full text-xs font-bold rounded-full border-[#E60000] text-white hover:bg-[#E60000] hover:text-white transition-all h-10">
              GARANTIR VAGA
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>

          {/* Center Main Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 h-[450px] rounded-2xl overflow-hidden relative shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Personal Training" 
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>

          {/* Right Image and Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4 flex flex-col gap-8 h-full"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden shadow-2xl bg-[#141414]">
              <img 
                src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop" 
                alt="Gym Community" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="bg-white text-black p-4 rounded-xl w-32 shadow-xl inline-flex flex-col">
                  <span className="text-3xl font-black text-[#E60000]">+10</span>
                  <span className="text-xs font-bold uppercase mt-1 leading-tight">Mestres<br/>Treinadores</span>
                </div>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center">
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Nossa infraestrutura de ponta encoraja você e nossos instrutores a sempre entregarem resultados. Não importa seu nível.
              </p>
              <Button size="sm" className="w-fit gap-2 bg-[#E60000] hover:bg-red-700 font-bold uppercase rounded-md text-xs px-6 h-10">
                Ver Modalidades <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;
