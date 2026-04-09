import React from 'react';
import { InteractiveBentoGallery } from '@/components/ui/interactive-bento-gallery';

const mediaItems = [
  { id: 1, type: "image", title: "Área de Musculação", desc: "Equipamentos de alta performance para hipertrofia", url: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop", span: "md:col-span-2 md:row-span-2" },
  { id: 2, type: "image", title: "Peso Livre", desc: "Halteres profissionais para treinos intensos", url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1470&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 3, type: "image", title: "Foco Total", desc: "Ambiente preparado para sua melhor versão", url: "https://images.unsplash.com/photo-1541534741688-6078c65b5a38?q=80&w=1470&auto=format&fit=crop", span: "md:col-span-1 md:row-span-1" },
  { id: 4, type: "image", title: "Estrutura", desc: "Espaço amplo, climatizado e motivador", url: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1470&auto=format&fit=crop", span: "md:col-span-2 md:row-span-1" },
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
