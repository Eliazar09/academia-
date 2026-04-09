import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] max-h-[900px] overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Video directly spanning the whole screen */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40"
      >
        <source src="https://videos.pexels.com/video-files/5319099/5319099-hd_1920_1080_25fps.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />

      {/* Content Container (Left Aligned like the Bull template) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black tracking-widest text-white leading-[1.1] uppercase mb-6 drop-shadow-lg">
              Sua Jornada <br />
              <span className="text-[#E60000]">Fitness Começa Aqui</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-gray-300 font-sans max-w-md leading-relaxed mb-10 border-l-4 border-[#E60000] pl-4"
          >
            Nossa estrutura de ponta e treinadores especialistas estão aqui para ajudar você no seu primeiro passo, ou no seu maior desafio.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button size="lg" className="h-14 px-8 text-sm font-bold bg-[#E60000] hover:bg-red-700 text-white rounded-md tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(230,0,0,0.4)] hover:shadow-[0_4px_25px_rgba(230,0,0,0.6)]">
              Descubra Mais
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
