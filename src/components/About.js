import React, { useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { User, Trophy, GraduationCap } from './icons';

// Animated counter component
const AnimatedCounter = ({ value, suffix = '' }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000 });
  const display = useTransform(spring, (current) =>
    suffix ? `${Math.floor(current)}${suffix}` : Math.floor(current).toString()
  );

  React.useEffect(() => {
    if (isInView) {
      spring.set(parseFloat(value));
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const About = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const infoItems = [
    {
      icon: <User className="text-blue-500" size={24} />,
      bg: 'bg-blue-100',
      title: 'Leadership & Mentoring',
      description: 'Joint Secretary, PR & Social Media Cell'
    },
    {
      icon: <Trophy className="text-green-500" size={24} />,
      bg: 'bg-green-100',
      title: 'Competitive Programming',
      description: '6-star rating on HackerRank'
    },
    {
      icon: <GraduationCap className="text-purple-500" size={24} />,
      bg: 'bg-purple-100',
      title: 'Academic Excellence',
      description: 'Class 12 Academic Topper (94.8%)'
    }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        ref={containerRef}
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left column - Text content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl font-semibold text-gray-800">
              Passionate Developer & <span className="text-purple-500">Problem Solver</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              I'm a Computer Engineering student at Army Institute of Technology, Pune, with a strong foundation in full-stack development. My journey in tech is driven by curiosity and a desire to create meaningful digital experiences.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              With expertise in React.js, Node.js, and modern web technologies, I've successfully built AI-powered tools and full-stack applications. I'm particularly passionate about frontend development and creating intuitive user interfaces.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <motion.div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-blue-500">
                  <AnimatedCounter value={300} suffix="+" />
                </div>
                <div className="text-sm text-gray-500 mt-1">Problems Solved</div>
              </motion.div>
              <motion.div
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 border border-purple-200/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-4xl font-bold text-purple-500">8.39</div>
                <div className="text-sm text-gray-500 mt-1">CGPA</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right column - Info cards */}
          <div className="space-y-6">
            {infoItems.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                whileHover={{ x: 10, scale: 1.02 }}
              >
                <motion.div
                  className={`flex-shrink-0 p-3 ${item.bg} rounded-full`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                  <p className="text-gray-500">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;