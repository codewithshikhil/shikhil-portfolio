import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      id: 1,
      company: 'C-DAC, Ministry of Electronics and Information Technology (MeitY)',
      position: 'Project Engineer',
      duration: 'August 2024 - Present',
      location: 'India',
      responsibilities: [
        'Strengthened security with JWT-based Spring Security, lowering unauthorized access by 40%.',
        'Cut release cycle from 2 days to 4 hours using Jenkins and Docker CI/CD pipelines.',
        'Integrated REST-based payment gateway, improving transaction speed by 25%, latency under 100ms.',
        'Achieved 99.9% uptime by containerizing 6+ services and deploying via Kubernetes.',
        'Scaled backend for 6K+ daily users using Java 21, Spring Boot 3, and REST APIs.',
        'Boosted DB performance with Hibernate, Oracle, and NoSQL query optimization (35% faster responses).',
        'Authored Swagger API docs, cutting developer onboarding time by 50%.',
        'Built front-end modules in React.js within Spring Boot, reducing form errors by 20%.',
        'Enabled 2x traffic scalability deploying on AWS ECS.',
        'Improved code collaboration in 6-member team using Git, cut code review times by 40%.',
        'Accelerated builds by 15% using Spring Tool Suite for rapid prototyping.'
      ],
      logo: '/images.jpg',
      emoji: '🇮🇳'
    },
    {
      id: 2,
      company: 'RENAULT NISSAN MITSUBISHI ALLIANCE',
      position: 'Software Engineer',
      duration: 'January 2021 - August 2023',
      location: 'India',
      responsibilities: [
        'Mastered time management, meeting 100% deadlines and reducing completion time by 20%.',
        'Developed reusable components, cutting dev time by 50% and boosting Nissan France collaboration.',
        'Reduced vehicle demand prediction time by 50% with optimized solutions.',
        'Led team to simplify business flows, cutting costs by 20% and boosting performance.'
      ],
      logo: '/Logo-RG-yoast.png',
      emoji: '🚗'
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey through various roles and companies, building expertise in modern web technologies and team leadership.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 hidden md:block" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-black hidden md:block" />

                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="md:ml-20 glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                    >
                      <div className="grid lg:grid-cols-4 gap-6">
                        <div className="lg:col-span-1">
                          <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center mb-4 p-2">
                              {exp.logo ? (
                                <img src={exp.logo} alt={`${exp.company} logo`} className="object-contain h-full w-full"/>
                              ) : (
                                <span className="text-4xl">{exp.emoji}</span>
                              )}
                          </div>
                          
                          <div className="space-y-2">
                            <div className="flex items-center text-gray-400 text-sm">
                              <Calendar size={14} className="mr-2" />
                              {exp.duration}
                            </div>
                            <div className="flex items-center text-gray-400 text-sm">
                              <MapPin size={14} className="mr-2" />
                              {exp.location}
                            </div>
                          </div>
                        </div>

                        <div className="lg:col-span-3 space-y-6">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                            <h4 className="text-lg text-blue-400 font-medium mb-4">{exp.company}</h4>
                          </div>

                          <div>
                            <h5 className="text-lg font-semibold text-white mb-3">Key Achievements</h5>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((responsibility, idx) => (
                                <li key={idx} className="flex items-start text-gray-300">
                                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                                  {responsibility}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;