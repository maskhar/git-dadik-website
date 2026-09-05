import Link from 'next/link';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'white';
  className?: string;
}

export const Button = ({ children, variant = 'primary', className = '', href, ...props }: ButtonProps & { href?: string; target?: string }) => {
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-red-700",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "text-foreground hover:text-primary",
    white: "bg-white text-primary hover:bg-gray-100",
  };

  if (href) {
    return (
      <Link 
        href={href} 
        className={`${baseStyle} ${variants[variant]} ${className}`}
        {...(props as any)}
      >
        {children}
      </Link>
    );
  }

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
