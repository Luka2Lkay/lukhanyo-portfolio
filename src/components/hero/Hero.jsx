import Background from "@/components/background/Background";
import TypingText from "@/components//typing_text/TypingText";
import { motion } from "framer-motion";

function Hero() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express.js",
    "C#",
    "SQL",
    "MongoDB",
  ];
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-start overflow-hidden px-6 pt-24 lg:items-center lg:pt-0"
    >
      <Background />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-2xl text-center lg:text-left"
        >
          <p className="text-cyan-400 mb-4"> &#129309; Hello, I'm</p>

          <h1 className="text-5xl">Lukhanyo</h1>

          <TypingText />

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="leading-8 text-slate-300">
              <strong>Software Engineer</strong> bridging the gap between robust
              backend systems and intuitive frontend interfaces.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-full bg-cyan-500/20 px-4 py-2"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
