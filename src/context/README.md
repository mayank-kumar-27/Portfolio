// Example: How to use Navigation Context in any page component

import { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';

const ExamplePage = () => {
  const { setActiveNav } = useNavigation();

  // Set active nav when component mounts
  useEffect(() => {
    setActiveNav('About'); // or 'Projects', 'Skills', 'Contact', etc.
  }, [setActiveNav]);

  return (
    <div>
      {/* Your page content */}
    </div>
  );
};

export default ExamplePage;
