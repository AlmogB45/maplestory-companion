import React, { useState } from 'react';
import { Shield, Sword, Hexagon, Star, Crown, Circle, Square, X, Plus } from 'lucide-react';
import './EquipmentGrid.css';
import { ITEMS, ITEM_TYPES } from '../data/items';

export default function EquipmentGrid({ onEquipmentChange }) {
  const [equipment, setEquipment] = useState({});
  const [selectedSlot, setSelectedSlot] = useState(null);
  
  const [editingItem, setEditingItem] = useState(null);
  const [stats, setStats] = useState({ starforce: 0, flame: 0, potential: 0 });

  // Correct MapleStory Equip Layout (5x6 Grid)
  const slotLayout = [
    { id: 'ring1', label: 'Ring 1', type: ITEM_TYPES.ring, icon: <Circle size={20} /> },
    { id: 'blank1', label: '', type: null, icon: null },
    { id: 'cap', label: 'Hat', type: ITEM_TYPES.cap, icon: <Shield size={20} /> },
    { id: 'blank2', label: '', type: null, icon: null },
    { id: 'emblem', label: 'Emblem', type: ITEM_TYPES.emblem, icon: <Hexagon size={20} /> },
    
    { id: 'ring2', label: 'Ring 2', type: ITEM_TYPES.ring, icon: <Circle size={20} /> },
    { id: 'pendant1', label: 'Pendant 1', type: ITEM_TYPES.pendant, icon: <Star size={20} /> },
    { id: 'face', label: 'Face', type: ITEM_TYPES.face, icon: <Square size={20} /> },
    { id: 'blank3', label: '', type: null, icon: null },
    { id: 'badge', label: 'Badge', type: ITEM_TYPES.badge, icon: <Crown size={20} /> },
    
    { id: 'ring3', label: 'Ring 3', type: ITEM_TYPES.ring, icon: <Circle size={20} /> },
    { id: 'pendant2', label: 'Pendant 2', type: ITEM_TYPES.pendant, icon: <Star size={20} /> },
    { id: 'eye', label: 'Eye', type: ITEM_TYPES.eye, icon: <Square size={20} /> },
    { id: 'earring', label: 'Earring', type: ITEM_TYPES.earring, icon: <Star size={20} /> },
    { id: 'medal', label: 'Medal', type: ITEM_TYPES.medal, icon: <Crown size={20} /> },
    
    { id: 'ring4', label: 'Ring 4', type: ITEM_TYPES.ring, icon: <Circle size={20} /> },
    { id: 'weapon', label: 'Weapon', type: ITEM_TYPES.weapon, icon: <Sword size={20} /> },
    { id: 'top', label: 'Top', type: ITEM_TYPES.top, icon: <Shield size={20} /> },
    { id: 'shoulder', label: 'Shoulder', type: ITEM_TYPES.shoulder, icon: <Shield size={20} /> },
    { id: 'secondary', label: 'Secondary', type: ITEM_TYPES.secondary, icon: <Shield size={20} /> },
    
    { id: 'pocket', label: 'Pocket', type: ITEM_TYPES.pocket, icon: <Star size={20} /> },
    { id: 'belt', label: 'Belt', type: ITEM_TYPES.belt, icon: <Square size={20} /> },
    { id: 'bottom', label: 'Bottom', type: ITEM_TYPES.bottom, icon: <Shield size={20} /> },
    { id: 'gloves', label: 'Gloves', type: ITEM_TYPES.gloves, icon: <Shield size={20} /> },
    { id: 'cape', label: 'Cape', type: ITEM_TYPES.cape, icon: <Shield size={20} /> },
    
    { id: 'blank4', label: '', type: null, icon: null },
    { id: 'blank5', label: '', type: null, icon: null },
    { id: 'shoes', label: 'Shoes', type: ITEM_TYPES.shoes, icon: <Shield size={20} /> },
    { id: 'blank6', label: '', type: null, icon: null },
    { id: 'heart', label: 'Heart', type: ITEM_TYPES.heart, icon: <Star size={20} /> },
  ];

  const handleSlotClick = (slot) => {
    if (!slot.type) return;
    setSelectedSlot(slot);
    const existing = equipment[slot.id];
    if (existing) {
      setEditingItem(existing.base);
      setStats(existing.stats);
    } else {
      setEditingItem(null);
      setStats({ starforce: 0, flame: 0, potential: 0 });
    }
  };

  const handleSave = () => {
    if (selectedSlot && editingItem) {
      const newEq = {
        ...equipment,
        [selectedSlot.id]: {
          base: editingItem,
          stats
        }
      };
      setEquipment(newEq);
      if (onEquipmentChange) onEquipmentChange(newEq);
    }
    closeModal();
  };

  const handleRemove = () => {
    if (selectedSlot) {
      const newEq = { ...equipment };
      delete newEq[selectedSlot.id];
      setEquipment(newEq);
      if (onEquipmentChange) onEquipmentChange(newEq);
    }
    closeModal();
  };

  const closeModal = () => {
    setSelectedSlot(null);
    setEditingItem(null);
  };

  const availableItems = selectedSlot ? ITEMS.filter(item => item.type === selectedSlot.type) : [];

  return (
    <div className="equipment-card">
      <div className="eq-header">
        <Sword size={20} color="#f59e0b" />
        <h2 style={{margin:0, border:'none', padding:0, fontSize:'1.2rem', color:'#fff'}}>Equipment Overview</h2>
      </div>
      <p className="card-desc" style={{marginBottom: '20px'}}>Click a slot to configure your gear (Organized by Maplestory UI).</p>
      
      <div className="eq-grid">
        {slotLayout.map(slot => {
          if (!slot.type) return <div key={slot.id} className="eq-slot-blank" />;
          const isEquipped = !!equipment[slot.id];
          const eqItem = equipment[slot.id];
          
          return (
            <div 
              key={slot.id} 
              className={`eq-slot ${isEquipped ? 'equipped' : ''}`} 
              onClick={() => handleSlotClick(slot)}
              title={slot.label}
            >
              {isEquipped ? (
                <>
                  <div className="eq-icon-small">
                    {eqItem.base.itemId ? (
                      <img src={`https://maplestory.io/api/GMS/250/item/${eqItem.base.itemId}/icon`} alt={eqItem.base.name} style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                    ) : slot.icon}
                  </div>
                  <div className="eq-name-small">{eqItem.base.name.split(' ')[0]}</div>
                  {eqItem.base.canStarforce && eqItem.stats.starforce > 0 && <div className="eq-stars">★{eqItem.stats.starforce}</div>}
                </>
              ) : (
                <>
                  <div className="eq-icon">{slot.icon}</div>
                  <div className="eq-label">{slot.label}</div>
                </>
              )}
            </div>
          )
        })}
      </div>

      {selectedSlot && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Configure {selectedSlot.label}</h3>
              <button className="icon-btn" onClick={closeModal}><X size={20} /></button>
            </div>
            
            <div className="modal-body">
              <div className="input-group">
                <label>Item</label>
                <select 
                  className="select-input" 
                  style={{width: '200px'}}
                  value={editingItem ? editingItem.id : ''} 
                  onChange={(e) => {
                    const item = ITEMS.find(i => i.id === e.target.value);
                    setEditingItem(item);
                    setStats(prev => ({
                      starforce: item && !item.canStarforce ? 0 : prev.starforce,
                      flame: item && !item.canFlame ? 0 : prev.flame,
                      potential: item && !item.canPotential ? 0 : prev.potential,
                    }));
                  }}
                >
                  <option value="" disabled>Select {selectedSlot.label}...</option>
                  {availableItems.map(item => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                  ))}
                </select>
              </div>

              {editingItem && (
                <div className="stats-editor">
                  <div className="input-group">
                    <label>Starforce {editingItem.canStarforce ? '' : '(N/A)'}</label>
                    <input 
                      type="number" 
                      value={stats.starforce} 
                      onChange={(e) => setStats({...stats, starforce: Number(e.target.value)})} 
                      disabled={!editingItem.canStarforce}
                      max="25" min="0"
                    />
                  </div>
                  
                  <div className="input-group">
                    <label>Flame Score {editingItem.canFlame ? '' : '(N/A)'}</label>
                    <input 
                      type="number" 
                      value={stats.flame} 
                      onChange={(e) => setStats({...stats, flame: Number(e.target.value)})} 
                      disabled={!editingItem.canFlame}
                    />
                  </div>
                  
                  <div className="input-group">
                    <label>Potential % {editingItem.canPotential ? '' : '(N/A)'}</label>
                    <input 
                      type="number" 
                      value={stats.potential} 
                      onChange={(e) => setStats({...stats, potential: Number(e.target.value)})} 
                      disabled={!editingItem.canPotential}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="modal-footer">
              <button className="btn-danger" onClick={handleRemove} disabled={!equipment[selectedSlot.id]}>Unequip</button>
              <button className="btn-primary" onClick={handleSave} disabled={!editingItem}>Save Item</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
