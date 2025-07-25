import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className = "", ...props }: ButtonProps) => (
  <button
    className={"bg-blue-500 text-white px-4 py-2 rounded " + className}
    {...props}
  >
    {children}
  </button>
);