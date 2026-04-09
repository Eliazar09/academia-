import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gym-green text-gym-black font-bold hover:bg-green-400 shadow-[0_0_15px_rgba(56,211,159,0.3)] hover:shadow-[0_0_25px_rgba(56,211,159,0.5)]",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline: "border border-gym-green text-gym-green hover:bg-gym-green/10",
        secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
        ghost: "hover:bg-zinc-800 hover:text-white",
        link: "text-gym-green underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-6 py-2 text-lg uppercase tracking-wide",
        sm: "h-9 rounded-md px-3",
        lg: "h-14 rounded-md px-8 text-xl uppercase tracking-wider font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
