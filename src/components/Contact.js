import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from './icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });
  const [focusedField, setFocusedField] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setFormStatus({ submitted: true, message: 'Thank you! Your message has been sent.' });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, message: '' }), 5000);
  };

  const contactInfo = [
    { icon: Mail, text: 'amardipy10@gmail.com', href: 'mailto:amardipy10@gmail.com' },
    { icon: Phone, text: '+91 7679450805', href: 'tel:+917679450805' },
    { icon: MapPin, text: 'Pune, Maharashtra, India', href: null }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Amardipy10', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/amardip-yadav/', label: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        ref={containerRef}
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column - Contact info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Let's Connect!</h3>
              <p className="text-gray-600 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and innovation. Feel free to reach out!
              </p>
            </div>

            {/* Contact links */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    className="flex items-center group p-3 rounded-xl hover:bg-gray-100 transition-colors"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="p-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full mr-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-blue-500" size={20} />
                    </motion.div>
                    <span className="text-gray-700 group-hover:text-blue-500 transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                );

                return item.href ? (
                  <a key={index} href={item.href}>{content}</a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-100 rounded-xl hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 border border-transparent hover:border-purple-500/20"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon size={24} className="text-gray-700" />
                  </motion.a>
                );
              })}
            </div>

            {/* Resume button */}
            <motion.a
              href="https://drive.google.com/file/d/1jaESXK_B1lnSab8_yMiU0BBp7MNdmhpw/view?usp=drive_link"
              download
              className="inline-flex items-center px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 btn-premium"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} className="mr-3" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Right column - Contact form */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl bg-white shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {/* Name field */}
              <div className="relative">
                <motion.label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name
                      ? '-top-2 text-xs text-purple-500 bg-white px-2'
                      : 'top-4 text-gray-500'
                    }`}
                >
                  Your Name
                </motion.label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:ring-0 outline-none transition-all duration-300"
                />
              </div>

              {/* Email field */}
              <div className="relative">
                <motion.label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email
                      ? '-top-2 text-xs text-purple-500 bg-white px-2'
                      : 'top-4 text-gray-500'
                    }`}
                >
                  Your Email
                </motion.label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:ring-0 outline-none transition-all duration-300"
                />
              </div>

              {/* Message field */}
              <div className="relative">
                <motion.label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message
                      ? '-top-2 text-xs text-purple-500 bg-white px-2'
                      : 'top-4 text-gray-500'
                    }`}
                >
                  Your Message
                </motion.label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full p-4 rounded-xl bg-gray-50 border-2 border-gray-200 focus:border-purple-500 focus:ring-0 outline-none transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed btn-premium"
                disabled={formStatus.submitted}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} className="mr-3" />
                {formStatus.submitted ? 'Message Sent! ✓' : 'Send Message'}
              </motion.button>

              {/* Success message */}
              {formStatus.message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-sm text-green-500 font-medium"
                >
                  {formStatus.message}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;