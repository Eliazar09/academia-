import React from 'react';
import PillNav from '@/components/ui/PillNav';
import logo from '@/assets/logo.png';

const Header = () => {
  return (
    <PillNav
      logo={logo}
      logoAlt="Academia Ritmo e Forma"
      items={[
        { label: 'Início', href: '#hero' },
        { label: 'Sobre Nós', href: '#about' },
        { label: 'Planos', href: '#pricing' },
        { label: 'Contato', href: '#location' }
      ]}
      activeHref="#hero"
      className="custom-nav"
      ease="easeOut"
      baseColor="#0a0a0a"
      pillColor="#E60000"
      hoveredPillTextColor="#ffffff"
      pillTextColor="#000000"
      theme="dark"
      initialLoadAnimation={true}
    />
  );
};

export default Header;
