import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from "react-icons/fa";
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
  { Icon: FaDocker, x: -120, y: 120 },
  { Icon: FaGitAlt, x: -170, y: 0 },
  { Icon: SiExpress, x: -120, y: -120 },
  { Icon: SiNextdotjs, x: 0, y: 0 },
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
              x,
              y,
            }}
            className="
              absolute
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-lg
            "
            whileHover={{
              scale: 1.2,
            }}
          >
            <Icon size={30} className="text-cyan-400" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default FloatingIcons;
