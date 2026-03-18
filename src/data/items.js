export const ITEM_TYPES = {
  ring: 'Ring', pendant: 'Pendant', weapon: 'Weapon', cap: 'Hat', top: 'Top',
  bottom: 'Bottom', shoes: 'Shoes', gloves: 'Gloves', cape: 'Cape',
  shoulder: 'Shoulder', face: 'Face', eye: 'Eye', earring: 'Earring',
  belt: 'Belt', pocket: 'Pocket', badge: 'Badge', medal: 'Medal',
  emblem: 'Emblem', secondary: 'Secondary', heart: 'Heart'
};

export const ITEMS = [
  // Weapons
  { id: 'fafnir_weapon', itemId: 1402196, name: 'Fafnir Weapon', type: ITEM_TYPES.weapon, reqLevel: 150, base: { stat: 40, attack: 160 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_weapon', itemId: 1402210, name: 'Absolab Weapon', type: ITEM_TYPES.weapon, reqLevel: 160, base: { stat: 60, attack: 192 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_weapon', itemId: 1402223, name: 'Arcane Umbra Weapon', type: ITEM_TYPES.weapon, reqLevel: 200, base: { stat: 100, attack: 276 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'genesis_weapon', itemId: 1402236, name: 'Genesis Weapon', type: ITEM_TYPES.weapon, reqLevel: 200, base: { stat: 150, attack: 318 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Hats
  { id: 'zakum_helmet', itemId: 1002357, name: 'Chaos Zakum Helmet', type: ITEM_TYPES.cap, reqLevel: 150, base: { stat: 45, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cra_hat', itemId: 1003797, name: 'Royal Hat (CRA)', type: ITEM_TYPES.cap, reqLevel: 150, base: { stat: 40, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_hat', itemId: 1004422, name: 'Absolab Hat', type: ITEM_TYPES.cap, reqLevel: 160, base: { stat: 45, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_hat', itemId: 1004808, name: 'Arcane Umbra Hat', type: ITEM_TYPES.cap, reqLevel: 200, base: { stat: 65, attack: 7 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'eternal_hat', itemId: 1005980, name: 'Eternal Hat', type: ITEM_TYPES.cap, reqLevel: 250, base: { stat: 80, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Tops / Bottoms / Overalls
  { id: 'pensalir_overall', itemId: 1052669, name: 'Pensalir Overall', type: ITEM_TYPES.top, reqLevel: 140, base: { stat: 15, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cra_top', itemId: 1042254, name: 'Eagle Eye Top (CRA)', type: ITEM_TYPES.top, reqLevel: 150, base: { stat: 30, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cra_bottom', itemId: 1062161, name: 'Trixter Bottom (CRA)', type: ITEM_TYPES.bottom, reqLevel: 150, base: { stat: 30, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'eternal_top', itemId: 1042436, name: 'Eternal Top', type: ITEM_TYPES.top, reqLevel: 250, base: { stat: 80, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'eternal_bottom', itemId: 1062253, name: 'Eternal Bottom', type: ITEM_TYPES.bottom, reqLevel: 250, base: { stat: 80, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Gloves
  { id: 'pensalir_gloves', itemId: 1082544, name: 'Pensalir Gloves', type: ITEM_TYPES.gloves, reqLevel: 140, base: { stat: 10, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'hq_dimension_gloves', itemId: 1082515, name: 'High Quality Dimension Gloves', type: ITEM_TYPES.gloves, reqLevel: 140, base: { stat: 12, attack: 12 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'abso_gloves', itemId: 1082636, name: 'Absolab Gloves', type: ITEM_TYPES.gloves, reqLevel: 160, base: { stat: 15, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_gloves', itemId: 1082695, name: 'Arcane Umbra Gloves', type: ITEM_TYPES.gloves, reqLevel: 200, base: { stat: 40, attack: 9 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Shoes
  { id: 'pensalir_shoes', itemId: 1072869, name: 'Pensalir Shoes', type: ITEM_TYPES.shoes, reqLevel: 140, base: { stat: 10, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'nova_shoes', itemId: 1072743, name: 'Nova Shoes', type: ITEM_TYPES.shoes, reqLevel: 105, base: { stat: 15, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_shoes', itemId: 1073030, name: 'Absolab Shoes', type: ITEM_TYPES.shoes, reqLevel: 160, base: { stat: 15, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_shoes', itemId: 1073158, name: 'Arcane Umbra Shoes', type: ITEM_TYPES.shoes, reqLevel: 200, base: { stat: 40, attack: 9 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Cape
  { id: 'pensalir_cape', itemId: 1102622, name: 'Pensalir Cape', type: ITEM_TYPES.cape, reqLevel: 140, base: { stat: 5, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'tyrant_cape', itemId: 1102481, name: 'Tyrant Cape', type: ITEM_TYPES.cape, reqLevel: 150, base: { stat: 50, attack: 30 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_cape', itemId: 1102775, name: 'Absolab Cape', type: ITEM_TYPES.cape, reqLevel: 160, base: { stat: 15, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'arcane_cape', itemId: 1102882, name: 'Arcane Umbra Cape', type: ITEM_TYPES.cape, reqLevel: 200, base: { stat: 35, attack: 6 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Shoulder
  { id: 'royal_black_metal', itemId: 1152155, name: 'Royal Black Metal Shoulder', type: ITEM_TYPES.shoulder, reqLevel: 120, base: { stat: 10, attack: 6 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'abso_shoulder', itemId: 1152174, name: 'Absolab Shoulder', type: ITEM_TYPES.shoulder, reqLevel: 160, base: { stat: 14, attack: 10 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'arcane_shoulder', itemId: 1152196, name: 'Arcane Umbra Shoulder', type: ITEM_TYPES.shoulder, reqLevel: 200, base: { stat: 35, attack: 20 }, canStarforce: true, canFlame: false, canPotential: true },
  
  // Pendants
  { id: 'cht_pendant', itemId: 1122076, name: 'Chaos Horntail Necklace', type: ITEM_TYPES.pendant, reqLevel: 120, base: { stat: 22, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'machinator', itemId: 1122266, name: 'Machinator Pendant', type: ITEM_TYPES.pendant, reqLevel: 120, base: { stat: 10, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'dom_pendant', itemId: 1122150, name: 'Dominator Pendant', type: ITEM_TYPES.pendant, reqLevel: 140, base: { stat: 20, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cracked_gollux_pendant', itemId: 1122264, name: 'Cracked Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 120, base: { stat: 10, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'solid_gollux_pendant', itemId: 1122265, name: 'Solid Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 130, base: { stat: 14, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'reinforced_gollux_pendant', itemId: 1122267, name: 'Reinforced Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 140, base: { stat: 22, attack: 4 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sup_gollux_pendant', itemId: 1122268, name: 'Superior Gollux Pendant', type: ITEM_TYPES.pendant, reqLevel: 150, base: { stat: 28, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'daybreak_pendant', itemId: 1122430, name: 'Daybreak Pendant', type: ITEM_TYPES.pendant, reqLevel: 160, base: { stat: 40, attack: 6 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sos_pendant', itemId: 1122310, name: 'Source of Suffering', type: ITEM_TYPES.pendant, reqLevel: 160, base: { stat: 50, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  
  // Rings
  { id: 'silver_blossom', itemId: 1113055, name: 'Silver Blossom Ring', type: ITEM_TYPES.ring, reqLevel: 110, base: { stat: 5, attack: 2 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'noble_ifra', itemId: 1113149, name: 'Noble Ifia\'s Ring', type: ITEM_TYPES.ring, reqLevel: 120, base: { stat: 5, attack: 2 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'cracked_gollux_ring', itemId: 1113072, name: 'Cracked Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 120, base: { stat: 4, attack: 2 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'solid_gollux_ring', itemId: 1113073, name: 'Solid Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 130, base: { stat: 6, attack: 4 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'reinforced_gollux_ring', itemId: 1113074, name: 'Reinforced Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 140, base: { stat: 8, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'sup_gollux_ring', itemId: 1113075, name: 'Superior Gollux Ring', type: ITEM_TYPES.ring, reqLevel: 150, base: { stat: 10, attack: 8 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'slime_ring', itemId: 1113306, name: 'Guardian Slime Ring', type: ITEM_TYPES.ring, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'gloom_ring', itemId: 1113320, name: 'Dawn Guardian Angel Ring', type: ITEM_TYPES.ring, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'meister_ring', itemId: 1113054, name: 'Meister Ring', type: ITEM_TYPES.ring, reqLevel: 140, base: { stat: 10, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'kanna_ring', itemId: 1113282, name: 'Kanna Treasure', type: ITEM_TYPES.ring, reqLevel: 140, base: { stat: 5, attack: 5 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'endless_terror', itemId: 1113231, name: 'Endless Terror', type: ITEM_TYPES.ring, reqLevel: 200, base: { stat: 40, attack: 25 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'event_ring', itemId: 1113297, name: 'Event Ring (Awake/Glory/etc)', type: ITEM_TYPES.ring, reqLevel: 120, base: { stat: 40, attack: 20 }, canStarforce: false, canFlame: false, canPotential: true },

  // Face / Eye
  { id: 'condensed_power', itemId: 1132174, name: 'Condensed Power Crystal', type: ITEM_TYPES.face, reqLevel: 110, base: { stat: 5, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'aquatic_letter', itemId: 1022231, name: 'Aquatic Letter Eye Accessory', type: ITEM_TYPES.eye, reqLevel: 100, base: { stat: 6, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'bb_mark', itemId: 1022211, name: 'Black Bean Mark', type: ITEM_TYPES.eye, reqLevel: 135, base: { stat: 7, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'pap_mark', itemId: 1022221, name: 'Papulatus Mark', type: ITEM_TYPES.eye, reqLevel: 145, base: { stat: 20, attack: 0 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'twilight_mark', itemId: 1132308, name: 'Twilight Mark', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'ruin_force', itemId: 1092120, name: 'Ruined Force Shield', type: ITEM_TYPES.secondary, reqLevel: 160, base: { stat: 10, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sweetwater_tattoo', itemId: 1132243, name: 'Sweetwater Tattoo', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 20, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'sweetwater_glasses', itemId: 1022204, name: 'Sweetwater Glasses', type: ITEM_TYPES.eye, reqLevel: 160, base: { stat: 20, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'magic_eyepatch', itemId: 1022256, name: 'Magic Eyepatch', type: ITEM_TYPES.eye, reqLevel: 160, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'berserked', itemId: 1132296, name: 'Berserked', type: ITEM_TYPES.face, reqLevel: 160, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },

  // Earring
  { id: 'dea_sidus', itemId: 1032241, name: 'Dea Sidus Earring', type: ITEM_TYPES.earring, reqLevel: 130, base: { stat: 5, attack: 2 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'meister_earring', itemId: 1032223, name: 'Meister Earring', type: ITEM_TYPES.earring, reqLevel: 140, base: { stat: 15, attack: 4 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'cracked_gollux_earring', itemId: 1032220, name: 'Cracked Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 120, base: { stat: 8, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'solid_gollux_earring', itemId: 1032221, name: 'Solid Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 130, base: { stat: 10, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'reinforced_gollux_earring', itemId: 1032222, name: 'Reinforced Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 140, base: { stat: 12, attack: 4 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sup_gollux_earring', itemId: 1032224, name: 'Superior Gollux Earring', type: ITEM_TYPES.earring, reqLevel: 150, base: { stat: 15, attack: 10 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'estella_earring', itemId: 1032316, name: 'Estella Earring', type: ITEM_TYPES.earring, reqLevel: 160, base: { stat: 40, attack: 5 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'commanding_force', itemId: 1032274, name: 'Commanding Force Earring', type: ITEM_TYPES.earring, reqLevel: 200, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },

  // Belt
  { id: 'golden_clover', itemId: 1132175, name: 'Golden Clover Belt', type: ITEM_TYPES.belt, reqLevel: 140, base: { stat: 15, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'enraged_z_belt', itemId: 1132176, name: 'Enraged Zakum Belt', type: ITEM_TYPES.belt, reqLevel: 150, base: { stat: 50, attack: 1 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'tyrant_belt', itemId: 1132177, name: 'Tyrant Belt', type: ITEM_TYPES.belt, reqLevel: 150, base: { stat: 50, attack: 30 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'cracked_gollux_belt', itemId: 1132194, name: 'Cracked Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 120, base: { stat: 10, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'solid_gollux_belt', itemId: 1132195, name: 'Solid Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 130, base: { stat: 14, attack: 3 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'reinforced_gollux_belt', itemId: 1132196, name: 'Reinforced Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 140, base: { stat: 22, attack: 4 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'sup_gollux_belt', itemId: 1132197, name: 'Superior Gollux Belt', type: ITEM_TYPES.belt, reqLevel: 150, base: { stat: 60, attack: 35 }, canStarforce: true, canFlame: true, canPotential: true },
  { id: 'dreamy_belt', itemId: 1132290, name: 'Dreamy Belt', type: ITEM_TYPES.belt, reqLevel: 200, base: { stat: 50, attack: 15 }, canStarforce: true, canFlame: true, canPotential: true },

  // Pocket
  { id: 'pink_bean_cup', itemId: 1162019, name: 'Pink Holy Cup', type: ITEM_TYPES.pocket, reqLevel: 140, base: { stat: 5, attack: 0 }, canStarforce: false, canFlame: true, canPotential: false },
  { id: 'cursed_spellbook', itemId: 1162024, name: 'Cursed Spellbook', type: ITEM_TYPES.pocket, reqLevel: 160, base: { stat: 20, attack: 10 }, canStarforce: false, canFlame: true, canPotential: false },

  // Badge / Medal / Emblem / Secondary / Heart
  { id: 'crystal_ventus', itemId: 1182087, name: 'Crystal Ventus Badge', type: ITEM_TYPES.badge, reqLevel: 130, base: { stat: 10, attack: 5 }, canStarforce: false, canFlame: false, canPotential: false },
  { id: 'ghost_ship', itemId: 1182060, name: 'Ghost Ship Exorcist Badge', type: ITEM_TYPES.badge, reqLevel: 150, base: { stat: 3, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'genesis_badge', itemId: 1182285, name: 'Genesis Badge', type: ITEM_TYPES.badge, reqLevel: 200, base: { stat: 15, attack: 15 }, canStarforce: false, canFlame: false, canPotential: false },
  
  { id: 'seven_day_monster', itemId: 1142894, name: 'Seven Day Monster Parker', type: ITEM_TYPES.medal, reqLevel: 100, base: { stat: 7, attack: 7 }, canStarforce: false, canFlame: false, canPotential: false },
  
  { id: 'class_emblem', itemId: 1190409, name: 'Level 100 Class Emblem', type: ITEM_TYPES.emblem, reqLevel: 100, base: { stat: 10, attack: 2 }, canStarforce: false, canFlame: false, canPotential: true },
  { id: 'mitra_rage', itemId: 1190311, name: 'Mitra\'s Rage', type: ITEM_TYPES.emblem, reqLevel: 200, base: { stat: 40, attack: 5 }, canStarforce: false, canFlame: false, canPotential: true },
  
  { id: 'pno_secondary', itemId: 1092087, name: 'Princess No Secondary', type: ITEM_TYPES.secondary, reqLevel: 140, base: { stat: 14, attack: 9 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'deimos_sage', itemId: 1092083, name: 'Deimos Sage/Warrior/Thief Shield', type: ITEM_TYPES.secondary, reqLevel: 130, base: { stat: 10, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  
  { id: 'fairy_heart', itemId: 1672077, name: 'Fairy Heart', type: ITEM_TYPES.heart, reqLevel: 100, base: { stat: 0, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'wonderroid_heart', itemId: 1672082, name: 'Glimmering Wondroid Heart', type: ITEM_TYPES.heart, reqLevel: 120, base: { stat: 0, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
  { id: 'titanium_heart', itemId: 1672069, name: 'Titanium Heart', type: ITEM_TYPES.heart, reqLevel: 100, base: { stat: 0, attack: 0 }, canStarforce: true, canFlame: false, canPotential: true },
];
