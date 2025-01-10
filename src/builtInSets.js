var builtInSets = [
	{ name: "Akhalos", setName: "Drudge", evs: { hp: 40, energy: 4, attack: 200, defense: 0, attackR: 0, defenseR: 56, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Ice Hammer", move2: "Wave Wrecker", move3: "Gnarly Gash", move4: "Drudge" }, posNature: "brawny", negNature: "none", veryNature: "none", ability: "Aqua Body", item: "Volt Pearl", level: 50, builtIn: true },
	{ name: "Arapaigo", setName: "Magnify", evs: { hp: 32, energy: 68, attack: 0, defense: 0, attackR: 200, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Tsunami", move2: "Thunderstrike", move3: "Frost Beam", move4: "Magnify" }, posNature: "frail", negNature: "tender", veryNature: "vNimble", ability: "Finesse", item: "Energy Orb", level: 50, builtIn: true },
	{ name: "Arapaigo", setName: "Specialty Goggles", evs: { hp: 8, energy: 92, attack: 0, defense: 0, attackR: 200, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Tsunami", move2: "Zip-Zap", move3: "Frost Beam", move4: "Dark Surge" }, posNature: "frail", negNature: "tender", veryNature: "vSmart", ability: "Rain Rush", item: "Specialty Goggles", level: 50, builtIn: true },
	{ name: "Arceros", setName: "Specialty Gloves", evs: { hp: 32, energy: 68, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Boiling Press", move2: "Primal Slash", move3: "Outburst", move4: "Raging Tackle" }, posNature: "nimble", negNature: "none", veryNature: "none", ability: "Burning Rage", item: "Specialty Gloves", level: 50, builtIn: true },
	{ name: "Arceros", setName: "Specialty Boots", evs: { hp: 32, energy: 68, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Boiling Press", move2: "Primal Slash", move3: "Outburst", move4: "Raging Tackle" }, posNature: "nimble", negNature: "none", veryNature: "none", ability: "Burning Rage", item: "Specialty Boots", level: 50, builtIn: true },
	{ name: "Avitross", setName: "Fast Brawn Boost", evs: { hp: 88, energy: 44, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 168 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Nosedive", move2: "Rogue Assault", move3: "Thunder Crash", move4: "Brawn Boost" }, posNature: "clumsy", negNature: "foolish", veryNature: "vBrawny", ability: "Rev Up", item: "Martial Shell", level: 50, builtIn: true },
	{ name: "Avitross", setName: "Bulky Brawn Boost", evs: { hp: 192, energy: 20, attack: 200, defense: 0, attackR: 0, defenseR: 80, speed: 8 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Nosedive", move2: "Rogue Assault", move3: "Brawn Boost", move4: "Dodge" }, posNature: "clumsy", negNature: "foolish", veryNature: "vBrawny", ability: "Rev Up", item: "Martial Shell", level: 50, builtIn: true },
	{ name: "Banfino", setName: "Specialty Goggles", evs: { hp: 8, energy: 92, attack: 0, defense: 0, attackR: 200, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 0, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Tsunami", move2: "Nature's Force", move3: "Frost Beam", move4: "Baffle" }, posNature: "frail", negNature: "foolish", veryNature: "vNimble", ability: "Bully", item: "Specialty Goggles", level: 50, builtIn: true },
	{ name: "Banokey", setName: "Specialty Boots", evs: { hp: 16, energy: 76, attack: 200, defense: 0, attackR: 0, defenseR: 8, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Raging Tackle", move2: "Rogue Assault", move3: "Chase Down", move4: "Slap Down" }, posNature: "brawny", negNature: "nimble", veryNature: "vClumsy", ability: "Berserk", item: "Specialty Boots", level: 50, builtIn: true },
	{ name: "Banokey", setName: "Specialty Gloves", evs: { hp: 24, energy: 76, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Raging Tackle", move2: "Rogue Assault", move3: "Chase Down", move4: "Slap Down" }, posNature: "tender", negNature: "clumsy", veryNature: "vNimble", ability: "Berserk", item: "Specialty Gloves", level: 50, builtIn: true },
	{ name: "Banokey", setName: "Utility Monkey", evs: { hp: 56, energy: 44, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Rogue Assault", move2: "Preemptive Strike", move3: "Slap Down", move4: "Banana Split" }, posNature: "tender", negNature: "clumsy", veryNature: "vNimble", ability: "Assertive", item: "Clutch Plushie", level: 50, builtIn: true },
	{ name: "Barbadger", setName: "Specialty Boots", evs: { hp: 8, energy: 84, attack: 200, defense: 0, attackR: 0, defenseR: 8, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Ice Hammer", move2: "Rogue Assault", move3: "Mega Punch", move4: "Earthquake" }, posNature: "brawny", negNature: "nimble", veryNature: "vClumsy", ability: "Dauntless", item: "Specialty Boots", level: 50, builtIn: true },
	{ name: "Barbadger", setName: "Specialty Gloves", evs: { hp: 8, energy: 84, attack: 200, defense: 0, attackR: 0, defenseR: 8, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Ice Hammer", move2: "Rogue Assault", move3: "Mega Punch", move4: "Earthquake" }, posNature: "brawny", negNature: "nimble", veryNature: "vClumsy", ability: "Dauntless", item: "Specialty Gloves", level: 50, builtIn: true },
	{ name: "Barbadger", setName: "Brawn Boost", evs: { hp: 8, energy: 84, attack: 200, defense: 0, attackR: 0, defenseR: 8, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Ice Hammer", move2: "Rogue Assault", move3: "Earthquake", move4: "Brawn Boost" }, posNature: "brawny", negNature: "nimble", veryNature: "vClumsy", ability: "Dauntless", item: "Martial Shell", level: 50, builtIn: true },
	{ name: "Barblast", setName: "Toxic Spines", evs: { hp: 200, energy: 20, attack: 0, defense: 200, attackR: 0, defenseR: 80, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 3 }, moves: { move1: "Maroon", move2: "Toxiblast", move3: "Poison", move4: "Rejuvenate" }, posNature: "frail", negNature: "sluggish", veryNature: "vRobust", ability: "Toxic Spines", item: "Heavy Armor", level: 50, builtIn: true },
	{ name: "Barblast", setName: "High Explosive", evs: { hp: 200, energy: 20, attack: 0, defense: 0, attackR: 200, defenseR: 80, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 3 }, moves: { move1: "Water Bomb", move2: "Toxiblast", move3: "Power Focus", move4: "Rejuvenate" }, posNature: "frail", negNature: "sluggish", veryNature: "vSmart", ability: "High Explosive", item: "Power Cuffs", level: 50, builtIn: true },
	{ name: "Behemoroth", setName: "Specialty Boots", evs: { hp: 0, energy: 60, attack: 200, defense: 0, attackR: 0, defenseR: 40, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Earthquake", move2: "Timber Thrash", move3: "Primal Slash", move4: "Driving Force" }, posNature: "nimble", negNature: "none", veryNature: "none", ability: "Land-Borne", item: "Specialty Boots", level: 50, builtIn: true },
	{ name: "Behemoroth", setName: "Defensive Bulk Up", evs: { hp: 192, energy: 4, attack: 0, defense: 200, attackR: 0, defenseR: 8, speed: 96 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Earthquake", move2: "Timber Thrash", move3: "Bulk Up", move4: "Slumber" }, posNature: "robust", negNature: "none", veryNature: "none", ability: "Land-Borne", item: "Mysterious Dust", level: 50, builtIn: true },
	{ name: "Behemoroth", setName: "Offensive Bulk Up", evs: { hp: 0, energy: 60, attack: 200, defense: 0, attackR: 0, defenseR: 40, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Earthquake", move2: "Timber Thrash", move3: "Bulk Up", move4: "Slumber" }, posNature: "nimble", negNature: "none", veryNature: "none", ability: "Land-Borne", item: "Mysterious Dust", level: 50, builtIn: true },
	{ name: "Billoforge", setName: "Ranged Attacking Scorching Skin", evs: { hp: 200, energy: 28, attack: 0, defense: 200, attackR: 40, defenseR: 0, speed: 32 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Muck Blast", move2: "Fire Breath", move3: "Landslide", move4: "Metal Blast" }, posNature: "robust", negNature: "smart", veryNature: "vFrail", ability: "Scorching Skin", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Billoforge", setName: "Mixed Attacking Scorching Skin", evs: { hp: 200, energy: 28, attack: 0, defense: 200, attackR: 72, defenseR: 0, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 29 }, moves: { move1: "Muck Blast", move2: "Fire Breath", move3: "Earthquake", move4: "Metal Blast" }, posNature: "robust", negNature: "smart", veryNature: "vSluggish", ability: "Scorching Skin", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Biwarned", setName: "The Motivator", evs: { hp: 200, energy: 52, attack: 0, defense: 112, attackR: 0, defenseR: 136, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 2 }, moves: { move1: "Psycho Blast", move2: "Fade Away", move3: "Hypnotize", move4: "Conclusion" }, posNature: "robust", negNature: "clever", veryNature: "vSluggish", ability: "Motivational", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Bloatox", setName: "Bulk Up", evs: { hp: 40, energy: 60, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Wave Wrecker", move2: "Baneful Bash", move3: "Bulk Up", move4: "Rejuvenate" }, posNature: "brawny", negNature: "nimble", veryNature: "vClumsy", ability: "Sharp Edges", item: "Energy Orb", level: 50, builtIn: true },
	{ name: "Boarrok", setName: "Specialty Gloves", evs: { hp: 24, energy: 76, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Earthquake", move2: "Rogue Assault", move3: "Mega Chomp", move4: "Quick Pounce" }, posNature: "clumsy", negNature: "foolish", veryNature: "vBrawny", ability: "Boast", item: "Specialty Gloves", level: 50, builtIn: true },
	{ name: "Boonary", setName: "Specialty Boots", evs: { hp: 200, energy: 196, attack: 0, defense: 0, attackR: 0, defenseR: 0, speed: 104 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 39, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Startle", move2: "Stupefy", move3: "Emulate", move4: "(No Move)" }, posNature: "hyper", negNature: "none", veryNature: "none", ability: "Two Face", item: "Specialty Boots", level: 50, builtIn: true },
	{ name: "Bunnecki", setName: "Magnify", evs: { hp: 0, energy: 108, attack: 0, defense: 0, attackR: 192, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Nature's Force", move2: "Landslide", move3: "Pheroblast", move4: "Magnify" }, posNature: "frail", negNature: "tender", veryNature: "vNimble", ability: "Noxious Weeds", item: "Blossom Shell", level: 50, builtIn: true },
	{ name: "Buzzolen", setName: "Vigorous", evs: { hp: 40, energy: 60, attack: 200, defense: 0, attackR: 0, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Parasitize", move2: "Nosedive", move3: "Baneful Bash", move4: "Barter" }, posNature: "brawny", negNature: "nimble", veryNature: "vClumsy", ability: "Vigorous", item: "Volcanic Ash", level: 50, builtIn: true },
	{ name: "Cervolen", setName: "Specialty Gloves", evs: { hp: 0, energy: 100, attack: 200, defense: 0, attackR: 0, defenseR: 24, speed: 176 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Stampede", move2: "Ill Will", move3: "Quick Pounce", move4: "Mega Chomp" }, posNature: "tender", negNature: "clumsy", veryNature: "vBrawny", ability: "Boast", item: "Specialty Gloves", level: 50, builtIn: true },
	{ name: "Luminami", setName: "Melee Defensive Pivot", evs: { hp: 200, energy: 44, attack: 0, defense: 200, attackR: 0, defenseR: 56, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 0 }, moves: { move1: "Maroon", move2: "Flash 'n Flee", move3: "Frost Beam", move4: "Rejuvenate" }, posNature: "frail", negNature: "sluggish", veryNature: "vRobust", ability: "Power Napper", item: "Heavy Armor", level: 50, builtIn: true },
	{ name: "Luminami", setName: "Mixed Defensive Pivot", evs: { hp: 200, energy: 44, attack: 0, defense: 160, attackR: 0, defenseR: 96, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 0 }, moves: { move1: "Wave Wrecker", move2: "Flash 'n Flee", move3: "Frost Beam", move4: "Rejuvenate" }, posNature: "robust", negNature: "clever", veryNature: "vSluggish", ability: "Power Napper", item: "Heavy Armor", level: 50, builtIn: true },
	{ name: "Borealisk", setName: "Mixed Bulk Up", evs: { hp: 0, energy: 12, attack: 152, defense: 0, attackR: 136, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Icicle Tremor", move2: "Deep Freeze", move3: "Radiant Rush", move4: "Bulk Up" }, posNature: "tender", negNature: "foolish", veryNature: "vNimble", ability: "Upper Hand", item: "Ice Essence", level: 50, builtIn: true },
	{ name: "Cephalops", setName: "Specialty Goggles", evs: { hp: 0, energy: 60, attack: 0, defense: 32, attackR: 200, defenseR: 64, speed: 144 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Tsunami", move2: "Soul Drain", move3: "Frost Beam", move4: "Barter" }, posNature: "frail", negNature: "smart", veryNature: "none", ability: "Bloodsucker", item: "Specialty Goggles", level: 50, builtIn: true },
	{ name: "Cephalops", setName: "Rageful Plushie", evs: { hp: 0, energy: 60, attack: 0, defense: 112, attackR: 200, defenseR: 80, speed: 48 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Tsunami", move2: "Soul Drain", move3: "Frost Beam", move4: "Icicle Trap" }, posNature: "frail", negNature: "smart", veryNature: "none", ability: "Bloodsucker", item: "Rageful Plushie", level: 50, builtIn: true },
	{ name: "Charonyx", setName: "Defensive Fog Summon", evs: { hp: 200, energy: 52, attack: 0, defense: 48, attackR: 0, defenseR: 200, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 20 }, moves: { move1: "Fade Away", move2: "Flash 'n Flee", move3: "Frost Beam", move4: "Spite" }, posNature: "frail", negNature: "sluggish", veryNature: "vClever", ability: "Fog Summon", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Charonyx", setName: "Bulky Offensive Fog Summon", evs: { hp: 200, energy: 4, attack: 0, defense: 0, attackR: 200, defenseR: 96, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 6 }, moves: { move1: "Apparition", move2: "Flash 'n Flee", move3: "Frost Beam", move4: "Spite" }, posNature: "smart", negNature: "clever", veryNature: "vFrail", ability: "Fog Summon", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Charonyx", setName: "Magnify Reaper", evs: { hp: 200, energy: 4, attack: 0, defense: 80, attackR: 200, defenseR: 16, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 3 }, moves: { move1: "Phantom Blast", move2: "Nova Blast", move3: "Frost Beam", move4: "Magnify" }, posNature: "frail", negNature: "sluggish", veryNature: "vSmart", ability: "Reaper", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Luxoar", setName: "Peace of Mind", evs: { hp: 176, energy: 12, attack: 0, defense: 0, attackR: 112, defenseR: 0, speed: 200 }, ivs: { hp: 40, energy: 40, attack: 0, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Gloominous Roar", move2: "Fire Breath", move3: "Peace Of Mind", move4: "Scapegoat" }, posNature: "smart", negNature: "nimble", veryNature: "vFrail", ability: "Illuminate", item: "Health Amulet", level: 50, builtIn: true },
	{ name: "Celesting", setName: "Mystic Tone", evs: { hp: 200 , energy: 36, attack: 0, defense: 200, attackR: 0, defenseR: 64, speed: 0 }, ivs: { hp: 40, energy: 40, attack: 40, defense: 40, attackR: 40, defenseR: 40, speed: 40 }, moves: { move1: "Metal Blast", move2: "Flash 'n Flee", move3: "Barbs", move4: "Deja Vu" }, posNature: "robust", negNature: "none", veryNature: "none", ability: "Mystic Tone", item: "Health Amulet", level: 50, builtIn: true },

];
