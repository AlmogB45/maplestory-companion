// Basic heuristic calculator for estimating GMS Maplestory Combat Power / Stats
export function calculateEstimatedCP(stats, wse, gearScores = { avgStarforce: 17, avgPotential: 15, avgFlameScore: 80 }) {
  // A very simplified mock formula to simulate CP generation based on GMS mechanics
  // In reality, CP is an internal formula derived from HP, Main Stat, Attack, Damage, Boss, IED, etc.
  
  const baseStatFactor = stats.mainStat * 100;
  const attackFactor = wse.totalAttack * 500;
  const damageFactor = 1 + (wse.damage + wse.bossDamage) / 100;
  
  // IED has diminishing returns but is crucial for CP calculation against bosses
  const iedMultiplier = wse.ied > 0 ? (wse.ied / 100) * 1.5 : 1;

  // Gear Modifiers
  const starforceBonus = 1 + ((gearScores.avgStarforce - 10) * 0.05); // e.g. 17 SF = +35% multiplier to base
  const potentialBonus = 1 + (gearScores.avgPotential / 100); 
  const flameBonus = 1 + (gearScores.avgFlameScore / 1000); 
  
  let estimatedCP = (baseStatFactor + attackFactor) * damageFactor * iedMultiplier * starforceBonus * potentialBonus * flameBonus;
  
  // Add a multiplier for arcane/sacred power for modern bosses
  const powerMultiplier = 1 + (stats.arcanePower / 1000) + (stats.sacredPower / 500);
  
  return Math.floor(estimatedCP * powerMultiplier);
}

export function canClearBoss(boss, playerStats, playerLevel, playerCP) {
  const levelDiff = playerLevel - boss.requiredLevel;
  
  // Basic heuristic: 
  // If player CP is >= boss required CP and Level >= required level, they can clear it.
  // We can also return a difficulty rating: "Comfortable", "Struggle", "Impossible"
  
  if (levelDiff < -5) {
    return { clearable: false, status: 'Level too low', color: 'red' };
  }
  
  if (boss.sacredPower && playerStats.sacredPower < boss.sacredPower) {
    return { clearable: false, status: 'Not enough Sacred Power', color: 'red' };
  }
  
  const cpRatio = playerCP / boss.requiredCP;
  
  if (cpRatio >= 2.0) {
    return { clearable: true, status: 'Comfortable', color: '#4caf50' }; // green
  } else if (cpRatio >= 1.0) {
    return { clearable: true, status: 'Doable', color: '#2196f3' }; // blue
  } else if (cpRatio >= 0.7) {
    return { clearable: true, status: 'Struggle (Hands)', color: '#ff9800' }; // orange
  } else {
    return { clearable: false, status: 'Not enough CP', color: '#f44336' }; // red
  }
}
