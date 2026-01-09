import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaLinkedin,
  FaPaperPlane
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact cards animation
      gsap.fromTo(cardsRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Form animation
      gsap.fromTo(formRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto URL with prefilled data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:shuvakumar328@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      color: 'text-green-400',
      bgGradient: 'from-green-500/20 to-green-600/20',
      hoverGradient: 'from-green-500/40 to-green-600/40',
      action: () => window.open('https://wa.me/8801630165138', '_blank'),
      description: 'Chat on WhatsApp'
    },
    {
      name: 'Email',
      icon: FaEnvelope,
      color: 'text-blue-400',
      bgGradient: 'from-blue-500/20 to-blue-600/20',
      hoverGradient: 'from-blue-500/40 to-blue-600/40',
      action: () => window.location.href = 'mailto:shuvakumar328@gmail.com',
      description: 'Send an Email'
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      color: 'text-blue-500',
      bgGradient: 'from-blue-600/20 to-indigo-600/20',
      hoverGradient: 'from-blue-600/40 to-indigo-600/40',
      action: () => window.open('https://www.linkedin.com/in/shuva-kumar-nath-skn', '_blank'),
      description: 'Connect on LinkedIn'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 pb-40" id="contact">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-6"
          />
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Feel free to reach out via WhatsApp, Email, or LinkedIn.
          </p>
        </div>

        {/* Contact Methods */}
        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <motion.div
                key={method.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                onClick={method.action}
                className={`glass-card p-6 rounded-2xl border border-white/10 cursor-pointer group relative overflow-hidden transition-all duration-300 hover:shadow-2xl`}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.hoverGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative z-10 text-center">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.bgGradient} flex items-center justify-center group-hover:shadow-lg transition-all duration-300`}
                  >
                    <IconComponent className={`text-2xl ${method.color} group-hover:scale-110 transition-transform`} />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary transition-colors">
                    {method.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                    {method.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-white/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
              </motion.div>
            );
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            ref={formRef}
            className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            <div className="relative z-10">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-white mb-2 text-center"
              >
                Send a Message
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-400 text-center mb-8"
              >
                I'll get back to you as soon as possible
              </motion.p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label 
                    className="block text-sm font-semibold text-gray-300 mb-2" 
                    htmlFor="name"
                  >
                    Full Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-500"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <label 
                    className="block text-sm font-semibold text-gray-300 mb-2" 
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-500"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <label 
                    className="block text-sm font-semibold text-gray-300 mb-2" 
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all placeholder-gray-500 resize-none"
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -2,
                    boxShadow: "0 10px 30px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-secondary to-primary text-white font-bold py-4 px-8 rounded-xl hover:opacity-90 transition-all duration-300 shadow-lg flex items-center justify-center gap-3 group"
                  type="submit"
                >
                  <FaPaperPlane className="text-lg group-hover:translate-x-1 transition-transform" />
                  Send Message
                </motion.button>
              </form>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;