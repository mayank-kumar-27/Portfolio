import { useState, useEffect, useRef } from 'react';
import GridMotion from '../components/GridMotion/GridMotion';
import LiquidEther from '../components/LiquidEther/LiquidEther';
import icons from '../assets/icons';

const Skills = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const scrollContainerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll for mobile parallax effect
  useEffect(() => {
    if (!isMobile) return;
    
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        setScrollY(scrollContainerRef.current.scrollTop);
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [isMobile]);

  const skills = [
    { name: 'HTML', url: icons.html },
    { name: 'CSS', url: icons.css },
    { name: 'React', url: icons.react },
    { name: 'Git', url: icons.git },
    { name: 'GitHub', url: icons.github },
    { name: 'VS Code', url: icons.vscode },
    { name: 'Linux', url: icons.linux },
    { name: 'C', url: icons.c },
    { name: 'C++', url: icons.cpp },
    { name: 'Python', url: icons.python },
    { name: 'Java', url: icons.java },
    { name: 'JavaScript', url: icons.javascript },
    { name: 'Pandas', url: icons.pandas },
    { name: 'NumPy', url: icons.numpy },
    { name: 'Matplotlib', url: icons.matplotlib },
    { name: 'SQL', url: icons.sql },
    { name: 'MongoDB', url: icons.mongodb },
    { name: 'Canva', url: icons.canva },
    { name: 'Notion', url: icons.notion },
    { name: 'Node.js', url: icons.nodejs },
    { name: 'TypeScript', url: icons.typescript },
    { name: 'Docker', url: icons.docker },
    { name: 'TensorFlow', url: icons.tensorflow },
    { name: 'Figma', url: icons.figma },
    { name: 'Express', url: icons.express },
    { name: 'PostgreSQL', url: icons.postgresql },
    { name: 'Windows', url: icons.windows },
    { name: 'Tailwind CSS', url: icons.tailwindcss },
  ];

  // Mobile Skill Tile Component with scroll-based motion
  const MobileSkillTile = ({ skill, index }) => {
    // Calculate parallax offset based on scroll position and index
    const parallaxOffset = Math.sin((scrollY * 0.01) + (index * 0.5)) * 8;
    
    return (
      <div 
        className="relative w-full aspect-square rounded-xl bg-gradient-to-br from-surface to-background border border-white/10 flex flex-col items-center justify-center transition-all duration-300"
        style={{
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        {/* Icon */}
        {skill.url && (
          <img 
            src={skill.url} 
            alt={skill.name} 
            className="w-12 h-12 object-contain mb-2 drop-shadow-[0_0_8px_rgba(124,58,237,0.3)]" 
          />
        )}
        {/* Skill Name - Centered */}
        <span className="text-sm font-medium text-white text-center px-2">
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen w-full overflow-visible">
      {/* LiquidEther Background Effect */}
      <div className="absolute inset-0 z-[1]">
        <LiquidEther />
      </div>
      
      {/* Mobile Layout */}
      {isMobile ? (
        <div 
          ref={scrollContainerRef}
          className="relative z-[10] w-full h-full pt-20 pb-10 px-4"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift">
              Skills
            </h1>
          </div>

          {/* Skills Grid - Vertical Stack, Full Width */}
          <div className="grid grid-cols-3 gap-3 w-full">
            {skills.map((skill, index) => (
              <MobileSkillTile key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <>
          <div className="absolute inset-0 z-[2] pointer-events-none">
            <GridMotion items={skills} gradientColor="transparent" />
          </div>
          
          {/* Skills Heading Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[10]">
            <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift">
              Skills
            </h1>
          </div>
        </>
      )}
    </section>
  );
};

export default Skills;
