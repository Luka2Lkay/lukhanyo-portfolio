import { motion } from "framer-motion";

function FloatingIconsCard({ Icon, x, y }) {
  return (
    <motion.article
      style={{
        top: "50%",
        left: "50%",
        translateX: "-50%",
        translateY: "-50%",
        position: "absolute",
        x,
        y,
      }}
      whileHover={{ scale: 1.02 }}
      className="absolute flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg"
    >
      <Icon size={30} className="text-cyan-400" />
    </motion.article>
  );
}

export default FloatingIconsCard;
