var builtInSets = [
	{
	    name: "Ursnac",
	    setName: "[P7] Mdef Pivot",
	    evs: {
	        hp: 200,
	        energy: 4,
	        attack: 0,
	        defense: 200,
	        attackR: 0,
	        defenseR: 96,
	        speed: 0
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 0
	    },
	    moves: {
	        move1: "Baffle",
	        move2: "Slap Down",
	        move3: "Heart Break",
	        move4: "Shadow Sprint"
	    },
	    posNature: "robust",
	    negNature: "sluggish",
	    veryNature: "none",
	    ability: "Tank",
	    item: "Health Amulet",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Ikazune",
	    setName: "[P7] RAtk Boots",
	    evs: {
	        hp: 96,
	        energy: 4,
	        attack: 0,
	        defense: 0,
	        attackR: 200,
	        defenseR: 0,
	        speed: 200
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Zip-Zap",
	        move2: "Flash 'n Flee",
	        move3: "Fire Breath",
	        move4: "Thunderstrike"
	    },
	    posNature: "none",
	    negNature: "smart",
	    veryNature: "none",
	    ability: "Rechargeable",
	    item: "Specialty Boots",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Hunder",
	    setName: "[P7] MAttacker",
	    evs: {
	        hp: 48,
	        energy: 52,
	        attack: 200,
	        defense: 0,
	        attackR: 0,
	        defenseR: 0,
	        speed: 200
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Thunder Chomp",
	        move2: "Blaze Chomp",
	        move3: "Mega Chomp",
	        move4: "Chilly Chomp"
	    },
	    posNature: "brawny",
	    negNature: "nimble",
	    veryNature: "vClumsy",
	    ability: "Power Jaw",
	    item: "Power Cuffs",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Nevermare",
	    setName: "[P7] Cleaner",
	    evs: {
	        hp: 48,
	        energy: 52,
	        attack: 200,
	        defense: 0,
	        attackR: 0,
	        defenseR: 0,
	        speed: 200
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Bulk Up",
	        move2: "Thistle Slash",
	        move3: "Phantom Slash",
	        move4: "Primal Slash"
	    },
	    posNature: "none",
	    negNature: "nimble",
	    veryNature: "none",
	    ability: "Razor Sharp",
	    item: "Power Cuffs",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Tundrolen",
	    setName: "[P7] Melee Wall",
	    evs: {
	        hp: 200,
	        energy: 36,
	        attack: 64,
	        defense: 200,
	        attackR: 0,
	        defenseR: 0,
	        speed: 0
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 0
	    },
	    moves: {
	        move1: "Body Crash",
	        move2: "Ice Hammer",
	        move3: "Rejuvenate",
	        move4: "Bulk Up"
	    },
	    posNature: "sluggish",
	    negNature: "clumsy",
	    veryNature: "vRobust",
	    ability: "Resilience",
	    item: "Mysterious Dust",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Eleguana",
	    setName: "[P7] Ranged Pivot",
	    evs: {
	        hp: 200,
	        energy: 20,
	        attack: 0,
	        defense: 24,
	        attackR: 56,
	        defenseR: 200,
	        speed: 0
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Thunderstrike",
	        move2: "Flash 'n Flee",
	        move3: "Tase",
	        move4: "Rejuvenate"
	    },
	    posNature: "frail",
	    negNature: "sluggish",
	    veryNature: "vClever",
	    ability: "Prismatic",
	    item: "Heavy Shield",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Barblast",
	    setName: " [P7] Defensive",
	    evs: {
	        hp: 200,
	        energy: 60,
	        attack: 0,
	        defense: 200,
	        attackR: 0,
	        defenseR: 40,
	        speed: 0
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Water Bomb",
	        move2: "Toxiblast",
	        move3: "Rejuvenate",
	        move4: "Power Focus"
	    },
	    posNature: "sluggish",
	    negNature: "frail",
	    veryNature: "vRobust",
	    ability: "High Explosive",
	    item: "Heavy Armor",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Zuelong",
	    setName: "[P7] Cleaner ",
	    evs: {
	        hp: 80,
	        energy: 20,
	        attack: 0,
	        defense: 0,
	        attackR: 200,
	        defenseR: 0,
	        speed: 200
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Thunderstrike",
	        move2: "Elemental Burst",
	        move3: "Ancient Roar",
	        move4: "Dodge"
	    },
	    posNature: "smart",
	    negNature: "nimble",
	    veryNature: "vFrail",
	    ability: "Brute Force",
	    item: "Ancient Essence",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Whippledriff",
	    setName: "[P7] Offensive Nimble",
	    evs: {
	        hp: 176,
	        energy: 4,
	        attack: 0,
	        defense: 0,
	        attackR: 200,
	        defenseR: 0,
	        speed: 120
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Life Drain",
	        move2: "Air Blade",
	        move3: "Luster Loot",
	        move4: "Magnify"
	    },
	    posNature: "nimble",
	    negNature: "smart",
	    veryNature: "vFrail",
	    ability: "Glide",
	    item: "Air Essence",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Mootune",
	    setName: "[P7] Offensive Very Smart",
	    evs: {
	        hp: 40,
	        energy: 60,
	        attack: 0,
	        defense: 0,
	        attackR: 200,
	        defenseR: 0,
	        speed: 200
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Raging Howl",
	        move2: "Resonate",
	        move3: "Peace Of Mind",
	        move4: "Stretch"
	    },
	    posNature: "tender",
	    negNature: "frail",
	    veryNature: "vSmart",
	    ability: "Tone Deaf",
	    item: "Simple Essence",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Cosmiore-Cracked",
	    setName: "[P7] Offensive Sweeper",
	    evs: {
	        hp: 184,
	        energy: 4,
	        attack: 0,
	        defense: 56,
	        attackR: 200,
	        defenseR: 24,
	        speed: 32
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Meteor Crash",
	        move2: "Psycho Blast",
	        move3: "Peace Of Mind",
	        move4: "Slumber"
	    },
	    posNature: "smart",
	    negNature: "none",
	    veryNature: "none",
	    ability: "Enchanted Coat",
	    item: "Shade Pearl",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Snagoop",
	    setName: "[P7] Smart Nimble",
	    evs: {
	        hp: 88,
	        energy: 12,
	        attack: 0,
	        defense: 0,
	        attackR: 200,
	        defenseR: 0,
	        speed: 200
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Barter",
	        move2: "Provoke",
	        move3: "Muck Blast",
	        move4: "Jet Stream"
	    },
	    posNature: "smart",
	    negNature: "nimble",
	    veryNature: "vFrail",
	    ability: "Immunized",
	    item: "Volcanic Ash",
	    level: 50,
	    builtIn: true
	},
	{
	    name: "Boonary",
	    setName: "[P7] Revenge Killer",
	    evs: {
	        hp: 200,
	        energy: 200,
	        attack: 0,
	        defense: 0,
	        attackR: 0,
	        defenseR: 0,
	        speed: 0
	    },
	    ivs: {
	        hp: 40,
	        energy: 40,
	        attack: 40,
	        defense: 40,
	        attackR: 40,
	        defenseR: 40,
	        speed: 40
	    },
	    moves: {
	        move1: "Emulate",
	        move2: "(No Move)",
	        move3: "(No Move)",
	        move4: "(No Move)"
	    },
	    posNature: "hyper",
	    negNature: "none",
	    veryNature: "none",
	    ability: "Two Face",
	    item: "Specialty Boots",
	    level: 50,
	    builtIn: true
	},
];
