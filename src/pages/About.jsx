import { useEffect, useRef, useState } from 'react';
import Squares from '../components/Squares/Squares';
import CardSwap, { Card } from '../components/CardSwap/CardSwap';
import DecryptedText from '../components/DecryptedText/DecryptedText';
import MobileCarousel from '../components/MobileCarousel/MobileCarousel';
import images from '../assets/images';

const About = () => {
  const aboutRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section ref={aboutRef} className="relative min-h-screen w-full flex items-center justify-center overflow-visible opacity-0 translate-y-10 transition-all duration-1000 ease-out [&.about-visible]:opacity-100 [&.about-visible]:translate-y-0">
      {/* Squares Background Effect */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="#7c3aed"
          squareSize={35}
          hoverFillColor="rgba(124, 58, 237, 0.15)"
        />
      </div>

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="relative z-[10] w-full h-full px-4 pt-20 pb-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift mb-4">
              About Me
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed px-2">
              I'm Mayank Kumar, a Computer Science undergraduate who enjoys exploring technology beyond the classroom.
            </p>
          </div>

          {/* Auto-Carousel */}
          <MobileCarousel autoPlayInterval={4000} enableSwipe={true}>
            {/* Card 1 - LeetCode */}
            <div className="bg-gradient-to-br from-primary/20 to-surface/80 backdrop-blur-md border border-primary/40 rounded-2xl p-6 flex flex-col items-center min-h-[320px]">
              <img src={images.Leetcode} alt="LeetCode Achievements" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">LeetCode Journey</h3>
              <p className="text-primary/80 text-center text-sm">Problem-solving excellence</p>
            </div>

            {/* Card 2 - Clean Code */}
            <div className="bg-gradient-to-br from-secondary/20 to-surface/80 backdrop-blur-md border border-secondary/40 rounded-2xl p-6 flex flex-col items-center min-h-[320px]">
              <img src={images.Clean} alt="Coding" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Clean Code</h3>
              <p className="text-secondary-light/80 text-center text-sm">Writing elegant solutions</p>
            </div>

            {/* Card 3 - Consistency */}
            <div className="bg-gradient-to-br from-tertiary/20 to-surface/80 backdrop-blur-md border border-tertiary/40 rounded-2xl p-6 flex flex-col items-center min-h-[320px]">
              <img src={images.Consistent} alt="Streaks" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Consistency</h3>
              <p className="text-tertiary/80 text-center text-sm">Daily coding streaks</p>
            </div>

            {/* Card 4 - Passionate Developer */}
            <div className="bg-gradient-to-br from-accent/20 to-surface/80 backdrop-blur-md border border-accent/40 rounded-2xl p-6 flex flex-col items-center min-h-[320px]">
              <img src={images.My_Image} alt="Mayank Kumar" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Passionate Developer</h3>
              <p className="text-accent/80 text-center text-sm">Building the future</p>
            </div>

            {/* Card 5 - Always Learning */}
            <div className="bg-gradient-to-br from-warm/20 to-surface/80 backdrop-blur-md border border-warm/40 rounded-2xl p-6 flex flex-col items-center min-h-[320px]">
              <img src={images.Always} alt="Hello" className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Always Learning</h3>
              <p className="text-warm/80 text-center text-sm">Growth mindset</p>
            </div>
          </MobileCarousel>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="relative z-[10] w-full max-w-7xl px-8 flex items-center justify-between gap-12">
          {/* Left Side - Content */}
          <div className="w-1/2 space-y-8">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift">
              About Me
            </h2>
            <div className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              <DecryptedText
                text="I'm Mayank Kumar, a Computer Science undergraduate who enjoys exploring technology beyond the classroom."
                parentClassName="max-w-2xl leading-relaxed mb-10 block"
                speed={20}
                maxIterations={15}
                sequential={true}
                revealDirection="start"
                animateOn="view"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="cursor-target aspect-square rounded-xl backdrop-blur-sm border border-primary/30 bg-gradient-to-br from-primary/10 to-surface/50 hover:border-primary/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 flex flex-col justify-center items-center text-center group relative overflow-hidden opacity-0 translate-y-8 [.about-visible_&]:opacity-100 [.about-visible_&]:translate-y-0 [.about-visible_&]:transition-all [.about-visible_&]:duration-700 [.about-visible_&]:delay-300">
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <img src={images.Creative} alt="Creative" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/60 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-primary mb-1">Creative</h3>
                  <p className="text-xs text-primary-light/80">Beautiful designs</p>
                </div>
              </div>
              <div className="cursor-target aspect-square rounded-xl backdrop-blur-sm border border-secondary/30 bg-gradient-to-br from-secondary/10 to-surface/50 hover:border-secondary/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] transition-all duration-300 flex flex-col justify-center items-center text-center group relative overflow-hidden opacity-0 translate-y-8 [.about-visible_&]:opacity-100 [.about-visible_&]:translate-y-0 [.about-visible_&]:transition-all [.about-visible_&]:duration-700 [.about-visible_&]:delay-500">
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <img src={images.Technical} alt="Technical" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/60 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-secondary-light mb-1">Technical</h3>
                  <p className="text-xs text-secondary/80">Robust solutions</p>
                </div>
              </div>
              <div className="cursor-target aspect-square rounded-xl backdrop-blur-sm border border-tertiary/30 bg-gradient-to-br from-tertiary/10 to-surface/50 hover:border-tertiary/60 hover:scale-105 hover:shadow-[0_0_30px_rgba(244,114,182,0.4)] transition-all duration-300 flex flex-col justify-center items-center text-center group relative overflow-hidden opacity-0 translate-y-8 [.about-visible_&]:opacity-100 [.about-visible_&]:translate-y-0 [.about-visible_&]:transition-all [.about-visible_&]:duration-700 [.about-visible_&]:delay-700">
                <div className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <img src={images.Innovative} alt="Innovative" className="w-full h-full object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/95 via-[#0a0a0f]/60 to-transparent"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-tertiary mb-1">Innovative</h3>
                  <p className="text-xs text-tertiary-light/80">New possibilities</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CardSwap */}
          <div className="w-1/2 relative h-[600px]">
            <CardSwap
              width={400}
              height={500}
              cardDistance={40}
              verticalDistance={50}
              delay={4000}
              pauseOnHover={false}
              skewAmount={5}
              easing="elastic"
            >
              <Card className="bg-gradient-to-br from-primary/20 to-surface/80 backdrop-blur-md border-primary/40 p-8 flex flex-col justify-center items-center">
                <img src={images.Leetcode} alt="LeetCode Achievements" className="w-full h-3/4 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white">LeetCode Journey</h3>
                <p className="text-primary/80 text-center mt-2">Problem-solving excellence</p>
              </Card>

              <Card className="bg-gradient-to-br from-secondary/20 to-surface/80 backdrop-blur-md border-secondary/40 p-8 flex flex-col justify-center items-center">
                <img src={images.Clean} alt="Coding" className="w-full h-3/4 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white">Clean Code</h3>
                <p className="text-secondary-light/80 text-center mt-2">Writing elegant solutions</p>
              </Card>

              <Card className="bg-gradient-to-br from-tertiary/20 to-surface/80 backdrop-blur-md border-tertiary/40 p-8 flex flex-col justify-center items-center">
                <img src={images.Consistent} alt="Streaks" className="w-full h-3/4 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white">Consistency</h3>
                <p className="text-tertiary/80 text-center mt-2">Daily coding streaks</p>
              </Card>

              <Card className="bg-gradient-to-br from-accent/20 to-surface/80 backdrop-blur-md border-accent/40 p-8 flex flex-col justify-center items-center">
                  <img src={images.A1} alt="Mayank Kumar" className="w-full h-3/4 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white">Passionate Developer</h3>
                <p className="text-accent/80 text-center mt-2">Building the future</p>
              </Card>

              <Card className="bg-gradient-to-br from-warm/20 to-surface/80 backdrop-blur-md border-warm/40 p-8 flex flex-col justify-center items-center">
                <img src={images.Always} alt="Hello" className="w-full h-3/4 object-cover rounded-lg mb-4" />
                <h3 className="text-2xl font-bold text-white">Always Learning</h3>
                <p className="text-warm/80 text-center mt-2">Growth mindset</p>
              </Card>
            </CardSwap>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;
