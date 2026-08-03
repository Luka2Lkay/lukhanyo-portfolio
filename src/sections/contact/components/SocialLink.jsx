import { motion } from "framer-motion";

function SocialLink({ social }) {
  const Icon = social.icon;
  return (
    <motion.a
      whileHover={{ scale: [1.1], y: -4 }}
      whileTap={{ scale: 0.95 }}
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-2xl border border-white/10 bg-slate-900 p-4 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
    >
      <Icon size={24} />
    </motion.a>
  );
}

export default SocialLink;
