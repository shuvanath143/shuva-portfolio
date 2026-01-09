import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5,
  FaCss3Alt,
  FaGitAlt
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb,
  SiTailwindcss,
  SiFirebase
} from 'react-icons/si';
import { MdCode } from 'react-icons/md';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsRef = useRef(null);
  const iconsRef = useRef([]);

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

      // Description animation
      gsap.fromTo(descriptionRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills section animation
      gsap.fromTo(skillsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skill icons bounce animation
      iconsRef.current.forEach((icon, index) => {
        if (icon) {
          gsap.fromTo(icon,
            { y: 20, opacity: 0, scale: 0.8 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.6,
              delay: 0.6 + (index * 0.1),
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: skillsRef.current,
                start: "top 80%",
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

  const skills = [
    { 
      icon: FaReact, 
      color: 'text-blue-400', 
      name: 'React',
      bgColor: 'bg-blue-400/20'
    },
    { 
      icon: FaNodeJs, 
      color: 'text-green-500', 
      name: 'Node.js',
      bgColor: 'bg-green-500/20'
    },
    { 
      icon: FaJs, 
      color: 'text-yellow-400', 
      name: 'JavaScript',
      bgColor: 'bg-yellow-400/20'
    },
    { 
      icon: SiNextdotjs, 
      color: 'text-white', 
      name: 'Next.js',
      bgColor: 'bg-white/20'
    },
    { 
      icon: SiExpress, 
      color: 'text-gray-300', 
      name: 'Express',
      bgColor: 'bg-gray-300/20'
    },
    { 
      icon: SiMongodb, 
      color: 'text-green-600', 
      name: 'MongoDB',
      bgColor: 'bg-green-600/20'
    },
    { 
      icon: FaHtml5, 
      color: 'text-orange-500', 
      name: 'HTML5',
      bgColor: 'bg-orange-500/20'
    },
    { 
      icon: FaCss3Alt, 
      color: 'text-blue-500', 
      name: 'CSS3',
      bgColor: 'bg-blue-500/20'
    },
    { 
      icon: SiTailwindcss, 
      color: 'text-cyan-400', 
      name: 'Tailwind CSS',
      bgColor: 'bg-cyan-400/20'
    },
    { 
      icon: FaGitAlt, 
      color: 'text-red-500', 
      name: 'Git',
      bgColor: 'bg-red-500/20'
    },
    { 
      icon: SiFirebase, 
      color: 'text-yellow-500', 
      name: 'Firebase',
      bgColor: 'bg-yellow-500/20'
    },
  ];


  return (
    <section ref={sectionRef} className="py-24 relative" id="about">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-secondary">Ab</span>out Me
        </h2>

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full mb-8"
        />

        <motion.p
          ref={descriptionRef}
          className="text-gray-300 leading-relaxed text-lg glass-card p-8 rounded-2xl border border-white/5 shadow-xl text-justify"
        >
          I am a passionate and results-driven Full Stack (MERN) Developer with
          a strong focus on building scalable, user-centric web applications. I
          specialize in writing accessible, semantic HTML, crafting modern,
          responsive UIs with CSS and Tailwind, and developing clean,
          maintainable JavaScript using React, Node.js, Express, and MongoDB. My
          expertise spans the entire software development lifecycle—from
          ideation and UI/UX planning to backend architecture, API integration,
          testing, deployment, and performance optimization. I enjoy
          transforming complex problems into elegant digital solutions while
          following best practices, clean code principles, and modern
          development workflows. I am continuously expanding my skill set and
          currently exploring Three.js and interactive 3D experiences to create
          more immersive and dynamic user interfaces. I have a strong interest
          in enhancing user engagement through animations, micro-interactions,
          and data-driven UI components. Beyond coding, I am an enthusiastic
          learner who values growth and creativity. I enjoy playing cricket,
          which strengthens my teamwork and strategic thinking, and I spend my
          leisure time reading books to broaden my perspective and stay
          inspired. I also love being close to nature—whether it’s walking,
          running, or cycling—which helps me maintain focus, balance, and
          productivity. I am actively seeking opportunities to contribute to an
          innovative and forward-thinking organization where I can deliver
          impactful solutions, collaborate with talented teams, and continue
          evolving as a developer. I’d love for you to explore my work and see
          how I can add value.
        </motion.p>
      </div>

      {/* Skills Visualization */}
      <div
        ref={skillsRef}
        className="relative h-[400px] flex items-center justify-center mt-12 mb-24 hidden md:flex"
      >
        {/* Central Code Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-[0_0_40px_rgba(124,58,237,0.5)] z-20"
        >
          <MdCode className="text-5xl text-white" />
        </motion.div>

        {/* Orbital Rings */}
        <div className="absolute w-[300px] h-[100px] border border-white/10 rounded-[100%] rotate-12 animate-spin-slow"></div>
        <div className="absolute w-[400px] h-[140px] border border-white/10 rounded-[100%] -rotate-6 animate-spin-slower"></div>
        <div className="absolute w-[500px] h-[180px] border border-white/10 rounded-[100%] rotate-[170deg] animate-spin-fast"></div>

        {/* Floating Skill Icons */}
        {skills.map((skill, index) => {
          const positions = [
            { top: "5%", left: "20%" },
            { bottom: "15%", right: "20%" },
            { top: "15%", right: "28%" },
            { bottom: "5%", left: "28%" },
            { top: "45%", left: "8%" },
            { bottom: "45%", right: "8%" },
            { top: "25%", left: "50%" },
            { bottom: "25%", right: "50%" },
            { top: "60%", left: "35%" },
            { bottom: "60%", right: "35%" },
            { top: "35%", right: "15%" },
          ];

          const IconComponent = skill.icon;

          return (
            <motion.div
              key={skill.name}
              ref={(el) => (iconsRef.current[index] = el)}
              whileHover={{ scale: 1.2, y: -5 }}
              className={`absolute glass-card rounded-xl cursor-pointer group ${
                index % 6 === 0
                  ? "animate-bounce-slow"
                  : index % 6 === 1
                  ? "animate-bounce-slower"
                  : index % 6 === 2
                  ? "animate-bounce"
                  : index % 6 === 3
                  ? "animate-bounce-slowest"
                  : index % 6 === 4
                  ? "animate-bounce-slow"
                  : "animate-bounce-slower"
              }`}
              style={positions[index] || positions[index % positions.length]}
            >
              <div
                className={`p-3 rounded-lg ${skill.bgColor} transition-all duration-300 group-hover:scale-110`}
              >
                <IconComponent
                  className={`${skill.color} text-2xl transition-transform`}
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50">
                <span className="text-xs text-gray-300 whitespace-nowrap bg-black/80 px-2 py-1 rounded shadow-lg">
                  {skill.name}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default About;