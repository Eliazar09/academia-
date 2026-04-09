import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronRight } from 'lucide-react';
import logo from '../assets/logo.png';

const features = [
  "Ambiente climatizado e espaçoso",
  "Equipamentos importados de última geração",
  "Equipe treinada para hipertrofia e emagrecimento",
  "Localização privilegiada com estacionamento",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex text-gray-500 mb-6">
          <ChevronRight className="w-8 h-8 -mr-4" />
          <ChevronRight className="w-8 h-8" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Lado Esquerdo: Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-white tracking-wider leading-tight mb-6">
              Nossa Meta É Seu <br/><span className="text-[#E60000]">Melhor Resultado</span>
            </h2>
            
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Bem-vindo à Academia Ritmo & Forma. Localizada no coração de Boa Vista - RR, somos muito mais do que apenas um espaço com pesos. Somos um santuário de dedicação para aqueles que se recusam a aceitar a mediocridade do dia a dia e buscam a excelência física.
            </p>
            <p className="text-base text-gray-400 mb-6 leading-relaxed">
              Aqui, cada treino é planejado para maximizar seu potencial. Combinamos tecnologia de ponta em equipamentos com o conhecimento técnico de instrutores especializados em biomecânica e fisiologia do exercício. Não importa seu nível atual, nosso ambiente é desenhado para te empurrar além.
            </p>
            <p className="text-base text-gray-400 mb-10 leading-relaxed font-bold border-l-2 border-[#E60000] pl-4 italic">
              "A disciplina é a ponte entre seus objetivos e suas conquistas. Na Ritmo & Forma, nós construímos essa ponte juntos, todos os dias, desde 2018."
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-3 text-[12px] sm:text-sm text-gray-300 font-bold uppercase"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#E60000] shrink-0" />
                  {feature}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Lado Direito: Mídia / Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[350px] lg:h-[500px] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(230,0,0,0.15)] flex flex-col items-center justify-center border border-white/5 bg-[#141414] group"
          >
            {/* Background Video with Poster */}
            <video
              autoPlay
              loop
              muted
              playsInline
              poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
              className="absolute inset-0 w-full h-full object-cover filter brightness-[0.4] group-hover:brightness-[0.6] transition-all duration-700"
            >
              <source src="https://videos.pexels.com/video-files/4366683/4366683-uhd_2560_1440_25fps.mp4" type="video/mp4" />
            </video>
            
            {/* Decoração Adicional Overlay */}
            <div className="absolute top-6 left-6 z-20">
                <div className="bg-[#E60000] px-3 py-1 rounded-sm text-[10px] font-black tracking-widest uppercase">Premium Facility</div>
            </div>

            <div className="absolute bottom-0 w-full bg-black/80 backdrop-blur-md px-6 py-4 border-t border-white/10 flex justify-between items-center z-20">
              <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest shrink-0">Padrão de Excelência</span>
              <span className="text-[10px] uppercase text-[#E60000] font-black tracking-widest text-right">Ritmo & Forma RR</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
