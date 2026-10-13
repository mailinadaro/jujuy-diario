import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
}) => {
  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-16`}>
      {eyebrow && (
        <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider block mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 text-base sm:text-lg font-light leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
