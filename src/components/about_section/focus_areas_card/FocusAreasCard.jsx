import { motion } from "framer-motion";

function FocusAreasCard({ area, index }) {
  const Icon = area.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -8 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition"
    >
      <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold text-white">{area.title}</h3>
      <p className="mt-4 leading-7 text-slate-400">{area.description}</p>
    </motion.article>
  );
}

export default FocusAreasCard;
