import { useState, useEffect } from 'react'
import './App.css'
import { bosses } from './data/bosses'
import { calculateEstimatedCP, canClearBoss } from './utils/calculator'
import GearGuide from './components/GearGuide'

// Tooltip Component
const InfoIcon = ({ text }) => (
  <div className="tooltip-container">
    <span className="info-icon">?</span>
    <div className="tooltip-text">{text}</div>
  </div>
)

const JOBS = [
  "Hero", "Paladin", "Dark Knight", "Bowmaster", "Marksman", "Pathfinder", "Night Lord", "Bishop", "Ice/Lightning", "Fire/Poison", "Shadower", "Dual Blade", "Corsair", "Buccaneer", 
  "Dawn Warrior", "Corsair", "Cannon Shooter", "Mihile", "Wind Archer", "Night Walker", "Thunder Breaker", "Striker", "Blaze Wizard", "Aran", "Evan", 
  "Mercedes", "Aran", "Phantom", "Luminous", "Shade", "Eunwol", 
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
    guildSkills: 0, // 0 to 45 (maxed all G skills)
    familiarsBossDmg: 0,
    familiarsIED: 0,
    potionsBuffs: false
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
            <h2>Character Info</h2>
            <p className="card-desc">Note: GMS Rankings CORS restricts direct fetching in-browser, so please enter your info manually.</p>
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
            <h2>WSE & General Modifiers</h2>
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
            <h2>Buffs & Systems</h2>
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
            <h2>Gear Averages</h2>
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
            <h2>Estimated Combat Power (w/ Buffs)</h2>
            <div className="cp-display">
              {combatPower.toLocaleString()} CP
            </div>
            <p className="note">Note: This is a heuristic estimation including external buffs like Familiars and Guild Skills.</p>
          </div>

          <div className="card">
            <h2>Boss Clearability <InfoIcon text="Based on your Estimated CP, Level, and Sacred Power requirements." /></h2>
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