import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ChevronDown } from "lucide-react";

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.5 }}
      className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
    >
      <Link
        to="about"
        smooth
        duration={700}
        offset={-70}
        className="group flex cursor-pointer flex-col items-center"
      >
        <span className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">
          Scroll Down
        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border border-slate-500">
          <motion.div
            animate={{ y: [0, 18, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="mt-2 h-3 w-3 rounded-full bg-cyan-400"
          />
        </div>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mt-3 text-slate-400 group-hover:text-cyan-400"
        >
          <ChevronDown size={20} />
        </motion.div>
      </Link>
    </motion.div>
  );
}

export default ScrollIndicator;
