import React from 'react';

export default function GearGuide() {
  return (
    <div className="card">
      <h2>Gear Progression & Comparison Guide</h2>
      <div className="guide-content">
        <h3>Step 1: Early Game (CRA & Boss Accessories)</h3>
        <p>
          Aim for: <strong>Root Abyss Set (Top, Bottom, Hat)</strong> + Fafnir Weapon. Fill the rest with Boss Accessory Set.
          <br/>
          <em>Goal:</em> 10-12 Starforce, Epic Potentials (6-9% Main Stat), and decent boss flames.
        </p>

        <h3>Step 2: Mid Game (Absolab or Sweetwater)</h3>
        <p>
          Aim for: <strong>Absolab Set (Shoulder, Gloves, Cape, Shoes, Weapon)</strong>.
          <br/>
          <em>Goal:</em> 17 Starforce, Unique Potentials (15% Main Stat), Legendary WSE (2 lines Attack/Boss/IED).
        </p>

        <h3>Step 3: Late Game (Arcane Umbra)</h3>
        <p>
          Aim for: <strong>Arcane Umbra Set</strong> replacing Absolab.
          <br/>
          <em>Comparison - 17⭐ Arcane vs 17⭐ Absolab:</em> Arcane is vastly superior due to higher base stats, higher attack from Starforce, and a better set effect.
          <br/>
          <em>Comparison - 17⭐ Arcane vs 21/22⭐ Absolab:</em> A 21⭐ Absolab piece generally beats a 17⭐ Arcane piece. However, transitioning to Arcane is required for end-game because Arcane scales significantly better past 17⭐. Switch to Arcane when you can get it to 17⭐, but if you have 22⭐ Absolab, don't replace it until you can hit at least 19-21⭐ on Arcane.
        </p>

        <h3>Step 4: End Game (Pitched Boss & Eternals)</h3>
        <p>
          Aim for: <strong>Pitched Boss Set</strong> and <strong>Eternal Set</strong> (replacing CRA).
          <br/>
          <em>Goal:</em> 22 Starforce, Double/Triple Prime Legendary Potentials, Tier 6/7 Flames.
        </p>

        <div className="system-breakdown">
          <h4>Understanding Gear Upgrades</h4>
          <ul>
            <li><strong>Starforce:</strong> The biggest source of raw Attack/Magic Attack. Focus on 17⭐ across all gear before pushing for 21/22⭐.</li>
            <li><strong>Flames (Bonus Stats):</strong> Aim for high Main Stat + All Stat %. Weapons need Tier 6+ Attack flames.</li>
            <li><strong>Potentials:</strong> Get 2 lines of Main Stat (e.g., 15% Unique) on armors. WSE (Weapon/Secondary/Emblem) needs Attack %, Boss Damage %, and IED %.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
