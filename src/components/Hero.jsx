import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';

/* Typing animation hook */
function useTypingEffect(words, speed = 80, pause = 1800) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const ROLES = ['Java Full Stack Developer', 'Data Analyst', 'Problem Solver'];

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/itz-rakhi', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rakhi-s-0bb067346', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rakhis412005@gmail.com', label: 'Email' },
];

/* Floating particle */
function Particle({ style }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3] }}
      transition={{ duration: style.duration, repeat: Infinity, delay: style.delay, ease: 'easeInOut' }}
    />
  );
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  width: Math.random() * 4 + 2,
  height: Math.random() * 4 + 2,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  background: i % 3 === 0 ? '#fca5a5' : i % 3 === 1 ? '#ef4444' : '#991b1b',
  duration: Math.random() * 4 + 3,
  delay: Math.random() * 3,
}));

export default function Hero() {
  const typed = useTypingEffect(ROLES);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #dc2626, transparent)' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 40, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #b91c1c, transparent)' }}
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full blur-3xl opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7f1d1d, transparent)' }}
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(220,38,38,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.25) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 0%, black 40%, transparent 100%)',
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => <Particle key={i} style={p} />)}

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-5 py-2 mb-8 text-sm text-zinc-300 border border-zinc-500/20"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to opportunities
        </motion.div>

        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-400 text-lg mb-2 font-medium"
        >
          Hello, I'm
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-5 tracking-tight leading-tight"
        >
          <span className="text-white">Ms. </span><span className="gradient-text">Rakhi Samant</span>
        </motion.h1>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-slate-300 font-semibold mb-6 h-8"
        >
          <span className="gradient-text">{typed}</span>
          <span className="animate-pulse text-zinc-400 ml-0.5">|</span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed text-base md:text-lg"
        >
          Aspiring Java Full Stack Developer and Data Analyst passionate about building efficient
          applications and analyzing data to solve real-world problems. Seeking opportunities to
          apply my technical skills, improve continuously, and contribute to innovative projects
          in software development and data analytics.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(124,58,237,0.5)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo('projects')}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white gradient-bg shadow-lg shadow-zinc-900/40 transition-all"
          >
            View Projects <FiArrowRight />
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/my_resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold glass text-slate-200 hover:text-white hover:border-zinc-500/40 transition-all"
          >
            <FiDownload size={16} /> Download Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="flex gap-4 justify-center"
        >
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="glass p-3.5 rounded-full text-slate-400 hover:text-zinc-400 hover:border-zinc-500/30 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="w-5 h-9 rounded-full border-2 border-zinc-500/40 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-2 rounded-full bg-zinc-400"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </div>
        <span className="text-xs text-slate-600">scroll</span>
      </motion.div>
    </section>
  );
}

