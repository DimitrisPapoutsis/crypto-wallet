import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

// Define button variants using cva
const buttonVariants = cva(
  'flex-shrink-0 transition-colors duration-300 px-6 py-3 rounded-[4px] shadow-md min-w-lg',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-darkPrimary',
        disabled: 'bg-gray cursor-not-allowed',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

// Define props for the Button component
interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  label: string;
}

const Button: React.FC<IButtonProps> = ({
  label,
  onClick,
  disabled,
  className,
  ...props
}) => {
  return (
    <button
      className={
        buttonVariants({ variant: disabled ? 'disabled' : 'primary' }) +
        ' ' +
        className
      }
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <div className="label1 text-white">{label}</div>
    </button>
  );
};

export default Button;
