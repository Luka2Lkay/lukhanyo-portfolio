import { motion } from "framer-motion";

function MyStory() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
    >
      <span className="text-sm font-medium uppercase tracking-widest text-cyan-400">
        My Story
      </span>

      <h3 className="mt-3 text-3xl font-bold text-white">
        From saving code on OneDrive to building full-stack applications
      </h3>

      <div className="mt-6 space-y-5 text-slate-400 leading-8">
        <p>
          I didn't get into software development because I dreamed of writing
          code all day. I got into it because I enjoy solving problems, building
          things, and constantly asking, <em>"How does this actually work?"</em>
        </p>
        <br />
        <p>
          {" "}
          Like many self-taught developers, my journey started with curiosity.
          Every small project taught me something new, and every bug somehow
          became an opportunity to learn (even if it didn't feel like it at the
          time).{" "}
        </p>
        <br />
        <p>
          {" "}
          In the beginning, I had no idea what Git or GitHub were. Whenever I
          made changes to a project, I'd simply save another copy to OneDrive
          and hope for the best. If you've ever had files named{" "}
          <strong>"Project Final"</strong>, <strong>"Project Final 2"</strong>,
          or <strong>"Project Final Really Final"</strong>, you'll understand
          exactly how that went.{" "}
        </p>
        <br />
        <p>
          {" "}
          Everything changed when I discovered <strong>The Odin Project</strong>
          . That's where I learned about Git and GitHub, and suddenly version
          control made so much sense. No more duplicate folders, no more
          wondering which file was the latest, and no more accidental
          overwrites. Looking back, I honestly don't know how I survived without
          it.{" "}
        </p>
        <br />
        <p>
          {" "}
          Since then, I've continued expanding my skills across both frontend
          and backend development. I enjoy building applications with React,
          TypeScript, Node.js, Express, PostgreSQL, MongoDB, and other modern
          technologies, always focusing on creating software that's practical,
          maintainable, and enjoyable to use.{" "}
        </p>
        <br />
        <p>
          {" "}
          More recently, I've been exploring workflow automation and AI-powered
          applications. I'm fascinated by how AI can help developers work
          smarter, automate repetitive tasks, and build products that genuinely
          solve real-world problems instead of just adding flashy features.{" "}
        </p>
        <br />
      </div>
    </motion.div>
  );
}

export default MyStory;
