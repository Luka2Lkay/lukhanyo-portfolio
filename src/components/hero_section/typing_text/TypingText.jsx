import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function TypingText() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 5 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      className="mt-4 flex min-h-[60px] items-center"
    >
      <h2 className="text-2xl font-semibold text-slate-300 md:text-3xl lg:text-4xl">
        <span className="bg-gradient-to-r from-cyan-400 to-red-500 bg-clip-text text-transparent">
          <Typewriter
            words={[
              "Full Stack Developer",
              "React Developer",
              "Frontend Developer",
              "Backend Developer",
              "Problem Solver",
            ]}
            loop={false}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            deleteSpeed={50}
            delay={1000}
          />
        </span>
      </h2>
    </motion.div>
  );
}

export default TypingText;
