import { useState, useEffect } from 'react';

const MobileAlert = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleDismiss = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('mobileAlertDismissed', 'true');
      if (onDismiss) onDismiss();
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#0a0a0f]/98 backdrop-blur-xl transition-opacity duration-300 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
    >
      {/* Decorative background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-tertiary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 py-12 max-w-sm mx-4 text-center">
        {/* Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent mb-4">
          Desktop Recommended
        </h2>

        {/* Message */}
        <p className="text-gray-400 text-base leading-relaxed mb-10">
          For the best experience, please open this website on a laptop or desktop.
        </p>

        {/* Button */}
        <button
          onClick={handleDismiss}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-surface/80 to-surface-light/80 border border-white/10 text-gray-300 font-medium text-sm transition-all duration-300 hover:border-primary/30 hover:text-white active:scale-95"
        >
          Ruin My Experience
        </button>
      </div>
    </div>
  );
};

export default MobileAlert;
