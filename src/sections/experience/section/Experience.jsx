import { motion } from "framer-motion";
import { useState } from "react";
import { experiences } from "@/sections/experience/data/experience_data";
import ExperienceCard from "@/sections/experience/components/ExperienceCard";

function Experience() {
  const [openId, setOpenId] = useState(experiences[0]?.id);

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-slate-950 px-6 py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Journey
          </p>
          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Experience
          </h2>
          <p className="mt-6 leading-8 text-slate-400">
            {" "}
            My journey building applications, learning new technologies, and
            solving real-world problems through software.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-500 via-cyan-500/30 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="spacey-y-12">
            {experiences.map((experence, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experence.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute left-4 top-8 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] md:left-1/2" />
                  <div
                    className={`hidden md:flex ${isLeft ? "justify-start pr-[52%]" : "justify-end pl-[52%]"}`}
                  >
                    <ExperienceCard
                      experience={experence}
                      isOpen={openId === experence.id}
                      onToggle={() =>
                        setOpenId(openId === experence.id ? null : experence.id)
                      }
                    />
                  </div>

                  <div className="pl-10 mt-2 md:hidden">
                    <ExperienceCard
                      experience={experence}
                      isOpen={openId === experence.id}
                      onToggle={() =>
                        setOpenId(openId === experence.id ? null : experence.id)
                      }
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
