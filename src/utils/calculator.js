// Basic heuristic calculator for estimating GMS Maplestory Combat Power / Stats
export function calculateEstimatedCP(stats, wse, gearScores, systems) {
  // A very simplified mock formula to simulate CP generation based on GMS mechanics
  
  const baseStatFactor = stats.mainStat * 100;
  const attackFactor = wse.totalAttack * 500;
  
  // Include Familiars in damage
  const totalBossDamage = wse.bossDamage + (systems?.familiarsBossDmg || 0);
  const damageFactor = 1 + (wse.damage + totalBossDamage) / 100;
  
  // IED calculations (diminishing returns mathematically, simplified here)
  const totalIED = Math.min(99, wse.ied + (systems?.familiarsIED || 0) * 0.5); // Simplified stacking
  const iedMultiplier = totalIED > 0 ? (totalIED / 100) * 1.5 : 1;

  // Gear Modifiers
  const starforceBonus = 1 + ((gearScores.avgStarforce - 10) * 0.05);
  const potentialBonus = 1 + (gearScores.avgPotential / 100); 
  const flameBonus = 1 + (gearScores.avgFlameScore / 1000); 
  
  let estimatedCP = (baseStatFactor + attackFactor) * damageFactor * iedMultiplier * starforceBonus * potentialBonus * flameBonus;
  
  // Add a multiplier for arcane/sacred power for modern bosses
  const powerMultiplier = 1 + (stats.arcanePower / 1000) + (stats.sacredPower / 500);
  estimatedCP *= powerMultiplier;

  // Apply Systems & Buff Multipliers
  if (systems) {
    // V-Matrix Boost (max ~120% final damage on main skills)
    const vMatrixBonus = 1 + (systems.vMatrixAvgLevel * 0.02);
    estimatedCP *= vMatrixBonus;

    // Hexa Matrix (Huge FD boost)
    if (systems.hexaMatrixUnlocked) estimatedCP *= 1.30; 

    // Guild Skills (Up to ~30% Boss/Crit/IED)
    const guildSkillBonus = 1 + (systems.guildSkills * 0.01);
    estimatedCP *= guildSkillBonus;

    // Consumables / Potions
    if (systems.potionsBuffs) estimatedCP *= 1.15; // 15% estimated FD from all pots/buffs combined
  }

  return Math.floor(estimatedCP);
}

export function canClearBoss(boss, playerStats, playerLevel, playerCP) {
  const levelDiff = playerLevel - boss.requiredLevel;
  
  if (levelDiff < -5) {
    return { clearable: false, status: 'Level too low', color: '#f44336' };
  }
  
  if (boss.sacredPower && playerStats.sacredPower < boss.sacredPower) {
    return { clearable: false, status: 'Not enough Sacred Power', color: '#f44336' };
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
