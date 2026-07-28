import { motion } from "framer-motion";

function SkillCard({ skill, index }) {
  const Icon = skill.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-500/40 hover:bg-white/10"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-2xl text-cyan-400 transition group-hover:scale-110 group-hover:bg-cyan-500/20">
        <Icon />
      </div>

      <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-400">
        {skill.description}
      </p>
    </motion.article>
  );
}

export default SkillCard;
