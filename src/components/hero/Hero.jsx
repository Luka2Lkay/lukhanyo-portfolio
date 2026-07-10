import Background from "@/components/background/Background";
import TypingText from "@/components/typing_text/TypingText";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Stats from "@/components/stats/Stats";

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

function Hero() {
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
          <p className="text-cyan-400 mb-4 md:mt-20"> &#129309; Hi, I'm</p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Lukhanyo
          </h1>

          <TypingText />

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="leading-8 text-slate-300">
              Bridging the gap between robust backend systems and intuitive
              frontend interfaces.
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

          <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="projects"
              smooth
              duration={700}
              className="cursor-pointer rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-black transition hover:scale-105"
            >
              <div className="flex items-center gap-2">
                View My Work <ArrowRight size={20} />
              </div>
            </Link>

            <Link
              to="contact"
              smooth
              duration={700}
              className="cursor-pointer rounded-xl border border-cyan-500 px-7 py-3 text-white transition hover:bg-cyan-500 hover:text-black"
            >
              <div className="flex items-center gap-2">
                Contact Me <ArrowRight size={20} />
              </div>
            </Link>
          </div>

          <div className="mt-10 flex gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Luka2Lkay"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-cyan-500"
            >
              <FaGithub size={24} />
            </a>

            <a
              href="https://www.linkedin.com/in/lukhanyo-matshebelele/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/5 p-4 transition hover:-translate-y-1 hover:bg-cyan-500"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          <Stats />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
