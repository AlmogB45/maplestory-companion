// Basic heuristic calculator for estimating GMS Maplestory Combat Power / Stats
export function calculateEstimatedCP(stats, wse, gearScores, systems) {
  // A robust mock formula to simulate CP generation
  
  // 1. Base Stat Value (Main stat heavily weighted, assumed some secondary stat)
  const statValue = (stats.mainStat * 4) + 2000; 
  
  // 2. Attack Value
  const attackValue = wse.totalAttack;
  
  // 3. Damage Multipliers
  const totalBossDamage = wse.bossDamage + (systems?.familiarsBossDmg || 0);
  const damageFactor = 1 + ((wse.damage + totalBossDamage) / 100);
  
  // 4. IED Calculation (CP scales exponentially with IED near 100%)
  const totalIED = Math.min(99.9, wse.ied + (systems?.familiarsIED || 0) * 0.5); 
  const iedMultiplier = 1 + (Math.pow(totalIED / 100, 3) * 2.5); // Boosts CP highly at 90%+ IED

  // 5. Gear Modifiers
  // Starforce gives massive base stats and attack. Let's represent it as an exponential multiplier past 10 stars.
  const starforceBonus = 1 + ((gearScores.avgStarforce > 10 ? gearScores.avgStarforce - 10 : 0) * 0.08);
  const potentialBonus = 1 + (gearScores.avgPotential / 100); 
  const flameBonus = 1 + (gearScores.avgFlameScore / 1000); 
  
  // Raw damage estimation
  let rawDamage = (statValue * attackValue * 0.01) * damageFactor * iedMultiplier * starforceBonus * potentialBonus * flameBonus;
  
  // 6. AF / AUT Multiplier (Huge in modern GMS for area bosses)
  const powerMultiplier = 1 + (stats.arcanePower / 1000) + (stats.sacredPower / 500);
  rawDamage *= powerMultiplier;

  // 7. Apply Systems & Buff Multipliers (Final Damage essentially)
  if (systems) {
    // V-Matrix Boost (max ~120% final damage on main skills)
    const vMatrixBonus = 1 + (systems.vMatrixAvgLevel * 0.02);
    rawDamage *= vMatrixBonus;

    // Hexa Matrix (Huge FD boost)
    if (systems.hexaMatrixUnlocked) rawDamage *= 1.30; 

    // Guild Skills (Up to ~30% Boss/Crit/IED)
    const guildSkillBonus = 1 + (systems.guildSkills * 0.01);
    rawDamage *= guildSkillBonus;

    // Consumables / Potions
    if (systems.potionsBuffs) rawDamage *= 1.15; // 15% estimated FD from all pots/buffs combined
  }

  // Multiply by a scalar to bring it in line with GMS visual CP numbers (usually 10M - 500M+)
  const finalCP = rawDamage * 120;

  return Math.floor(finalCP);
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