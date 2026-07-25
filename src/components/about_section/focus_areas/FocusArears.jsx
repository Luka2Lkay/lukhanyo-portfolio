import { motion } from "framer-motion";
import { focusAreas } from "@/components/about_section/data/focus_areas";
import FocusAreasCard from "../focus_areas_card/FocusAreasCard";

function FocusArears() {
  return (
    <div className="rmt-24">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-widest text-cyan-400">
          What I'm Doing
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white">Current Focus</h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          {" "}
          Areas I'm currently investing my time in and where I'm growing as a
          developer.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {focusAreas.map((area, index) => (
          <FocusAreasCard area={area} index={index} key={area.title} />
          // <motion.div
          //   key={area.title}
          //   initial={{ opacity: 0, y: 40 }}
          //   whileInView={{ opacity: 1, y: 0 }}
          //   transition={{ duration: 0.5, delay: index * 0.15 }}
          //   viewport={{ once: true }}
          //   whileHover={{
          //     scale: 1.02,
          //     y: -8,
          //   }}
          //   className="
          //     rounded-3xl
          //     border border-white/10
          //     bg-white/5
          //     p-8
          //     backdrop-blur-xl
          //     transition
          //   "
          // >
          //   <div className="mb-5 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
          //     {area.icon}
          //   </div>

          //   <h3 className="text-xl font-semibold text-white">{area.title}</h3>

          //   <p className="mt-4 leading-7 text-slate-400">{area.description}</p>
          // </motion.div>
        ))}
      </div>
    </div>
  );
}

export default FocusArears;
