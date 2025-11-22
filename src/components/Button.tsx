import React from "react";
import { cn } from "../lib/utils";

// 1) Creamos tipos válidos para las keys del Record
type Variant = "default" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  // 2) Usamos los tipos estrictos (sin undefined)
  const variants: Record<Variant, string> = {
    default: "bg-primary text-white hover:bg-primary/80",
    outline:
      "border border-border text-foreground hover:bg-accent hover:text-foreground",
  };

  const sizes: Record<Size, string> = {
    sm: "px-3 py-1.5 text-sm rounded-md",
    md: "px-4 py-2 text-base rounded-lg",
    lg: "px-5 py-3 text-lg rounded-xl",
  };

  return (
    <button
      className={cn(
        "transition-all duration-300 cursor-pointer font-medium",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
