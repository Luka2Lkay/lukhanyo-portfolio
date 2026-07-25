import { motion } from "framer-motion";
import Counter from "@/components/counter/Counter";

function StatsCard({ card, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-x transition hover:-translate-y-1 hover:border-cyan-500/50"
    >
      <h3 className="text-3xl font-bold text-cyan-400">
        <Counter end={card.value} suffix={card.suffix} />
      </h3>
      <p className="mt-2 text-slate-400">{card.label}</p>
    </motion.article>
  );
}

export default StatsCard;
