import { useRef, useCallback, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function DraggableScrollBar({ scrollRef, progress }) {
  const trackRef = useRef(null);
  const dragging = useRef(false);
  const isLight = document.body.classList.contains('light');

  const getProgress = (clientX) => {
    const track = trackRef.current;
    if (!track) return 0;
    const { left, width } = track.getBoundingClientRect();
    return Math.min(1, Math.max(0, (clientX - left) / width));
  };

  const applyScroll = (p) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = p * (el.scrollWidth - el.clientWidth);
  };

  const onMouseDown = (e) => {
    dragging.current = true;
    applyScroll(getProgress(e.clientX));
    const onMove = (e) => { if (dragging.current) applyScroll(getProgress(e.clientX)); };
    const onUp = () => { dragging.current = false; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  const onTrackClick = (e) => { applyScroll(getProgress(e.clientX)); };

  return (
    <div className="flex justify-start mt-3">
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onClick={onTrackClick}
        className="relative w-24 h-1 rounded-full cursor-pointer"
        style={{ background: isLight ? '#d1d5db' : 'rgba(255,255,255,0.08)' }}
      >
        <div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full pointer-events-none"
          style={{
            left: `calc(${progress * 100}% - ${progress * 12}px)`,
            background: isLight ? '#4b5563' : '#dc2626',
            boxShadow: isLight ? 'none' : '0 0 8px rgba(220,38,38,0.6)',
            transition: dragging.current ? 'none' : 'left 0.15s',
          }}
        />
      </div>
    </div>
  );
}
import { FiGithub, FiCoffee, FiBarChart2, FiExternalLink, FiUser } from 'react-icons/fi';
import rakshaidImg from '../assets/rakshaid.png';
import kidsparkImg from '../assets/kidspark.png';
import baristaImg from '../assets/baristacafe.png';

const PROJECTS = [
  {
    title: 'Raksh-Aid',
    tagline: 'Smart Emergency Response & Safety Platform',
    description:
      'Raksh-Aid is a smart emergency response platform focused on real-time safety, quick communication, and accessible support. It features SOS alerts with GPS tracking, voice-activated assistance, risk analysis, and emergency service integration.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Leaflet.js', 'OpenStreetMap', 'JWT', 'REST APIs'],
    github: 'https://github.com/itz-rakhi/Raksh-Aid',
    live: '#',
    glowColor: '#818cf8',
    iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    image: rakshaidImg,
  },
  {
    title: 'My Portfolio',
    tagline: 'Personal Portfolio Website',
    description:
      'A personal portfolio website designed to showcase my skills, projects, certifications, and achievements in a professional and visually appealing way. It serves as my online resume, allowing recruiters and employers to explore my work and connect with me easily.',
    tech: ['React.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/itz-rakhi/My-Portfolio',
    live: '#',
    glowColor: '#f472b6',
    icon: FiUser,
    iconBg: 'linear-gradient(135deg, #f472b6, #db2777)',
    image: null,
  },
  {
    title: 'KidSpark AI Landing Page',
    tagline: 'AI & Robotics Workshop Platform',
    taglineSuffix: ' | GEMA Education Technology',
    description:
      'KidSpark AI is a promotional website to showcase and manage registrations for an AI and Robotics workshop for school students, helping them develop creativity, problem-solving, and future-ready skills.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    github: null,
    live: 'https://kid-spark-ai.vercel.app/',
    glowColor: '#10b981',
    iconBg: 'linear-gradient(135deg, #10b981, #059669)',
    image: kidsparkImg,
  },
  {
    title: 'Barista Cafe',
    tagline: 'Responsive Café Management & Ordering App',
    description:
      'Barista Cafe is a responsive café management and ordering web application. It allows users to browse menus, manage orders, and explore café services seamlessly. Built using Spring Framework, Hibernate, MySQL, REST APIs, Bootstrap and AJAX.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Java', 'Spring Framework', 'MySQL', 'Hibernate', 'REST APIs'],
    github: 'https://github.com/itz-rakhi/Barista-Cafe-Project/tree/master',
    live: '#',
    glowColor: '#d97706',
    icon: FiCoffee,
    iconBg: 'linear-gradient(135deg, #d97706, #b45309)',
    image: baristaImg,
  },
];

const DASHBOARDS = [
  {
    title: 'Pizza Sales Dashboard',
    tagline: 'Interactive Power BI Analytics Dashboard',
    description:
      'Analyzes pizza sales data to track revenue, orders, top-selling pizzas, customer trends, and business performance through dynamic visualizations and KPIs.',
    tech: ['Power BI', 'SQL', 'Excel / CSV', 'DAX', 'Power Query'],
    github: 'https://github.com/itz-rakhi/Pizza_Sales-dashboard',
    live: '#',
    glowColor: '#e11d48',
    icon: FiBarChart2,
    iconBg: 'linear-gradient(135deg, #e11d48, #be123c)',
  },
  {
    title: 'BlinkIt Grocery Sales Dashboard',
    tagline: 'Power BI Grocery Retail Analytics Dashboard',
    description:
      'An interactive Power BI dashboard built to analyze Blinkit grocery sales performance across outlet types, item categories, outlet sizes, and customer ratings. Provides actionable insights into sales trends, product distribution, and outlet performance for the quick-commerce and grocery retail industry.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel / CSV'],
    github: 'https://github.com/itz-rakhi/Blinkit-Grocery-data-dashboard',
    live: '#',
    glowColor: '#84cc16',
    icon: FiBarChart2,
    iconBg: 'linear-gradient(135deg, #84cc16, #65a30d)',
  },
  {
    title: 'NayePankh Foundation Dashboard',
    tagline: 'NGO Impact & Donor Analytics Dashboard',
    description:
      'Developed during my internship at NayePankh Foundation. Provides comprehensive insights into donations, donor engagement, beneficiary outreach, scholarships, volunteer participation, and program impact using Power BI. Transforms NGO operational data into meaningful visual insights to support data-driven decision-making and measure social impact.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel / CSV'],
    github: 'https://github.com/itz-rakhi/NayePankh-Foundation-Internship',
    live: '#',
    glowColor: '#f59e0b',
    icon: FiBarChart2,
    iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
  },
  {
    title: 'Weather Forecast Dashboard',
    tagline: 'Power BI Environmental Analytics Dashboard',
    description:
      'An interactive Power BI dashboard built to analyze real-time weather conditions, temperature forecasts, air quality metrics, and environmental indicators across multiple cities. Provides actionable insights into weather trends, pollution levels, rainfall probability, and atmospheric conditions to support better environmental awareness and decision-making.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Excel / CSV'],
    github: 'https://github.com/itz-rakhi/Weather-Forecast-Dashboard',
    live: '#',
    glowColor: '#38bdf8',
    icon: FiBarChart2,
    iconBg: 'linear-gradient(135deg, #38bdf8, #0284c7)',
  },
];

const BADGE_COLORS = {
  'HTML5': '#e34f26', 'HTML': '#e34f26',
  'CSS3': '#1572b6',  'CSS': '#1572b6',
  'JavaScript': '#f7df1e',
  'Node.js': '#68a063',
  'Express.js': '#94a3b8',
  'MySQL': '#fb923c',
  'Leaflet.js': '#34d399',
  'OpenStreetMap': '#38bdf8',
  'JWT': '#f472b6',
  'REST APIs': '#a78bfa',
  'React 19': '#61dafb',
  'TypeScript': '#3178c6',
  'Framer Motion': '#ff0055',
  'Express': '#94a3b8',
  'MongoDB': '#47a248',
  'Vercel': '#ffffff',
  'Bootstrap': '#52525b',
  'Java': '#f97316',
  'Spring Framework': '#86efac',
  'Hibernate': '#6366f1',
  'JSON': '#fbbf24',
  'AJAX': '#c084fc',
  'Power BI': '#f59e0b',
  'SQL': '#38bdf8',
  'Excel / CSV': '#22c55e',
  'DAX': '#e879f9',
  'Power Query': '#fb923c',
  'Tailwind CSS': '#38bdf8',
  'React.js': '#61dafb',
  'Vite': '#a855f7',
  'Excel / CSV': '#22c55e',
};

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass rounded-2xl overflow-hidden border border-white/8 hover:border-zinc-500/30 transition-all duration-300 group flex flex-col opacity-60 hover:opacity-100 grayscale-[40%] hover:grayscale-0 flex-shrink-0 w-72"
      style={{ borderTop: `3px solid ${project.glowColor}` }}
    >
      <div className="p-4 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden flex items-center justify-center shadow-lg"
            style={{ background: project.image ? '#ffffff' : project.iconBg }}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <Icon size={18} className="text-white" />
            )}
          </div>
          <div>
            <h3 className="text-sm font-extrabold text-white leading-tight">{project.title}</h3>
            <p className="text-[11px] font-medium mt-0.5" style={{ color: project.glowColor }}>
              {project.tagline}
              {project.taglineSuffix && <span className="text-slate-500">{project.taglineSuffix}</span>}
            </p>
          </div>
        </div>

        <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] px-2 py-0.5 rounded-full font-semibold"
              style={{
                background: `${BADGE_COLORS[t] || '#a78bfa'}15`,
                color: BADGE_COLORS[t] || '#a78bfa',
                border: `1px solid ${BADGE_COLORS[t] || '#a78bfa'}30`,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Button */}
        <div className="flex mt-auto">
          {project.live && project.live !== '#' && !project.github ? (
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              href={project.live} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-slate-200 hover:text-white text-xs font-semibold transition-all"
            >
              <FiExternalLink size={12} /> Live Demo
            </motion.a>
          ) : (
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              href={project.github} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg glass text-slate-200 hover:text-white text-xs font-semibold transition-all"
            >
              <FiGithub size={12} /> View on GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function ScrollRow({ items, label }) {
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

  return (
    <div className="mb-10">
      <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3 px-1">{label}</p>
      <div ref={scrollRef} onScroll={onScroll} className="scroll-row flex gap-4 overflow-x-auto pb-3">
        {items.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
      <DraggableScrollBar scrollRef={scrollRef} progress={progress} />
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-16 px-6 relative">
      <div className="section-grid" />
      <div className="section-divider mb-6 -mt-4" />
      <div className="max-w-6xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <ScrollRow items={PROJECTS} label="🛠 My Projects" />
        <ScrollRow items={DASHBOARDS} label="📊 Dashboards" />
      </div>
    </section>
  );
}
