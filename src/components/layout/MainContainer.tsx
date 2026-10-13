import React, { ReactNode } from 'react';

interface MainContainerProps {
  children: ReactNode;
  className?: string;
}

export const MainContainer: React.FC<MainContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
};
