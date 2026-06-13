import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// ✅ Replace these 3 values with your EmailJS credentials
const EMAILJS_SERVICE_ID  = 'service_c18s5dg';
const EMAILJS_TEMPLATE_ID = 'template_kfsdic4';
const EMAILJS_PUBLIC_KEY  = 'EMrLZW1rJkcV9VwIu';

const CONTACT_INFO = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'rakhis412005@gmail.com',
    href: 'mailto:rakhis412005@gmail.com',
    color: '#f472b6',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/rakhi-s-0bb067346',
    href: 'https://www.linkedin.com/in/rakhi-s-0bb067346',
    color: '#38bdf8',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/itz-rakhi',
    href: 'https://github.com/itz-rakhi',
    color: '#a78bfa',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject || 'Portfolio Contact',
          message:    form.message,
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 4000);
      })
      .catch(() => {
        setLoading(false);
        alert('Something went wrong. Please email me directly at rakhis412005@gmail.com');
      });
  };

  return (
    <section id="contact" className="py-16 px-6">
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
            Let's connect
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            I'm open to internships, collaborations, and full-time opportunities.
            Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              Open to internships, entry-level roles, and exciting tech opportunities.
              Feel free to reach out — I'd love to connect!
            </p>

            {CONTACT_INFO.map(({ icon: Icon, label, value, href, color }, i) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ x: 6 }}
                className="flex items-center gap-4 glass glass-hover rounded-2xl p-5 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">{label}</p>
                  <p className="text-slate-200 text-sm mt-0.5 group-hover:text-zinc-300 transition-colors break-all">
                    {value}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="glass rounded-3xl p-8 space-y-5 border border-white/8"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: 'name', label: 'Your Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
              ].map(({ name, label, type, placeholder }) => (
                <div key={name}>
                  <label className="block text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                    {label}
                  </label>
                  <input
                    type={type}
                    name={name}
                    required
                    placeholder={placeholder}
                    value={form[name]}
                    onChange={handleChange}
                    className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500/50 focus:bg-white/6 transition-all text-sm"
                  />
                </div>
              ))}
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Project collaboration / Internship opportunity..."
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500/50 focus:bg-white/6 transition-all text-sm"
              />
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-2 font-medium uppercase tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/4 border border-white/8 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-zinc-500/50 focus:bg-white/6 transition-all text-sm resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(220,38,38,0.4)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all disabled:opacity-70"
              style={{
                background: sent
                  ? 'linear-gradient(135deg, #059669, #10b981)'
                  : 'linear-gradient(135deg, #dc2626, #b91c1c)',
              }}
            >
              {sent ? (
                <><FiCheckCircle size={18} /> Message Sent!</>
              ) : loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>
              ) : (
                <><FiSend size={16} /> Send Message</>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
