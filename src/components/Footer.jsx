
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shikhilsaxena', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/codewithshikhil', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/_pvt_soraj_', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#awards' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">Shikhil Saxena</div>
            <p className="text-gray-400 leading-relaxed">
              Project Engineer passionate about creating exceptional digital experiences with modern technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-700 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Quick Links</span>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <span className="text-lg font-semibold text-white">Get In Touch</span>
            <div className="space-y-2 text-gray-400">
              <p>saxenashikhil@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>by Shikhil Saxena</span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Shikhil Saxena. All rights reserved.
            </span>
            
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white rounded-lg transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
