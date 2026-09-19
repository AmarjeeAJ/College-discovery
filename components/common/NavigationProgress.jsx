'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export default function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // When pathname or searchParams change, navigation has completed!
  useEffect(() => {
    if (loading) {
      setProgress(100);
      const timer = setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [pathname, searchParams]);

  // Intercept click on internal links to start progress
  useEffect(() => {
    const handleClick = (e) => {
      const anchor = e.target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href');
      const target = anchor.getAttribute('target');

      // Ignore external, anchor hash-only, mailto, tel, or new tab links
      if (
        !href ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('javascript:') ||
        target === '_blank' ||
        e.ctrlKey ||
        e.metaKey ||
        e.shiftKey
      ) {
        return;
      }

      // If it's a relative URL or same-origin URL
      try {
        const url = new URL(href, window.location.href);
        if (url.origin === window.location.origin) {
          if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
            setLoading(true);
            setProgress(30);

            // Increment progress smoothly
            const progressTimer = setTimeout(() => {
              setProgress(70);
            }, 100);

            return () => clearTimeout(progressTimer);
          }
        }
      } catch (err) {
        // invalid URL, ignore
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (!loading && progress === 0) return null;

  return (
    <>
      {/* Top Animated Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none">
        <div
          className="h-[3px] bg-gradient-to-r from-brand-teal via-cyan-400 to-brand-teal transition-all duration-200 ease-out shadow-[0_0_8px_rgba(7,155,181,0.8)]"
          style={{
            width: `${progress}%`,
            opacity: progress === 100 ? 0 : 1,
            transitionProperty: 'width, opacity',
          }}
        />
      </div>

      {/* Discrete Corner Spinner Badge (Appears ONLY during page navigation) */}
      <div
        className={`fixed top-3.5 right-4 z-[9999] pointer-events-none transition-all duration-200 ${
          loading && progress < 100 ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-2 scale-90'
        }`}
      >
        <div className="flex items-center gap-2 bg-brand-black/95 backdrop-blur-md text-white px-3 py-1.5 rounded-full shadow-xl border border-brand-teal/40">
          <div className="w-3.5 h-3.5 border-2 border-brand-teal/30 border-t-brand-teal rounded-full animate-spin" />
          <span className="text-[11px] font-semibold tracking-wide text-gray-200">
            Loading...
          </span>
        </div>
      </div>
    </>
  );
}
