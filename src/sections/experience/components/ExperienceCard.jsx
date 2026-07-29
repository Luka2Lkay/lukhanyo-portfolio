import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

function ExperienceCard({ experience, isOpen, onToggle }) {
  return (
    <motion.article
      layout
      className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-500/30"
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start justify-between gap-6 text-left"
      >
        <div>
          <span className="text-sm font-medium text-cyan-400">
            {experience.period}
          </span>
          <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">
            {experience.title}
          </h3>
          <p className="mt-1 text-slate-400">{experience.company}</p>
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="rounded-full border border-white/10 p-2 text-slate-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-6 border-t border-white/10 pt-6">
              <p className="leading-7 text-slate-400">
                {experience.description}
              </p>

              <div className="mt-6">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                  Highlights
                </h4>

                <ul className="mt-4 space-y-3">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex gap-3 text-sm text-slate-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
}

export default ExperienceCard;
