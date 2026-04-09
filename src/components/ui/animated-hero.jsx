import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function HeroTitle({ titles }) {
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <h1 className="text-5xl md:text-8xl tracking-tight text-center font-display uppercase leading-tight">
      <span className="text-white block">Construa o corpo</span>
      <span className="text-white block">que vc</span>
      <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1 text-gym-green">
        &nbsp;
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-display"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? {
                    y: 0,
                    opacity: 1,
                  }
                : {
                    y: titleNumber > index ? -150 : 150,
                    opacity: 0,
                  }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>
    </h1>
  );
}

export { HeroTitle };
