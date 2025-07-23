import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Send } from './icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Real-world: Send data to a backend or service like EmailJS
    setFormStatus({ submitted: true, message: 'Thank you! Your message has been sent.' });
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setFormStatus({ submitted: false, message: '' }), 5000);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Let's Connect!</h3>
            <p className="text-gray-600 dark:text-gray-400">I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology and innovation. Feel free to reach out!</p>
            <div className="space-y-4">
              <a href="mailto:amardipy10@gmail.com" className="flex items-center group"><Mail className="text-blue-500 mr-4" size={20} /><span className="group-hover:text-blue-500 transition-colors">amardipy10@gmail.com</span></a>
              <a href="tel:+917679450805" className="flex items-center group"><Phone className="text-blue-500 mr-4" size={20} /><span className="group-hover:text-blue-500 transition-colors">+91 7679450805</span></a>
              <div className="flex items-center"><MapPin className="text-blue-500 mr-4" size={20} /><span>Pune, Maharashtra, India</span></div>
            </div>
            <div className="flex space-x-4 pt-4">
              <a href="https://github.com/Amardipy10" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"><Github size={20} /></a>
              <a href="https://www.linkedin.com/in/amardip-yadav/" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"><Linkedin size={20} /></a>
            </div>
            <a href="https://drive.google.com/file/d/1jaESXK_B1lnSab8_yMiU0BBp7MNdmhpw/view?usp=drive_link" download className="mt-6 inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300">
              <Download size={20} className="mr-2" /> Download Resume
            </a>
          </div>
          <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full p-3 rounded-lg border bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 transition-colors" placeholder="Your Name"/>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input type="email" id="email" name="email" required value={formData.email} onChange={handleInputChange} className="w-full p-3 rounded-lg border bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 transition-colors" placeholder="Your Email"/>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleInputChange} className="w-full p-3 rounded-lg border bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 transition-colors" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50" disabled={formStatus.submitted}>
                <Send size={20} className="mr-2" /> {formStatus.submitted ? 'Sent!' : 'Send Message'}
              </button>
              {formStatus.message && <p className="text-center text-sm text-green-500 mt-4">{formStatus.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;