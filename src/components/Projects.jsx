
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Github, Code, Star, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const codingProfiles = [
    {
      name: 'GitHub',
      url: 'https://github.com/codewithshikhil',
      icon: Github,
      description: 'My open-source projects and contributions.',
      color: 'from-gray-700 to-gray-900'
    },
    {
      name: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/saxenashikhil003',
      icon: Star,
      description: 'Problem-solving skills and competition rankings.',
      color: 'from-green-500 to-green-700'
    },
    {
      name: 'GeeksforGeeks',
      url: 'https://www.geeksforgeeks.org/user/saxenashikhil/',
      icon: Code,
      description: 'Data structures, algorithms, and interview prep.',
      color: 'from-yellow-500 to-yellow-700'
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/Shikhil1610/',
      icon: Trophy,
      description: 'Sharpening my coding skills with daily challenges.',
      color: 'from-orange-500 to-orange-700'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Coding Profiles & Projects</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore my work, from open-source projects on GitHub to my problem-solving journey on various coding platforms.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-16">
            <div className="glass-effect rounded-3xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-8 p-8 items-center">
                <div className="space-y-6">
                  <div className="inline-block px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-sm font-medium">
                    Featured Showcase
                  </div>
                  <h3 className="text-3xl font-bold text-white">My Digital Footprint</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    This section highlights my active presence across key development and problem-solving platforms. Each profile offers a glimpse into my coding style, project work, and technical abilities.
                  </p>
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <a href="https://github.com/codewithshikhil" target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Explore on GitHub
                    </a>
                  </Button>
                </div>
                <div className="relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl overflow-hidden"
                  >
                    <img alt="Two men smiling for a picture at a tech summit" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/1d5877df-d7b9-4604-8605-1a33ff0e88bd/bd18f7a478fdd5eb3e1772b7ea84dad5.jpg" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {codingProfiles.map((profile) => (
              <motion.div
                key={profile.name}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="glass-effect rounded-2xl overflow-hidden group"
              >
                <div className={`p-8 bg-gradient-to-br ${profile.color} flex flex-col items-center justify-center text-center space-y-4`}>
                  <profile.icon className="w-16 h-16 text-white" />
                  <h3 className="text-2xl font-bold text-white">{profile.name}</h3>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-gray-400 text-sm leading-relaxed h-16">
                    {profile.description}
                  </p>
                  <Button asChild variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                    <a href={profile.url} target="_blank" rel="noopener noreferrer">
                      View Profile <ExternalLink size={14} className="ml-2" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
