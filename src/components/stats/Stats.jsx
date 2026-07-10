import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { getGithubStats } from "@/services/github_service";
import { useEffect, useState } from "react";
import StatsSkeleton from "../stats_skeleton/StatsSkeleton";

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

  const [githubStats, setGithubStats] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getGithubStats();
      setGithubStats(data);
    })();
  }, [githubStats]);

  if (!githubStats) {
    return <StatsSkeleton />;
  }

  const cards = [
    { value: githubStats.repositories, suffix: "+", label: "Repositories" },
    { value: githubStats.stars, suffix: "+", label: "Stars" },
    { value: githubStats.contributions, suffix: "+", label: "Contributions" },
    { value: githubStats.pullRequests, suffix: "+", label: "Pull Requests" },
    { value: githubStats.followers, suffix: "+", label: "Followers" },
  ];

  return (
    <div ref={ref} className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
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
                end={card.value}
                duration={2}
                suffix={card.suffix}
              />
            )}
          </h3>

          <p className="mt-2 text-slate-400">{card.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;
