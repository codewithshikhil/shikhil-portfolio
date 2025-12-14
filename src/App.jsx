
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Awards from '@/components/Awards';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';
import Marquee from '@/components/Marquee';
import ImageGallery from '@/components/ImageGallery';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    document.documentElement.className = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  return (
    <>
      <Helmet>
        <title>Shikhil Saxena - Project Engineer | MERN Developer | DevOps Enthusiast</title>
        <meta name="description" content="Portfolio of Shikhil Saxena, a Project Engineer at C-DAC, specializing in MERN stack, DevOps, and cloud technologies." />
      </Helmet>
      
      <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <motion.div
          className="scroll-progress"
          style={{ scaleX }}
        />

        <div
          className="cursor-glow"
          style={{
            left: cursorPosition.x - 10,
            top: cursorPosition.y - 10,
          }}
        />

        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="floating-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 2}px`,
                height: `${Math.random() * 4 + 2}px`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${Math.random() * 4 + 4}s`,
              }}
            />
          ))}
        </div>

        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        
        <main>
          <Hero />
          <Marquee />
          <About />
          <Projects />
          <ImageGallery />
          <Experience />
          <Awards />
          <Contact />
        </main>

        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
