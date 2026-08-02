import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/sections/projects/data/project_data";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const filters = ["all", "fullstack", "frontend", "backend", "mobile"];

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-white"
        >
          Featured Projects
        </motion.h2>

        <p className="mt-4 text-center text-slate-400">
          Applications and products I've built.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 transition ${activeFilter === filter ? "bg-cyan-500 text-black" : "bg-slate-900 text-slate-300"}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            layout
            className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={() => setSelectedProject(project)}
                />
              ))
            ) : (
              <h2 className="text-3xl font-semibold text-cyan-400 text-center ">
                Comming Soon!
              </h2>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          open={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
