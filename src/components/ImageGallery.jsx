
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Camera } from 'lucide-react';

const ImageGallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const images = [
    {
      src: "/profile.jpeg",
      alt: "Portrait of Shikhil Saxena",
      title: "Professional Headshot",
      description: "My official portrait for professional profiles."
    },
    {
      src: "/awsevent.jpeg",
      alt: "Two men smiling for a picture at a tech summit",
      title: "Tech Summit",
      description: "Networking with peers at a recent tech conference."
    },
    {
      src: "/googleevent.jpeg",
      alt: "Man standing in front of a Google logo",
      title: "Community Event",
      description: "Engaging with the tech community at a Google event."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Visual Journey</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of moments from my professional life, community involvement, and personal branding.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-2xl glass-effect"
              >
                <img src={image.src} alt={image.alt} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <motion.h3 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl font-bold"
                  >
                    {image.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-sm text-gray-300 mt-1"
                  >
                    {image.description}
                  </motion.p>
                </div>
                <div className="absolute top-4 right-4 p-2 bg-white/10 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImageGallery;
