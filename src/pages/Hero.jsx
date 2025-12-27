import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GridDistortion from '../components/GridDistortion/GridDistortion';
import SplitText from '../components/SplitText/SplitText';
import TextType from '../components/TextType/TextType';
import Shuffle from '../components/Shuffle/Shuffle';
import DecryptedText from '../components/DecryptedText/DecryptedText';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import image from '../assets/images/Hero.jpg';
import images from '../assets/images';

const Hero = () => {
  const heroRef = useRef(null);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hero-visible');
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-visible opacity-0 translate-y-5 transition-all duration-800 ease-out [&.hero-visible]:opacity-100 [&.hero-visible]:translate-y-0">
      {/* GridDistortion Background Effect */}
      <div className="absolute inset-0 z-[1]">
        <GridDistortion
          grid={20}
          mouse={0.25}
          strength={0.2}
          relaxation={0.9}
          imageSrc={image}
        />
      </div>

      {/* Hero Content - Mobile Layout */}
      {isMobile ? (
        <div className="relative z-[10] w-full h-full px-4 pt-20 pb-8 flex flex-col items-center justify-start">
          {/* Name */}
          <div className="text-center mb-6 animate-fade-in-up">
            <h1 className="flex flex-col gap-2">
              <span className="text-lg font-bold text-gray-500 tracking-wider">
                Hello there, I'm
              </span>
              <span className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift">
                Mayank Kumar
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="text-center mb-6 animate-fade-in-up [animation-delay:300ms]">
            <p className="text-base text-gray-300 mb-3">
              a Computer Science undergraduate
            </p>
            <p className="text-sm text-gray-400 leading-relaxed px-2">
              Currently exploring Data Science, Machine Learning fundamentals, and full-stack development.
            </p>
          </div>

          {/* Static Image */}
          <div className="mb-8 animate-fade-in-up [animation-delay:500ms]">
            <div className="w-48 h-48 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-lg shadow-primary/20">
              <img 
                src={images.My_Image} 
                alt="Mayank Kumar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Buttons - Stacked Vertically */}
          <div className="flex flex-col gap-3 w-full max-w-xs animate-fade-in-up [animation-delay:700ms]">
            <button 
              onClick={() => navigate('/projects')} 
              className="w-full px-6 py-3.5 text-sm font-semibold rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white shadow-[0_4px_20px_rgba(0,212,255,0.4)] transition-all duration-300 active:scale-95"
            >
              View My Work
            </button>
            <button 
              onClick={() => navigate('/contact')} 
              className="w-full px-6 py-3.5 text-sm font-semibold rounded-full bg-transparent text-primary border-2 border-primary/50 transition-all duration-300 active:scale-95 active:bg-primary/10"
            >
              Get In Touch
            </button>
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="relative z-[10] w-full max-w-7xl px-8 flex items-center justify-between gap-12 pointer-events-none">
          {/* Left Side - Text Content */}
          <div className="w-1/2 animate-fade-in-up [animation-delay:300ms]">
            <div className="space-y-6">
              <h1 className="flex flex-col gap-2 text-left">
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-500 tracking-wider text-left">
                  Hello there, I'm
                </span>
                <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift">
                  Mayank Kumar
                </span>
              </h1>
              <div className="animate-fade-in-up [animation-delay:1200ms]">
                <TextType
                  text="a Computer Science undergraduate"
                  as="p"
                  className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 tracking-wide"
                  typingSpeed={60}
                  initialDelay={1200}
                  loop={false}
                  showCursor={false}
                  startOnVisible={false}
                />
              </div>
              <div className="animate-fade-in-up [animation-delay:1200ms]">
                <DecryptedText
                  text="Currently exploring Data Science, Machine Learning fundamentals, and full-stack development, while strengthening problem-solving and core computer science concepts."
                  className="text-base sm:text-lg md:text-xl text-gray-400"
                  parentClassName="max-w-2xl leading-relaxed mb-10 block"
                  speed={20}
                  maxIterations={15}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                />
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-4 flex-wrap animate-fade-in-up [animation-delay:1800ms]">
                <button 
                  onClick={() => navigate('/projects')} 
                  className="cursor-target px-8 py-4 text-base font-semibold rounded-full bg-gradient-to-r from-primary via-secondary to-tertiary text-white shadow-[0_4px_20px_rgba(0,212,255,0.4)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(124,58,237,0.5)] pointer-events-auto"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => navigate('/contact')} 
                  className="cursor-target px-8 py-4 text-base font-semibold rounded-full bg-transparent text-primary border-2 border-primary/50 transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:-translate-y-0.5 pointer-events-auto"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - ProfileCard */}
          <div className="w-1/2 flex items-center justify-center animate-fade-in-up [animation-delay:600ms] pointer-events-auto">
            <ProfileCard
              avatarUrl={images.My_Image}
              miniAvatarUrl={images.My_Image}
              name="Mayank Kumar"
              title="Full Stack Developer"
              handle="mayank"
              status="Available"
              contactText="Contact Me"
              enableTilt={true}
              behindGlowEnabled={true}
              behindGlowColor="rgba(124, 58, 237, 0.6)"
              onContactClick={() => {
                console.log('Contact button clicked');
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
