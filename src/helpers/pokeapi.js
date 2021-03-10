const REQUIRED_STATS = ["hp", "attack", "defense", "speed"];

export function parseStats(stats = []) {
  let filtered = stats
    .filter((statItem) => REQUIRED_STATS.includes(statItem.stat.name))
    .map((filteredStat) => ({
      name: filteredStat.stat.name,
      value: filteredStat.base_stat,
    }));

  return filtered;
}
