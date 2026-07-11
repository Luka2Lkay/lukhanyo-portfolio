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
        Building technology solutions that solve real-world problems.
      </h3>

      <div className="mt-6 space-y-5 text-slate-400 leading-8">
        <p>
          I didn't get into software development because I wanted to write code
          all day—I got into it because I enjoy solving problems and building
          things that people can actually use.
        </p>
        <br />
        <p>
          What started as curiosity about how websites work quickly turned into
          a passion for creating applications and learning how everything fits
          together, from the frontend to the backend. The more I built, the more
          I realized that I enjoy turning ideas into real products and finding
          better ways to work.
        </p>
        <br />
        <p>
          Over the years, I've worked with technologies like React, TypeScript,
          C#, Node.js, Express, SQL Server, and MongoDB, building projects that
          challenged me to think beyond just writing features. I enjoy creating
          modern, interactive experiences and developing solutions that help
          businesses and communities.
        </p>
        <br />
        <p>
          Lately, I've been exploring workflow automation, AI integrations, and
          AI-assisted development workflows. I'm fascinated by how AI can help
          developers move faster, automate repetitive tasks, and build smarter
          applications. Whether it's integrating AI features into products or
          using AI to improve my own development process, I'm always looking for
          ways to work more efficiently and create better software.
        </p>
        <br />
        <p>
          Right now, I'm focused on building full-stack applications,
          experimenting with new technologies, and creating solutions that make
          a real impact—especially for local businesses and organizations that
          can benefit from modern digital tools.
        </p>
      </div>
    </motion.div>
  );
}

export default MyStory;
