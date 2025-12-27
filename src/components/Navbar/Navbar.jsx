import { useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Skills', path: '/skills' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-2 bg-surface/30 backdrop-blur-xl rounded-full px-4 py-2 border border-white/5">
        {navItems.map((item) => (
          <button
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`
              cursor-target
              relative flex items-center gap-2 px-6 py-2.5 rounded-full font-medium text-base
              transition-all duration-300 ease-out overflow-hidden
              group
              ${
                isActive(item.path)
                  ? 'bg-gradient-to-r from-primary via-secondary to-tertiary text-white shadow-lg shadow-primary/30 scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/5 hover:scale-105'
              }
            `}
          >
            {/* Shiny hover effect overlay */}
            {!isActive(item.path) && (
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
            )}
            
            {/* Status Dot - Only shows on active page */}
            {isActive(item.path) && (
              <span className="w-2 h-2 rounded-full bg-white animate-pulse relative z-10" />
            )}
            <span className="relative z-10">{item.name}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
