import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGithub, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiMysql, SiTailwindcss, SiJquery } from 'react-icons/si';
import { FiBarChart2, FiGrid, FiDatabase, FiCode, FiServer, FiLayout, FiFilter, FiTrendingUp, FiPieChart, FiMonitor } from 'react-icons/fi';

const CATEGORIES = [
  {
    label: 'Programming Languages',
    color: '#f59e0b',
    skills: [
      { name: 'Java', icon: FaJava },
      { name: 'JavaScript', icon: FaJs },
      { name: 'HTML5', icon: FaHtml5 },
      { name: 'CSS3', icon: FaCss3Alt },
      { name: 'Python', icon: FaPython },
    ],
  },
  {
    label: 'Frontend Development',
    color: '#38bdf8',
    skills: [
      { name: 'React.js', icon: FaReact },
      { name: 'Bootstrap', icon: FaBootstrap },
      { name: 'jQuery', icon: SiJquery },
      { name: 'AJAX', icon: FiCode },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'Responsive Design', icon: FiLayout },
    ],
  },
  {
    label: 'Backend Development',
    color: '#f472b6',
    skills: [
      { name: 'Advanced Java', icon: FaJava },
      { name: 'Spring Framework', icon: SiSpring },
      { name: 'Hibernate', icon: SiHibernate },
      { name: 'REST APIs', icon: FiServer },
    ],
  },
  {
    label: 'Database & Tools',
    color: '#34d399',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MS SQL', icon: FiDatabase },
      { name: 'Git', icon: FaGitAlt },
      { name: 'GitHub', icon: FaGithub },
      { name: 'VS Code', icon: FiMonitor },
      { name: 'Power BI', icon: FiBarChart2 },
      { name: 'MS Excel', icon: FiDatabase },
    ],
  },
  {
    label: 'Data Analytics',
    color: '#a78bfa',
    skills: [
      { name: 'Data Visualization', icon: FiBarChart2 },
      { name: 'Dashboard Dev', icon: FiGrid },
      { name: 'Data Cleaning', icon: FiFilter },
      { name: 'KPI Analysis', icon: FiTrendingUp },
      { name: 'Business Insights', icon: FiPieChart },
      { name: 'Tableau', icon: FiGrid },
    ],
  },
];

function SkillPill({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ scale: 1.06, y: -1 }}
      className="flex items-center gap-1.5 rounded-full px-2.5 py-1 cursor-default transition-all duration-200"
      style={{ background: `${color}12`, border: `1px solid ${color}30` }}
    >
      <Icon size={11} style={{ color }} className="flex-shrink-0" />
      <span className="text-[10px] font-semibold whitespace-nowrap" style={{ color }}>{name}</span>
    </motion.div>
  );
}

function CategoryCard({ cat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="glass glass-hover rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 opacity-60 hover:opacity-100 grayscale-[50%] hover:grayscale-0"
      style={{ borderTop: `3px solid ${cat.color}` }}
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
        />
        <span className="text-xs font-bold tracking-widest uppercase" style={{ color: cat.color }}>
          {cat.label}
        </span>
      </div>
      {/* Pills */}
      <div className="flex flex-wrap gap-1.5">
        {cat.skills.map((skill, i) => (
          <SkillPill key={skill.name} {...skill} color={cat.color} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="skills" className="py-16 px-6 relative">
      <div className="section-divider mb-6 -mt-4" />
      <div className="max-w-6xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-zinc-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CATEGORIES.map((cat, i) => (
            <CategoryCard key={cat.label} cat={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

