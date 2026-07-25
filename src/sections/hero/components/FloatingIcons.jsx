import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiExpress,
} from "react-icons/si";

const icons = [
  { Icon: FaReact, x: 0, y: -170 },
  { Icon: SiTypescript, x: 120, y: -120 },
  { Icon: FaNodeJs, x: 170, y: 0 },
  { Icon: SiPostgresql, x: 120, y: 120 },
  { Icon: SiMongodb, x: 0, y: 170 },
  { Icon: SiNextdotjs, x: -120, y: 120 },
  { Icon: FaGitAlt, x: -170, y: 0 },
  { Icon: SiExpress, x: -120, y: -120 },
];

function FloatingIcons() {
  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-full w-full"
      >
        {icons.map(({ Icon, x, y }, index) => (
          <motion.div
            key={index}
            style={{
              left: "50%",
              top: "50%",
              translateX: "-50%",
              translateY: "-50%",
              position: "absolute",
              x,
              y,
            }}
            whileHover={{
              scale: 1.2,
            }}
            className="absolute flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
          >
            <Icon size={30} className="text-cyan-400" />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-cyan-500/40 bg-white/5 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

        <img
          src="../../../src/assets/Luka.jpg"
          alt="Lukhanyo"
          className="relative h-56 w-56 rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default FloatingIcons;
