import { useState, useEffect } from 'react'
import './App.css'
import { bosses } from './data/bosses'
import { calculateEstimatedCP, canClearBoss } from './utils/calculator'
import GearGuide from './components/GearGuide'

function App() {
  const [characterName, setCharacterName] = useState('')
  const [level, setLevel] = useState(260)
  
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

  const [combatPower, setCombatPower] = useState(0)

  // Auto-calculate estimated CP when stats/wse/gear change
  useEffect(() => {
    // Injecting gear scores into the CP calculator heuristic
    const estimated = calculateEstimatedCP(stats, wse, gearScores)
    setCombatPower(estimated)
  }, [stats, wse, gearScores])

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

  return (
    <div className="container">
      <h1>🍁 MapleStory Companion (GMS)</h1>
      <p>Measure your character based on CP, Stats, Equips, and Skills!</p>
      
      <div className="layout-grid">
        {/* Input Column */}
        <div className="input-section">
          <div className="card">
            <h2>Character Info</h2>
            <div className="input-group">
              <label>Name</label>
              <input value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder="e.g. Mapler" />
            </div>
            <div className="input-group">
              <label>Level</label>
              <input type="number" value={level} onChange={(e) => setLevel(Number(e.target.value))} />
            </div>
          </div>

          <div className="card">
            <h2>Core Stats</h2>
            <div className="input-group">
              <label>Main Stat</label>
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
            <h2>Gear Details</h2>
            <div className="input-group">
              <label>Avg Starforce</label>
              <input type="number" name="avgStarforce" value={gearScores.avgStarforce} onChange={handleGearChange} />
            </div>
            <div className="input-group">
              <label>Avg Potential (Main Stat %)</label>
              <input type="number" name="avgPotential" value={gearScores.avgPotential} onChange={handleGearChange} />
            </div>
            <div className="input-group">
              <label>Avg Flame Score</label>
              <input type="number" name="avgFlameScore" value={gearScores.avgFlameScore} onChange={handleGearChange} />
            </div>
          </div>

          <div className="card">
            <h2>WSE & Multipliers</h2>
            <div className="input-group">
              <label>Total Attack / M.Attack</label>
              <input type="number" name="totalAttack" value={wse.totalAttack} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Damage %</label>
              <input type="number" name="damage" value={wse.damage} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Boss Damage %</label>
              <input type="number" name="bossDamage" value={wse.bossDamage} onChange={handleWseChange} />
            </div>
            <div className="input-group">
              <label>Ignore Enemy Def (IED) %</label>
              <input type="number" name="ied" value={wse.ied} onChange={handleWseChange} max="100" />
            </div>
          </div>
        </div>

        {/* Results Column */}
        <div className="results-section">
          <div className="card summary-card">
            <h2>Estimated Combat Power</h2>
            <div className="cp-display">
              {combatPower.toLocaleString()} CP
            </div>
            <p className="note">Note: This is an estimated heuristic based on your inputs.</p>
          </div>

          <div className="card">
            <h2>Boss Clearability</h2>
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
                      <span style={{ color: result.color, fontWeight: 'bold' }}>
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
