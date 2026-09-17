import React, { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { copyToClipboard } from '../../utils/routes';

interface ShareButtonProps {
  url: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
  variant?: 'light' | 'dark' | 'ghost' | 'card';
  size?: 'sm' | 'md';
}

export const ShareButton: React.FC<ShareButtonProps> = ({
  url,
  label = 'Copy Link',
  copiedLabel = 'Copied!',
  className = '',
  variant = 'ghost',
  size = 'md'
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const success = await copyToClipboard(url);
    if (success) {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2200);
    }
  };

  // Base styling depending on variant
  const variantStyles = {
    ghost: copied
      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200 bg-white',
    dark: copied
      ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40'
      : 'text-slate-300 hover:text-white bg-slate-800/80 hover:bg-slate-800 border border-slate-700',
    light: copied
      ? 'bg-emerald-500 text-white border border-emerald-600'
      : 'bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200 hover:border-slate-300 shadow-xs',
    card: copied
      ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
      : 'text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100 border border-slate-200'
  };

  const sizeStyles = {
    sm: 'px-2.5 py-1.5 text-xs gap-1.5 rounded-lg',
    md: 'px-3.5 py-2 text-sm gap-2 rounded-xl'
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={copied ? 'Link copied to clipboard!' : `Copy link: ${url}`}
      className={`inline-flex items-center font-medium transition-all duration-200 active:scale-95 select-none cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      aria-label={copied ? 'Link copied to clipboard' : 'Copy link to case study'}
    >
      {copied ? (
        <>
          <Check size={size === 'sm' ? 14 : 16} className="text-emerald-500 animate-in zoom-in-50 duration-200" />
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">{copiedLabel}</span>
        </>
      ) : (
        <>
          <Link2 size={size === 'sm' ? 14 : 16} className="transition-transform duration-200 group-hover:scale-110" />
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
};

export default ShareButton;
