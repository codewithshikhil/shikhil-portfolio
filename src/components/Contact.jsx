
import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `mailto:saxenashikhil@gmail.com
    ?subject=${encodeURIComponent(formData.subject)}
    &body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
  };


  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'saxenashikhil@gmail.com',
      href: 'mailto:saxenashikhil@gmail.com'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shikhilsaxena', label: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Github, href: 'https://github.com/codewithshikhil', label: 'GitHub', color: 'hover:text-gray-400' },
    { icon: Instagram, href: 'https://www.instagram.com/_pvt_soraj_', label: 'Instagram (275K followers)', color: 'hover:text-pink-400' },
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
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">Get In Touch</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can work together
              to bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  I'm always interested in new opportunities and exciting projects.
                  Whether you have a question or just want to say hi, I'll try my best
                  to get back to you!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center space-x-4 glass-effect rounded-xl p-4 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <info.icon size={20} className="text-white" />
                    </div>

                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="pt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <form onSubmit={handleSubmit} className="glass-effect rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>

                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField('')}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer"
                    placeholder="Your Name"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name
                        ? '-top-2 text-xs text-blue-400 bg-black px-2'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Your Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField('')}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer"
                    placeholder="Your Email"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email
                        ? '-top-2 text-xs text-blue-400 bg-black px-2'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Your Email
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField('')}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer"
                    placeholder="Subject"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'subject' || formData.subject
                        ? '-top-2 text-xs text-blue-400 bg-black px-2'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Subject
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField('')}
                    rows={5}
                    className="w-full bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-transparent focus:outline-none focus:border-blue-500 transition-colors peer resize-none"
                    placeholder="Your Message"
                    required
                  />
                  <label
                    className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                        ? '-top-2 text-xs text-blue-400 bg-black px-2'
                        : 'top-3 text-gray-400'
                      }`}
                  >
                    Your Message
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
