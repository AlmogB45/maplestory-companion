export const ITEM_TYPES = {
  ring: 'Ring', pendant: 'Pendant', weapon: 'Weapon', cap: 'Hat', top: 'Top',
  bottom: 'Bottom', shoes: 'Shoes', gloves: 'Gloves', cape: 'Cape',
  shoulder: 'Shoulder', face: 'Face', eye: 'Eye', earring: 'Earring',
  belt: 'Belt', pocket: 'Pocket', badge: 'Badge', medal: 'Medal',
  emblem: 'Emblem', secondary: 'Secondary', heart: 'Heart'
};

export const ITEMS = [
  // Weapons
  { id: 'fafnir_weapon', name: 'Fafnir Weapon', type: ITEM_TYPES.weapon, reqLevel: 150, base: { stat: 40, attack: 160 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_weapon', name: 'Absolab Weapon', type: ITEM_TYPES.weapon, reqLevel: 160, base: { stat: 60, attack: 192 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_weapon', name: 'Arcane Umbra Weapon', type: ITEM_TYPES.weapon, reqLevel: 200, base: { stat: 100, attack: 276 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'genesis_weapon', name: 'Genesis Weapon', type: ITEM_TYPES.weapon, reqLevel: 200, base: { stat: 150, attack: 318 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Hats
  { id: 'zakum_helmet', name: 'Chaos Zakum Helmet', type: ITEM_TYPES.cap, reqLevel: 150, base: { stat: 45, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cra_hat', name: 'Royal Hat (CRA)', type: ITEM_TYPES.cap, reqLevel: 150, base: { stat: 40, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_hat', name: 'Absolab Hat', type: ITEM_TYPES.cap, reqLevel: 160, base: { stat: 45, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_hat', name: 'Arcane Umbra Hat', type: ITEM_TYPES.cap, reqLevel: 200, base: { stat: 65, attack: 7 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'eternal_hat', name: 'Eternal Hat', type: ITEM_TYPES.cap, reqLevel: 250, base: { stat: 80, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Tops / Bottoms / Overalls
  { id: 'pensalir_overall', name: 'Pensalir Overall', type: ITEM_TYPES.top, reqLevel: 140, base: { stat: 15, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cra_top', name: 'Eagle Eye Top (CRA)', type: ITEM_TYPES.top, reqLevel: 150, base: { stat: 30, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cra_bottom', name: 'Trixter Bottom (CRA)', type: ITEM_TYPES.bottom, reqLevel: 150, base: { stat: 30, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'eternal_top', name: 'Eternal Top', type: ITEM_TYPES.top, reqLevel: 250, base: { stat: 80, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'eternal_bottom', name: 'Eternal Bottom', type: ITEM_TYPES.bottom, reqLevel: 250, base: { stat: 80, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Gloves
  { id: 'pensalir_gloves', name: 'Pensalir Gloves', type: ITEM_TYPES.gloves, reqLevel: 140, base: { stat: 10, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'hq_dimension_gloves', name: 'High Quality Dimension Gloves', type: ITEM_TYPES.gloves, reqLevel: 140, base: { stat: 12, attack: 12 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'abso_gloves', name: 'Absolab Gloves', type: ITEM_TYPES.gloves, reqLevel: 160, base: { stat: 15, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_gloves', name: 'Arcane Umbra Gloves', type: ITEM_TYPES.gloves, reqLevel: 200, base: { stat: 40, attack: 9 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Shoes
  { id: 'pensalir_shoes', name: 'Pensalir Shoes', type: ITEM_TYPES.shoes, reqLevel: 140, base: { stat: 10, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'nova_shoes', name: 'Nova Shoes', type: ITEM_TYPES.shoes, reqLevel: 105, base: { stat: 15, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_shoes', name: 'Absolab Shoes', type: ITEM_TYPES.shoes, reqLevel: 160, base: { stat: 15, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_shoes', name: 'Arcane Umbra Shoes', type: ITEM_TYPES.shoes, reqLevel: 200, base: { stat: 40, attack: 9 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Cape
  { id: 'pensalir_cape', name: 'Pensalir Cape', type: ITEM_TYPES.cape, reqLevel: 140, base: { stat: 5, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'tyrant_cape', name: 'Tyrant Cape', type: ITEM_TYPES.cape, reqLevel: 150, base: { stat: 50, attack: 30 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_cape', name: 'Absolab Cape', type: ITEM_TYPES.cape, reqLevel: 160, base: { stat: 15, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_cape', name: 'Arcane Umbra Cape', type: ITEM_TYPES.cape, reqLevel: 200, base: { stat: 35, attack: 6 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Shoulder
  { id: 'royal_black_metal', name: 'Royal Black Metal Shoulder', type: ITEM_TYPES.shoulder, reqLevel: 120, base: { stat: 10, attack: 6 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_shoulder', name: 'Absolab Shoulder', type: ITEM_TYPES.shoulder, reqLevel: 160, base: { stat: 14, attack: 10 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'arcane_shoulder', name: 'Arcane Umbra Shoulder', type: ITEM_TYPES.shoulder, reqLevel: 200, base: { stat: 35, attack: 20 }, canStarforce: true, canFlame: false, canPotential: true },
  
  // Pendants
  { id: 'cht_pendant', name: 'Chaos Horntail Necklace', type: ITEM_TYPES.pendant, reqLevel: 120, base: { stat: 22, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'machinator', name: 'Machinator Pendant', type: ITEM_TYPES.pendant, reqLevel: 120, base: { stat: 10, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'dom_pendant', name: 'Dominator Pendant', type: ITEM_TYPES.pendant, reqLevel: 140, base: { stat: 20, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cracked_gollux_pendant', name: 'Cracked Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 120, base: { stat: 10, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'solid_gollux_pendant', name: 'Solid Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 130, base: { stat: 14, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'reinforced_gollux_pendant', name: 'Reinforced Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 140, base: { stat: 22, attack: 4 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sup_gollux_pendant', name: 'Superior Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 150, base: { stat: 28, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'daybreak_pendant', name: 'Daybreak Pendant', type: ITEM_TYPES.pendant, reqLevel: 160, base: { stat: 40, attack: 6 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sos_pendant', name: 'Source of Suffering', type: ITEM_TYPES.pendant, reqLevel: 160, base: { stat: 50, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Rings
  { id: 'silver_blossom', name: 'Silver Blossom Ring', type: ITEM_TYPES.ring, reqLevel: 110, base: { stat: 5, attack: 2 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'noble_ifra', name: 'Noble Ifia\'s Ring', type: ITEM_TYPES.ring, reqLevel: 120, base: { stat: 5, attack: 2 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'cracked_gollux_ring', name: 'Cracked Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 120, base: { stat: 4, attack: 2 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'solid_gollux_ring', name: 'Solid Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 130, base: { stat: 6, attack: 4 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'reinforced_gollux_ring', name: 'Reinforced Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 140, base: { stat: 8, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'sup_gollux_ring', name: 'Superior Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 150, base: { stat: 10, attack: 8 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'slime_ring', name: 'Guardian Slime Ring', type: ITEM_TYPES.ring, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'gloom_ring', name: 'Dawn Guardian Angel Ring', type: ITEM_TYPES.ring, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'meister_ring', name: 'Meister Ring', type: ITEM_TYPES.ring, reqLevel: 140, base: { stat: 10, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'kanna_ring', name: 'Kanna Treasure', type: ITEM_TYPES.ring, reqLevel: 140, base: { stat: 5, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'endless_terror', name: 'Endless Terror', type: ITEM_TYPES.ring, reqLevel: 200, base: { stat: 40, attack: 25 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'event_ring', name: 'Event Ring (Awake/Glory/etc)', type: ITEM_TYPES.ring, reqLevel: 120, base: { stat: 40, attack: 20 }, canStarforce: false, canFlame: false, canPotential: true },

  // Face / Eye
  { id: 'condensed_power', name: 'Condensed Power Crystal', type: ITEM_TYPES.face, reqLevel: 110, base: { stat: 5, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'aquatic_letter', name: 'Aquatic Letter Eye Accessory', type: ITEM_TYPES.eye, reqLevel: 100, base: { stat: 6, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'bb_mark', name: 'Black Bean Mark', type: ITEM_TYPES.eye, reqLevel: 135, base: { stat: 7, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'pap_mark', name: 'Papulatus Mark', type: ITEM_TYPES.eye, reqLevel: 145, base: { stat: 20, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'twilight_mark', name: 'Twilight Mark', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'ruin_force', name: 'Ruined Force Shield', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 10, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sweetwater_tattoo', name: 'Sweetwater Tattoo', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 20, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'sweetwater_glasses', name: 'Sweetwater Glasses', type: ITEM_TYPES.eye, reqLevel: 160, base: { stat: 20, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'magic_eyepatch', name: 'Magic Eyepatch', type: ITEM_TYPES.eye, reqLevel: 160, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'berserked', name: 'Berserked', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },

  // Earring
  { id: 'dea_sidus', name: 'Dea Sidus Earring', type: ITEM_TYPES.earring, reqLevel: 130, base: { stat: 5, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'meister_earring', name: 'Meister Earring', type: ITEM_TYPES.earring, reqLevel: 140, base: { stat: 15, attack: 4 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'cracked_gollux_earring', name: 'Cracked Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 120, base: { stat: 8, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'solid_gollux_earring', name: 'Solid Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 130, base: { stat: 10, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'reinforced_gollux_earring', name: 'Reinforced Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 140, base: { stat: 12, attack: 4 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sup_gollux_earring', name: 'Superior Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 150, base: { stat: 15, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'estella_earring', name: 'Estella Earring', type: ITEM_TYPES.earring, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'commanding_force', name: 'Commanding Force Earring', type: ITEM_TYPES.earring, reqLevel: 200, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },

  // Belt
  { id: 'golden_clover', name: 'Golden Clover Belt', type: ITEM_TYPES.belt, reqLevel: 140, base: { stat: 15, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'enraged_z_belt', name: 'Enraged Zakum Belt', type: ITEM_TYPES.belt, reqLevel: 150, base: { stat: 50, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'tyrant_belt', name: 'Tyrant Belt', type: ITEM_TYPES.belt, reqLevel: 150, base: { stat: 50, attack: 30 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cracked_gollux_belt', name: 'Cracked Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 120, base: { stat: 10, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'solid_gollux_belt', name: 'Solid Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 130, base: { stat: 14, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'reinforced_gollux_belt', name: 'Reinforced Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 140, base: { stat: 22, attack: 4 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sup_gollux_belt', name: 'Superior Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 150, base: { stat: 60, attack: 35 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'dreamy_belt', name: 'Dreamy Belt', type: ITEM_TYPES.belt, reqLevel: 200, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },

  // Pocket
  { id: 'pink_bean_cup', name: 'Pink Holy Cup', type: ITEM_TYPES.pocket, reqLevel: 140, base: { stat: 5, attack: 0 }, canStarforce: false, canFlame: true, canPotential: false },
  { id: 'cursed_spellbook', name: 'Cursed Spellbook', type: ITEM_TYPES.pocket, reqLevel: 160, base: { stat: 20, attack: 10 }, canStarforce: false, canFlame: true, canPotential: false },

  // Badge / Medal / Emblem / Secondary / Heart
  { id: 'crystal_ventus', name: 'Crystal Ventus Badge', type: ITEM_TYPES.badge, reqLevel: 130, base: { stat: 10, attack: 5 }, canStarforce: false, canFlame: false, canPotential: false },
  { id: 'ghost_ship', name: 'Ghost Ship Exorcist Badge', type: ITEM_TYPES.badge, reqLevel: 150, base: { stat: 3, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'genesis_badge', name: 'Genesis Badge', type: ITEM_TYPES.badge, reqLevel: 200, base: { stat: 15, attack: 15 }, canStarforce: false, canFlame: false, canPotential: false },
  
  { id: 'seven_day_monster', name: 'Seven Day Monster Parker', type: ITEM_TYPES.medal, reqLevel: 100, base: { stat: 7, attack: 7 }, canStarforce: false, canFlame: false, canPotential: false },
  
  { id: 'class_emblem', name: 'Level 100 Class Emblem', type: ITEM_TYPES.emblem, reqLevel: 100, base: { stat: 10, attack: 2 }, canStarforce: false, canFlame: false, canPotential: true },
  { id: 'mitra_rage', name: 'Mitra\'s Rage', type: ITEM_TYPES.emblem, reqLevel: 200, base: { stat: 40, attack: 5 }, canStarforce: false, canFlame: false, canPotential: true },
  
  { id: 'pno_secondary', name: 'Princess No Secondary', type: ITEM_TYPES.secondary, reqLevel: 140, base: { stat: 14, attack: 9 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'deimos_sage', name: 'Deimos Sage/Warrior/Thief Shield', type: ITEM_TYPES.secondary, reqLevel: 130, base: { stat: 10, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  
  { id: 'fairy_heart', name: 'Fairy Heart', type: ITEM_TYPES.heart, reqLevel: 100, base: { stat: 0, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'wonderroid_heart', name: 'Glimmering Wondroid Heart', type: ITEM_TYPES.heart, reqLevel: 120, base: { stat: 0, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'titanium_heart', name: 'Titanium Heart', type: ITEM_TYPES.heart, reqLevel: 100, base: { stat: 0, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
];
