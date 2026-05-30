import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiGithub, FiShield, FiCoffee, FiBarChart2 } from 'react-icons/fi';

const PROJECTS = [
  {
    title: 'Raksh-Aid',
    tagline: 'Smart Emergency Response & Safety Platform',
    description:
      'Raksh-Aid is a smart and accessible emergency response platform focused on real-time safety, rapid communication, and community support. Built to make critical help available instantly — from SOS alerts to mental health support — with a strong emphasis on accessibility and real-world impact.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js', 'Express.js', 'MySQL', 'Leaflet.js', 'OpenStreetMap', 'JWT', 'REST APIs'],
    github: 'https://github.com/itz-rakhi/Raksh-Aid',
    live: '#',
    gradient: 'from-violet-600/25 via-indigo-600/20 to-sky-600/25',
    glowColor: '#7c3aed',
    icon: FiShield,
    iconBg: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
    iconLabel: 'Safety Platform',
    features: [
      'Real-time SOS alert system with GPS tracking',
      'Voice-activated emergency assistance',
      'Risk-level analysis (Low / High / Critical)',
      'Nearby emergency services integration',
      'Volunteer driver assistance system',
      'Cyber help center & mental health support',
      'Admin dashboard for live monitoring',
      'Multi-language accessibility',
    ],
  },
  {
    title: 'Barista Cafe',
    tagline: 'Responsive Café Management & Ordering App',
    description:
      'Barista Cafe is a responsive café management and ordering web application that provides an interactive user experience for browsing menus, managing orders, and exploring café services with a modern UI.',
    tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Java', 'Spring Framework', 'MySQL', 'Hibernate', 'REST APIs'],
    github: 'https://github.com/itz-rakhi/Barista-Cafe-Project/tree/master',
    live: '#',
    gradient: 'from-amber-600/25 via-orange-600/20 to-yellow-600/25',
    glowColor: '#d97706',
    icon: FiCoffee,
    iconBg: 'linear-gradient(135deg, #d97706, #b45309)',
    iconLabel: 'Café App',
    features: [
      'Interactive menu browsing experience',
      'Order management system',
      'Responsive modern UI with Bootstrap',
      'Java Spring Framework backend',
      'Hibernate ORM with MySQL database',
      'REST API integration',
      'JSON & AJAX for dynamic content',
      'Git/GitHub version control',
    ],
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
    features: [
      'Revenue & order tracking KPIs',
      'Top-selling pizzas analysis',
      'Customer trends visualization',
      'Business performance metrics',
      'DAX measures & calculations',
      'Power Query data transformation',
      'SQL-based data analysis',
      'Dynamic interactive visualizations',
    ],
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
  'React.js': '#61dafb',
  'Bootstrap': '#7c3aed',
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
      className="glass rounded-3xl overflow-hidden border border-white/8 hover:border-violet-500/30 transition-all duration-500 group flex flex-col"
    >
      {/* Banner */}
      <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0`}>
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-40 transition-opacity duration-700 blur-2xl"
          style={{ background: `radial-gradient(circle at center, ${project.glowColor}, transparent)` }}
        />
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="relative z-10 flex flex-col items-center gap-3"
        >
          <div
            className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
            style={{ background: project.iconBg }}
          >
            <Icon size={38} className="text-white" />
          </div>
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
            {project.iconLabel}
          </span>
        </motion.div>
        <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/5" />
        <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full border border-white/5" />
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <h3 className="text-2xl font-extrabold text-white mb-1">{project.title}</h3>
        <p className="font-medium mb-3 text-sm" style={{ color: project.glowColor }}>
          {project.tagline}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.description}</p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-5">
          {project.features.map((f) => (
            <div key={f} className="flex items-start gap-2 text-xs text-slate-400">
              <span
                className="w-1.5 h-1.5 rounded-full mt-1 flex-shrink-0"
                style={{ background: project.glowColor }}
              />
              {f}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-full font-semibold"
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

        {/* GitHub button only */}
        <div className="flex mt-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl glass text-slate-200 hover:text-white hover:border-violet-500/30 text-sm font-semibold transition-all"
          >
            <FiGithub size={15} /> View on GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="projects" className="py-16 px-6">
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
          <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
