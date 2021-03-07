export function parseStats(stats) {
  let statsObj = {};

  stats.map((stat) => (statsObj[stat.stat.name] = stat.base_stat));

  return statsObj;
}
