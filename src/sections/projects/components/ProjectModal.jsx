import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RemoveScroll } from "react-remove-scroll";
import { FaGithub } from "react-icons/fa6";
import {
  ExternalLink,
  X,
  CheckCircle2,
  Lightbulb,
  TriangleAlert,
  Bug,
} from "lucide-react";

function ProjectModal({ project, open, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && project && (
        <RemoveScroll>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-m"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex justify-center overflow-y-auto p-4"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="my-10 w-full max-w-6xl rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-slate-950/80 px-8 py-5 backdrop-blur-xl">
                <div>
                  <h2 className="text-3xl font-bold text-white">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-slate-400">{project.subtitle}</p>
                </div>

                <button
                  onClick={onClose}
                  className="rounded-full bg-white/5 p-3 transition hover:bg-red-500"
                >
                  <X />
                </button>
              </div>
              <img
                className="h-[420px] w-full object-cover"
                src={project.image}
                alt={project.title}
              />
              <div className="space-y-14 p-8">
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
                  >
                    <ExternalLink size={20} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-white transition hover:border-cyan-500"
                  >
                    <FaGithub size={20} />
                    GitHub
                  </a>
                </div>

                <section>
                  <h3 className="mb-5 text-2xl font-bold text-white">
                    Overview
                  </h3>
                  <p className="leading-8 text-slate-400">{project.overview}</p>
                </section>

                <section>
                  <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-white">
                    <TriangleAlert className="text-red-500" />
                    Problem
                  </h3>
                  <p className="leading-8 text-slate-400">{project.problem}</p>
                </section>

                <section>
                  <h3 className="mb-5 flex items-center gap-3 text-2xl font-bold text-white">
                    <Lightbulb className="text-yellow-500" />
                    Solution
                  </h3>
                  <p className="leading-8 text-slate-400">{project.solution}</p>
                </section>

                <section>
                  <h3 className="mb-8 text-2xl font-bold text-white">
                    Features
                  </h3>

                  <div className="grid gap-5 md:grid-cols-2">
                    {project.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex gap-2 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                      >
                        <CheckCircle2 className="text-cyan-500" />
                        <p className="text-slate-400">{feature}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-8 text-2xl font-bold text-white">
                    Tech Stack
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-8 text-2xl font-bold text-white">
                    Challenges
                  </h3>
                  <div className="grid gap-4 md:grid-cols-2">
                    {project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="flex gap-2 rounded-xl border border-red-500/20 bg-red-500/5 p-5"
                      >
                        <TriangleAlert className="text-red-500" />
                        <p className="text-slate-400">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="mb-8 text-2xl font-bold text-white">
                    Lessons Learned
                  </h3>

                  <div className="grid gap-4 md:grid-cols-2">
                    {project.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className="flex gap-2rounded-xl border border-green-500/20 bg-green-500/5 p-5"
                      >
                        <Lightbulb className="text-cyan-500" />
                        <p className="text-slate-400">{lesson}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {project.images.length > 0 && (
                  <section>
                    <h3 className="mb-8 text-2xl font-bold text-white">
                      Screenshots
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2">
                      {project.images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`${project.title} Screenshot ${index + 1}`}
                          className="rounded-2xl border border-white/10 transition duration-300 hover:scale-[1.02]"
                        />
                      ))}
                    </div>
                  </section>
                )}

                {project.funFact && (
                  <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
                    <h3 className=" flex gap-2 mb-3 text-lg font-semibold text-amber-300">
                      <Bug className="mt-1 text-amber-400" />
                      Bug Hunt Challenge
                    </h3>

                    <p className="leading-7 text-amber-100/90">
                      {project.funFact}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </RemoveScroll>
      )}
    </AnimatePresence>
  );
}

export default ProjectModal;
