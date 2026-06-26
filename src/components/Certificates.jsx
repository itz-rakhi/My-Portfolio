import { useRef, useState, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiAward, FiExternalLink, FiX, FiCalendar, FiBookOpen } from 'react-icons/fi';

import caddImg from '../assets/cert-cadd.jpeg';
import internshalaImg from '../assets/cert-internshala.jpeg';
import udemyImg from '../assets/udemy.jpg';
import dataAnalyticsImg from '../assets/data analytics.jpg';
import ciscoImg from '../assets/Cisco.jpg';
import powerbiImg from '../assets/3hourpowerbi.png';

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
    image: udemyImg,
    imageName: 'udemy.jpg',
  },
  {
    id: 4,
    title: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2025',
    description:
      'Certified training in Data Analytics Essentials covering fundamentals of data analytics including data collection, data cleaning, data preprocessing, data visualization, SQL basics, and real-world data analysis using Excel and Tableau.',
    skills: ['Data Collection', 'Data Cleaning & Preprocessing', 'Data Visualization (Excel, Tableau)', 'SQL Basics', 'Data-driven Decision Making'],
    color: '#f472b6',
    gradient: 'from-pink-600/20 via-rose-600/15 to-red-600/20',
    image: dataAnalyticsImg,
    extraImage: ciscoImg,
    imageName: 'data analytics.jpg',
  },
  {
    id: 5,
    title: 'Data to Dashboard in Power BI',
    issuer: 'SkillCourse by Satish Dhawale',
    date: '2025',
    description:
      'Successfully completed the "Data to Dashboard in Power BI – 3 Hours Live Workshop". Built an Executive Sales Dashboard in Power BI, transforming raw sales data into actionable business insights through interactive visualizations and KPI tracking.',
    skills: ['Power BI', 'DAX', 'KPI Tracking', 'Data Visualization', 'Executive Dashboard', 'Sales Analytics'],
    color: '#f59e0b',
    gradient: 'from-amber-600/20 via-yellow-600/15 to-orange-600/20',
    image: powerbiImg,
    imageName: '3hourpowerbi.png',
  },
];

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
        className="relative max-w-xl w-full rounded-3xl overflow-hidden"
        style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.1)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full transition-colors text-slate-600 hover:text-slate-900"
          style={{ background: 'rgba(0,0,0,0.06)', border: '1px solid rgba(0,0,0,0.1)' }}
        >
          <FiX size={20} />
        </button>

        {cert.image ? (
          <>
            {cert.extraImage ? (
              <div className="flex gap-1">
                <img src={cert.image} alt={cert.title} className="w-1/2 h-48 object-contain bg-black/5" />
                <img src={cert.extraImage} alt={`${cert.title} - Cisco`} className="w-1/2 h-48 object-contain bg-black/5 border-l border-white/10" />
              </div>
            ) : (
              <img src={cert.image} alt={cert.title} className="w-full h-auto max-h-[45vh] object-contain" />
            )}
          </>
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
          <h3 className="text-xl font-bold mb-1" style={{ color: '#111827' }}>{cert.title}</h3>
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
      className="glass rounded-3xl overflow-hidden border border-white/8 hover:border-zinc-500/30 transition-all duration-300 group flex flex-col opacity-60 hover:opacity-100 grayscale-[50%] hover:grayscale-0 h-full"
    >
      {/* Banner */}
      <div
        className={`relative h-32 bg-gradient-to-br ${cert.gradient} flex items-center justify-center overflow-hidden cursor-pointer flex-shrink-0`}
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
                className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{ background: `linear-gradient(135deg, ${cert.color}40, ${cert.color}20)`, border: `2px solid ${cert.color}40` }}
              >
                <FiAward size={26} style={{ color: cert.color }} />
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
      <div className="p-4 flex flex-col flex-1">
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

        <h3 className="text-base font-bold text-white mb-1.5 leading-snug">{cert.title}</h3>
        <p className="text-slate-400 text-xs leading-relaxed mb-3 flex-1">{cert.description}</p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => onView(cert)}
          className="w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-semibold transition-all"
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
  const scrollRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const onScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
  }, []);

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
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Certifi<span className="gradient-text">cations</span>
          </h2>
        </motion.div>

        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="scroll-row flex gap-5 overflow-x-auto pb-4"
        >
          {CERTS.map((cert, i) => (
            <div key={cert.id} className="flex-shrink-0 w-72 h-[420px]">
              <CertCard cert={cert} index={i} onView={setSelected} />
            </div>
          ))}
        </div>

        <DraggableScrollBar scrollRef={scrollRef} progress={progress} />
      </div>

      <AnimatePresence>
        {selected && <ImageModal cert={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  );
}

