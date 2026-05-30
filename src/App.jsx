import { useState, useEffect, createContext, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

/* Theme context — shared across all components */
export const ThemeContext = createContext({ dark: true, toggle: () => {} });
export const useTheme = () => useContext(ThemeContext);

/* Page loader */
function Loader({ dark }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{ background: dark ? '#080810' : '#f1f5f9' }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-12 h-12 rounded-full border-2 border-violet-500/20 border-t-violet-500 mb-4"
      />
      <motion.p
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-slate-500 text-sm tracking-widest uppercase"
      >
        Loading...
      </motion.p>
    </motion.div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(true);

  /* Apply/remove .light class on body */
  useEffect(() => {
    document.body.classList.toggle('light', !dark);
  }, [dark]);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(t);
  }, []);

  const toggle = () => setDark((d) => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <AnimatePresence>{loading && <Loader dark={dark} />}</AnimatePresence>

      {!loading && (
        <motion.div
          key={dark ? 'dark' : 'light'}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="min-h-screen overflow-x-hidden"
          style={{ background: dark ? '#080810' : '#f1f5f9' }}
        >
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </motion.div>
      )}
    </ThemeContext.Provider>
  );
}
