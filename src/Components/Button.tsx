import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  className?: string; // Changed 'classNames' to 'className' for consistency with React's prop naming convention
  disabled?: boolean; // Added 'disabled' prop for disabling the button
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className = '', // Set a default value for className
  disabled = false, // Set a default value for disabled
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className={`btn btn-primary`} // Using template literals for better readability
      disabled={disabled} // Added disabled attribute to the button
    >
      {label}
    </button>
  );
};

export default Button;
