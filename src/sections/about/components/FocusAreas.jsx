import { focusAreas } from "@/sections/about/data/focus_areas";
import FocusAreasCard from "./FocusAreasCard";

function FocusArears() {
  return (
    <div className="mt-24">
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
        ))}
      </div>
    </div>
  );
}

export default FocusArears;
