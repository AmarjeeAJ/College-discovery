import { cn } from '../../utils/cn';

/**
 * Editorial Badge / Tag Component
 * Clean rectangular or slightly rounded pill for status indicators/tags.
 */
export default function Badge({
  children,
  variant = 'teal', // 'teal', 'dark', 'outline', 'warning', 'success'
  size = 'sm',
  className = ''
}) {
  const sizeStyles = {
    xs: 'text-[11px] px-2 py-0.5 rounded-sm font-medium',
    sm: 'text-xs px-2.5 py-1 rounded font-medium',
    md: 'text-sm px-3 py-1.5 rounded font-medium'
  };

  const variantStyles = {
    teal: 'bg-brand-teal-light text-brand-teal-dark border border-brand-teal/20',
    dark: 'bg-brand-dark text-white',
    outline: 'bg-white text-brand-dark border border-brand-border',
    success: 'bg-emerald-50 text-emerald-800 border border-emerald-200',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200'
  };

  return (
    <span className={cn('inline-flex items-center gap-1.5 tracking-tight', sizeStyles[size], variantStyles[variant], className)}>
      {children}
    </span>
  );
}
