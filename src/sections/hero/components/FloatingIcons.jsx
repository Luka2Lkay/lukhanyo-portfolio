import { motion } from "framer-motion";
import { icons } from "@/sections/hero/data/icons";
import FloatingIconsCard from "@/sections/hero/components/FloatingIconsCard";
import profilePhoto from "@/assets/Luka.jpg";

function FloatingIcons() {
  return (
    <div className="relative flex h-[420px] w-[420px] items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-full w-full"
      >
        {icons.map(({ Icon, x, y }, index) => (
          <FloatingIconsCard Icon={Icon} x={x} y={y} key={index} />
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-cyan-500/40 bg-white/5 backdrop-blur-xl"
      >
        <div className="absolute inset-0 bg-cyan-500/10 blur-3xl" />

        <img
          src={profilePhoto}
          alt="Lukhanyo"
          className="relative h-56 w-56 rounded-full object-cover"
        />
      </motion.div>
    </div>
  );
}

export default FloatingIcons;
