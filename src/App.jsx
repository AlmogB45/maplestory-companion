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

function App() {
  const [characterName, setCharacterName] = useState('')
  const [level, setLevel] = useState(260)
  const [isFetching, setIsFetching] = useState(false)
  
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

  // Simulate an API Fetch (GMS lacks an open API for full stats currently)
  const handleFetch = async () => {
    if (!characterName) return;
    setIsFetching(true);
    
    // Simulate network delay
    await new Promise(r => setTimeout(r, 1500));
    
    // Simulated data fetching (In the future, this could hook into Nexon API or maplestory.gg)
    alert(`GMS API currently doesn't provide open access to detailed gear/CP stats. Simulated fetch for "${characterName}" completed! (Updated Level and AF/AUT)`);
    
    setLevel(Math.floor(Math.random() * (285 - 200 + 1)) + 200); // Random level 200-285
    setStats(prev => ({ ...prev, arcanePower: 1320, sacredPower: 200 }));
    setIsFetching(false);
  }

  return (
    <div className="container">
      <header className="header">
        <h1>🍁 MapleStory Companion</h1>
        <p>A simple, intuitive way to measure your character for GMS</p>
      </header>
      
      <div className="layout-grid">
        {/* Input Column */}
        <div className="input-section">
          
          <div className="card hero-card">
            <h2>Character Search</h2>
            <div className="search-box">
              <input 
                className="search-input"
                value={characterName} 
                onChange={(e) => setCharacterName(e.target.value)} 
                placeholder="Enter your IGN..." 
              />
              <button 
                className="fetch-btn" 
                onClick={handleFetch} 
                disabled={isFetching || !characterName}
              >
                {isFetching ? 'Searching...' : 'Auto-Fill Stats'}
              </button>
            </div>
            <p className="helper-text">Currently, official GMS API access is limited. Manual input is recommended for precise calculations.</p>
          </div>

          <div className="card">
            <h2>Character Info</h2>
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
            <h2>Gear Averages</h2>
            <p className="card-desc">Estimate your current gear tier to adjust the multiplier.</p>
            <div className="input-group">
              <label>Avg Starforce <InfoIcon text="Look at your equipped items. If most are 17 stars, put 17. If mostly 21, put 21." /></label>
              <input type="number" name="avgStarforce" value={gearScores.avgStarforce} onChange={handleGearChange} />
            </div>
            <div className="input-group">
              <label>Avg Potential % <InfoIcon text="Average Main Stat % per equip. If you have 15% on most gear, put 15." /></label>
              <input type="number" name="avgPotential" value={gearScores.avgPotential} onChange={handleGearChange} />
            </div>
            <div className="input-group">
              <label>Avg Flame Score <InfoIcon text="An estimate of your bonus stats. Usually 80-120 per item for mid/late game." /></label>
              <input type="number" name="avgFlameScore" value={gearScores.avgFlameScore} onChange={handleGearChange} />
            </div>
          </div>

          <div className="card">
            <h2>WSE (Weapon, Secondary, Emblem)</h2>
            <p className="card-desc">These 3 items give the biggest boost to your character.</p>
            <div className="input-group">
              <label>Total Attack <InfoIcon text="Combined raw Attack or Magic Attack from your Weapon, Secondary, and Emblem." /></label>
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
        </div>

        {/* Results Column */}
        <div className="results-section">
          <div className="card summary-card">
            <h2>Estimated Combat Power</h2>
            <div className="cp-display">
              {combatPower.toLocaleString()} CP
            </div>
            <p className="note">Note: This is a heuristic estimation. Actual GMS CP may differ slightly.</p>
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