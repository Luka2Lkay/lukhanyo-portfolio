import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SkillCard from "@/sections/skills/components/SkillCard";
import { skillCategories } from "@/sections/skills/data/skills_data";

function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const categories = Object.keys(skillCategories);
  const activeskills = skillCategories[activeCategory].skills;

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Toolkit
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Skills & Technologies
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            I use modern technologies to build responsive, scalable, and
            user-focused applications.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className="relative rounded-full px-6 py-3 text-sm font-medium capitalize transition"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-full bg-cyan-500"
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <span
                  className={`relative z-10 ${isActive ? "text-black" : "text-slate-400 hover:text-white"}`}
                >
                  {skillCategories[category].label}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {activeskills.map((skill, index) => (
              <SkillCard skill={skill} index={index} key={skill.name} />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-slate-500">
            Always learning.{" "}
            <span className="mx-2 text-cyan-400">Always building.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
