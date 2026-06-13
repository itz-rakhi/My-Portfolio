import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiShield, FiCoffee, FiBarChart2, FiZap, FiExternalLink } from 'react-icons/fi';

const PROJECTS = [
  {
    title: 'Raksh-Aid',
    tagline: 'Smart Emergency Response & Safety Platform',
    description:
      'Raksh-Aid is a smart emergency response platform focused on real-time safety, quick communication, and accessible support. It features SOS alerts with GPS tracking, voice-activated assistance, risk analysis, and emergency service integration. The platform also provides mental health support, volunteer assistance, and multi-language accessibility.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Leaflet.js', 'OpenStreetMap', 'JWT', 'REST APIs'],
    github: 'https://github.com/itz-rakhi/Raksh-Aid',
    live: '#',
    gradient: 'from-violet-600/25 via-indigo-600/20 to-sky-600/25',
    glowColor: '#818cf8',
    icon: FiShield,
    iconBg: 'linear-gradient(135deg, #6366f1, #4f46e5)',
    iconLabel: 'Safety Platform',
    features: [],
  },
  {
    title: 'Barista Cafe',
    tagline: 'Responsive Café Management & Ordering App',
    description:
      'Barista Cafe is a responsive café management and ordering web application with an interactive and user-friendly interface. It allows users to browse menus, manage orders, and explore café services seamlessly. Built using Java Spring Framework, Hibernate, MySQL, REST APIs, Bootstrap, AJAX, and Git/GitHub.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Java', 'Spring Framework', 'MySQL', 'Hibernate', 'REST APIs'],
    github: 'https://github.com/itz-rakhi/Barista-Cafe-Project/tree/master',
    live: '#',
    gradient: 'from-amber-600/25 via-orange-600/20 to-yellow-600/25',
    glowColor: '#d97706',
    icon: FiCoffee,
    iconBg: 'linear-gradient(135deg, #d97706, #b45309)',
    iconLabel: 'Café App',
    features: [],
  },
  {
    title: 'KidSpark AI Landing Page',
    tagline: 'AI & Robotics Workshop Platform |',
    taglineSuffix: ' GEMA Education Technology',
    description:
      'KidSpark AI is a promotional website developed to showcase and manage registrations for an AI and Robotics workshop for school students. It introduces children to AI and Robotics through hands-on activities, guided projects, and interactive learning, helping them develop creativity, problem-solving, and future-ready skills.',
    tech: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    github: null,
    live: 'https://kid-spark-ai.vercel.app/',
    gradient: 'from-emerald-600/25 via-teal-600/20 to-cyan-600/25',
    glowColor: '#10b981',
    icon: FiZap,
    iconBg: 'linear-gradient(135deg, #10b981, #059669)',
    iconLabel: 'EdTech Platform',
    features: [],
  },
  {
    title: 'Pizza Sales Dashboard',
    tagline: 'Interactive Power BI Analytics Dashboard',
    description:
      'Pizza Sales Dashboard is an interactive Power BI project that analyzes pizza sales data to track revenue, orders, top-selling pizzas, customer trends, and business performance through dynamic visualizations and KPIs.',
    tech: ['Power BI', 'SQL', 'Excel / CSV', 'DAX', 'Power Query'],
    github: 'https://github.com/itz-rakhi/Pizza_Sales-dashboard',
    live: '#',
    gradient: 'from-rose-600/25 via-pink-600/20 to-orange-600/25',
    glowColor: '#e11d48',
    icon: FiBarChart2,
    iconBg: 'linear-gradient(135deg, #e11d48, #be123c)',
    iconLabel: 'BI Dashboard',
    features: [],
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
};

function ProjectCard({ project, index }) {
  const Icon = project.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ y: -8 }}
      className="glass rounded-3xl overflow-hidden border border-white/8 hover:border-zinc-500/30 transition-all duration-500 group flex flex-col opacity-60 hover:opacity-100 grayscale-[50%] hover:grayscale-0 h-full text-[0.92rem]"
    >
      {/* Banner */}
      <div className={`relative h-24 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-2xl"
          style={{ background: `radial-gradient(circle at center, ${project.glowColor}, transparent)` }}
        />
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative z-10 flex flex-col items-center gap-3"
        >
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-2xl"
            style={{ background: project.iconBg }}
          >
            <Icon size={20} className="text-white" />
          </div>
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
            {project.iconLabel}
          </span>
        </motion.div>
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/5" />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-white/5" />
      </div>

      {/* Body */}
      <div className="p-3 flex flex-col flex-1">
        <h3 className="text-lg font-extrabold text-white mb-0.5">{project.title}</h3>
        <p className="font-medium mb-2 text-xs" style={{ color: project.glowColor }}>
          {project.tagline}{project.taglineSuffix && <span style={{ color: '#111827' }}>{project.taglineSuffix}</span>}
        </p>
        <p className="text-slate-400 text-xs leading-relaxed mb-3">{project.description}</p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[11px] px-2 py-0.5 rounded-full font-semibold"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-slate-200 hover:text-white hover:border-zinc-500/30 text-xs font-semibold transition-all"
            >
              <FiExternalLink size={13} /> Live Demo
            </motion.a>
          ) : (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl glass text-slate-200 hover:text-white hover:border-zinc-500/30 text-xs font-semibold transition-all"
            >
              <FiGithub size={13} /> View on GitHub
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
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

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-zinc-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
