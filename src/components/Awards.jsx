import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Star, Cpu, Code } from 'lucide-react';

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const achievements = [
    {
      title: 'Build Real World AI Applications with Gemini and Imagen',
      icon: Cpu,
      color: 'from-blue-400 to-purple-500'
    },
    {
      title: 'Develop GenAI Apps with Gemini and Streamlit',
      icon: Cpu,
      color: 'from-green-400 to-blue-500'
    },
    {
      title: 'Explore Generative AI with the Vertex AI Gemini API',
      icon: Cpu,
      color: 'from-yellow-400 to-orange-500'
    },
    {
      title: 'Inspect Rich Documents with Gemini Multimodality and Multimodal RAG',
      icon: Cpu,
      color: 'from-purple-400 to-pink-500'
    },
    {
      title: 'Prompt Design in Vertex AI',
      icon: Cpu,
      color: 'from-red-400 to-yellow-500'
    }
  ];

  const certifications = [
    'Google Cloud Platform Foundation Certified',
    'AWS Certified Cloud Practitioner',
    'OCI Foundation Associate',//'AWS Certified Solutions Architect – Associate',
    'OCI Architect Associate',//'AWS Certified DevOps Engineer – Professional',
    'OCI DevOps Professional'//'AWS Certified Security – Specialty'
  ];

  const trainingCerts = [
    { title: 'MERN Stack Development', from: 'DUCAT India' },
    { title: 'Full Stack Development', from: 'DUCAT India' },
    { title: 'Junoon Batch 9 🔥 DevOps - Zero To Hero', from: 'TrainWithShubham' }
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
    <section id="awards" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Awards & Achievements</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A collection of my skill badges, professional certifications, and training qualifications.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
                AI Skill Badges
              </h3>
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-effect rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${achievement.color}`}>
                        <achievement.icon size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-blue-400 font-medium mb-2">
                          Skill Badge
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-8 text-center lg:text-left">
                Cloud Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="glass-effect rounded-xl p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                        <Award size={20} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-medium text-white">{cert}</h4>
                        <p className="text-gray-400 text-sm">Verified Certification</p>
                      </div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.div variants={itemVariants} className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Development Training
            </h3>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {trainingCerts.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass-effect rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Code size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-white">{cert.title}</h4>
                      <p className="text-gray-400 text-sm">{cert.from}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Awards;