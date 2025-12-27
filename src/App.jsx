import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Hero from './pages/Hero'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Navbar from './components/Navbar/Navbar'
import MobileNav from './components/MobileNav/MobileNav'
import TargetCursor from './components/TargetCursor/TargetCursor'
import Loader from './components/Loader/Loader'
import MobileAlert from './components/MobileAlert/MobileAlert'

// Hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile;
};

function AppContent() {
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const [showMobileAlert, setShowMobileAlert] = useState(() => {
    if (typeof window === 'undefined') return false;
    const dismissed = sessionStorage.getItem('mobileAlertDismissed');
    return !dismissed && window.innerWidth <= 768;
  });

  const [showLoader, setShowLoader] = useState(() => {
    // Check if we're on home page and haven't shown loader yet in this session
    const isHomePage = window.location.pathname === '/';
    const hasSeenLoader = sessionStorage.getItem('loaderShown');
    // On mobile, only show loader after alert is dismissed
    const mobileAlertDismissed = sessionStorage.getItem('mobileAlertDismissed');
    const isMobileDevice = window.innerWidth <= 768;
    if (isMobileDevice && !mobileAlertDismissed) {
      return false; // Don't show loader yet on mobile until alert is dismissed
    }
    return isHomePage && !hasSeenLoader;
  });

  useEffect(() => {
    // If loader was shown, mark it in sessionStorage
    if (showLoader) {
      sessionStorage.setItem('loaderShown', 'true');
    }
  }, [showLoader]);

  const handleLoadComplete = () => {
    setShowLoader(false);
  };

  const handleMobileAlertDismiss = () => {
    setShowMobileAlert(false);
    // Now show the loader on mobile
    const isHomePage = window.location.pathname === '/';
    const hasSeenLoader = sessionStorage.getItem('loaderShown');
    if (isHomePage && !hasSeenLoader) {
      setShowLoader(true);
    }
  };

  // Show mobile alert first on mobile devices
  if (showMobileAlert && isMobile) {
    return <MobileAlert onDismiss={handleMobileAlertDismiss} />;
  }

  if (showLoader) {
    return <Loader onLoadComplete={handleLoadComplete} isMobile={isMobile} />;
  }

  return (
    <div className={`w-full min-h-screen bg-[#0a0a0f] ${isMobile ? 'overflow-y-auto overflow-x-hidden' : 'h-screen overflow-hidden'}`}>
      {!isMobile && <TargetCursor />}
      {isMobile ? <MobileNav /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
