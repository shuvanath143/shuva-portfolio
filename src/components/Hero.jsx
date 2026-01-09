import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FaDownload } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(titleRef.current, 
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.5"
    )
    .fromTo(descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(buttonsRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.3"
    )
    .fromTo(imageRef.current,
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    );
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/Shuva_Kumar_Nath_resume.pdf';
    link.download = 'Shuva_Kumar_Nath_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center py-20 md:py-0 gap-12 md:gap-8" 
      id="home"
    >
      <div className="flex-1 space-y-6 text-center md:text-left order-2 md:order-1">
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold leading-tight">
          Hi, I'm <br/>
          <span className="text-white">Shuva Kumar Nath</span>
        </h1>
        
        <h2 ref={subtitleRef} className="text-2xl md:text-3xl font-semibold gradient-text">
          Full Stack Developer
        </h2>
        
        <p ref={descriptionRef} className="text-gray-400 max-w-lg mx-auto md:mx-0 text-lg leading-relaxed">
          Crafting High-Performance Web Applications. A self-taught developer focused on writing clean, elegant, and efficient code.
        </p>
        
        <div ref={buttonsRef} className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          {/* Primary CTA - Resume Download */}
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleResumeDownload}
            className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:opacity-90 transition-all duration-300 shadow-lg shadow-primary/30 group relative overflow-hidden"
          >
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <FaDownload className="text-lg group-hover:animate-bounce relative z-10" />
            <span className="relative z-10">Download Resume</span>
          </motion.button>
          
          {/* Secondary CTAs */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#contact')}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors"
          >
            Contact Me
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('#work')}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium hover:bg-white/10 transition-colors"
          >
            View Work
          </motion.button>
        </div>
      </div>
      
      <div className="flex-1 flex justify-center relative order-1 md:order-2">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute w-80 h-80 bg-gradient-to-br from-primary to-secondary rounded-full blur-[80px]"
        />
        
        <motion.div 
          ref={imageRef}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-white/10 overflow-hidden shadow-2xl z-10 group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-20"></div>
          <motion.img 
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.7 }}
            alt="Shuva Kumar Nath Profile Picture" 
            className="w-full h-full object-cover" 
            src="https://i.postimg.cc/GpqtYZJZ/My-image.jpg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;