import { timeline } from "@/sections/about/data/timeline";
import TimelineCard from "./TimelineCard";

function JourneyTimeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-0 h-full w-1 rounded-full bg-white/10 md:left-1/2 md:-translate-x-1/2" />
      <div className="space-y-12">
        {timeline.map((item, index) => (
          <TimelineCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </div>
  );
}

export default JourneyTimeline;
