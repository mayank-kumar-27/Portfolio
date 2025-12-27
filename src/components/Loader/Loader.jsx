import { useState, useEffect } from 'react';
import { GridScan } from '../GridScan/GridScan';
import './Loader.css';

const Loader = ({ onLoadComplete, isMobile = false }) => {
  const [progress, setProgress] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState('Initializing...');
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 4000; // 4 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    const increment = 100 / steps;

    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += increment;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(timer);
        setLoadingPhase('Complete!');
        
        // Trigger exit animation
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onLoadComplete) onLoadComplete();
          }, 800);
        }, 300);
      } else {
        // Update loading phase based on progress
        if (currentProgress < 30) {
          setLoadingPhase('Initializing...');
        } else if (currentProgress < 60) {
          setLoadingPhase('Loading assets...');
        } else if (currentProgress < 90) {
          setLoadingPhase('Almost there...');
        } else {
          setLoadingPhase('Finalizing...');
        }
      }

      setProgress(Math.min(currentProgress, 100));
    }, interval);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  return (
    <div className={`loader-container ${isExiting ? 'loader-exit' : ''}`}>
      {/* GridScan Background */}
      <div className="absolute inset-0 z-0">
        <GridScan 
          sensitivity={0.55}
          lineThickness={1}
          linesColor="#1a1a2e"
          gridScale={0.1}
          scanColor="#FF9FFC"
          scanOpacity={0.4}
          enablePost
          bloomIntensity={0.6}
          chromaticAberration={0.002}
          noiseIntensity={0.01}

        />
      </div>

      {/* Loading Content */}
      <div className="loader-content">
        {/* Brand Name */}
        <div className="brand-container">
          <h1 className="brand-name">Mayank Kumar</h1>
          <p className="brand-subtitle">Portfolio</p>
        </div>

        {/* Progress Bar Container */}
        <div className="progress-container">
          {/* Progress Bar */}
          <div className="progress-bar-wrapper">
            <div className="progress-bar-bg">
              <div 
                className="progress-bar-fill"
                style={{ width: `${progress}%` }}
              >
              </div>
            </div>
          </div>
        </div>

        {/* Loading Dots Animation */}
        <div className="loading-dots">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      {/* Corner Decorations */}
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>
  );
};

export default Loader;
