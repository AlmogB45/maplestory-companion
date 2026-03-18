// Basic heuristic calculator for estimating GMS Maplestory Combat Power / Stats
export function calculateEstimatedCP(stats, wse, gearScores, systems, hyperStats = { damage: 0, bossDamage: 0, critDamage: 0, ied: 0, mainStat: 0 }, equipmentStats = { stat: 0, attack: 0, potential: 0, starforce: 0 }) {
  // Base stat from naked character + hyper stats + raw equip stats
  const rawFlatStat = stats.mainStat + (hyperStats.mainStat * 30) + equipmentStats.stat;
  
  // Total Stat = Raw Stat * (1 + Potential % / 100)
  const totalStat = rawFlatStat * (1 + (equipmentStats.potential / 100));
  
  // Total Attack
  const totalAttack = wse.totalAttack + equipmentStats.attack;
  
  // Damage Multipliers
  const totalBossDamage = wse.bossDamage + (systems?.familiarsBossDmg || 0) + (hyperStats.bossDamage * 3.5);
  const totalDamage = wse.damage + (hyperStats.damage * 3);
  const damageFactor = 1 + ((totalDamage + totalBossDamage) / 100);
  
  // IED Calculation (Diminishing returns)
  let iedSources = [
    wse.ied, 
    (systems?.familiarsIED || 0), 
    (hyperStats.ied * 3)
  ].filter(v => v > 0);
  
  let totalIED = 0;
  let remainingDef = 1;
  iedSources.forEach(source => {
    remainingDef *= (1 - (source / 100));
  });
  totalIED = (1 - remainingDef) * 100;
  
  // IED multiplier for CP heavily weights reaching 90%+
  const iedMultiplier = 1 + (Math.pow(totalIED / 100, 3) * 2.5);

  // Crit Multiplier (Crit Rate * Crit Damage)
  const critRate = Math.min(100, stats.critRate || 100); // assume 100 if missing
  const totalCritDamage = (stats.critDamage || 50) + (hyperStats.critDamage * 1);
  const critMultiplier = 1 + ((critRate / 100) * (totalCritDamage / 100));

  // Starforce multiplier (Exponential scaling on CP)
  const starforceBonus = 1 + (equipmentStats.starforce * 0.005); 
  
  // Raw damage estimation
  let rawDamage = (totalStat * 4) * (totalAttack * 0.01) * damageFactor * iedMultiplier * critMultiplier * starforceBonus;
  
  // AF / AUT Multiplier 
  const powerMultiplier = 1 + (stats.arcanePower / 1000) + (stats.sacredPower / 500);
  rawDamage *= powerMultiplier;

  // Apply Systems & Buff Multipliers (Final Damage essentially)
  if (systems) {
    const vMatrixBonus = 1 + (systems.vMatrixAvgLevel * 0.02);
    rawDamage *= vMatrixBonus;
    if (systems.hexaMatrixUnlocked) rawDamage *= 1.30; 
    const guildSkillBonus = 1 + (systems.guildSkills * 0.01);
    rawDamage *= guildSkillBonus;
    if (systems.potionsBuffs) rawDamage *= 1.15; 
  }

  // Multiply by a scalar to bring it in line with GMS visual CP numbers
  const finalCP = rawDamage * 15;

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