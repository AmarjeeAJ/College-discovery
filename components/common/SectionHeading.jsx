import { cn } from '@/lib/utils/cn';

/**
 * Editorial Section Heading
 * Clean typography adhering to College Leadership design system.
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left', // 'left', 'center'
  className = '',
  action
}) {
  return (
    <div
      className={cn(
        'mb-8 sm:mb-12',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : 'flex flex-col md:flex-row md:items-end md:justify-between gap-4',
        className
      )}
    >
      <div className={align === 'center' ? '' : 'max-w-3xl'}>
        {eyebrow && (
          <div className={cn("mb-2 text-xs font-bold uppercase tracking-wider text-brand-teal", align === 'center' && 'text-center')}>
            {eyebrow}
          </div>
        )}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-brand-dark leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2.5 text-sm sm:text-base text-brand-gray leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
      {action && (
        <div className={align === 'center' ? 'mt-4 flex justify-center' : 'shrink-0 mt-2 md:mt-0'}>
          {action}
        </div>
      )}
    </div>
  );
}
