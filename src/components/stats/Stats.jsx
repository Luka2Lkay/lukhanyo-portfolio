import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { getGithubStats } from "@/services/github_service";
import { useEffect } from "react";

const stats = [
  {
    value: 20,
    suffix: "+",
    label: "Projects",
  },
  {
    value: 100,
    suffix: "+",
    label: "GitHub Commits",
  },
  {
    value: 15,
    suffix: "+",
    label: "Technologies",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years Learning",
  },
];

function Stats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    getGithubStats().then((data) => {
      console.log("GitHub Stats:", data);
    });
  });

  return (
    <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-5
            text-center
            backdrop-blur-x
            transition
            hover:-translate-y-1
            hover:border-cyan-500/50
          "
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            {inView && (
              <CountUp.default
                end={stat.value}
                duration={2}
                suffix={stat.suffix}
              />
            )}
          </h3>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;
