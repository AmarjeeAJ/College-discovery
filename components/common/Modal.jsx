'use client';

import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, children, maxWidth = 'max-w-lg' }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-black/60 backdrop-blur-[2px] flex items-center justify-center p-4">
      <div
        className={`relative w-full ${maxWidth} bg-white rounded border border-brand-border shadow-xl transform transition-all my-8`}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-brand-border bg-brand-teal-light/40">
          <h3 className="text-lg font-bold text-brand-dark tracking-tight">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded text-brand-gray hover:text-brand-dark hover:bg-brand-border/40 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
}
