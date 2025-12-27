import { useState, useEffect, useRef } from 'react';

const MobileCarousel = ({ 
  children, 
  autoPlayInterval = 4000, 
  enableSwipe = true,
  className = '' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);
  const touchStartRef = useRef(0);
  const touchEndRef = useRef(0);

  const childrenArray = Array.isArray(children) ? children : [children];
  const totalSlides = childrenArray.length;

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
        setTimeout(() => setIsTransitioning(false), 500);
      }
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [totalSlides, autoPlayInterval, isTransitioning]);

  // Swipe handlers
  const handleTouchStart = (e) => {
    if (!enableSwipe) return;
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!enableSwipe) return;
    touchEndRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!enableSwipe || isTransitioning) return;
    
    const diff = touchStartRef.current - touchEndRef.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      setIsTransitioning(true);
      if (diff > 0) {
        // Swipe left - next slide
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else {
        // Swipe right - previous slide
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div 
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {childrenArray.map((child, index) => (
          <div 
            key={index} 
            className="w-full flex-shrink-0 px-4"
          >
            {child}
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {childrenArray.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'w-6 bg-gradient-to-r from-primary via-secondary to-tertiary' 
                : 'w-1.5 bg-white/20'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileCarousel;
