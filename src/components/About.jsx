
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Cpu, Cloud, Code, Database, GitBranch, Layers } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const skills = [
    'AI Agents', 'GitHub Copilot', 'Python', 'Amazon Web Service (AWS)', 'Google Cloud Platform (GCP)', 'Oracle Cloud Infrastructure (OCI)', 'Java', 'React.js', 'SQL', 'CI/CD', 'Terraform', 'Docker', 'Kubernetes', 'Prometheus', 'Jenkins', 'Azure', 'Grafana', 'NoSQL', 'Linux', 'Shell Scripting', 'REST API’s'
  ];

  const stats = [
    { number: '4+', label: 'Years Experience' },
    { number: '10+', label: 'Cloud Certifications' },
    { number: '20+', label: 'Skills Mastered' },
    { number: '100s', label: 'Problems Solved' },
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
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 opacity-5">
        <img alt="Man standing in front of a Google logo" className="w-full h-full object-cover" src="https://horizons-cdn.hostinger.com/1d5877df-d7b9-4604-8605-1a33ff0e88bd/a59f5af9b70850468f661c27c37b8e2e.jpg" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Project Engineer and Content Creator passionate about AI Agents, Cloud, and helping others grow in tech.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white">
                  Building the Future of Tech
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  I'm a Project Engineer and Content Creator passionate about AI Agents, Cloud, and helping others grow in tech. Currently exploring building AI Agents from scratch and using scalable SaaS solutions. I'm also an active community participant in workshops, always eager to learn and share knowledge.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    className="glass-effect rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-3xl font-bold gradient-text mb-2"
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass-effect rounded-2xl p-6">
                <h4 className="text-xl font-semibold text-white mb-4">Core Skills & Technologies</h4>
                <div className="flex flex-wrap gap-3">
                  {skills.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 transition-colors"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
                  {[
                      { icon: Cpu, label: "AI & Python" },
                      { icon: Cloud, label: "Multi-Cloud" },
                      { icon: Code, label: "React.js" },
                      { icon: Database, label: "SQL/NoSQL" },
                      { icon: GitBranch, label: "CI/CD" },
                      { icon: Layers, label: "Containerization" },
                  ].map((item, index) => (
                      <motion.div
                          key={index}
                          variants={itemVariants}
                          className="flex flex-col items-center space-y-2 p-4 bg-gray-800/50 rounded-lg"
                      >
                          <item.icon className="w-8 h-8 text-blue-400" />
                          <span className="text-xs text-gray-300">{item.label}</span>
                      </motion.div>
                  ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
