import { useState, useEffect, useRef } from 'react';
import images from '../assets/images';
import Beams from '../components/Beams/Beams';
import DecryptedText from '../components/DecryptedText/DecryptedText';
import MobileCarousel from '../components/MobileCarousel/MobileCarousel';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, interactive portfolio website built with React and Vite. Features smooth animations, 3D effects, and responsive design.',
      image: images.portfolioImage,
      demoLink: 'https://mayank-kumar-portfolio.vercel.app/',
      technologies: ['React', 'Vite', 'Tailwind CSS', 'Three.js', 'GSAP'],
      colorScheme: 'cyan'
    },
    {
      title: 'EMC',
      description: 'Interactive Educational Calculator for Class 10 Mathematics',
      image: images.EMC,
      demoLink: 'https://emc-calculator.vercel.app/',
      technologies: ['React 18', 'Tailwind CSS', 'Framer Motion', 'EmailJS', 'React Router'],
      colorScheme: 'violet'
    },
    {
      title: 'Disaster Response Training Tool',
      description: 'The Disaster Response Training Tool is an interactive web-based platform designed to enhance disaster preparedness and response training',
      image: images.DRT,
      demoLink: 'https://disaster-response-traning-tool.vercel.app/',
      technologies: ['HTML', 'CSS', 'JS', 'API'],
      colorScheme: 'rose'
    },
    {
      title: 'CoreX-OS',
      description: 'CoreX OS is a web-based OS simulator with an interactive React frontend that demonstrates core operating system concepts like file systems, memory management, CPU scheduling, and process synchronization.',
      image: images.core,
      demoLink: 'https://github.com/mayank-kumar-27/CoreX-OS',
      technologies: ['React', 'Python', 'Bootstrap', 'Chart.js', 'Context API'],
      colorScheme: 'emerald'
    },
    {
      title: 'Voting Simulation Systems',
      description: 'Voting Simulation System is a C-based command-line program that simulates voting for six parties, allowing users to cast votes, securely view results with a PIN, and demonstrating basic real-world voting logic.',
      image: images.vm,
      demoLink: 'https://github.com/mayank-kumar-27/Voting-Machine',
      technologies: ['C', 'CLI', 'Voting Simulation'],
      colorScheme: 'amber'
    }
  ];

  useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [projects.length, isMobile]);

  const colorMap = {
    cyan: {
      bg: 'from-primary/20 to-surface/50',
      border: 'border-primary/40',
      gradient: 'from-primary to-primary-light',
      text: 'text-primary',
      glow: 'rgba(0, 212, 255, 0.3)'
    },
    violet: {
      bg: 'from-secondary/20 to-surface/50',
      border: 'border-secondary/40',
      gradient: 'from-secondary to-secondary-light',
      text: 'text-secondary-light',
      glow: 'rgba(124, 58, 237, 0.3)'
    },
    rose: {
      bg: 'from-tertiary/20 to-surface/50',
      border: 'border-tertiary/40',
      gradient: 'from-tertiary to-tertiary-light',
      text: 'text-tertiary',
      glow: 'rgba(244, 114, 182, 0.3)'
    },
    emerald: {
      bg: 'from-accent/20 to-surface/50',
      border: 'border-accent/40',
      gradient: 'from-accent to-accent-light',
      text: 'text-accent',
      glow: 'rgba(16, 185, 129, 0.3)'
    },
    amber: {
      bg: 'from-warm/20 to-surface/50',
      border: 'border-warm/40',
      gradient: 'from-warm to-warm-light',
      text: 'text-warm',
      glow: 'rgba(245, 158, 11, 0.3)'
    }
  };

  // Mobile Project Card Component
  const MobileProjectCard = ({ project }) => {
    const colors = colorMap[project.colorScheme];
    return (
      <div className={`bg-gradient-to-br ${colors.bg} backdrop-blur-md border ${colors.border} rounded-2xl p-5 flex flex-col min-h-[380px] w-full`}>
        {/* Project Image */}
        <div className={`w-full h-32 rounded-xl overflow-hidden mb-4 ring-2 ${colors.border.replace('border-', 'ring-')}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-white mb-2 text-center">{project.title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-xs leading-relaxed text-center mb-4 flex-1">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-1.5 mb-4">
          {project.technologies.slice(0, 4).map((tech, idx) => (
            <span
              key={idx}
              className={`px-2 py-1 text-xs font-medium bg-gradient-to-r ${colors.gradient} bg-opacity-10 text-white rounded-full border ${colors.border}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Demo Button - Only interactive element */}
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r ${colors.gradient} rounded-full text-white text-sm font-semibold active:scale-95 transition-transform`}
        >
          <span>View Demo</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
    );
  };

  return (
    <section className="relative min-h-screen w-full flex items-center overflow-visible bg-gradient-to-br from-[#0a0a0f] via-surface/20 to-[#0a0a0f] py-20">
      {/* Beams Background */}
      <div className="absolute inset-0 z-[1]">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#7c3aed"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={45}
        />
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-tertiary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="relative z-10 w-full h-full px-4 pt-16 pb-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift mb-4">
              My Projects
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed px-2">
              Explore my latest work and creative solutions. Each project showcases my passion for building innovative applications.
            </p>
          </div>

          {/* Project Carousel */}
          <MobileCarousel autoPlayInterval={4000} enableSwipe={true}>
            {projects.map((project, index) => (
              <MobileProjectCard key={index} project={project} />
            ))}
          </MobileCarousel>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center gap-16 pointer-events-none">
          {/* Left Section - Title */}
          <div className="w-full lg:w-1/3 space-y-6 pointer-events-auto">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift mb-4">
                My Projects
              </h1>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                <DecryptedText
                  text="Explore my latest work and creative solutions. Each project showcases my passion for building innovative and functional applications."
                  className="text-base sm:text-lg md:text-xl text-gray-400"
                  parentClassName="max-w-2xl leading-relaxed mb-10 block"
                  speed={20}
                  maxIterations={15}
                  sequential={true}
                  revealDirection="start"
                  animateOn="view"
                />
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-3 pt-4">
              <span className="text-gray-500 text-sm font-medium">
                {currentIndex + 1} / {projects.length}
              </span>
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1 rounded-full transition-all duration-500 ${currentIndex === index
                      ? 'w-12 bg-gradient-to-r from-primary via-secondary to-tertiary'
                      : 'w-6 bg-white/20'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Stacked Cards with Details */}
          <div ref={carouselRef} className="w-full lg:w-2/3 relative h-[650px] flex items-center justify-end">
            <div className="relative w-full max-w-[500px] h-full flex items-center justify-end pr-8">
              {projects.map((project, index) => {
                const position = (index - currentIndex + projects.length) % projects.length;
                const isActive = position === 0;
                const colors = colorMap[project.colorScheme];

                const getTransform = (pos) => {
                  if (pos === 0) return 'translate(-50%, -50%) translateX(0px)';
                  if (pos === 1) return 'translate(-50%, -50%) translateX(180px)';
                  if (pos === 2) return 'translate(-50%, -50%) translateX(360px)';
                  if (pos === 3) return 'translate(-50%, -50%) translateX(540px)';
                  if (pos === 4) return 'translate(-50%, -50%) translateX(720px)';
                  return 'translate(-50%, -50%) translateX(900px)';
                };

                return (
                  <div
                    key={index}
                    className={`group absolute top-1/2 left-0 w-[400px] transition-all duration-700 ease-out rounded-3xl overflow-hidden border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-md shadow-2xl`}
                    style={{
                      zIndex: projects.length - position,
                      transform: getTransform(position) + ` scale(${position === 0 ? 1 : 0.85 - position * 0.05})`,
                      opacity: position < 5 ? (position === 0 ? 1 : 0.6 - position * 0.1) : 0,
                      filter: position > 0 ? `blur(${position * 1.2}px)` : 'blur(0px)',
                      pointerEvents: isActive ? 'auto' : 'none',
                      boxShadow: isActive ? `0 0 40px ${colors.glow}` : 'none'
                    }}
                  >
                    {/* Decorative Blobs */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-tertiary/10 to-warm/10 rounded-full blur-2xl"></div>

                    <div className="relative flex flex-col items-center h-full p-6 min-h-[580px]">
                      {/* Square Project Image */}
                      <div className="flex justify-center mb-4">
                        <div className={`relative w-28 h-28 rounded-2xl overflow-hidden ring-2 ${colors.border.replace('border-', 'ring-')} transition-all duration-500 ${isActive ? 'scale-100' : 'scale-90'}`}
                          style={{ transitionDelay: isActive ? '200ms' : '0ms' }}>
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </div>
                      </div>

                      {/* Icon Circle */}
                      <div className="flex justify-center mb-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${colors.gradient} rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${isActive ? 'rotate-0 scale-100' : 'rotate-12 scale-90'}`}>
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                          </svg>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="text-center mb-4 flex-1 flex items-center justify-center px-3">
                        <p className="text-gray-400 text-sm leading-relaxed italic">
                          {project.description}
                        </p>
                      </div>

                      {/* Title */}
                      <div className="text-center mb-3">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                      </div>

                      {/* Technologies Grid */}
                      <div className="w-full mb-4 px-4">
                        <div className="flex flex-wrap justify-center gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-3 py-1.5 text-xs font-bold bg-gradient-to-r ${colors.gradient} bg-opacity-10 text-white rounded-full border ${colors.border} transition-transform duration-300`}
                              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.25)' }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-center gap-4 mb-4 text-gray-500 text-xs">
                        <div className="flex items-center gap-1.5 group-hover:text-gray-400 transition-colors">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <span className="font-medium">Featured</span>
                        </div>
                        <div className="w-px h-4 bg-surface"></div>
                        <div className="flex items-center gap-1.5 group-hover:text-gray-400 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-medium">2025</span>
                        </div>
                      </div>

                      {/* Demo Button */}
                      {isActive && (
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r ${colors.gradient} rounded-full text-white text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
                        >
                          <span>View Demo</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      )}
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl overflow-hidden pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1500"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
