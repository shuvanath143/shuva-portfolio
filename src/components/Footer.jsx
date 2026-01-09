import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/shuvanath143', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/shuva-kumar-nath-skn', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0B051D] py-8 mt-16">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          © 2024 · Shuva Kumar Nath. All rights reserved.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-6 mt-4 md:mt-0"
        >
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <motion.a
                key={link.label}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + (index * 0.1) }}
                className="hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
              >
                <IconComponent className="text-lg" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;