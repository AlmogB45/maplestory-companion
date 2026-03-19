import { useState, useEffect } from 'react'
import { User, Activity, Settings2, ShieldCheck, Swords, Star, Info } from 'lucide-react'
import './App.css'
import { bosses } from './data/bosses'
import { calculateEstimatedCP, canClearBoss } from './utils/calculator'
import GearGuide from './components/GearGuide'
import EquipmentGrid from './components/EquipmentGrid'

// Tooltip Component
const InfoIcon = ({ text }) => (
  <div className="tooltip-container">
    <span className="info-icon"><Info size={11} /></span>
    <div className="tooltip-text">{text}</div>
  </div>
)

const JOBS = [
  "Hero", "Paladin", "Dark Knight", "Bowmaster", "Marksman", "Pathfinder", "Night Lord", "Bishop", "Ice/Lightning", "Fire/Poison", "Shadower", "Dual Blade", "Corsair", "Buccaneer", 
  "Dawn Warrior", "Cannon Shooter", "Mihile", "Wind Archer", "Night Walker", "Thunder Breaker", "Striker", "Blaze Wizard", "Aran", "Evan", 
  "Mercedes", "Phantom", "Luminous", "Shade", "Eunwol", 
  "Demon Slayer", "Demon Avenger", "Battle Mage", "Wild Hunter", "Mechanic", "Xenon", "Blaster",
  "Kaiser", "Kain", "Cadena", "Angelic Buster", 
  "Adele", "Illium", "Ark", "Hoyoung", "Zero", "Kinesis", 
  "Hayato", "Kanna", "Beast Tamer", "Chase", "Lara", "Khali", "Lynn"
].sort();

function App() {
  const [characterName, setCharacterName] = useState('')
  const [level, setLevel] = useState(200)
  const [job, setJob] = useState('Hero')
  
  // Base Stats (Naked)
  const [stats, setStats] = useState({
    mainStat: 2000,
    arcanePower: 0,
    sacredPower: 0,
    critRate: 100,
    critDamage: 50
  })

  // Hyper Stats
  const [hyperStats, setHyperStats] = useState({
    damage: 0,
    bossDamage: 0,
    critDamage: 0,
    ied: 0,
    mainStat: 0
  })

  // Weapon / Secondary / Emblem + General Modifiers
  const [wse, setWse] = useState({
    totalAttack: 100,
    damage: 10,
    bossDamage: 0,
    ied: 20
  })

  // Gear Overrides (Starforce, Flames, Potential) - Managed by EquipmentGrid
  const [gearScores, setGearScores] = useState({
    avgStarforce: 0,
    avgPotential: 0,
    avgFlameScore: 0
  })

  const [equipmentStats, setEquipmentStats] = useState({
    stat: 0,
    attack: 0,
    potential: 0,
    starforce: 0
  })

  // External Buffs & Systems
  const [systems, setSystems] = useState({
    vMatrixAvgLevel: 0,
    hexaMatrixUnlocked: false,
    guildSkills: 0, 
    familiarsBossDmg: 0,
    familiarsIED: 0,
    potionsBuffs: false
  })

  const [combatPower, setCombatPower] = useState(0)

  // Auto-calculate estimated CP when stats change
  useEffect(() => {
    const estimated = calculateEstimatedCP(stats, wse, gearScores, systems, hyperStats, equipmentStats)
    setCombatPower(estimated)
  }, [stats, wse, gearScores, systems, hyperStats, equipmentStats])

  const handleStatChange = (e) => {
    const { name, value } = e.target;
    setStats(prev => ({ ...prev, [name]: Number(value) }))
  }

  const handleWseChange = (e) => {
    const { name, value } = e.target;
    setWse(prev => ({ ...prev, [name]: Number(value) }))
  }

  const handleGearChange = (e) => {
    const { name, value } = e.target;
    setGearScores(prev => ({ ...prev, [name]: Number(value) }))
  }

  const handleSystemChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSystems(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : Number(value) }))
  }

  const handleHyperStatChange = (e) => {
    const { name, value } = e.target;
    setHyperStats(prev => ({ ...prev, [name]: Number(value) }))
  }

  const handleEquipmentGridChange = (newEq) => {
    let totalStars = 0;
    let totalPot = 0;
    let totalFlame = 0;
    let eqCount = 0;
    let flameCount = 0;
    
    let totalBaseStat = 0;
    let totalBaseAtt = 0;

    Object.values(newEq).forEach(item => {
      eqCount++;
      totalStars += item.stats.starforce || 0;
      totalPot += item.stats.potential || 0;
      if (item.base.canFlame) {
        totalFlame += item.stats.flame || 0;
        flameCount++;
      }
      
      if (item.base.base) {
        totalBaseStat += item.base.base.stat || 0;
        totalBaseAtt += item.base.base.attack || 0;
      }
    });

    if (eqCount > 0) {
      setGearScores({
        avgStarforce: Math.round(totalStars / eqCount),
        avgPotential: Math.round(totalPot / eqCount),
        avgFlameScore: flameCount > 0 ? Math.round(totalFlame / flameCount) : 0
      });
      
      setEquipmentStats({
        stat: totalBaseStat + totalFlame,
        attack: totalBaseAtt,
        potential: totalPot,
        starforce: totalStars
      });
    } else {
      setGearScores({ avgStarforce: 0, avgPotential: 0, avgFlameScore: 0 });
      setEquipmentStats({ stat: 0, attack: 0, potential: 0, starforce: 0 });
    }
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🍁 MapleStory Companion</h1>
        <p>A comprehensive GMS Character Calculator</p>
      </header>
      
      <div className="layout-grid">
        {/* Input Column */}
        <div className="input-section">
          
          <div className="card">
            <h2><User size={20} color="#3b82f6" /> Base Stats (Naked)</h2>
            <p className="card-desc">Your stats with NO equipment on (from AP, Legion, Link Skills).</p>
            <div className="input-group">
              <label>IGN</label>
              <input value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder="e.g. Mapler" />
            </div>
            <div className="input-group">
              <label>Job</label>
              <select className="select-input" value={job} onChange={(e) => setJob(e.target.value)}>
                {JOBS.map(j => <option key={j} value={j}>{j}</option>)}
              </select>
            </div>
            <div className="input-group">
              <label>Level</label>
              <input type="number" value={level} onChange={(e) => setLevel(Number(e.target.value))} />
            </div>
            <div className="input-group">
              <label>Base Main Stat <InfoIcon text="Your naked primary stat before % increases." /></label>
              <input type="number" name="mainStat" value={stats.mainStat} onChange={handleStatChange} />
            </div>
            <div className="input-group">
              <label>Base Crit Rate % <InfoIcon text="Your crit rate without gear." /></label>
              <input type="number" name="critRate" value={stats.critRate} onChange={handleStatChange} max="100" />
            </div>
            <div className="input-group">
              <label>Base Crit Damage % <InfoIcon text="Your crit damage without gear." /></label>
              <input type="number" name="critDamage" value={stats.critDamage} onChange={handleStatChange} />
            </div>
            <div className="input-group">
              <label>Arcane Power (AF)</label>
              <input type="number" name="arcanePower" value={stats.arcanePower} onChange={handleStatChange} />
            </div>
            <div className="input-group">
              <label>Sacred Power (AUT)</label>
              <input type="number" name="sacredPower" value={stats.sacredPower} onChange={handleStatChange} />
            </div>
          </div>

          <div className="card">
            <h2><Activity size={20} color="#f59e0b" /> Hyper Stats</h2>
            <div className="input-group">
              <label>Damage (Level) <InfoIcon text="Hyper stat level for Damage." /></label>
              <input type="number" name="damage" value={hyperStats.damage} onChange={handleHyperStatChange} max="15" />
            </div>
            <div className="input-group">
              <label>Boss Damage (Level)</label>
              <input type="number" name="bossDamage" value={hyperStats.bossDamage} onChange={handleHyperStatChange} max="15" />
            </div>
            <div className="input-group">
              <label>Crit Damage (Level)</label>
              <input type="number" name="critDamage" value={hyperStats.critDamage} onChange={handleHyperStatChange} max="15" />
            </div>
            <div className="input-group">
              <label>IED (Level)</label>
              <input type="number" name="ied" value={hyperStats.ied} onChange={handleHyperStatChange} max="15" />
            </div>
            <div className="input-group">
              <label>Main Stat (Level)</label>
              <input type="number" name="mainStat" value={hyperStats.mainStat} onChange={handleHyperStatChange} max="15" />
            </div>
          </div>

          <div className="card">
            <h2><Swords size={20} color="#ef4444" /> Offensive Base (Skills/Links)</h2>
            <div className="input-group">
              <label>Base Attack / M.Att <InfoIcon text="Base attack from skills, legion, titles." /></label>
              <input type="number" name="totalAttack" value={wse.totalAttack} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Base Damage % <InfoIcon text="Damage from links/legion." /></label>
              <input type="number" name="damage" value={wse.damage} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Base Boss Damage %</label>
              <input type="number" name="bossDamage" value={wse.bossDamage} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Base IED %</label>
              <input type="number" name="ied" value={wse.ied} onChange={handleWseChange} max="100" />
            </div>
          </div>

          <div className="card">
            <h2><Activity size={20} color="#10b981" /> Buffs & Systems</h2>
            <p className="card-desc">External factors that massively boost your damage.</p>
            <div className="input-group">
              <label>5th Job V-Matrix Avg Lvl <InfoIcon text="Average level of your boost nodes (Max 60)." /></label>
              <input type="number" name="vMatrixAvgLevel" value={systems.vMatrixAvgLevel} onChange={handleSystemChange} max="60" />
            </div>
            <div className="input-group">
              <label>6th Job (Hexa) Unlocked? <InfoIcon text="Have you unlocked your 6th job origin skill and mastery nodes?" /></label>
              <input type="checkbox" name="hexaMatrixUnlocked" checked={systems.hexaMatrixUnlocked} onChange={handleSystemChange} className="checkbox-input" />
            </div>
            <div className="input-group">
              <label>Guild Skills (Noblesse) <InfoIcon text="Total points in Boss Dmg / IED / Crit Dmg (Max 45)." /></label>
              <input type="number" name="guildSkills" value={systems.guildSkills} onChange={handleSystemChange} max="45" />
            </div>
            <div className="input-group">
              <label>Familiars Boss Dmg % <InfoIcon text="Combined Boss Damage % from your summoned Familiars." /></label>
              <input type="number" name="familiarsBossDmg" value={systems.familiarsBossDmg} onChange={handleSystemChange} />
            </div>
            <div className="input-group">
              <label>Familiars IED % <InfoIcon text="Combined IED % from your summoned Familiars." /></label>
              <input type="number" name="familiarsIED" value={systems.familiarsIED} onChange={handleSystemChange} />
            </div>
            <div className="input-group">
              <label>Full Potions/Buffs <InfoIcon text="Includes MVP, Sparkling Red, Guild Blessing, Boss Rush, etc." /></label>
              <input type="checkbox" name="potionsBuffs" checked={systems.potionsBuffs} onChange={handleSystemChange} className="checkbox-input" />
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="results-section">
          <div className="card summary-card">
            <h2><Star size={24} color="#f59e0b" fill="#f59e0b" /> Estimated Combat Power</h2>
            <div className="cp-display">
              {combatPower.toLocaleString()} CP
            </div>
            <p className="note">Includes external buffs (Familiars, Guild Skills, Potions)</p>
          </div>

          <EquipmentGrid onEquipmentChange={handleEquipmentGridChange} />

          <div className="card">
            <h2><ShieldCheck size={20} color="#10b981" /> Boss Clearability</h2>
            <div className="boss-list">
              {bosses.map(boss => {
                const result = canClearBoss(boss, stats, level, combatPower);
                return (
                  <div key={boss.id} className="boss-item">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      {boss.mobId && (
                        <div style={{ width: '40px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <img 
                            src={`https://maplestory.io/api/GMS/250/mob/${boss.mobId}/render/stand`} 
                            alt={boss.name} 
                            style={{ maxWidth: '40px', maxHeight: '40px', objectFit: 'contain' }} 
                          />
                        </div>
                      )}
                      <div className="boss-info">
                        <span className="boss-name">{boss.name}</span>
                        <span className="boss-diff">[{boss.difficulty}]</span>
                      </div>
                    </div>
                    <div className="boss-status">
                      <span className={`status-badge`} style={{ backgroundColor: result.color }}>
                        {result.status}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <GearGuide />
        </div>
      </div>
    </div>
  )
}

export default App