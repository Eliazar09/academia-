import React from 'react';
import { InteractiveBentoGallery } from '@/components/ui/interactive-bento-gallery';

const mediaItems = [
  { id: 1, type: "image", title: "Área de Musculação", desc: "Equipamentos de última geração", url: "https://images.unsplash.com/photo-1540497077202-7c8a3999128f?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, type: "image", title: "Peso Livre", desc: "Halteres até 60kg", url: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, type: "image", title: "Cardio", desc: "Esteiras e Elípticos", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, type: "image", title: "Funcional", desc: "Espaço amplo e dinâmico", url: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-gym-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-sm font-bold tracking-[0.2em] text-gym-green uppercase mb-2">Ambiente</h2>
        </div>
        <InteractiveBentoGallery 
          title="Nossa Estrutura em Detalhes"
          description="Explore o espaço da Academia Ritmo e Forma"
          mediaItems={mediaItems} 
        />
      </div>
    </section>
  );
};

export default Gallery;
