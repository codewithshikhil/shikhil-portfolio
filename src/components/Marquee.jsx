import React from 'react';
import FastMarquee from 'react-fast-marquee';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Google Cloud', emoji: '☁️' },
  { name: 'Amazon Web Services', emoji: '📦' },
  { name: 'Kubernetes', emoji: '☸️' },
  { name: 'Docker', emoji: '🐳' },
  { name: 'React', emoji: '⚛️' },
  { name: 'Java', emoji: '☕' },
];

const Marquee = () => {
  return (
    <div className="py-12 bg-black">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
        >
            <h3 className="text-2xl font-semibold text-gray-400">
                Technologies I've Mastered
            </h3>
        </motion.div>
        <FastMarquee
          gradient={true}
          gradientColor={[0, 0, 0]}
          gradientWidth={100}
          speed={50}
        >
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 mx-12 text-gray-300"
            >
              <span className="text-4xl">{company.emoji}</span>
              <span className="text-xl font-semibold">{company.name}</span>
            </div>
          ))}
        </FastMarquee>
      </div>
    </div>
  );
};

export default Marquee;