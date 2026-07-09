import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const y = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const x2 = useTransform(x, (value) => value * -0.7);
  const y2 = useTransform(y, (value) => value * -0.7);

  const handleMouseMove = (event) => {
    const { innerWidth, innerHeight } = window;

    const xPosition = (event.clientX - innerWidth / 2) / 40;
    const yPosition = (event.clientY - innerHeight / 2) / 40;

    mouseX.set(xPosition);
    mouseY.set(yPosition);
  };
  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute  inset-[-300px] overflow-hidden"
    >
      <motion.div
        style={{ x: x2, y: y2 }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "easeInOut" }}
        className="
          absolute
          top-0
          left-0
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/20
          blur-[120px]
        "
      />
      <motion.div style={{ x: x2, y: y2 }} animate={{ scale: [1, 1.15, 1] }} transition={{ duration: 12, repeat: Infinity, repeatType: "easeInOut" }} className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
    </div>
  );
}

export default Background;
