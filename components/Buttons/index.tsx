import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { Button } from '../ui/button';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Buttons: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <Button
      className={classNames(
        "border-[#44403C] border-x-[1.5px] border-b-[3px] border-t-[1px] text-white font-bold px-4 rounded-lg shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Buttons;
