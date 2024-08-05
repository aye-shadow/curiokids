import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: string; 
}

const Badge: React.FC<BadgeProps> = ({ className, children, variant, ...props }) => {
  return (
    <div
      className={classNames(
        " border-8 border-white shadow-sm shadow-[#44403C] p-6 rounded-full",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
