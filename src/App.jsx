import { useEffect } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import BackgroundEffects from './components/BackgroundEffects';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Initialize smooth scrolling
  useSmoothScroll();

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-800 dark:text-gray-200 transition-colors duration-300 antialiased overflow-x-hidden relative">
      {/* Background Effects */}
      <BackgroundEffects />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-6">
        <Hero />
        <About />
        <Education />
        <Work />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;