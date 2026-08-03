import { motion } from "framer-motion";

function SocialsLink({ social }) {
  const Icon = social.icon;
  return (
    <motion.a
      href={social.href}
      rel="noopener noreferrer"
      target="_blank"
      whileHover={{ y: -4, scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-500 hover:text-cyan-400"
    >
      <Icon size={20} />
    </motion.a>
  );
}

export default SocialsLink;
