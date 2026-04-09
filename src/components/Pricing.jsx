import React from 'react';
import { PricingSection } from "@/components/ui/pricing";
import { ChevronRight } from 'lucide-react';

const demoPlans = [
  {
    name: "Passaporte Vip",
    price: "159",
    period: "mensal",
    features: [
      "Acesso completo à musculação",
      "Horário livre (Seg-Sáb)",
      "Avaliação física inclusa",
      "Acompanhamento na sala de pesos",
      "App de treino completo",
      "Equipamentos Premium de Performance",
      "Isenção de taxa de matrícula"
    ],
    description: "Para quem quer treinar sério e exige estrutura de alto padrão.",
    buttonText: "Garantir Minha Vaga",
    href: "#",
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Right Aligned - Reference Bull Style */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
          <div className="flex text-gray-500">
            <ChevronRight className="w-8 h-8 -mr-4" />
            <ChevronRight className="w-8 h-8" />
          </div>
          <div className="text-right">
            <h2 className="text-2xl md:text-4xl font-display font-black uppercase text-white tracking-wider max-w-sm ml-auto leading-tight">
              Planos Flexíveis para seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Estilo de Vida</span>
            </h2>
          </div>
        </div>
      </div>
      
      {/* Componente extraído limitando altura e margens */}
      <div className="-mt-16">
        <PricingSection
          plans={demoPlans}
          title=""
          description=""
        />
      </div>
    </section>
  );
};

export default Pricing;
