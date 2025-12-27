import { useState, useEffect } from 'react';
import Plasma from '../components/Plasma/Plasma';
import ContactForm from '../components/ContactForm/ContactForm';
import Dock from '../components/Dock/Dock';
import TextType from '../components/TextType/TextType';

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const socialLinks = [
    {
      label: 'Instagram',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      onClick: () => window.open('https://www.instagram.com/kumar_mayank.27/', '_blank'),
      className: 'bg-gradient-to-r from-tertiary to-rose'
    },
    {
      label: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      onClick: () => window.open('https://www.linkedin.com/in/mayankkumarupes/', '_blank'),
      className: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
      label: 'GitHub',
      icon: (
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      onClick: () => window.open('https://github.com/mayank-kumar-27', '_blank'),
      className: 'bg-gradient-to-r from-surface to-surface-light'
    },
    {
      label: 'Email',
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      onClick: () => window.location.href = 'mailto:mayankkumar.270607@gmail.com',
      className: 'bg-gradient-to-r from-warm to-rose'
    }
  ];

  const dockItems = socialLinks.map(link => ({
    ...link,
    className: link.className + ' border-0'
  }));

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-visible pt-32 pb-20">
      {/* Plasma Background */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Plasma color="#7c3aed" speed={1} opacity={0.6} mouseInteractive={false} />
      </div>

      {/* Mobile Layout */}
      {isMobile ? (
        <div className="relative z-[10] w-full px-4 pt-4 pb-8 flex flex-col touch-pan-y">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift mb-3">
              Get In Touch
            </h1>
            <p className="text-sm text-gray-300 leading-relaxed px-2">
              I'm always open to discussing new projects, creative ideas, or opportunities. Let's create something amazing together!
            </p>
          </div>

          {/* Social Links - Single Horizontal Row with Small Rounded-Square Buttons */}
          <div className="flex flex-row items-center justify-center gap-4 mb-6 touch-none">
            {socialLinks.map((link, index) => (
              <button
                key={index}
                onClick={link.onClick}
                className={`w-10 h-10 rounded-lg ${link.className} flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md touch-manipulation`}
                aria-label={link.label}
              >
                <div className="w-5 h-5 flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                  {link.icon}
                </div>
              </button>
            ))}
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      ) : (
        /* Desktop Layout */
        <div className="relative z-[10] w-full max-w-7xl mx-auto px-8 flex items-center justify-between gap-12">
          {/* Left Section - Content */}
          <div className="w-1/2 flex flex-col justify-center items-start">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-tertiary bg-clip-text text-transparent animate-gradient-shift mb-6">
                Get In Touch
              </h1>
              <TextType
                text="I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!"
                as="p"
                className="text-base sm:text-lg md:text-xl text-gray-300 tracking-wide"
                typingSpeed={20}
                initialDelay={1200}
                loop={false}
                showCursor={false}
                startOnVisible={false}
              />
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-2 gap-4 mb-8 w-full">
              <div className="group relative bg-gradient-to-br from-primary/20 to-surface/50 backdrop-blur-sm border border-primary/30 rounded-xl p-4 hover:from-primary/30 hover:to-surface/60 hover:scale-105 hover:border-primary/50 transition-all duration-300 overflow-hidden shadow-lg shadow-primary/20">
                <div className="relative z-10">
                  <svg className="w-8 h-8 text-primary mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-500">Response Time</p>
                  <p className="text-white font-semibold">Within 24hrs</p>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-secondary/20 to-surface/50 backdrop-blur-sm border border-secondary/30 rounded-xl p-4 hover:from-secondary/30 hover:to-surface/60 hover:scale-105 hover:border-secondary/50 transition-all duration-300 overflow-hidden shadow-lg shadow-secondary/20">
                <div className="relative z-10">
                  <svg className="w-8 h-8 text-secondary-light mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="text-white font-semibold">Available Remote</p>
                </div>
              </div>
            </div>

            {/* Social Links - Dock */}
            <div className="relative h-24 w-full flex items-center justify-center">
              <Dock items={dockItems} />
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-1/2 flex items-center justify-center relative">
            {/* Decorative elements around form */}
            <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-primary/30 rounded-xl rotate-6 pointer-events-none"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-secondary/30 rounded-xl -rotate-6 pointer-events-none"></div>

            <ContactForm />
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
