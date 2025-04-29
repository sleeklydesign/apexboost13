
import React from 'react';
import { cn } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
}

const CTAButton = ({
  className,
  variant = 'solid',
  size = 'md',
  children,
  href,
  onClick,
  ...props
}: CTAButtonProps) => {
  const navigate = useNavigate();

  const variantClasses = {
    solid: 'bg-apex hover:bg-apex-light text-white shadow-lg hover:shadow-xl',
    outline: 'bg-transparent border-2 border-apex text-apex hover:bg-apex/10',
    ghost: 'bg-transparent hover:bg-apex/10 text-apex',
  };

  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-2.5 px-6',
    lg: 'text-lg py-3 px-8',
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // If onClick is provided, call it
    if (onClick) {
      onClick(e);
    } 
    // If href is provided and no onClick, navigate to that route
    else if (href && !e.defaultPrevented) {
      navigate(href);
    }
  };

  return (
    <button
      className={cn(
        'font-apex font-semibold rounded-md transition-all duration-300 ease-in-out',
        'transform hover:scale-105 active:scale-95',
        'focus:outline-none focus:ring-2 focus:ring-apex/50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default CTAButton;
