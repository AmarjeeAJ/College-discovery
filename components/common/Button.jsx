import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

/**
 * Editorial Rectangular Button Component
 * Strictly avoids pill/capsule shapes per design guidelines.
 * Uses 2px - 6px border radius with sharp high-contrast typography.
 */
const Button = forwardRef(({
  children,
  to,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline', 'ghost', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  icon: Icon,
  iconPosition = 'left',
  disabled = false,
  type = 'button',
  onClick,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium tracking-tight whitespace-nowrap transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-teal disabled:opacity-50 disabled:cursor-not-allowed select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 rounded-sm gap-1.5",
    md: "text-sm px-4 py-2 rounded gap-2",
    lg: "text-base px-6 py-3 rounded gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-brand-teal text-white hover:bg-brand-teal-dark border border-brand-teal-dark",
    secondary: "bg-brand-black text-white hover:bg-brand-dark border border-brand-black",
    outline: "bg-white text-brand-dark border border-brand-border hover:border-brand-teal hover:text-brand-teal-dark hover:bg-brand-teal-light/40",
    ghost: "text-brand-dark hover:bg-brand-teal-light/50 hover:text-brand-teal",
    danger: "bg-red-600 text-white hover:bg-red-700 border border-red-700"
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0" />}
    </>
  );

  const target = to || href;
  if (target) {
    if (target.startsWith('http') || target.startsWith('mailto') || target.startsWith('tel')) {
      return (
        <a href={target} className={combinedClasses} ref={ref} target="_blank" rel="noopener noreferrer" {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link href={target} className={combinedClasses} ref={ref} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      ref={ref}
      disabled={disabled}
      onClick={onClick}
      className={combinedClasses}
      {...props}
    >
      {content}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
