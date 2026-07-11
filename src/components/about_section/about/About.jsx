import MyStory from "@/components/about_section/my_story/MyStory";
import JourneyTimeline from "@/components/about_section/journey_timeline/JourneyTimeline";
import FocusArears from "../focus_areas/FocusArears";

function About() {
  return (
    <section id="about" className="bg-slate-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">
          <MyStory />
          <JourneyTimeline />
          <FocusArears />
        </div>
      </div>
    </section>
  );
}

export default About;
