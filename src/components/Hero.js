import React, { useState, useEffect, useRef } from 'react';

const roles = [
  'Frontend Developer', 'Full Stack Engineer', 'UI/UX Enthusiast', 'Problem Solver', 'Tech Innovator'
];

const Hero = ({ scrollToSection, darkMode }) => {
  const [currentRole, setCurrentRole] = useState(0);
  const canvasRef = useRef(null);

  // Effect for cycling through roles
  useEffect(() => {
    const roleInterval = setInterval(() => setCurrentRole(prev => (prev + 1) % roles.length), 3000);
    return () => clearInterval(roleInterval);
  }, []);

  // Effect for the canvas particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particlesArray;

    const setCanvasDimensions = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const Particle = function() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = 2;
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
    };

    Particle.prototype.update = function() {
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        this.x += this.speedX;
        this.y += this.speedY;
    };

    Particle.prototype.draw = function() {
        ctx.fillStyle = darkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(55, 65, 81, 0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    };

    const init = () => {
        setCanvasDimensions();
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle());
    };

    const connect = () => {
        let opacityValue = 1;
        for (let a = 0; a < particlesArray.length; a++) {
            for (let b = a; b < particlesArray.length; b++) {
                let distance = ((particlesArray[a].x - particlesArray[b].x) ** 2) + ((particlesArray[a].y - particlesArray[b].y) ** 2);
                if (distance < (canvas.width / 7) * (canvas.height / 7)) {
                    opacityValue = 1 - (distance / 20000);
                    ctx.strokeStyle = darkMode ? `rgba(255, 255, 255, ${opacityValue})` : `rgba(55, 65, 81, ${opacityValue})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                }
            }
        }
    };
    
    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particlesArray.forEach(p => { p.update(); p.draw(); });
        connect();
        animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener('resize', init);
    return () => {
      window.removeEventListener('resize', init);
      cancelAnimationFrame(animationFrameId);
    }
  }, [darkMode]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0" />
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
          Hi, I'm <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Amardip</span>
        </h1>
        <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-12 font-light">
          <span className="inline-block transition-opacity duration-500">{roles[currentRole]}</span>
        </div>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          Computer Engineering student passionate about creating innovative web solutions with React.js, Node.js, and cutting-edge technologies. Building the future, one line of code at a time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-3 border-2 font-semibold rounded-full hover:text-white transition-all duration-300 border-blue-600 text-blue-600 hover:bg-blue-600 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-400"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;