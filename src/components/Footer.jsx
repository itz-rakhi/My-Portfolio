import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi';

const SOCIALS = [
  { icon: FiGithub, href: 'https://github.com/itz-rakhi', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/rakhi-s-0bb067346', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:rakhis412005@gmail.com', label: 'Email' },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-6 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-1">
              <span className="gradient-text">Rakhi</span>
              <span className="text-slate-500">.dev</span>
            </div>
            <p className="text-slate-600 text-sm">
              © {new Date().getFullYear()} Ms. Rakhi Samant. All rights reserved.
            </p>
          </div>

          {/* Social icons */}
          <div className="flex gap-3">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="glass p-2.5 rounded-full text-slate-500 hover:text-violet-400 hover:border-violet-500/30 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </div>

          {/* Back to top */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-violet-400 glass px-4 py-2 rounded-full transition-all duration-300 hover:border-violet-500/30"
          >
            <FiArrowUp size={15} /> Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
