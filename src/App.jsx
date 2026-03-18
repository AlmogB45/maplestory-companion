import { useState } from 'react'
import './App.css'

function App() {
  const [characterName, setCharacterName] = useState('')
  const [level, setLevel] = useState(260)
  const [combatPower, setCombatPower] = useState(0)

  return (
    <div className="container">
      <h1>🍁 MapleStory Companion (GMS)</h1>
      <p>Measure your character based on CP, Stats, Equips, and Skills!</p>
      
      <div className="card">
        <h2>Character Info</h2>
        <label>
          Name: <input value={characterName} onChange={(e) => setCharacterName(e.target.value)} placeholder="e.g. Mapler" />
        </label>
        <label>
          Level: <input type="number" value={level} onChange={(e) => setLevel(Number(e.target.value))} />
        </label>
        <label>
          Combat Power (CP): <input type="number" value={combatPower} onChange={(e) => setCombatPower(Number(e.target.value))} />
        </label>
      </div>

      <div className="card">
        <h2>Equipment & Stats Summary</h2>
        <p>Your current Combat Power: {combatPower.toLocaleString()}</p>
        <p>This is where we will add detailed breakdowns for Starforce, Potentials, and WSE (Weapon/Secondary/Emblem).</p>
      </div>
    </div>
  )
}

export default App
