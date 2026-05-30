import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaJava, FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython,
  FaGithub, FaBootstrap,
} from 'react-icons/fa';
import {
  SiSpring, SiHibernate, SiMysql, SiTailwindcss,
  SiJquery, SiXml,
} from 'react-icons/si';
import { VscJson } from 'react-icons/vsc';
import {
  FiBarChart2, FiGrid, FiDatabase, FiCode,
} from 'react-icons/fi';

const CATEGORIES = [
  {
    label: 'Backend',
    color: '#f472b6',
    skills: [
      { name: 'Java Basics', icon: FaJava, level: 85 },
      { name: 'Advanced Java', icon: FaJava, level: 75 },
      { name: 'Hibernate', icon: SiHibernate, level: 65 },
      { name: 'Spring Framework', icon: SiSpring, level: 60 },
    ],
  },
  {
    label: 'Frontend',
    color: '#38bdf8',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, level: 85 },
      { name: 'Bootstrap', icon: FaBootstrap, level: 80 },
      { name: 'JavaScript', icon: FaJs, level: 80 },
      { name: 'jQuery', icon: SiJquery, level: 70 },
      { name: 'AJAX', icon: FiCode, level: 65 },
      { name: 'XML', icon: SiXml, level: 70 },
      { name: 'JSON', icon: VscJson, level: 80 },
      { name: 'React.js', icon: FaReact, level: 72 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 78 },
    ],
  },
  {
    label: 'Database',
    color: '#34d399',
    skills: [
      { name: 'MySQL', icon: SiMysql, level: 85 },
    ],
  },
  {
    label: 'Analytics & Programming',
    color: '#a78bfa',
    skills: [
      { name: 'Python', icon: FaPython, level: 70 },
      { name: 'Power BI', icon: FiBarChart2, level: 85 },
      { name: 'Tableau', icon: FiGrid, level: 85 },
      { name: 'MS Excel', icon: FiDatabase, level: 85 },
    ],
  },

];

function SkillCard({ name, icon: Icon, level, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      whileHover={{ y: -6, scale: 1.04 }}
      className="glass glass-hover rounded-2xl p-4 flex flex-col items-center gap-3 cursor-default transition-all duration-300 group"
    >
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15`, border: `1px solid ${color}25` }}
      >
        <Icon size={28} style={{ color }} />
      </div>
      <span className="text-white text-xs font-semibold text-center leading-tight">{name}</span>
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

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            My <span className="gradient-text">Skills</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className="space-y-8">
          {CATEGORIES.map((cat) => (
            <div key={cat.label}>
              {/* Category label */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-3 mb-5"
              >
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 10px ${cat.color}` }}
                />
                <span
                  className="text-sm font-bold tracking-widest uppercase"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
                <div className="flex-1 h-px" style={{ background: `${cat.color}20` }} />
              </motion.div>

              {/* Skill cards grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {cat.skills.map((skill, i) => (
                  <SkillCard key={skill.name} {...skill} color={cat.color} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
