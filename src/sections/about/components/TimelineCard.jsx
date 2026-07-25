import { motion } from "framer-motion";

function TimelineCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`relative flex items-center ${
        index % 2 === 0 ? "md:justify-start" : "md:justify-end"
      }`}
    >
      <div className="absolute left-5 z-20 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] md:left-1/2 md:-translate-x-1/2" />
      <div className="ml-16 w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:ml-0 md:w-[45%]">
        <span className="text-cyan-400 font-semibold">{item.year}</span>
        <h3 className="mt-2 text-xl font-bold text-white">{item.title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{item.description}</p>
      </div>
    </motion.article>
  );
}

export default TimelineCard;
