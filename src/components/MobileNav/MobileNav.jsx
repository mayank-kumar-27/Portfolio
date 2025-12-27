import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const currentPage = navItems.find(item => item.path === location.pathname) || navItems[0];
  const otherPages = navItems.filter(item => item.path !== location.pathname);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav ref={dropdownRef} className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      {/* Capsule Navigation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-5 py-2.5 rounded-full
          bg-surface/60 backdrop-blur-xl border border-white/10
          transition-all duration-300
          ${isOpen ? 'border-primary/40 shadow-lg shadow-primary/10' : ''}
        `}
      >
        {/* Status Dot */}
        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary animate-pulse" />
        
        {/* Current Page Name */}
        <span className="text-sm font-medium text-white">{currentPage.name}</span>
        
        {/* Chevron */}
        <svg 
          className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div 
        className={`
          absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[140px]
          bg-surface/90 backdrop-blur-xl rounded-2xl border border-white/10
          overflow-hidden shadow-xl shadow-black/30
          transition-all duration-300 origin-top
          ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}
        `}
      >
        {otherPages.map((item, index) => (
          <button
            key={item.name}
            onClick={() => handleNavigation(item.path)}
            className={`
              w-full px-5 py-3 text-left text-sm font-medium text-gray-300
              hover:bg-white/5 hover:text-white transition-colors duration-200
              ${index !== otherPages.length - 1 ? 'border-b border-white/5' : ''}
            `}
          >
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
