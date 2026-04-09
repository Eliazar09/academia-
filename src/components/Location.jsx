import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-[#121212] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
        >
          <div className="space-y-10">
            <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}>
               <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-wider text-white mb-6">Seu novo corpo <br/><span className="text-[#E60000]">começa hoje</span></h2>
               <p className="text-sm md:text-base text-gray-400 mb-8 leading-relaxed">Não deixe para amanhã. Faça-nos uma visita ou chame a equipe para tirar dúvidas agora.</p>
               
               <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <Button size="lg" onClick={() => window.open("https://wa.me/5595991262866", "_blank")} className="gap-2 w-full sm:w-auto bg-[#E60000] hover:bg-red-700 font-bold uppercase text-xs h-12">
                    <MessageSquare className="w-5 h-5" />
                    Falar no WhatsApp
                  </Button>
                  <Button variant="outline" size="lg" onClick={() => window.open("https://www.google.com/maps/search/?api=1&query=Academia%20Ritmo%20e%20forma&query_place_id=ChIJn7sH1z8Fk40R7WqnDU5NM-0", "_blank")} className="gap-2 w-full sm:w-auto font-bold uppercase text-xs h-12">
                    <MapPin className="w-5 h-5" />
                    Google Maps
                  </Button>
               </div>
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }} className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 border-t border-white/10">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#141414] rounded-full flex items-center justify-center shrink-0 border border-white/5">
                  <MapPin className="text-[#E60000] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Endereço</h4>
                  <p className="text-gray-400 text-xs mt-1">R. Expedito Francisco da Silva, 993<br/>Boa Vista - RR</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#141414] rounded-full flex items-center justify-center shrink-0 border border-white/5">
                  <Phone className="text-[#E60000] w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white uppercase">Contato</h4>
                  <p className="text-gray-400 text-xs mt-1">(95) 99126-2866</p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } } }}
            className="rounded-2xl overflow-hidden border border-white/10 h-[400px] lg:h-[500px] bg-[#141414] group shadow-[0_0_30px_rgba(230,0,0,0.1)] relative"
          >
            <div className="absolute inset-0 bg-[#E60000]/10 mix-blend-overlay pointer-events-none z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1139.7394982637213!2d-60.6722216!3d2.8239014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93053fd707bb9f%3A0xed334d4e0da56aed!2sAcademia%20Ritmo%20e%20forma!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(110%)'}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
