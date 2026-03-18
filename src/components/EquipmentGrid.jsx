import React from 'react';
import { Shield, Sword, Hexagon, Star, Crown, Circle, Square } from 'lucide-react';
import './EquipmentGrid.css';

export default function EquipmentGrid() {
  // A visual representation of the Maplestory Equip window
  const slots = [
    { id: 'ring1', label: 'Ring 1', icon: <Circle size={20} /> },
    { id: 'cap', label: 'Hat', icon: <Shield size={20} /> },
    { id: 'emblem', label: 'Emblem', icon: <Hexagon size={20} /> },
    
    { id: 'ring2', label: 'Ring 2', icon: <Circle size={20} /> },
    { id: 'pendant1', label: 'Pendant 1', icon: <Star size={20} /> },
    { id: 'face', label: 'Face', icon: <Square size={20} /> },
    
    { id: 'ring3', label: 'Ring 3', icon: <Circle size={20} /> },
    { id: 'pendant2', label: 'Pendant 2', icon: <Star size={20} /> },
    { id: 'eye', label: 'Eye', icon: <Square size={20} /> },
    
    { id: 'ring4', label: 'Ring 4', icon: <Circle size={20} /> },
    { id: 'weapon', label: 'Weapon', icon: <Sword size={20} /> },
    { id: 'top', label: 'Top', icon: <Shield size={20} /> },
    
    { id: 'pocket', label: 'Pocket', icon: <Star size={20} /> },
    { id: 'belt', label: 'Belt', icon: <Square size={20} /> },
    { id: 'bottom', label: 'Bottom', icon: <Shield size={20} /> },
    
    { id: 'badge', label: 'Badge', icon: <Crown size={20} /> },
    { id: 'medal', label: 'Medal', icon: <Crown size={20} /> },
    { id: 'shoes', label: 'Shoes', icon: <Shield size={20} /> },
    
    { id: 'heart', label: 'Heart', icon: <Star size={20} /> },
    { id: 'secondary', label: 'Secondary', icon: <Shield size={20} /> },
    { id: 'cape', label: 'Cape', icon: <Shield size={20} /> },
    
    { id: 'earring', label: 'Earring', icon: <Star size={20} /> },
    { id: 'shoulder', label: 'Shoulder', icon: <Shield size={20} /> },
    { id: 'gloves', label: 'Gloves', icon: <Shield size={20} /> },
  ];

  return (
    <div className="equipment-card">
      <div className="eq-header">
        <Sword size={20} color="#f59e0b" />
        <h2 style={{margin:0, border:'none', padding:0, fontSize:'1.2rem', color:'#fff'}}>Equipment Overview</h2>
      </div>
      <p className="card-desc" style={{marginBottom: '20px'}}>Visual representation of your gear layout.</p>
      
      <div className="eq-grid">
        {slots.map(slot => (
          <div key={slot.id} className="eq-slot" title={slot.label}>
            <div className="eq-icon">{slot.icon}</div>
            <div className="eq-label">{slot.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
