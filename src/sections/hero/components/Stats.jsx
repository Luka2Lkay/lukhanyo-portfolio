import { motion } from "framer-motion";
import { getGithubStats } from "@/services/github_service";
import { useEffect, useState } from "react";
import StatsSkeleton from "./StatsSkeleton";
import Counter from "@/components/counter/Counter";

function Stats() {
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
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards.map((card, index) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-x transition hover:-translate-y-1 hover:border-cyan-500/50"
        >
          <h3 className="text-3xl font-bold text-cyan-400">
            <Counter end={card.value} suffix={card.suffix} />
          </h3>
          <p className="mt-2 text-slate-400">{card.label}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default Stats;
