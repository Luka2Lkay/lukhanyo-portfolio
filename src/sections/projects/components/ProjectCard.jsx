import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-cyan-500/20 hover:border-cyan-500 hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]"
    >
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        <p className="mt-3 text-slate-400">{project.description}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:text-cyan-400"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={project.live}
            title="live link"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-slate-900 p-3 text-slate-300 transition hover:text-cyan-400"
          >
            <ExternalLink size={20} />
          </a>
          <button className="ml-auto flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2 font-semibold text-black transition hover:bg-cyan-400">
            Details
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
