"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "white" | "ghost";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-hover shadow-lg shadow-primary/25",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white backdrop-blur-sm",
  white: "bg-white text-primary hover:bg-gray-100 shadow-lg border border-gray-200",
  ghost: "text-primary hover:text-primary-hover",
};

export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide uppercase transition-all duration-300 cursor-pointer";

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={classes}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
