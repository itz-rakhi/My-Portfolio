import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiBook, FiTarget, FiCode, FiAward } from 'react-icons/fi';
import photo from '../assets/photo.jpeg';

const CARDS = [
  {
    icon: FiBook,
    title: 'Education',
    color: '#a78bfa',
    content:
      'B.E. in Computer Engineering at Mumbai University (2022–2026). Developing strong knowledge in programming, database management, software development, and problem-solving.',
  },
  {
    icon: FiCode,
    title: 'Technical Focus',
    color: '#38bdf8',
    content:
      'Focused on Java Full Stack Development using Java, Spring Framework, Hibernate, React.js, and MySQL along with Data Analytics tools like Power BI, Tableau, Python, and MS Excel.',
  },
  {
    icon: FiTarget,
    title: 'Career Goals',
    color: '#34d399',
    content:
      'Looking for opportunities as a Java Full Stack Developer or Data Analyst where I can apply my technical knowledge, gain industry experience, and contribute to innovative projects.',
  },
  {
    icon: FiAward,
    title: 'Interests',
    color: '#f472b6',
    content:
      'Interested in Java development, web technologies, database management, data visualization, dashboard creation, and continuously learning new technologies.',
  },
];

const STATS = [
  { value: '2+', label: 'Years Coding' },
  { value: '5+', label: 'Projects Built' },
  { value: '15+', label: 'Technologies' },
  { value: '2026', label: 'Graduating' },
];

function InfoCard({ icon: Icon, title, color, content, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="glass glass-hover rounded-2xl p-5 transition-all duration-300"
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
      >
        <Icon size={20} style={{ color }} />
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed">{content}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="about" className="py-16 px-6">
      <div className="section-divider mb-6 -mt-4" />
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* Left — Profile card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Glow */}
              <div
                className="absolute -inset-1 rounded-3xl blur-2xl opacity-30 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)' }}
              />
              <div className="relative glass rounded-3xl p-8 text-center">
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-5">
                  {/* Glowing ring around photo */}
                  <div
                    className="absolute -inset-1 rounded-full blur-sm opacity-70"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #0ea5e9)' }}
                  />
                  <img
                    src={photo}
                    alt="Rakhi Samant"
                    className="relative w-32 h-32 rounded-full object-cover object-top border-2 border-violet-500/40 shadow-2xl"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">Rakhi Avadut Samant</h3>
                <p className="text-violet-400 text-sm mb-1 font-medium">Computer Engineering Student</p>
                <p className="text-slate-500 text-xs mb-6">Mumbai University · 2022–2026</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-3">
                  {STATS.map(({ value, label }) => (
                    <div key={label} className="glass rounded-xl py-3 px-2">
                      <div className="text-lg font-bold gradient-text">{value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Text + cards */}
          <div className="lg:col-span-3 space-y-6">
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-slate-300 leading-relaxed text-lg"
            >
              I am a Computer Engineering student with a strong interest in{' '}
              <span className="text-violet-400 font-semibold">Java Full Stack Development</span> and{' '}
              <span className="text-sky-400 font-semibold">Data Analytics</span>. I enjoy developing
              user-friendly applications, working with databases, and analyzing data to create
              meaningful insights. I am continuously improving my technical skills and exploring
              modern technologies to build efficient real-world solutions.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-4">
              {CARDS.map((card, i) => (
                <InfoCard key={card.title} {...card} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
