import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PillNav({
  logo,
  logoAlt = "Logo",
  items = [],
  activeHref = "/",
  className = "",
  ease = "easeOut",
  baseColor = "#000000",
  pillColor = "#E60000",
  hoveredPillTextColor = "#ffffff",
  pillTextColor = "#ffffff",
  theme = "dark",
  initialLoadAnimation = false
}) {
  const [active, setActive] = useState(activeHref);
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={initialLoadAnimation ? { y: -100, opacity: 0 } : false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease }}
      className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100] flex items-center justify-between px-3 py-2 sm:px-6 sm:py-3 rounded-full transition-all duration-300 w-[95%] sm:w-auto max-w-4xl mx-auto ${scrolled ? 'shadow-2xl backdrop-blur-lg border border-white/10' : ''} ${className}`}
      style={{
        backgroundColor: scrolled ? `${baseColor}E6` : baseColor, // Add some transparency if scrolled
      }}
    >
      <div className="flex items-center gap-2 sm:gap-4 mr-2 sm:mr-10 relative z-10">
        {logo && (
          <img src={logo} alt={logoAlt} className="h-6 sm:h-10 w-auto object-contain" />
        )}
      </div>

      <div className="flex items-center gap-1 sm:gap-2 relative">
        {items.map((item) => {
          const isActive = active === item.href;
          const isHovered = hovered === item.href;

          return (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.href)}
              onMouseEnter={() => setHovered(item.href)}
              onMouseLeave={() => setHovered(null)}
              className="relative px-2 py-1.5 sm:px-5 sm:py-2 text-[10px] sm:text-sm font-bold uppercase tracking-tight sm:tracking-wider transition-colors z-20 whitespace-nowrap"
              style={{
                color: isActive || isHovered ? hoveredPillTextColor : '#A0A0A0'
              }}
            >
              <span className="relative z-10">{item.label}</span>
              {isActive && (
                <motion.div
                  layoutId="pill-active"
                  className="absolute inset-0 rounded-full -z-[1]"
                  style={{ backgroundColor: pillColor }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
            </a>
          );
        })}
      </div>
    </motion.nav>
  );
}
