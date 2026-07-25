import { getGithubStats } from "@/services/github_service";
import { useEffect, useState } from "react";
import StatsSkeleton from "./StatsSkeleton";
import { cards } from "@/sections/hero/data/cards";
import StatsCard from "./StatsCard";

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

  return (
    <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
      {cards(githubStats).map((card, index) => (
        <StatsCard card={card} index={index} key={card.label} />
      ))}
    </div>
  );
}

export default Stats;
