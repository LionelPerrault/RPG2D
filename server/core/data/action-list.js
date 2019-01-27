export default [
  {
    name: 'Walk here',
    actionId: 'player:walk-here',
    context: ['gameMap'],
    allow: true,
    nearby: false,
    weight: 2,
  },
  {
    name: 'Take',
    actionId: 'player:take',
    context: ['gameMap'],
    allow: ['item'],
    nearby: 'exact',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Examine',
    actionId: 'player:examine',
    context: ['gameMap', 'inventorySlot'],
    allow: ['npc', 'item'],
    nearby: false,
    weight: 5,
  },
  {
    name: 'Drop',
    actionId: 'player:inventory-drop',
    context: ['inventorySlot'],
    allow: ['item'],
    nearby: false,
    weight: 99,
  },
  {
    name: 'Equip',
    actionId: 'item:equip',
    context: ['inventorySlot'],
    allow: ['item'],
    nearby: false,
    weight: 1,
  },
  {
    name: 'Unequip',
    actionId: 'item:unequip',
    context: ['wearSlot'],
    allow: ['item'],
    nearby: false,
    weight: 1,
  },
  {
    name: 'Mine',
    actionId: 'player:resource:mining:rock',
    context: ['gameMap'],
    allow: ['foreground'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },
  {
    name: 'Push',
    actionId: 'player:resource:goldenplaque:push',
    context: ['gameMap'],
    allow: ['foreground'],
    nearby: 'edge',
    weight: 1,
    queueable: true,
  },

];
