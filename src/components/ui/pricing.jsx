"use client";

import { motion, useSpring } from "framer-motion";
import React, {
  useState,
  useRef,
  useEffect,
  createContext,
  useContext,
} from "react";
import confetti from "canvas-confetti";
import { Check, Star as LucideStar } from "lucide-react";
import NumberFlow from "@number-flow/react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// --- UTILITY FUNCTIONS ---

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function useMediaQuery(query) {
  const [value, setValue] = useState(false);

  useEffect(() => {
    function onChange(event) {
      setValue(event.matches);
    }

    const result = window.matchMedia(query);
    result.addEventListener("change", onChange);
    setValue(result.matches);

    return () => result.removeEventListener("change", onChange);
  }, [query]);

  return value;
}

// --- BASE UI COMPONENTS (BUTTON) ---

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#E60000] text-white hover:bg-red-700 shadow-[0_0_15px_rgba(230,0,0,0.3)]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-[#E60000] bg-transparent hover:bg-[#E60000]/10 text-white",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
        ghost: "hover:bg-zinc-800 hover:text-white",
        link: "text-[#E60000] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8 text-lg font-bold tracking-wider uppercase",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

// --- INTERACTIVE STARFIELD ---

function Star({ mousePosition, containerRef }) {
  const [initialPos] = useState({
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
  });

  const springConfig = { stiffness: 100, damping: 15, mass: 0.1 };
  const springX = useSpring(0, springConfig);
  const springY = useSpring(0, springConfig);

  useEffect(() => {
    if (
      !containerRef.current ||
      mousePosition.x === null ||
      mousePosition.y === null
    ) {
      springX.set(0);
      springY.set(0);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const starX =
      containerRect.left +
      (parseFloat(initialPos.left) / 100) * containerRect.width;
    const starY =
      containerRect.top +
      (parseFloat(initialPos.top) / 100) * containerRect.height;

    const deltaX = mousePosition.x - starX;
    const deltaY = mousePosition.y - starY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

    const radius = 600; // Radius of magnetic influence

    if (distance < radius) {
      const force = 1 - distance / radius;
      const pullX = deltaX * force * 0.5;
      const pullY = deltaY * force * 0.5;
      springX.set(pullX);
      springY.set(pullY);
    } else {
      springX.set(0);
      springY.set(0);
    }
  }, [mousePosition, initialPos, containerRef, springX, springY]);

  return (
    <motion.div
      className="absolute bg-white rounded-full"
      style={{
        top: initialPos.top,
        left: initialPos.left,
        width: `${1 + Math.random() * 2}px`,
        height: `${1 + Math.random() * 2}px`,
        x: springX,
        y: springY,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        delay: Math.random() * 5,
      }}
    />
  );
}

function InteractiveStarfield({ mousePosition, containerRef }) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      {Array.from({ length: 150 }).map((_, i) => (
        <Star
          key={`star-${i}`}
          mousePosition={mousePosition}
          containerRef={containerRef}
        />
      ))}
    </div>
  );
}

// --- PRICING COMPONENT LOGIC ---

// Context for state management
const PricingContext = createContext({
  isMonthly: true,
  setIsMonthly: () => {},
});

// Main PricingSection Component
export function PricingSection({
  plans,
  title = "",
  description = "",
}) {
  const containerRef = useRef(null);

  // Consider plans array only has 1 plan
  const plan = plans[0] || {};

  return (
    <div
      ref={containerRef}
      className="relative w-full bg-transparent py-4 pb-16"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="max-w-3xl mx-auto text-center space-y-2 mb-10">
            <h2 className="text-2xl md:text-3xl font-display uppercase tracking-wider text-white">
              {title}
            </h2>
            <p className="text-gray-400 text-sm font-light whitespace-pre-line">
              {description}
            </p>
          </div>
        )}
        <div className="mt-6 flex justify-center w-full">
            <PricingCard plan={plan} />
        </div>
      </div>
    </div>
  );
}

// Pricing Card Component (Modified for single prominent display)
function PricingCard({ plan }) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
      className="rounded-2xl p-8 flex flex-col relative bg-[#141414] border-2 border-[#E60000] shadow-[0_0_30px_rgba(230,0,0,0.15)] w-full max-w-lg mx-auto"
    >
      <div className="absolute top-0 -translate-y-1/2 right-8">
        <div className="bg-[#E60000] py-1.5 px-4 rounded text-xs font-bold uppercase tracking-wider text-white shadow-md">
          Acesso Total
        </div>
      </div>
      
      <div className="flex flex-col text-left">
        <h3 className="text-2xl md:text-3xl font-bold tracking-wide text-white uppercase">{plan.name}</h3>
        <p className="mt-3 text-sm text-gray-400 font-sans leading-relaxed">
          {plan.description}
        </p>
        
        <div className="mt-8 flex items-baseline justify-start gap-x-1">
          <span className="text-5xl font-black text-white tracking-widest">
            <NumberFlow
              value={Number(plan.price)}
              format={{
                style: "currency",
                currency: "BRL",
                minimumFractionDigits: 0,
              }}
              className="font-variant-numeric: tabular-nums"
            />
          </span>
          <span className="text-base font-medium text-gray-500 ml-2">
            / {plan.period}
          </span>
        </div>

        <ul
          role="list"
          className="mt-10 mb-10 space-y-4 text-sm text-gray-300 flex-1 border-t border-white/5 pt-6"
        >
          {plan.features?.map((feature) => (
            <li key={feature} className="flex gap-x-4 items-center">
              <Check className="h-5 w-5 flex-none text-[#E60000]" aria-hidden="true" />
              <span className="text-base font-medium">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <Button
            size="lg"
            className="w-full text-sm uppercase font-bold tracking-widest h-14 bg-[#E60000] hover:bg-red-700 text-white rounded-xl shadow-lg hover:shadow-[0_0_20px_rgba(230,0,0,0.4)] transition-all"
          >
            {plan.buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
