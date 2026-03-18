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
  const [level, setLevel] = useState(260)
  const [job, setJob] = useState('Hero')
  
  // Base Stats
  const [stats, setStats] = useState({
    mainStat: 30000,
    arcanePower: 1320,
    sacredPower: 150
  })

  // Weapon / Secondary / Emblem + General Modifiers
  const [wse, setWse] = useState({
    totalAttack: 1500,
    damage: 100,
    bossDamage: 250,
    ied: 93
  })

  // Gear Overrides (Starforce, Flames, Potential)
  const [gearScores, setGearScores] = useState({
    avgStarforce: 17,
    avgPotential: 15,
    avgFlameScore: 80
  })

  // External Buffs & Systems
  const [systems, setSystems] = useState({
    vMatrixAvgLevel: 60,
    hexaMatrixUnlocked: false,
    guildSkills: 30, 
    familiarsBossDmg: 30,
    familiarsIED: 15,
    potionsBuffs: true
  })

  const [combatPower, setCombatPower] = useState(0)

  // Auto-calculate estimated CP when stats change
  useEffect(() => {
    const estimated = calculateEstimatedCP(stats, wse, gearScores, systems)
    setCombatPower(estimated)
  }, [stats, wse, gearScores, systems])

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
      
      // We can bump up the base stats slightly based on equipped items to simulate real growth
      // Since it's a heuristic, we'll just add 10x the base stat and 5x the base attack as a rough representation
      if (totalBaseStat > 0) {
        setStats(prev => ({ ...prev, mainStat: 20000 + (totalBaseStat * 100) }));
        setWse(prev => ({ ...prev, totalAttack: 1000 + (totalBaseAtt * 5) }));
      }
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
            <h2><User size={20} color="#3b82f6" /> Character Info</h2>
            <p className="card-desc">Enter your core info manually for accurate modeling.</p>
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
              <label>Main Stat <InfoIcon text="Your class's primary stat (e.g. STR, DEX) excluding % increases from buffs." /></label>
              <input type="number" name="mainStat" value={stats.mainStat} onChange={handleStatChange} />
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
            <h2><Swords size={20} color="#ef4444" /> WSE & Modifiers</h2>
            <div className="input-group">
              <label>Total Attack / M.Att <InfoIcon text="Combined raw Attack or Magic Attack from your Weapon, Secondary, and Emblem." /></label>
              <input type="number" name="totalAttack" value={wse.totalAttack} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Damage % <InfoIcon text="Found in your Stat UI under 'Damage'." /></label>
              <input type="number" name="damage" value={wse.damage} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Boss Damage % <InfoIcon text="Found in your Stat UI under 'Boss Damage'." /></label>
              <input type="number" name="bossDamage" value={wse.bossDamage} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>IED % <InfoIcon text="Ignore Enemy Defense. Crucial for bosses! (Max 100)" /></label>
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

          <div className="card">
            <h2><Settings2 size={20} color="#a855f7" /> Gear Averages</h2>
            <div className="input-group">
              <label>Avg Starforce <InfoIcon text="Look at your equipped items. If most are 17 stars, put 17." /></label>
              <input type="number" name="avgStarforce" value={gearScores.avgStarforce} onChange={handleGearChange} />
            </div>
            <div className="input-group">
              <label>Avg Potential % <InfoIcon text="Average Main Stat % per equip." /></label>
              <input type="number" name="avgPotential" value={gearScores.avgPotential} onChange={handleGearChange} />
            </div>
            <div className="input-group">
              <label>Avg Flame Score <InfoIcon text="An estimate of your bonus stats." /></label>
              <input type="number" name="avgFlameScore" value={gearScores.avgFlameScore} onChange={handleGearChange} />
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
                    <div className="boss-info">
                      <span className="boss-name">{boss.name}</span>
                      <span className="boss-diff">[{boss.difficulty}]</span>
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