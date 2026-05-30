import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../App';

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = NAV_LINKS.map((l) => document.getElementById(l.toLowerCase()));
      sections.forEach((sec) => {
        if (sec) {
          const { top, bottom } = sec.getBoundingClientRect();
          if (top <= 100 && bottom >= 100)
            setActive(sec.id.charAt(0).toUpperCase() + sec.id.slice(1));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setActive(id);
    setMenuOpen(false);
  };

  const navBg = scrolled
    ? dark
      ? 'glass shadow-xl shadow-violet-950/30'
      : 'bg-white/80 backdrop-blur-xl shadow-lg shadow-violet-100/50 border-b border-violet-100'
    : 'bg-transparent';

  const linkActive = dark ? 'text-violet-400' : 'text-violet-600';
  const linkIdle   = dark ? 'text-slate-400 hover:text-slate-200' : 'text-slate-500 hover:text-slate-800';
  const pillBg     = dark ? 'bg-violet-500/10 border border-violet-500/20' : 'bg-violet-100 border border-violet-300/50';

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg} ${scrolled ? 'py-3' : 'py-5'}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <motion.button whileHover={{ scale: 1.05 }} onClick={() => scrollTo('home')} className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Rakhi</span>
          <span className={dark ? 'text-slate-400' : 'text-slate-400'}>.dev</span>
        </motion.button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === link ? linkActive : linkIdle
                }`}
              >
                {active === link && (
                  <motion.span
                    layoutId="nav-pill"
                    className={`absolute inset-0 rounded-lg ${pillBg}`}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{link}</span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right side — theme toggle + mobile menu */}
        <div className="flex items-center gap-2">
          {/* Theme toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            aria-label="Toggle theme"
            className={`p-2.5 rounded-full transition-all duration-300 ${
              dark
                ? 'glass text-yellow-300 hover:text-yellow-200 hover:border-yellow-400/30'
                : 'bg-slate-100 border border-slate-200 text-slate-600 hover:bg-violet-50 hover:border-violet-300'
            }`}
          >
            <AnimatePresence mode="wait">
              {dark ? (
                <motion.span key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiSun size={17} />
                </motion.span>
              ) : (
                <motion.span key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <FiMoon size={17} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* Mobile menu toggle */}
          <button
            className={`md:hidden transition-colors p-1 ${dark ? 'text-slate-300 hover:text-violet-400' : 'text-slate-600 hover:text-violet-600'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`md:hidden overflow-hidden border-t ${
              dark ? 'glass border-white/5' : 'bg-white/90 backdrop-blur-xl border-violet-100'
            }`}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollTo(link)}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      active === link
                        ? dark ? 'text-violet-400 bg-violet-500/10' : 'text-violet-600 bg-violet-50'
                        : dark ? 'text-slate-400 hover:text-slate-200 hover:bg-white/5' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
