import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  SiPython, 
  SiCplusplus, 
  SiJavascript,
  SiMysql
} from 'react-icons/si';
import { 
  FaGraduationCap,
  FaUniversity,
  FaBrain,
  FaCode
} from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardRef = useRef(null);
  const skillsRef = useRef([]);

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

      // Card animation
      gsap.fromTo(cardRef.current,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills animation
      skillsRef.current.forEach((skill, index) => {
        if (skill) {
          gsap.fromTo(skill,
            { y: 30, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: 0.6 + (index * 0.1),
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: cardRef.current,
                start: "top 70%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const subjects = [
    {
      name: 'Object Oriented Programming',
      shortName: 'OOP',
      icon: FaCode,
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/20'
    },
    {
      name: 'Python Programming',
      shortName: 'Python',
      icon: SiPython,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/20'
    },
    {
      name: 'C++ Programming',
      shortName: 'C++',
      icon: SiCplusplus,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/20'
    },
    {
      name: 'Machine Learning',
      shortName: 'ML',
      icon: FaBrain,
      color: 'text-pink-400',
      bgColor: 'bg-pink-400/20'
    },
    {
      name: 'Database Management System',
      shortName: 'DBMS',
      icon: SiMysql,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/20'
    },
    {
      name: 'JavaScript',
      shortName: 'JavaScript',
      icon: SiJavascript,
      color: 'text-yellow-300',
      bgColor: 'bg-yellow-300/20'
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 relative" id="education">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="text-primary">Qualification</span>
          </h2>
          
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-20 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"
          />
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            ref={cardRef}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className="glass-card p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden"
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />
            
            {/* University Icon */}
            <div className="flex items-center justify-center mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-lg shadow-primary/25"
              >
                <FaGraduationCap className="text-3xl text-white" />
              </motion.div>
            </div>

            {/* Degree Information */}
            <div className="text-center mb-10">
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-2xl md:text-3xl font-bold text-white mb-4"
              >
                BSc in Computer Science and Engineering
              </motion.h3>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-center gap-3 text-gray-300"
              >
                <FaUniversity className="text-secondary text-xl" />
                <span className="text-lg">Chittagong University of Engineering and Technology</span>
              </motion.div>
            </div>

            {/* Skills/Subjects Section */}
            <div className="space-y-6">
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl font-semibold text-center text-gray-200 mb-8 flex items-center justify-center gap-2"
              >
                <MdSchool className="text-primary" />
                Key Subjects & Skills Learned
              </motion.h4>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                {subjects.map((subject, index) => {
                  const IconComponent = subject.icon;
                  return (
                    <motion.div
                      key={subject.name}
                      ref={el => skillsRef.current[index] = el}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -3,
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="glass-card p-4 rounded-xl border border-white/5 cursor-pointer group relative overflow-hidden"
                    >
                      {/* Background glow on hover */}
                      <div className={`absolute inset-0 ${subject.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />
                      
                      <div className="relative z-10 flex flex-col items-center text-center space-y-3">
                        <div className={`p-3 rounded-lg ${subject.bgColor} transition-all duration-300 group-hover:scale-110`}>
                          <IconComponent className={`${subject.color} text-2xl transition-transform`} />
                        </div>
                        
                        <div>
                          <h5 className="font-semibold text-white text-sm group-hover:text-primary transition-colors">
                            {subject.shortName}
                          </h5>
                          <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {subject.name}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
            <div className="absolute bottom-4 left-4 w-16 h-16 bg-secondary/10 rounded-full blur-xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;