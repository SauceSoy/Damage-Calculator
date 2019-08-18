const STAB = 1.25;

var pokeDropdown1 = document.getElementById("pokes1");
var pokeDropdown2 = document.getElementById("pokes2");

var abilityDropdown1 = document.getElementById("ability1");
var abilityDropdown2 = document.getElementById("ability2");

var moveOneDropdown1 = document.getElementById("moveOne1")
var moveOneDropdown2 = document.getElementById("moveOne2");
var moveTwoDropdown1 = document.getElementById("moveTwo1")
var moveTwoDropdown2 = document.getElementById("moveTwo2");
var moveThreeDropdown1 = document.getElementById("moveThree1")
var moveThreeDropdown2 = document.getElementById("moveThree2");
var moveFourDropdown1 = document.getElementById("moveFour1")
var moveFourDropdown2 = document.getElementById("moveFour2"); 

let moveOnePower1 = document.getElementById("moveOnePower1");
let moveTwoPower1 = document.getElementById("moveTwoPower1");
let moveThreePower1 = document.getElementById("moveThreePower1");
let moveFourPower1 = document.getElementById("moveFourPower1");
let moveOnePower2 = document.getElementById("moveOnePower2");
let moveTwoPower2 = document.getElementById("moveTwoPower2");
let moveThreePower2 = document.getElementById("moveThreePower2");
let moveFourPower2 = document.getElementById("moveFourPower2");

let moveOneType1 = document.getElementById("moveOneType1");
let moveTwoType1 = document.getElementById("moveTwoType1");
let moveThreeType1 = document.getElementById("moveThreeType1");
let moveFourType1 = document.getElementById("moveFourType1");
let moveOneType2 = document.getElementById("moveOneType2");
let moveTwoType2 = document.getElementById("moveTwoType2");
let moveThreeType2 = document.getElementById("moveThreeType2");
let moveFourType2 = document.getElementById("moveFourType2");

let moveOneMR1 = document.getElementById("moveOneMR1");
let moveTwoMR1 = document.getElementById("moveTwoMR1");
let moveThreeMR1 = document.getElementById("moveThreeMR1");
let moveFourMR1 = document.getElementById("moveFourMR1");
let moveOneMR2 = document.getElementById("moveOneMR2");
let moveTwoMR2 = document.getElementById("moveTwoMR2");
let moveThreeMR2 = document.getElementById("moveThreeMR2");
let moveFourMR2 = document.getElementById("moveFourMR2");

let moveOneLbl1 = document.getElementById("moveOneLbl1");
let moveTwoLbl1 = document.getElementById("moveTwoLbl1");
let moveThreeLbl1 = document.getElementById("moveThreeLbl1");
let moveFourLbl1 = document.getElementById("moveFourLbl1");
let moveOneDmg1 = document.getElementById("moveOneDmg1");
let moveTwoDmg1 = document.getElementById("moveTwoDmg1");
let moveThreeDmg1 = document.getElementById("moveThreeDmg1");
let moveFourDmg1 = document.getElementById("moveFourDmg1");

let moveOneLbl2 = document.getElementById("moveOneLbl2");
let moveTwoLbl2 = document.getElementById("moveTwoLbl2");
let moveThreeLbl2 = document.getElementById("moveThreeLbl2");
let moveFourLbl2 = document.getElementById("moveFourLbl2");
let moveOneDmg2 = document.getElementById("moveOneDmg2");
let moveTwoDmg2 = document.getElementById("moveTwoDmg2");
let moveThreeDmg2 = document.getElementById("moveThreeDmg2");
let moveFourDmg2 = document.getElementById("moveFourDmg2");

let moveOneCrit1 = document.getElementById("moveOneCrit1");
let moveTwoCrit1 = document.getElementById("moveTwoCrit1");
let moveThreeCrit1 = document.getElementById("moveThreeCrit1");
let moveFourCrit1 = document.getElementById("moveFourCrit1");
let moveOneCrit2 = document.getElementById("moveOneCrit2");
let moveTwoCrit2 = document.getElementById("moveTwoCrit2");
let moveThreeCrit2 = document.getElementById("moveThreeCrit2");
let moveFourCrit2 = document.getElementById("moveFourCrit2");


var baseHP1 = document.getElementById("baseHP1");
var baseHP2 = document.getElementById("baseHP2");
var baseAtk1 = document.getElementById("baseAtk1");
var baseAtk2 = document.getElementById("baseAtk2");
var baseDef1 = document.getElementById("baseDef1");
var baseDef2 = document.getElementById("baseDef2");
var baseAtkR1 = document.getElementById("baseAtkR1");
var baseAtkR2 = document.getElementById("baseAtkR2");
var baseDefR1 = document.getElementById("baseDefR1");
var baseDefR2 = document.getElementById("baseDefR2");
var baseSpd1 = document.getElementById("baseSpd1");
var baseSpd2 = document.getElementById("baseSpd2");

let hpEV1 = document.getElementById("HPEV1");
let hpIV1 = document.getElementById("HPIV1");
let atkEV1 = document.getElementById("atkEV1");
let atkIV1 = document.getElementById("atkIV1");
let defEV1 = document.getElementById("defEV1");
let defIV1 = document.getElementById("defIV1");
let atkREV1 = document.getElementById("atkREV1");
let atkRIV1 = document.getElementById("atkRIV1");
let defREV1 = document.getElementById("defREV1");
let defRIV1 = document.getElementById("defRIV1");
let spdEV1 = document.getElementById("spdEV1");
let spdIV1 = document.getElementById("spdIV1");

let hpEV2 = document.getElementById("HPEV2");
let hpIV2 = document.getElementById("HPIV2");
let atkEV2 = document.getElementById("atkEV2");
let atkIV2 = document.getElementById("atkIV2");
let defEV2 = document.getElementById("defEV2");
let defIV2 = document.getElementById("defIV2");
let atkREV2 = document.getElementById("atkREV2");
let atkRIV2 = document.getElementById("atkRIV2");
let defREV2 = document.getElementById("defREV2");
let defRIV2 = document.getElementById("defRIV2");
let spdEV2 = document.getElementById("spdEV2");
let spdIV2 = document.getElementById("spdIV2");

var statHP1 = document.getElementById("statHP1");
var statHP2 = document.getElementById("statHP2");
var statAtk1 = document.getElementById("statAtk1");
var statAtk2 = document.getElementById("statAtk2");
var statDef1 = document.getElementById("statDef1");
var statDef2 = document.getElementById("statDef2");
var statAtkR1 = document.getElementById("statAtkR1");
var statAtkR2 = document.getElementById("statAtkR2");
var statDefR1 = document.getElementById("statDefR1");
var statDefR2 = document.getElementById("statDefR2");
var statSpd1 = document.getElementById("statSpd1");
var statSpd2 = document.getElementById("statSpd2");

let atkStages1 = document.getElementById("atkStages1");
let defStages1 = document.getElementById("defStages1");
let atkRStages1 = document.getElementById("atkRStages1");
let defRStages1 = document.getElementById("defRStages1");
let spdStages1 = document.getElementById("spdStages1");

let atkStages2 = document.getElementById("atkStages2");
let defStages2 = document.getElementById("defStages2");
let atkRStages2 = document.getElementById("atkRStages2");
let defRStages2 = document.getElementById("defRStages2");
let spdStages2 = document.getElementById("spdStages2");

let level1 = document.getElementById("level1");
let level2 = document.getElementById("level2");

let iceTrap1 = document.getElementById("iceTrap1");
let iceTrap2 = document.getElementById("iceTrap2");

let enteredBtl1 = document.getElementById("enteredBtl1");
let enteredBtl2 = document.getElementById("enteredBtl2");

let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

let gender1 = document.getElementById("gender1");
let gender2 = document.getElementById("gender2");

let hp1;
let atk1;
let def1;
let atkR1;
let defR1;
let spd1;

let hp2;
let atk2;
let def2;
let atkR2;
let defR2;
let spd2;

function load() {
    loadDropdowns();
    update();

}


function loadDropdowns() {
    let pokeDropdown1 = document.getElementById("pokes1");
    let pokeDropdown2 = document.getElementById("pokes2");

    let abilityDropdown1 = document.getElementById("ability1");
    let abilityDropdown2 = document.getElementById("ability2");

    let moveOneDropdown1 = document.getElementById("moveOne1")
    let moveOneDropdown2 = document.getElementById("moveOne2");
    let moveTwoDropdown1 = document.getElementById("moveTwo1")
    let moveTwoDropdown2 = document.getElementById("moveTwo2");
    let moveThreeDropdown1 = document.getElementById("moveThree1")
    let moveThreeDropdown2 = document.getElementById("moveThree2");
    let moveFourDropdown1 = document.getElementById("moveFour1")
    let moveFourDropdown2 = document.getElementById("moveFour2");  

    let moveNames = [];
    for (var loom in loomians) {
        pokeDropdown1.options[pokeDropdown1.options.length] = new Option(loomians[loom].name);
        pokeDropdown2.options[pokeDropdown2.options.length] = new Option(loomians[loom].name);
    }

    abilities.sort();

    for (var ability in abilities) {
        abilityDropdown1.options[abilityDropdown1.options.length] = new Option(abilities[ability]);
        abilityDropdown2.options[abilityDropdown2.options.length] = new Option(abilities[ability]);
    }
    
    for (var move in moves) {
        moveNames.push(moves[move].name);
    }
    moveNames.sort();

    for (var move in moveNames) {
        moveOneDropdown1.options[moveOneDropdown1.options.length] = new Option(moveNames[move]);
        moveOneDropdown2.options[moveOneDropdown2.options.length] = new Option(moveNames[move]);
        moveTwoDropdown1.options[moveTwoDropdown1.options.length] = new Option(moveNames[move]);
        moveTwoDropdown2.options[moveTwoDropdown2.options.length] = new Option(moveNames[move]); 
        moveThreeDropdown1.options[moveThreeDropdown1.options.length] = new Option(moveNames[move]);
        moveThreeDropdown2.options[moveThreeDropdown2.options.length] = new Option(moveNames[move]);
        moveFourDropdown1.options[moveFourDropdown1.options.length] = new Option(moveNames[move]);
        moveFourDropdown2.options[moveFourDropdown2.options.length] = new Option(moveNames[move]);                             
    }
    
}

function update() {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    document.getElementById("type1").innerHTML = firstLoom.types[0] + (firstLoom.types[1] != undefined ? "/" + firstLoom.types[1] : "");
    document.getElementById("type2").innerHTML = secondLoom.types[0] + (secondLoom.types[1] != undefined ? "/" + secondLoom.types[1] : "");

    loadBaseStats();
    loadStats();
    loadMoves();

}

function loadBaseStats() {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    
    baseHP1.value = firstLoom.baseStats.hp;
    baseHP2.value = secondLoom.baseStats.hp;
    baseAtk1.value = firstLoom.baseStats.attack;
    baseAtk2.value = secondLoom.baseStats.attack;
    baseDef1.value = firstLoom.baseStats.defense;
    baseDef2.value = secondLoom.baseStats.defense;
    baseAtkR1.value = firstLoom.baseStats.attackR;
    baseAtkR2.value = secondLoom.baseStats.attackR;
    baseDefR1.value = firstLoom.baseStats.defenseR;
    baseDefR2.value = secondLoom.baseStats.defenseR;
    baseSpd1.value = firstLoom.baseStats.speed;
    baseSpd2.value = secondLoom.baseStats.speed;
}

function loadMoves() { 
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);    

    moveOnePower1.value = moveOne1.power;
    moveTwoPower1.value = moveTwo1.power;
    moveThreePower1.value = moveThree1.power;
    moveFourPower1.value = moveFour1.power;
    moveOnePower2.value = moveOne2.power;
    moveTwoPower2.value = moveTwo2.power;
    moveThreePower2.value = moveThree2.power;
    moveFourPower2.value = moveFour2.power;

    moveOneType1.value = moveOne1.type;
    moveTwoType1.value = moveTwo1.type;
    moveThreeType1.value = moveThree1.type;
    moveFourType1.value = moveFour1.type;
    moveOneType2.value = moveOne2.type;
    moveTwoType2.value = moveTwo2.type;
    moveThreeType2.value = moveThree2.type;
    moveFourType2.value = moveFour2.type;
    
    moveOneMR1.value = moveOne1.mr;
    moveTwoMR1.value = moveTwo1.mr;
    moveThreeMR1.value = moveThree1.mr;
    moveFourMR1.value = moveFour1.mr;
    moveOneMR2.value = moveOne2.mr;
    moveTwoMR2.value = moveTwo2.mr;
    moveThreeMR2.value = moveThree2.mr;
    moveFourMR2.value = moveFour2.mr;
    
    moveOneLbl1.innerHTML = moveOne1.name;
    moveTwoLbl1.innerHTML = moveTwo1.name;
    moveThreeLbl1.innerHTML = moveThree1.name;
    moveFourLbl1.innerHTML = moveFour1.name;
    moveOneLbl2.innerHTML = moveOne2.name;
    moveTwoLbl2.innerHTML = moveTwo2.name;
    moveThreeLbl2.innerHTML = moveThree2.name;
    moveFourLbl2.innerHTML = moveFour2.name;  
    
    calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2);
}

function loadStats() {
    let posNat1 = document.getElementById("posNat1").value;
    let negNat1 = document.getElementById("negNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    let negNat2 = document.getElementById("negNat2").value;

    hp1 = calculateStat(baseHP1.value, hpIV1.value, hpEV1.value, level1.value, true);
    atk1 = calculateStat(baseAtk1.value, atkIV1.value, atkEV1.value, level1.value);
    def1 = calculateStat(baseDef1.value, defIV1.value, defEV1.value, level1.value);
    atkR1 = calculateStat(baseAtkR1.value, atkRIV1.value, atkREV1.value, level1.value);
    defR1 = calculateStat(baseDefR1.value, defRIV1.value, defREV1.value, level1.value);
    spd1 = calculateStat(baseSpd1.value, spdIV1.value, spdEV1.value, level1.value);

    hp2 = calculateStat(baseHP2.value, hpIV2.value, hpEV2.value, level2.value, true);
    atk2 = calculateStat(baseAtk2.value, atkIV2.value, atkEV2.value, level2.value);
    def2 = calculateStat(baseDef2.value, defIV2.value, defEV2.value, level2.value);
    atkR2 = calculateStat(baseAtkR2.value, atkRIV2.value, atkREV2.value, level2.value);
    defR2 = calculateStat(baseDefR2.value, defRIV2.value, defREV2.value, level2.value);
    spd2 = calculateStat(baseSpd2.value, spdIV2.value, spdEV2.value, level2.value);

    switch(posNat1) {
        case "brawny":
          atk1 = Math.floor(atk1 * 1.1);
        break;
      case "robust":
          def1 = Math.floor(def1 * 1.1);
        break;
      case "smart":
          atkR1 = Math.floor(atkR1 * 1.1);
        break;
      case "clever":
          defR1 = Math.floor(defR1 * 1.1);
              break;
      case "nimble":
          spd1 = Math.floor(spd1 * 1.1);
        break;
      default:
          break;
    }    
    switch(negNat1) {
      case "frail":
          atk1 = Math.floor(atk1 * 0.9);
        break;
      case "tender":
          def1 = Math.floor(def1 * 0.9);
        break;
      case "clumsy":
          atkR1 = Math.floor(atkR1 * 0.9);
        break;
      case "foolish":
          defR1 = Math.floor(defR1 * 0.9);
        break;
      case "sluggish":
          spd1 = Math.floor(spd1 * 0.9);
        break;
      default:
          break;
    }   

    switch(posNat2) {
        case "brawny":
          atk2 = Math.floor(atk2 * 1.1);
        break;
      case "robust":
          def2 = Math.floor(def2 * 1.1);
        break;
      case "smart":
          atkR2 = Math.floor(atkR2 * 1.1);
        break;
      case "clever":
          defR2 = Math.floor(defR2 * 1.1);
              break;
      case "nimble":
          spd2 = Math.floor(spd2 * 1.1);
        break;
      default:
          break;
    }    
    switch(negNat2) {
      case "frail":
          atk2 = Math.floor(atk2 * 0.9);
        break;
      case "tender":
          def2 = Math.floor(def2 * 0.9);
        break;
      case "clumsy":
          atkR2 = Math.floor(atkR2 * 0.9);
        break;
      case "foolish":
          defR2 = Math.floor(defR2 * 0.9);
        break;
      case "sluggish":
          spd2 = Math.floor(spd2 * 0.9);
        break;
      default:
          break;
    }
            
    checkStages();

    statHP1.innerHTML = hp1;
    statAtk1.innerHTML = atk1;
    statDef1.innerHTML = def1;
    statAtkR1.innerHTML = atkR1;
    statDefR1.innerHTML = defR1;
    statSpd1.innerHTML = spd1;

    statHP2.innerHTML = hp2;
    statAtk2.innerHTML = atk2;
    statDef2.innerHTML = def2;
    statAtkR2.innerHTML = atkR2;
    statDefR2.innerHTML = defR2;
    statSpd2.innerHTML = spd2;    

}
function calculateStat(base, IV, EV, level, isHP = false) {
    IV = parseInt(IV);
    level = parseInt(level);
	if(isHP) {
  	    return Math.floor((2 * base + IV + Math.floor(EV/4)) * level/100) + level + 10
    }
    return Math.floor(Math.floor((2 * base + IV + Math.floor(EV/4)) * level/100 + 5))     
}


function checkStages() {
    if (atkStages1.value != "--" && parseInt(atkStages1.value) > 0) {
        atk1 = Math.floor(atk1 * (1 + 0.5 * parseInt(atkStages1.value)));
    }
    else if (atkStages1.value != "--" && parseInt(atkStages1.value) < 0) {
        atk1 = Math.floor(atk1 * (2 / (2 - parseInt(atkStages1.value))));
    }

    if (defStages1.value != "--" && parseInt(defStages1.value) > 0) {
        def1 = Math.floor(def1 * (1 + 0.5 * parseInt(defStages1.value)));
    }
    else if (defStages1.value != "--" && parseInt(defStages1.value) < 0) {
        def1 = Math.floor(def1 * (2 / (2 - parseInt(defStages1.value))));
    }

    if (atkRStages1.value != "--" && parseInt(atkRStages1.value) > 0) {
        atkR1 = Math.floor(atkR1 * (1 + 0.5 * parseInt(atkRStages1.value)));
    }
    else if (atkRStages1.value != "--" && parseInt(atkRStages1.value) < 0) {
        atkR1 = Math.floor(atkR1 * (2 / (2 - parseInt(atkRStages1.value))));
    }

    if (defRStages1.value != "--" && parseInt(defRStages1.value) > 0) {
        defR1 = Math.floor(defR1 * (1 + 0.5 * parseInt(defRStages1.value)));
    }
    else if (defRStages1.value != "--" && parseInt(defRStages1.value) < 0) {
        defR1 = Math.floor(defR1 * (2 / (2 - parseInt(defRStages1.value))));
    }

    if (spdStages1.value != "--" && parseInt(spdStages1.value) > 0) {
        spd1 = Math.floor(spd1 * (1 + 0.5 * parseInt(spdStages1.value)));
    }
    else if (spdStages1.value != "--" && parseInt(spdStages1.value) < 0) {
        spd1 = Math.floor(spd1 * (2 / (2 - parseInt(spdStages1.value))));
    }    

    if (atkStages2.value != "--" && parseInt(atkStages2.value) > 0) {
        atk2 = Math.floor(atk2 * (1 + 0.5 * parseInt(atkStages2.value)));
    }
    else if (atkStages2.value != "--" && parseInt(atkStages2.value) < 0) {
        atk2 = Math.floor(atk2 * (2 / (2 - parseInt(atkStages2.value))));
    }

    if (defStages2.value != "--" && parseInt(defStages2.value) > 0) {
        def2 = Math.floor(def2 * (1 + 0.5 * parseInt(defStages2.value)));
    }
    else if (defStages2.value != "--" && parseInt(defStages2.value) < 0) {
        def2 = Math.floor(def2 * (2 / (2 - parseInt(defStages2.value))));
    }

    if (atkRStages2.value != "--" && parseInt(atkRStages2.value) > 0) {
        atkR2 = Math.floor(atkR2 * (1 + 0.5 * parseInt(atkRStages2.value)));
    }
    else if (atkRStages2.value != "--" && parseInt(atkRStages2.value) < 0) {
        atkR2 = Math.floor(atkR2 * (2 / (2 - parseInt(atkRStages2.value))));
    }

    if (defRStages2.value != "--" && parseInt(defRStages2.value) > 0) {
        defR2 = Math.floor(defR2 * (1 + 0.5 * parseInt(defRStages2.value)));
    }
    else if (defRStages2.value != "--" && parseInt(defRStages2.value) < 0) {
        defR2 = Math.floor(defR2 * (2 / (2 - parseInt(defRStages2.value))));
    }

    if (spdStages2.value != "--" && parseInt(spdStages2.value) > 0) {
        spd2 = Math.floor(spd2 * (1 + 0.5 * parseInt(spdStages2.value)));
    }
    else if (spdStages2.value != "--" && parseInt(spdStages2.value) < 0) {
        spd2 = Math.floor(spd2 * (2 / (2 - parseInt(spdStages2.value))));
    }
    
}


function calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    let critOne1 = moveOneCrit1.checked;
    let critTwo1 = moveTwoCrit1.checked;
    let critThree1 = moveThreeCrit1.checked;
    let critFour1 = moveFourCrit1.checked;

    let critOne2 = moveOneCrit2.checked;
    let critTwo2 = moveTwoCrit2.checked;
    let critThree2 = moveThreeCrit2.checked;
    let critFour2 = moveFourCrit2.checked;
    
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    let ice1 = iceTrap1.checked;
    let ice2 = iceTrap2.checked;

    let btl1 = enteredBtl1.checked;
    let btl2 = enteredBtl2.checked;

    let stat1 = status1.value;
    let stat2 = status2.value;

    let dmgMoveOneU1 = getMultiplier(firstLoom, secondLoom, moveOne1, critOne1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveOne1.power * (moveOne1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2);
    let dmgMoveOneL1 = getMultiplier(firstLoom, secondLoom, moveOne1, critOne1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveOne1.power * (moveOne1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2, true);    
    let dmgMoveOnePercent1 = (dmgMoveOneL1/hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU1/hp2 * 100).toFixed(1).toString() + "%";

    moveOneDmg1.innerHTML = dmgMoveOnePercent1 + checkIceTrap(secondLoom, ice2, dmgMoveOneL1, dmgMoveOneU1, hp2, moveOne1);

    let dmgMoveTwoU1 = getMultiplier(firstLoom, secondLoom, moveTwo1, critTwo1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveTwo1.power * (moveTwo1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2);
    let dmgMoveTwoL1 = getMultiplier(firstLoom, secondLoom, moveTwo1, critTwo1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveTwo1.power * (moveTwo1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2, true);      
    let dmgMoveTwoPercent1 = (dmgMoveTwoL1/hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU1/hp2 * 100).toFixed(1).toString() + "%";

    moveTwoDmg1.innerHTML = dmgMoveTwoPercent1 + checkIceTrap(secondLoom, ice2, dmgMoveTwoL1, dmgMoveTwoU1, hp2, moveTwo1);

    let dmgMoveThreeU1 = getMultiplier(firstLoom, secondLoom, moveThree1, critThree1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveThree1.power * (moveThree1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2);
    let dmgMoveThreeL1 = getMultiplier(firstLoom, secondLoom, moveThree1, critThree1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveThree1.power * (moveThree1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2, true);      
    let dmgMoveThreePercent1 = (dmgMoveThreeL1/hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU1/hp2 * 100).toFixed(1).toString() + "%";

    moveThreeDmg1.innerHTML = dmgMoveThreePercent1 + checkIceTrap(secondLoom, ice2, dmgMoveThreeL1, dmgMoveThreeU1, hp2, moveThree1);

    let dmgMoveFourU1 = getMultiplier(firstLoom, secondLoom, moveFour1, critFour1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveFour1.power * (moveFour1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2);
    let dmgMoveFourL1 = getMultiplier(firstLoom, secondLoom, moveFour1, critFour1, stat1, stat2, ability1, ability2, btl2, Math.floor((Math.floor(2 * level1.value/5) + 2) * moveFour1.power * (moveFour1.mr == "Ranged" ? atkR1/defR2 : atk1/def2)/50) + 2, true);       
    let dmgMoveFourPercent1 = (dmgMoveFourL1/hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU1/hp2 * 100).toFixed(1).toString() + "%";

    moveFourDmg1.innerHTML = dmgMoveFourPercent1 + checkIceTrap(secondLoom, ice2, dmgMoveFourL1, dmgMoveFourU1, hp2, moveFour1);

    //----------------------------------------------------------

    let dmgMoveOneU2 = getMultiplier(secondLoom, firstLoom, moveOne2, critOne2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveOne2.power * (moveOne2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2);
    let dmgMoveOneL2 = getMultiplier(secondLoom, firstLoom, moveOne2, critOne2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveOne2.power * (moveOne2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2, true);    
    let dmgMoveOnePercent2 = (dmgMoveOneL2/hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU2/hp1 * 100).toFixed(1).toString() + "%";

    moveOneDmg2.innerHTML = dmgMoveOnePercent2 + checkIceTrap(firstLoom, ice1, dmgMoveOneL2, dmgMoveOneU2, hp1, moveOne2);

    let dmgMoveTwoU2 = getMultiplier(secondLoom, firstLoom, moveTwo2, critTwo2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveTwo2.power * (moveTwo2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2);
    let dmgMoveTwoL2 = getMultiplier(secondLoom, firstLoom, moveTwo2, critTwo2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveTwo2.power * (moveTwo2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2, true);   
    let dmgMoveTwoPercent2 = (dmgMoveTwoL2/hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU2/hp1 * 100).toFixed(1).toString() + "%";

    moveTwoDmg2.innerHTML = dmgMoveTwoPercent2 + checkIceTrap(firstLoom, ice1, dmgMoveTwoL2, dmgMoveTwoU2, hp1, moveTwo2);

    let dmgMoveThreeU2 = getMultiplier(secondLoom, firstLoom, moveThree2, critThree2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveThree2.power * (moveThree2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2);
    let dmgMoveThreeL2 = getMultiplier(secondLoom, firstLoom, moveThree2, critThree2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveThree2.power * (moveThree2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2, true);      
    let dmgMoveThreePercent2 = (dmgMoveThreeL2/hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU2/hp1 * 100).toFixed(1).toString() + "%";

    moveThreeDmg2.innerHTML = dmgMoveThreePercent2 + checkIceTrap(firstLoom, ice1, dmgMoveThreeL2, dmgMoveThreeU2, hp1, moveThree2);

    let dmgMoveFourU2 = getMultiplier(secondLoom, firstLoom, moveFour2, critFour2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveFour2.power * (moveFour2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2);
    let dmgMoveFourL2 = getMultiplier(secondLoom, firstLoom, moveFour2, critFour2, stat2, stat1, ability2, ability1, btl1, Math.floor((Math.floor(2 * level2.value/5) + 2) * moveFour2.power * (moveFour2.mr == "Ranged" ? atkR2/defR1 : atk2/def1)/50) + 2, true);   

    let dmgMoveFourPercent2 = (dmgMoveFourL2/hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU2/hp1 * 100).toFixed(1).toString() + "%";

    moveFourDmg2.innerHTML = dmgMoveFourPercent2 + checkIceTrap(firstLoom, ice1, dmgMoveFourL2, dmgMoveFourU2, hp1, moveFour2);      
}

function isStab(loom, move) {
    if (loom.types.includes(move.type)) {
        return true;
    }
    return false;
}

function getMultiplier(loom1, loom2, move, crit, status1, status2, ability1, ability2, btl, dmg, ul = false) {
    let multi = 1;
    let tempType = move.type;
    let gen1 = gender1.value;
    let gen2 = gender2.value;
    
    //Crit and Random -----------------------------

    if (crit) {
        multi *= 1.5;
    }

    if (ul) {
        multi *= 0.85;;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //STAB ---------------------------------

    if (isStab(loom1, move) && ability1 == "Awakening") {
        multi *= 1.5;
    }
    else if (ability1 == "Neutralize" && loom1.types.includes("Typeless")) {
        tempType = "Typeless";
        multi *= 1.5;
    }
    else if (ability1 == "Neutralize") {
        tempType = "Typeless";
        multi *= 1.2;
    }
    else if (ability1 == "Overshadow" && tempType == "Typeless" && loom1.types.includes("Dark")) {
        tempType = "Dark";
        multi *= 1.5;
    }
    else if (ability1 == "Overshadow" && tempType == "Typeless") {
        tempType = "Dark";
        multi *= 1.2;
    }
    else if (isStab(loom1, move)) {
        multi *= 1.25;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Type -------------------------------

    if ((ability2 == "Coursing Venom" && tempType == "Toxic") || (ability2 == "Lightning Rod" && tempType == "Electric") || (ability2 == "Prismatic" && tempType == "Light") || (ability2 == "Woodsman" && tempType == "Plant")) {
        multi *= 0;
    }
    
    if (types[loom2.types[0].toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        multi *= 2;
    }
    if (loom2.types[1] != undefined && types[loom2.types[1].toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        multi *= 2;
    }
    if (types[loom2.types[0].toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if (loom2.types[1] != undefined && types[loom2.types[1].toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if (types[loom2.types[0].toLowerCase()].immunities.includes(tempType.toLowerCase())) {
        multi *= 0;
    }
    if (loom2.types[1] != undefined && types[loom2.types[1].toLowerCase()].immunities.includes(tempType.toLowerCase())) {
        multi *= 0;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Status ------------------------

    if (status1 == "burned" && move.mr == "Melee") {
        multi *= 0.5;
    }

    if (status2 == "asleep" && ability1 == "Mean Spirited") {
        multi *= 1.5;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Other --------------------------------

    if (ability1 == "Ambush" && btl) {
        multi *= 2;
    }

    if (gen1 == gen2 && ability1 == "Territorial") {
        multi *= 1.25;
    }
    else if (gen1 != gen2 && ability1 == "Territorial"){
        multi *= 0.75;
    }

    if (ability1 == "Hasty" && move.mr == "Melee") {
        multi *= 1.5;
    }

    dmg = Math.floor(dmg * multi);

    return dmg;
}

function checkIceTrap(loom, ice, lower, upper, hp, move) {
    if (!ice && move.hits == undefined) {
        return "";
    }
    else if (!ice) {
        return " per hit"
    }

    let addedDmg = 12.5;

    if (types[loom.types[0].toLowerCase()].weaknesses.includes("ice")) {
        addedDmg *= 2;
    }
    if (loom.types[1] != undefined && types[loom.types[1].toLowerCase()].weaknesses.includes("ice")) {
        addedDmg *= 2;
    }
    if (types[loom.types[0].toLowerCase()].resistances.includes("ice")) {
        addedDmg *= 0.5
    }
    if (loom.types[1] != undefined && types[loom.types[1].toLowerCase()].resistances.includes("ice")) {
        addedDmg *= 0.5;
    }    

    let extra = "";

    if (move.hits != undefined) {
        extra = "% per hit"
    }
    
    return " (" + (lower/hp * 100 + addedDmg).toFixed(1).toString() + " - " + (upper/hp * 100 + addedDmg).toFixed(1).toString() + extra + " with icicle trap)";
}

function findMove(name) {
    for (let move in moves) {
        if (moves[move].name == name) {
            return moves[move];
        }
    }
}