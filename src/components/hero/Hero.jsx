import Background from "@/components/background/Background";
import TypingText from "@/components//typing_text/TypingText";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6"
    >
      <Background />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center justify-between gap-16 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          opacity={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full border border-red-500 lg:w-1/2"
        >
          <p className="text-cyan-400 mb-4">Hello, I'm</p>

          <h1 className="text-5xl">Lukhanyo</h1>

          <TypingText />

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <p className="leading-8 text-slate-300">
              Building scalable, responsive and user-focused web applications
              using React, Node.js, Express, PostgreSQL and modern frontend
              technologies.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">
                React
              </span>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">
                Next.js
              </span>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">
                TypeScript
              </span>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">
                Node.js
              </span>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">
                Express.js
              </span>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">SQL</span>
              <span className="rounded-full bg-cyan-500/20 px-4 py-2">
                MongoDB
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
