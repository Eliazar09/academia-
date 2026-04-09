import React from 'react';
import { Dumbbell } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gym-green rounded-lg flex items-center justify-center transform -rotate-6">
                <Dumbbell className="w-5 h-5 text-gym-black" />
              </div>
              <span className="text-2xl font-display font-black tracking-widest text-white">RITMO E FORMA</span>
            </div>
            <p className="text-gray-400 max-w-sm mb-6">
              Muito além de uma academia. Um ecossistema completo para a sua melhor versão em Boa Vista.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider font-display">Acesso Rápido</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-gym-green transition-colors">O Essencial</a></li>
              <li><a href="#structure" className="text-gray-400 hover:text-gym-green transition-colors">Estrutura</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gym-green transition-colors">Planos</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-gym-green transition-colors">Especialistas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 uppercase tracking-wider font-display">Jurídico</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-gym-green transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gym-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gym-green transition-colors">Regras da Academia</a></li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Academia Ritmo e Forma. Todos os direitos reservados.</p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">Feito com foco em conversão.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
