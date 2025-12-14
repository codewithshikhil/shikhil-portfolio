
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Hero = () => {
  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/public/Shikhil_Saxena_2025.pdf";
  link.download = "Shikhil_Saxena_2025.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const handleContactMe = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  const nameShikhil = "Shikhil".split("");
  const nameSaxena = "Saxena".split("");

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.8 }} 
            className="space-y-8"
          >
            <motion.div 
              initial="hidden" 
              animate="visible"
              transition={{ staggerChildren: 0.1 }} 
              className="space-y-4"
            >
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-text-animated">
                  {nameShikhil.map((char, index) => (
                    <motion.span key={index} custom={index} variants={nameVariants} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
                <br />
                <span className="text-white">
                  {nameSaxena.map((char, index) => (
                    <motion.span key={index} custom={index + nameShikhil.length} variants={nameVariants} className="inline-block">
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="text-xl lg:text-2xl text-gray-300 font-light"
              >
                Project Engineer @C-DAC, MeitY, India | Full Stack Developer | Aspiring DevOps Engineer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }} 
                className="text-lg text-gray-400 max-w-lg leading-relaxed"
              >
                Crafting scalable, secure, and high-performance applications for the future of technology.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 1.4, duration: 0.5 }} 
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button onClick={handleContactMe} size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
                Get In Touch
              </Button>
              
              <Button onClick={handleDownloadCV} variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full font-medium transition-all duration-300">
                <Download size={18} className="mr-2" />
                Download CV
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }} 
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6" />
              
              <motion.div 
                whileHover={{ scale: 1.05, rotate: -2 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }} 
                className="relative z-10 rounded-3xl overflow-hidden glass-effect"
              >
                <img alt="Portrait of Shikhil Saxena" className="w-full h-auto object-cover" src="./public/profile.jpeg" />
              </motion.div>

              <motion.div 
                animate={{ y: [-10, 10, -10], x: [5, -5, 5] }} 
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl" 
              />
              
              <motion.div 
                animate={{ y: [10, -10, 10], x: [-5, 5, -5] }} 
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl" 
              />
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 1.6 }} 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }} 
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
            className="flex flex-col items-center text-gray-400"
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
