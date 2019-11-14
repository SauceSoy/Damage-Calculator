var builtInSets = [
    {
        name: "Searknight",
        setName: "Wallbreaker",
        evs: {
            hp: 132,
            energy: 0,
            attack: 200,
            defense: 0,
            attackR: 0,
            defenseR: 0,
            speed: 168
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
            move1: "Searing Steel",
            move2: "Flaming Kick",
            move3: "Power Focus",
            move4: "Fire Slam"
        },
        posNature: "brawny",
        negNature: "none",
        ability: "Awakening",
        item: "Power Cuffs",
        level: 50
    },

    {
        name: "Luminami",
        setName: "Stall",
        evs: {
            hp: 200,
            energy: 0,
            attack: 0,
            defense: 200,
            attackR: 0,
            defenseR: 100,
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
            move1: "Maroon",
            move2: "Flash Pulse",
            move3: "Soft Water",
            move4: "Dodge"
        },
        posNature: "robust",
        negNature: "none",
        ability: "Awakening",
        item: "Health Amulet",
        level: 50
    },

    {
        name: "Tahtab",
        setName: "Wallbreaker",
        evs: {
            hp: 0,
            energy: 0,
            attack: 200,
            defense: 0,
            attackR: 196,
            defenseR: 0,
            speed: 104
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
            move1: "Junglejutsu",
            move2: "Nature's Force",
            move3: "Life Drain",
            move4: "Dodge"
        },
        posNature: "brawny",
        negNature: "none",
        ability: "Awakening",
        item: "Power Cuffs",
        level: 50
    },

    {
        name: "Falkyrie",
        setName: "Wallbreaker",
        evs: {
            hp: 60,
            energy: 0,
            attack: 0,
            defense: 0,
            attackR: 200,
            defenseR: 64,
            speed: 176
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
            move1: "Gamma Pulse",
            move2: "Holy Slash",
            move3: "Power Focus",
            move4: "Cyclone Slam"
        },
        posNature: "smart",
        negNature: "none",
        ability: "Awakening",
        item: "Heavy Shield",
        level: 50
    },

    {
        name: "Vesperatu",
        setName: "Defensive",
        evs: {
            hp: 200,
            energy: 0,
            attack: 0,
            defense: 200,
            attackR: 0,
            defenseR: 80,
            speed: 16
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
            move1: "Dive Bomb",
            move2: "Shadow Sprint",
            move3: "Blood Drain",
            move4: "Revival"
        },
        posNature: "robust",
        negNature: "none",
        ability: "Awakening",
        item: "Health Amulet",
        level: 50
    },

    {
        name: "Himbrr",
        setName: "Icicle Trapper",
        evs: {
            hp: 200,
            energy: 0,
            attack: 100,
            defense: 0,
            attackR: 0,
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
            move1: "Icicle Trap",
            move2: "Yeti's Wrath",
            move3: "Winter's Fury",
            move4: "Quick Punch"
        },
        posNature: "clever",
        negNature: "none",
        ability: "Awakening",
        item: "Health Amulet",
        level: 50
    },

    {
        name: "Zuelong",
        setName: "Pivot",
        evs: {
            hp: 100,
            energy: 0,
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
            move1: "Ancient Roar",
            move2: "Thunderstrike",
            move3: "Elemental Burst",
            move4: "Thunder Slam"
        },
        posNature: "nimble",
        negNature: "none",
        ability: "Awakening",
        item: "None",
        level: 50
    },

    {
        name: "Umbrat",
        setName: "Wallbreaker",
        evs: {
            hp: 100,
            energy: 0,
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
            move1: "Raging Tackle",
            move2: "Gloom Fangs",
            move3: "Quick Pounce",
            move4: "Sharpen"
        },
        posNature: "brawny",
        negNature: "none",
        ability: "Overshadow",
        item: "Dark Essence",
        level: 50
    },

    {
        name: "Luxoar",
        setName: "Wallbreaker",
        evs: {
            hp: 100,
            energy: 0,
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
            move2: "Luminous Roar",
            move3: "Scapegoat",
            move4: "Disperse"
        },
        posNature: "nimble",
        negNature: "none",
        ability: "Illuminate",
        item: "Light Essence",
        level: 50
    },

    {
        name: "Avitross",
        setName: "Nosedive",
        evs: {
            hp: 196,
            energy: 0,
            attack: 200,
            defense: 104,
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
            move1: "Nosedive",
            move2: "Gust",
            move3: "Perch",
            move4: "Dodge"
        },
        posNature: "brawny",
        negNature: "none",
        ability: "None",
        item: "Air Essence",
        level: 50
    },

    {
        name: "Obsidrugon",
        setName: "R Defensive",
        evs: {
            hp: 200,
            energy: 0,
            attack: 0,
            defense: 124,
            attackR: 0,
            defenseR: 176,
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
            move1: "Primal Slash",
            move2: "Power Focus",
            move3: "Scapegoat",
            move4: "Beast's Slumber"
        },
        posNature: "clever",
        negNature: "none",
        ability: "None",
        item: "Health Amulet",
        level: 50
    },

    {
        name: "Duskit",
        setName: "Peace of Mind",
        evs: {
            hp: 100,
            energy: 0,
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
            move1: "Spectral Burst",
            move2: "Brainwash",
            move3: "Peace Of Mind",
            move4: "Final Ruse"
        },
        posNature: "nimble",
        negNature: "none",
        ability: "None",
        item: "Power Cuffs",
        level: 50
    },

    {
        name: "Ikazune",
        setName: "Wallbreaker",
        evs: {
            hp: 24,
            energy: 64,
            attack: 0,
            defense: 64,
            attackR: 200,
            defenseR: 0,
            speed: 144
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
            move1: "Fire Breath",
            move2: "Electroburst",
            move3: "Power Focus",
            move4: "Dodge"
        },
        posNature: "nimble",
        negNature: "none",
        ability: "Raging Fire",
        item: "Power Cuffs",
        level: 50
    }
];