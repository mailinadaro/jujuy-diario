import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
  theme?: 'light' | 'dark';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'} mb-16`}>
      {eyebrow && (
        <span className={`${isDark ? 'text-amber-400 font-medium' : 'text-amber-600 font-semibold'} text-xs tracking-widest uppercase block mb-3`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-light ${isDark ? 'text-white' : 'text-slate-900'} mb-4 tracking-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`${isDark ? 'text-slate-400' : 'text-slate-600'} text-base sm:text-lg font-light leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
};
