import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
interface MagneticLinkProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}
export function MagneticLink({
  children,
  className = '',
  href,
  onClick,
  target,
  rel,
  'aria-label': ariaLabel
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({
    x: 0,
    y: 0
  });
  const handleMouse = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    setPos({
      x: (clientX - (left + width / 2)) * 0.15,
      y: (clientY - (top + height / 2)) * 0.15
    });
  };
  const reset = () =>
  setPos({
    x: 0,
    y: 0
  });

  const motionProps = {
    className: `relative inline-block ${className}`,
    onMouseMove: handleMouse,
    onMouseLeave: reset,
    animate: {
      x: pos.x,
      y: pos.y
    },
    transition: {
      type: 'spring' as const,
      stiffness: 200,
      damping: 15
    }
  };

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        {...motionProps}>
        
        {children}
      </motion.a>);
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      {...motionProps}>
      
      {children}
    </motion.button>);

}
