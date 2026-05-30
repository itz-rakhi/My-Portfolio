import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiCalendar, FiBookOpen } from 'react-icons/fi';

import caddImg from '../assets/cert-cadd.jpeg';
import internshalaImg from '../assets/cert-internshala.jpeg';
// import udemyImg from '../assets/cert-udemy.jpeg';

const CERTS = [
  {
    id: 1,
    title: 'Java Full Stack Development',
    issuer: 'CADD Centre (Thane)',
    date: 'Jan 2025 – Jan 2026',
    description:
      'Comprehensive training in Java Full Stack Development covering Core Java, Advanced Java, Spring Framework, Hibernate, React.js, and MySQL with hands-on project experience.',
    skills: ['C', 'C++', 'Core Java', 'Advanced Java', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'AJAX', 'Spring Framework', 'Hibernate', 'SQL', 'XML', 'JSON', 'ReactJS'],
    color: '#f472b6',
    gradient: 'from-pink-600/20 via-rose-600/15 to-purple-600/20',
    image: caddImg,
    imageName: 'cert-cadd.jpeg',
  },
  {
    id: 2,
    title: 'Machine Learning - Internshala',
    issuer: 'Internshala',
    date: '2025',
    description:
      'Certified training in Machine Learning fundamentals including supervised & unsupervised learning, model building, data preprocessing, and real-world ML project implementation.',
    skills: ['Python', 'Supervised Learning', 'Unsupervised Learning', 'Data Preprocessing', 'Model Building'],
    color: '#38bdf8',
    gradient: 'from-sky-600/20 via-cyan-600/15 to-blue-600/20',
    image: internshalaImg,
    imageName: 'cert-internshala.jpeg',
  },
  {
    id: 3,
    title: 'Master Data Analysis',
    issuer: 'Udemy',
    date: '2026',
    description:
      'Complete data analysis course covering Python, Statistics, Generative AI, EDA, AWS, SQL, Excel, Power BI, Tableau, ETL, Snowflake & Feature Engineering with real-world datasets.',
    skills: ['Python', 'Statistics', 'Power BI', 'SQL', 'Tableau', 'MS Excel', 'ETL', 'Snowflake', 'Feature Engineering'],
    color: '#a78bfa',
    gradient: 'from-violet-600/20 via-indigo-600/15 to-purple-600/20',
    image: null, // Save as src/assets/cert-udemy.jpeg then: import udemyImg and set image: udemyImg
    imageName: 'cert-udemy.jpeg',
  },
];

/* Full-screen image modal */
function ImageModal({ cert, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        className="relative max-w-4xl w-full glass rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 glass p-2 rounded-full text-slate-300 hover:text-white transition-colors"
        >
          <FiX size={20} />
        </button>

        {cert.image ? (
          <img src={cert.image} alt={cert.title} className="w-full h-auto max-h-[80vh] object-contain" />
        ) : (
          <div className={`w-full h-80 bg-gradient-to-br ${cert.gradient} flex flex-col items-center justify-center gap-4`}>
            <FiAward size={64} style={{ color: cert.color }} />
            <div className="text-center px-6">
              <p className="text-white font-bold text-xl mb-1">{cert.title}</p>
              <p style={{ color: cert.color }} className="font-medium">{cert.issuer}</p>
            </div>
          </div>
        )}

        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
          <p className="text-sm font-medium mb-3" style={{ color: cert.color }}>{cert.issuer} · {cert.date}</p>
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((s) => (
              <span
                key={s}
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: `${cert.color}15`, color: cert.color, border: `1px solid ${cert.color}25` }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function CertCard({ cert, index, onView }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="glass rounded-3xl overflow-hidden border border-white/8 hover:border-violet-500/30 transition-all duration-300 group flex flex-col"
    >
      {/* Banner */}
      <div
        className={`relative h-48 bg-gradient-to-br ${cert.gradient} flex items-center justify-center overflow-hidden cursor-pointer flex-shrink-0`}
        onClick={() => onView(cert)}
      >
        {cert.image ? (
          <>
            <img
              src={cert.image}
              alt={cert.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
          </>
        ) : (
          <>
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl"
              style={{ background: `radial-gradient(circle, ${cert.color}, transparent)` }}
            />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div
                className="w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${cert.color}40, ${cert.color}20)`, border: `2px solid ${cert.color}40` }}
              >
                <FiAward size={38} style={{ color: cert.color }} />
              </div>
              <span className="text-xs font-medium tracking-widest uppercase" style={{ color: `${cert.color}99` }}>
                Certificate
              </span>
            </div>
          </>
        )}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="glass px-4 py-2 rounded-full text-white text-xs font-semibold flex items-center gap-2">
            <FiExternalLink size={13} /> View Certificate
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: `${cert.color}18`, border: `1px solid ${cert.color}30` }}
          >
            <FiBookOpen size={13} style={{ color: cert.color }} />
          </div>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: cert.color }}>
            {cert.issuer}
          </span>
          <div className="flex items-center gap-1 ml-auto text-slate-500 text-xs whitespace-nowrap">
            <FiCalendar size={11} />
            {cert.date}
          </div>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 leading-snug">{cert.title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{cert.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {cert.skills.slice(0, 6).map((s) => (
            <span
              key={s}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ background: `${cert.color}12`, color: cert.color, border: `1px solid ${cert.color}22` }}
            >
              {s}
            </span>
          ))}
          {cert.skills.length > 6 && (
            <span className="text-xs px-2.5 py-1 rounded-full font-medium text-slate-500 glass">
              +{cert.skills.length - 6} more
            </span>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onView(cert)}
          className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold transition-all"
          style={{ background: `${cert.color}18`, color: cert.color, border: `1px solid ${cert.color}30` }}
        >
          <FiAward size={14} /> View Certificate
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="py-16 px-6">
      <div className="section-divider mb-6 -mt-4" />
      <div className="max-w-6xl mx-auto">

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-violet-400 text-xs font-bold tracking-[0.3em] uppercase mb-3">
            My Achievements
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Certifi<span className="gradient-text">cations</span>
          </h2>
          <p className="text-slate-400 mt-3 text-sm max-w-lg mx-auto">
            Professional certifications that validate my skills and commitment to continuous learning.
          </p>
        </motion.div>

        {/* grid-cols-2 on mobile so all 3 appear in a row on wider phones, 3 cols on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTS.map((cert, i) => (
            <CertCard key={cert.id} cert={cert} index={i} onView={setSelected} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ImageModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}
