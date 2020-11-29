const STAB = 1.25;

var pokeDropdown1 = document.getElementById("pokes1");
var pokeDropdown2 = document.getElementById("pokes2");

var primaryTypeDropdown1 = document.getElementById("primaryType1");
var secondaryTypeDropdown1 = document.getElementById("secondaryType1");

var primaryTypeDropdown2 = document.getElementById("primaryType2");
var secondaryTypeDropdown2 = document.getElementById("secondaryType2");

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

let baseHP1 = document.getElementById("baseHP1");
let baseHP2 = document.getElementById("baseHP2");
let baseEnergy1 = document.getElementById("baseEnergy1");
let baseEnergy2 = document.getElementById("baseEnergy2");
let baseAtk1 = document.getElementById("baseAtk1");
let baseAtk2 = document.getElementById("baseAtk2");
let baseDef1 = document.getElementById("baseDef1");
let baseDef2 = document.getElementById("baseDef2");
let baseAtkR1 = document.getElementById("baseAtkR1");
let baseAtkR2 = document.getElementById("baseAtkR2");
let baseDefR1 = document.getElementById("baseDefR1");
let baseDefR2 = document.getElementById("baseDefR2");
let baseSpd1 = document.getElementById("baseSpd1");
let baseSpd2 = document.getElementById("baseSpd2");

let hpEV1 = document.getElementById("HPEV1");
let hpIV1 = document.getElementById("HPIV1");
let energyEV1 = document.getElementById("energyEV1");
let energyIV1 = document.getElementById("energyIV1");
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
let energyEV2 = document.getElementById("energyEV2");
let energyIV2 = document.getElementById("energyIV2");
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

let statHP1 = document.getElementById("statHP1");
let statHP2 = document.getElementById("statHP2");
let statEnergy1 = document.getElementById("statEnergy1");
let statEnergy2 = document.getElementById("statEnergy2");
let statAtk1 = document.getElementById("statAtk1");
let statAtk2 = document.getElementById("statAtk2");
let statDef1 = document.getElementById("statDef1");
let statDef2 = document.getElementById("statDef2");
let statAtkR1 = document.getElementById("statAtkR1");
let statAtkR2 = document.getElementById("statAtkR2");
let statDefR1 = document.getElementById("statDefR1");
let statDefR2 = document.getElementById("statDefR2");
let statSpd1 = document.getElementById("statSpd1");
let statSpd2 = document.getElementById("statSpd2");

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

let immuneAbilityBoost1 = document.getElementById("immuneBoost1");
let immuneAbilityBoost2 = document.getElementById("immuneBoost2");

let iceTrap1 = document.getElementById("iceTrap1");
let iceTrap2 = document.getElementById("iceTrap2");

let enteredBtl1 = document.getElementById("enteredBtl1");
let enteredBtl2 = document.getElementById("enteredBtl2");

let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

let gender1 = document.getElementById("gender1");
let gender2 = document.getElementById("gender2");

let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");

let sapPlant1 = document.getElementById("sapPlant1");
let sapPlant2 = document.getElementById("sapPlant2");

let pestilence1 = document.getElementById("pestilence1");
let pestilence2 = document.getElementById("pestilence2");

let quicksand1 = document.getElementById("quicksand1");
let quicksand2 = document.getElementById("quicksand2");

let bloodDrain1 = document.getElementById("bloodDrain1");
let bloodDrain2 = document.getElementById("bloodDrain2");

let dusk1 = document.getElementById("dusk1");
let dusk2 = document.getElementById("dusk2");

let dawn1 = document.getElementById("dawn1");
let dawn2 = document.getElementById("dawn2");

let currentHP1 = document.getElementById("currentHP1");
let currentHP2 = document.getElementById("currentHP2");

let totalHP1 = document.getElementById("totalHP1");
let totalHP2 = document.getElementById("totalHP2");

let percentHP1 = document.getElementById("percentHP1");
let percentHP2 = document.getElementById("percentHP2");

let singleDouble = document.getElementById("singleDouble");

let hp1;
let energy1;
let atk1;
let def1;
let atkR1;
let defR1;
let spd1;

let hp2;
let energy2;
let atk2;
let def2;
let atkR2;
let defR2;
let spd2;

let darkMode = document.getElementById("darkMode");
$(document).ready(load);

//WORK IN PROGRESS ----------------------------------------------
function toggleDarkMode() {
    if (darkMode.checked) {
        document.body.style.backgroundColor = "#222222";
        document.body.style.color = "white";
        let allFieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < allFieldsets.length; i++) {
            allFieldsets[i].style.backgroundColor = "#424242";
        }

        let allInputs = document.querySelectorAll("input");
        for (let j = 0; j < allInputs.length; j++) {
            allInputs[j].style.backgroundColor = "#757575";
            allInputs[j].style.color = "white";
            allInputs[j].style.border = "1px solid #AAAAAA";
        }

        let allSelects = document.querySelectorAll("select");
        for (let k = 0; k < allSelects.length; k++) {
            allSelects[k].style.backgroundColor = "#545454";
            allSelects[k].style.color = "white";
        }

        let allSelect2s = document.getElementsByClassName("pokeselect");
        for (let l = 0; l < allSelect2s.length; l++) {
            allSelect2s[l].style.color = "black";
        }

        let radioLabels = document.getElementsByClassName("radioLbl");
        let resultLabels = document.getElementsByClassName("resultLbl");
        for (let p = 0; p < radioLabels.length; p++) {
            radioLabels[p].style.backgroundColor = "#545454";
            radioLabels[p].style.color = "white";
        }
        for (let q = 0; q < resultLabels.length; q++) {
            resultLabels[q].style.backgroundColor = "#545454";
            resultLabels[q].style.color = "white";
            resultLabels[q].style.border = "1px solid #AAAAAA";
        }
    }
    else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        let allFieldsets = document.querySelectorAll("fieldset");
        for (let i = 0; i < allFieldsets.length; i++) {
            allFieldsets[i].style.backgroundColor = "#f1f4f9";
        }

        let allInputs = document.querySelectorAll("input");
        for (let j = 0; j < allInputs.length; j++) {
            allInputs[j].style.backgroundColor = "white";
            allInputs[j].style.color = "black";
            allInputs[j].style.borderStyle = "inset";
            allInputs[j].style.borderColor = "initial";
            allInputs[j].style.borderWidth = "2px";
        }

        let allSelects = document.querySelectorAll("select");
        for (let k = 0; k < allSelects.length; k++) {
            allSelects[k].style.backgroundColor = "white";
            allSelects[k].style.color = "black";
        }

        let allSelect2s = document.getElementsByClassName("pokeselect");
        for (let l = 0; l < allSelect2s.length; l++) {
            allSelect2s[l].style.color = "black";
        }

        let radioLabels = document.getElementsByClassName("radioLbl");
        let resultLabels = document.getElementsByClassName("resultLbl");
        for (let p = 0; p < radioLabels.length; p++) {
            radioLabels[p].style.backgroundColor = "#e9e9e9";
            radioLabels[p].style.color = "#555555";
        }
        for (let q = 0; q < resultLabels.length; q++) {
            resultLabels[q].style.backgroundColor = "#e9e9e9";
            resultLabels[q].style.color = "#555555";
            resultLabels[q].style.border = "1px solid aaa";
        }
    }
}

function load() {
    loadDropdowns();
    if (document.cookie != "") {
        let seenChangelongCookie = getCookie("changelog1").substring(11);
        let darkModeCookie = getCookie("darkMode").substring(9);
        if (seenChangelongCookie != "true") {
            alert(changelog);
            document.cookie = "changelog1=true";
        }
        if (darkModeCookie == "true") {
            darkMode.click();
        }

        try {
            let decoded = pako.inflate(atob(localStorage.getItem("setData")), { to: "string" });
            let data = JSON.parse(decoded);
            let newSets = [];

            for (let set in data) {
                newSets.push(data[set]);
                addSet(newSets[newSets.length - 1]);
            }
        } catch (err) {

        }
    }

    console.log(document.cookie);

    loadSets();
    update();

    for (let i = 0; i < builtInSets.length; i++) {
        addSet(builtInSets[i], true);
    }

    currentHP1.addEventListener("keyup", updatePercent);
    currentHP2.addEventListener("keyup", updatePercent);

    percentHP1.addEventListener("keyup", updateNumber);
    percentHP2.addEventListener("keyup", updateNumber);

    currentHP1.addEventListener("change", update);
    currentHP2.addEventListener("change", update);

    percentHP1.addEventListener("change", update);
    percentHP2.addEventListener("change", update);

    currentHP1.value = hp1;
    currentHP2.value = hp2;
    updatePercent();
    update();
}

function saveCookie() {
    let json = JSON.stringify(sets);
    let encoded = pako.deflate(json, { to: "string" });
    localStorage.setItem("setData", btoa(encoded));

    document.cookie = "changelog1=true; expires=Mon, 1 Jan 2024 12:00:00 UTC";

    if (darkMode.checked) {
        document.cookie = "darkMode=true; expires=Mon, 1 Jan 2024 12:00:00 UTC"
    }
    else {
        document.cookie = "darkMode=false; expires=Mon, 1 Jan 2024 12:00:00 UTC";
    }
}

function getCookie(name) {
    let cook = document.cookie.split("; ");

    for (let i = 0; i < cook.length; i++) {
        let line = cook[i];
        if (line.indexOf(name + "=") != -1) {
            return line;
        }
    }
    return "";
}
function loadDropdowns() {
    let moveNames = [];

    abilities.sort();
    items.sort();

    for (let loom in loomians) {
        let optG1 = document.createElement("optgroup");
        optG1.label = loomians[loom].name;
        pokeDropdown1.appendChild(optG1);
        optG1.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown1.options[pokeDropdown1.options.length - 1].set = makeBlankSet(loomians[loom].name);

        let optG2 = document.createElement("optgroup");
        optG2.label = loomians[loom].name;
        pokeDropdown2.appendChild(optG2);
        optG2.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown2.options[pokeDropdown2.options.length - 1].set = makeBlankSet(loomians[loom].name)
    }

    for (let type in types) {
        let capitalized = capitalizeFirstLetter(type);
        primaryTypeDropdown1.options[primaryTypeDropdown1.options.length] = new Option(capitalized);
        primaryTypeDropdown2.options[primaryTypeDropdown2.options.length] = new Option(capitalized);

        secondaryTypeDropdown1.options[secondaryTypeDropdown1.options.length] = new Option(capitalized);
        secondaryTypeDropdown2.options[secondaryTypeDropdown2.options.length] = new Option(capitalized);
    }

    for (let ability in abilities) {
        abilityDropdown1.options[abilityDropdown1.options.length] = new Option(abilities[ability]);
        abilityDropdown2.options[abilityDropdown2.options.length] = new Option(abilities[ability]);
    }

    for (let move in moves) {
        moveNames.push(moves[move].name);
    }

    for (let item in items) {
        item1.options[item1.options.length] = new Option(items[item]);
        item2.options[item2.options.length] = new Option(items[item]);
    }

    moveNames.sort();

    for (let move in moveNames) {
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

function findOptgroup(sel, key) {
    for (let child in sel.childNodes) {
        if (sel.childNodes[child].label == key) {
            return sel.childNodes[child];
        }
    }
}

function update(updatePower = false, updateBaseStats = false) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    let wasMaxHP1 = (currentHP1.value == hp1 ? true : false);
    let wasMaxHP2 = (currentHP2.value == hp2 ? true : false);

    document.getElementById("loom1Info").innerHTML = firstLoom.name + "'s moves (select one for more info)";
    document.getElementById("loom2Info").innerHTML = secondLoom.name + "'s moves (select one for more info)";

    if (updateBaseStats) loadBaseStats();
    loadStats();

    totalHP1.innerHTML = hp1;
    totalHP2.innerHTML = hp2;

    currentHP1.max = hp1;
    currentHP2.max = hp2;

    (currentHP1.value > hp1 ? currentHP1.value = hp1 : null);
    (currentHP2.value > hp2 ? currentHP2.value = hp2 : null);

    (wasMaxHP1 ? currentHP1.value = hp1 : null);
    (wasMaxHP2 ? currentHP2.value = hp2 : null);

    loadMoves(updatePower);
    detailedReport();

    updatePercent();

    if (abilityDropdown1.value == "Combustible" || abilityDropdown1.value == "Noxious Weeds" || abilityDropdown1.value == "Coursing Venom" || abilityDropdown1.value == "Prismatic" || abilityDropdown1.value == "Toxic Filter") {
        immuneAbilityBoost1.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost1.style.visibility = "hidden";
    }

    if (abilityDropdown2.value == "Combustible" || abilityDropdown2.value == "Noxious Weeds" || abilityDropdown2.value == "Coursing Venom" || abilityDropdown2.value == "Prismatic" || abilityDropdown2.value == "Toxic Filter") {
        immuneAbilityBoost2.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost2.style.visibility = "hidden";
    }
}

function importSets() {
    let importedSets;
    let newSets = [];

    try {
        importedSets = decode(document.getElementById("import").value);
        document.getElementById("err").innerHTML = "";
    } catch (err) {
        document.getElementById("err").innerHTML = "Invalid Data";
        return;
    }

    for (let set in importedSets) {
        newSets.push(importedSets[set]);
        addSet(newSets[newSets.length - 1]);
    }

    document.getElementById("import").value = "";
    document.getElementById("err").innerHTML = "Sets Successfully Loaded!";
    update();

}

function loadSets(onlyFirst = false, onlySecond = false) {
    if (onlyFirst || (!onlyFirst && !onlySecond)) {
        let set1 = pokeDropdown1.options[pokeDropdown1.selectedIndex].set;
        let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
        let posNat1 = document.getElementById("posNat1");
        let negNat1 = document.getElementById("negNat1");
        let veryNat1 = document.getElementById("veryNat1");

        hpEV1.value = set1.evs.hp;
        energyEV1.value = set1.evs.energy;
        atkEV1.value = set1.evs.attack;
        defEV1.value = set1.evs.defense;
        atkREV1.value = set1.evs.attackR;
        defREV1.value = set1.evs.defenseR;
        spdEV1.value = set1.evs.speed;

        hpIV1.value = set1.ivs.hp;
        energyIV1.value = set1.ivs.energy;
        atkIV1.value = set1.ivs.attack;
        defIV1.value = set1.ivs.defense;
        atkRIV1.value = set1.ivs.attackR;
        defRIV1.value = set1.ivs.defenseR;
        spdIV1.value = set1.ivs.speed;

        level1.value = set1.level;

        $("#moveOne1").val(set1.moves.move1);
        $("#moveOne1").select2().trigger('change');
        $("#moveTwo1").val(set1.moves.move2);
        $("#moveTwo1").select2().trigger('change');
        $("#moveThree1").val(set1.moves.move3);
        $("#moveThree1").select2().trigger('change');
        $("#moveFour1").val(set1.moves.move4);
        $("#moveFour1").select2().trigger('change');

        posNat1.value = (set1.posNature == undefined ? "none" : set1.posNature);
        negNat1.value = (set1.negNature == undefined ? "none" : set1.negNature);
        veryNat1.value = (set1.veryNature == undefined ? "none" : set1.veryNature);
        abilityDropdown1.value = (set1.ability == undefined ? "none" : set1.ability);
        item1.value = (set1.item == undefined ? "none" : set1.item);

        primaryTypeDropdown1.value = loomians[pokeDropdown1.value.toLowerCase()].types[0];
        secondaryTypeDropdown1.value = (loomians[pokeDropdown1.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown1.value.toLowerCase()].types[1] : "None");

        if (set1.setName != "Blank Set" && set1.builtIn == undefined) {
            document.getElementById("lineBreak1").style.display = "block";
            document.getElementById("deleteSet1").style.display = "block";
        }
        else {
            document.getElementById("lineBreak1").style.display = "none";
            document.getElementById("deleteSet1").style.display = "none";
        }

        baseHP1.value = firstLoom.baseStats.hp;
        baseEnergy1.value = firstLoom.baseStats.energy;
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
    }

    if (onlySecond || (!onlyFirst && !onlySecond)) {
        let set2 = pokeDropdown2.options[pokeDropdown2.selectedIndex].set;
        let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
        let posNat2 = document.getElementById("posNat2");
        let negNat2 = document.getElementById("negNat2");
        let veryNat2 = document.getElementById("veryNat2");

        hpEV2.value = set2.evs.hp;
        energyEV2.value = set2.evs.energy;
        atkEV2.value = set2.evs.attack;
        defEV2.value = set2.evs.defense;
        atkREV2.value = set2.evs.attackR;
        defREV2.value = set2.evs.defenseR;
        spdEV2.value = set2.evs.speed;

        hpIV2.value = set2.ivs.hp;
        energyIV2.value = set2.ivs.energy;
        atkIV2.value = set2.ivs.attack;
        defIV2.value = set2.ivs.defense;
        atkRIV2.value = set2.ivs.attackR;
        defRIV2.value = set2.ivs.defenseR;
        spdIV2.value = set2.ivs.speed;

        level2.value = set2.level;

        $("#moveOne2").val(set2.moves.move1);
        $("#moveOne2").select2().trigger('change');
        $("#moveTwo2").val(set2.moves.move2);
        $("#moveTwo2").select2().trigger('change');
        $("#moveThree2").val(set2.moves.move3);
        $("#moveThree2").select2().trigger('change');
        $("#moveFour2").val(set2.moves.move4);
        $("#moveFour2").select2().trigger('change');


        posNat2.value = (set2.posNature == undefined ? "none" : set2.posNature);
        negNat2.value = (set2.negNature == undefined ? "none" : set2.negNature);
        veryNat2.value = (set2.veryNature == undefined ? "none" : set2.veryNature);
        abilityDropdown2.value = (set2.ability == undefined ? "none" : set2.ability);
        item2.value = (set2.item == undefined ? "none" : set2.item);

        primaryTypeDropdown2.value = loomians[pokeDropdown2.value.toLowerCase()].types[0];
        secondaryTypeDropdown2.value = (loomians[pokeDropdown2.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown2.value.toLowerCase()].types[1] : "None");

        if (set2.setName != "Blank Set" && set2.builtIn == undefined) {
            document.getElementById("lineBreak2").style.display = "block";
            document.getElementById("deleteSet2").style.display = "block";
        }
        else {
            document.getElementById("lineBreak2").style.display = "none";
            document.getElementById("deleteSet2").style.display = "none";
        }

        baseHP2.value = secondLoom.baseStats.hp;
        baseEnergy2.value = secondLoom.baseStats.energy;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
    }

    update(undefined, false);
}

function addSet(set, builtIn = false) {
    let optG1 = findOptgroup(pokeDropdown1, set.name);
    let optG2 = findOptgroup(pokeDropdown2, set.name);
    let opt1 = new Option(set.name + " (" + set.setName + ")", set.name);
    let opt2 = new Option(set.name + " (" + set.setName + ")", set.name);
    let tempSet = set;

    if (tempSet.level == undefined) {
        tempSet.level = 100;
    }
    if (!builtIn) sets.push(tempSet);
    opt1.set = tempSet;
    opt2.set = tempSet;
    optG1.appendChild(opt1);
    optG2.appendChild(opt2);
}

function deleteSet(second = false) {
    if (!second) {
        let set1 = pokeDropdown1.options[pokeDropdown1.selectedIndex].set;
        for (let set in sets) {
            if (sets[set] == set1) {
                sets.splice(set, 1);
                break;
            }
        }
    }
    else {
        let set2 = pokeDropdown2.options[pokeDropdown2.selectedIndex].set;
        for (let set in sets) {
            if (sets[set] == set2) {
                sets.splice(set, 1);
                break;
            }
        }
    }
    window.location.reload()
}
function makeBlankSet(loomian) {
    let set = {
        name: loomian,
        setName: "Blank Set",
        evs: {
            hp: 0,
            energy: 0,
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
            move1: "(No Move)",
            move2: "(No Move)",
            move3: "(No Move)",
            move4: "(No Move)"
        },
        posNature: "none",
        negNature: "none",
        veryNature: "none",
        ability: "None",
        item: "None",
        level: 50
    }
    return set;
}

function updateHealthBar() {
    let hpBar1 = document.getElementById("hpBar1");
    let hpBar2 = document.getElementById("hpBar2");

    let percent1 = parseInt(percentHP1.value);
    let percent2 = parseInt(percentHP2.value);

    if (percent1 > 50) {
        hpBar1.style = "background: linear-gradient(to right, green " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("greenHPBar");
    }
    else if (percent1 > 20) {
        hpBar1.style = "background: linear-gradient(to right, yellow " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("yellowHPBar");
    }
    else {
        hpBar1.style = "background: linear-gradient(to right, red " + percent1 + "%, white 0%);";
        hpBar1.classList.remove(hpBar1.classList[hpBar1.classList.length - 1]);
        hpBar1.classList.add("redHPBar");
    }

    if (percent2 > 50) {
        hpBar2.style = "background: linear-gradient(to right, green " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("greenHPBar");
    }
    else if (percent2 > 20) {
        hpBar2.style = "background: linear-gradient(to right, yellow " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("yellowHPBar");
    }
    else {
        hpBar2.style = "background: linear-gradient(to right, red " + percent2 + "%, white 0%);";
        hpBar2.classList.remove(hpBar2.classList[hpBar2.classList.length - 1]);
        hpBar2.classList.add("redHPBar");
    }
}

function updatePercent() {
    percentHP1.value = Math.floor(currentHP1.value / totalHP1.innerHTML * 100);
    percentHP2.value = Math.floor(currentHP2.value / totalHP2.innerHTML * 100);

    updateHealthBar();
}

function updateNumber() {
    currentHP1.value = Math.ceil(totalHP1.innerHTML * percentHP1.value / 100);
    currentHP2.value = Math.ceil(totalHP2.innerHTML * percentHP2.value / 100);

    updateHealthBar();
}

function loadBaseStats() {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    baseHP1.value = firstLoom.baseStats.hp;
    baseHP2.value = secondLoom.baseStats.hp;
    baseEnergy1.value = firstLoom.baseStats.energy;
    baseEnergy2.value = secondLoom.baseStats.energy;
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

function loadMoves(updatePower = false) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);

    if (updatePower) {
        moveOnePower1.value = moveOne1.power;
        moveTwoPower1.value = moveTwo1.power;
        moveThreePower1.value = moveThree1.power;
        moveFourPower1.value = moveFour1.power;
        moveOnePower2.value = moveOne2.power;
        moveTwoPower2.value = moveTwo2.power;
        moveThreePower2.value = moveThree2.power;
        moveFourPower2.value = moveFour2.power;
    }

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
    let veryNat1 = document.getElementById("veryNat1").value;
    let veryNat2 = document.getElementById("veryNat2").value;

    hp1 = calculateStat(baseHP1.value, hpIV1.value, hpEV1.value, level1.value, true, undefined, undefined, undefined, undefined);
    energy1 = calculateStat(baseEnergy1.value, energyIV1.value, energyEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, undefined, undefined, true);
    atk1 = calculateStat(baseAtk1.value, atkIV1.value, atkEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "AttackM");
    def1 = calculateStat(baseDef1.value, defIV1.value, defEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "DefenseM");
    atkR1 = calculateStat(baseAtkR1.value, atkRIV1.value, atkREV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "AttackR");
    defR1 = calculateStat(baseDefR1.value, defRIV1.value, defREV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "DefenseR");
    spd1 = calculateStat(baseSpd1.value, spdIV1.value, spdEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "Speed");

    hp2 = calculateStat(baseHP2.value, hpIV2.value, hpEV2.value, level2.value, true, undefined, undefined, undefined, undefined);
    energy2 = calculateStat(baseEnergy2.value, energyIV2.value, energyEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, undefined, undefined, true);
    atk2 = calculateStat(baseAtk2.value, atkIV2.value, atkEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "AttackM");
    def2 = calculateStat(baseDef2.value, defIV2.value, defEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "DefenseM");
    atkR2 = calculateStat(baseAtkR2.value, atkRIV2.value, atkREV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "AttackR");
    defR2 = calculateStat(baseDefR2.value, defRIV2.value, defREV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "DefenseR");
    spd2 = calculateStat(baseSpd2.value, spdIV2.value, spdEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "Speed");


    checkStages();

    statHP1.innerHTML = hp1;
    statEnergy1.innerHTML = energy1;
    statAtk1.innerHTML = atk1;
    statDef1.innerHTML = def1;
    statAtkR1.innerHTML = atkR1;
    statDefR1.innerHTML = defR1;
    statSpd1.innerHTML = spd1;

    statHP2.innerHTML = hp2;
    statEnergy2.innerHTML = energy2;
    statAtk2.innerHTML = atk2;
    statDef2.innerHTML = def2;
    statAtkR2.innerHTML = atkR2;
    statDefR2.innerHTML = defR2;
    statSpd2.innerHTML = spd2;

}

function calculateStat(base, IV, EV, level, isHP = false, posNat, negNat, veryNat, name, rest = false, isEnergy = false) {
    let stat;

    IV = parseInt(IV);
    level = parseInt(level);
    if (isHP) {
        return Math.floor((2 * base + IV + Math.floor(EV / 4)) * level / 100) + level + 10;
    }

    if (isEnergy) {
        stat = Math.floor(Math.floor(2 * base + IV + Math.floor(EV / 4)) * level / 65 + 80);
    }
    else {
        stat = Math.floor(Math.floor((2 * base + IV + Math.floor(EV / 4)) * level / 100 + 5));
    }

    if (posNat == "brawny" && name == "AttackM") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "robust" && name == "DefenseM") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "smart" && name == "AttackR") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "clever" && name == "DefenseR") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "nimble" && name == "Speed") {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "hyper" && name == undefined) {
        stat = Math.floor(stat * 1.1);
    }
    else if (posNat == "frail" && name == "AttackM") {
        stat = Math.floor(stat * 0.9);
    }
    else if (posNat == "tender" && name == "DefenseM") {
        stat = Math.floor(stat * 0.9);
    }
    else if (posNat == "clumsy" && name == "AttackR") {
        stat = Math.floor(stat * 0.9);
    }
    else if (posNat == "foolish" && name == "DefenseR") {
        stat = Math.floor(stat * 0.9);
    }
    else if (posNat == "sluggish" && name == "Speed") {
        stat = Math.floor(stat * 0.9);
    }
    else if (posNat == "dull" && name == undefined) {
        stat = Math.floor(stat * 0.9);
    }

    if (negNat == "brawny" && name == "AttackM") {
        stat = Math.floor(stat * 1.1);
    }
    else if (negNat == "robust" && name == "DefenseM") {
        stat = Math.floor(stat * 1.1);
    }
    else if (negNat == "smart" && name == "AttackR") {
        stat = Math.floor(stat * 1.1);
    }
    else if (negNat == "clever" && name == "DefenseR") {
        stat = Math.floor(stat * 1.1);
    }
    else if (negNat == "nimble" && name == "Speed") {
        stat = Math.floor(stat * 1.1);
    }
    else if (negNat == "hyper" && name == undefined) {
        stat = Math.floor(stat * 1.1);
    }
    else if (negNat == "frail" && name == "AttackM") {
        stat = Math.floor(stat * 0.9);
    }
    else if (negNat == "tender" && name == "DefenseM") {
        stat = Math.floor(stat * 0.9);
    }
    else if (negNat == "clumsy" && name == "AttackR") {
        stat = Math.floor(stat * 0.9);
    }
    else if (negNat == "foolish" && name == "DefenseR") {
        stat = Math.floor(stat * 0.9);
    }
    else if (negNat == "sluggish" && name == "Speed") {
        stat = Math.floor(stat * 0.9);
    }
    else if (negNat == "dull" && name == undefined) {
        stat = Math.floor(stat * 0.9);
    }

    if (veryNat == "vBrawny" && name == "AttackM") {
        stat = Math.floor(stat * 1.2);
    }
    else if (veryNat == "vRobust" && name == "DefenseM") {
        stat = Math.floor(stat * 1.2);
    }
    else if (veryNat == "vSmart" && name == "AttackR") {
        stat = Math.floor(stat * 1.2);
    }
    else if (veryNat == "vClever" && name == "DefenseR") {
        stat = Math.floor(stat * 1.2);
    }
    else if (veryNat == "vNimble" && name == "Speed") {
        stat = Math.floor(stat * 1.2);
    }
    else if (veryNat == "vHyper" && name == undefined) {
        stat = Math.floor(stat * 1.2);
    }
    else if (veryNat == "vFrail" && name == "AttackM") {
        stat = Math.floor(stat * 0.8);
    }
    else if (veryNat == "vTender" && name == "DefenseM") {
        stat = Math.floor(stat * 0.8);
    }
    else if (veryNat == "vClumsy" && name == "AttackR") {
        stat = Math.floor(stat * 0.8);
    }
    else if (veryNat == "vFoolish" && name == "DefenseR") {
        stat = Math.floor(stat * 0.8);
    }
    else if (veryNat == "vSluggish" && name == "Speed") {
        stat = Math.floor(stat * 0.8);
    }
    else if (veryNat == "vDull" && name == undefined) {
        stat = Math.floor(stat * 0.8);
    }

    if (rest) {
        stat = Math.floor(stat * 2 / 3);
    }

    return stat;
}


function checkStages() {
    let rest1 = document.getElementById("rest1").checked;
    let rest2 = document.getElementById("rest2").checked;

    let tempDefStage1 = (defStages1.value != "--" ? parseInt(defStages1.value) - rest1 : 0 - rest1);
    let tempDefStage2 = (defStages2.value != "--" ? parseInt(defStages2.value) - rest2 : 0 - rest2);

    let tempDefRStage1 = (defRStages1.value != "--" ? parseInt(defRStages1.value) - rest1 : 0 - rest1);
    let tempDefRStage2 = (defRStages2.value != "--" ? parseInt(defRStages2.value) - rest2 : 0 - rest2);

    if (atkStages1.value != "--" && parseInt(atkStages1.value) > 0) {
        atk1 = Math.floor(atk1 * (1 + 0.5 * parseInt(atkStages1.value)));
    }
    else if (atkStages1.value != "--" && parseInt(atkStages1.value) < 0) {
        atk1 = Math.floor(atk1 * (2 / (2 - parseInt(atkStages1.value))));
    }

    if (tempDefStage1 > 0) {
        def1 = Math.floor(def1 * (1 + 0.5 * tempDefStage1));
    }
    else if (tempDefStage1 < 0) {
        def1 = Math.floor(def1 * (2 / (2 - tempDefStage1)));
    }

    if (atkRStages1.value != "--" && parseInt(atkRStages1.value) > 0) {
        atkR1 = Math.floor(atkR1 * (1 + 0.5 * parseInt(atkRStages1.value)));
    }
    else if (atkRStages1.value != "--" && parseInt(atkRStages1.value) < 0) {
        atkR1 = Math.floor(atkR1 * (2 / (2 - parseInt(atkRStages1.value))));
    }

    if (tempDefRStage1 > 0) {
        defR1 = Math.floor(defR1 * (1 + 0.5 * tempDefRStage1));
    }
    else if (tempDefRStage1 < 0) {
        defR1 = Math.floor(defR1 * (2 / (2 - tempDefRStage1)));
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

    if (tempDefStage2 > 0) {
        def2 = Math.floor(def2 * (1 + 0.5 * tempDefStage2));
    }
    else if (tempDefStage2 < 0) {
        def2 = Math.floor(def2 * (2 / (2 - tempDefStage2)));
    }

    if (atkRStages2.value != "--" && parseInt(atkRStages2.value) > 0) {
        atkR2 = Math.floor(atkR2 * (1 + 0.5 * parseInt(atkRStages2.value)));
    }
    else if (atkRStages2.value != "--" && parseInt(atkRStages2.value) < 0) {
        atkR2 = Math.floor(atkR2 * (2 / (2 - parseInt(atkRStages2.value))));
    }

    if (tempDefRStage2 > 0) {
        defR2 = Math.floor(defR2 * (1 + 0.5 * tempDefRStage2));
    }
    else if (tempDefRStage2 < 0) {
        defR2 = Math.floor(defR2 * (2 / (2 - tempDefRStage2)));
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

    let dmgMoveOneU1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, level1.value);
    let dmgMoveOneL1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, level1.value, true);
    let dmgMoveOnePercent1 = (dmgMoveOneL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveOneDmg1.innerHTML = dmgMoveOnePercent1 + checkIceTrap(moveOne1);

    let dmgMoveTwoU1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, level1.value);
    let dmgMoveTwoL1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, level1.value, true);
    let dmgMoveTwoPercent1 = (dmgMoveTwoL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveTwoDmg1.innerHTML = dmgMoveTwoPercent1 + checkIceTrap(moveTwo1);

    let dmgMoveThreeU1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, level1.value);
    let dmgMoveThreeL1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, level1.value, true);
    let dmgMoveThreePercent1 = (dmgMoveThreeL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveThreeDmg1.innerHTML = dmgMoveThreePercent1 + checkIceTrap(moveThree1);

    let dmgMoveFourU1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, level1.value);
    let dmgMoveFourL1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, level1.value, true);
    let dmgMoveFourPercent1 = (dmgMoveFourL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveFourDmg1.innerHTML = dmgMoveFourPercent1 + checkIceTrap(moveFour1);

    //----------------------------------------------------------

    let dmgMoveOneU2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, level2.value, undefined, true);
    let dmgMoveOneL2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, level2.value, true, true);
    let dmgMoveOnePercent2 = (dmgMoveOneL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveOneDmg2.innerHTML = dmgMoveOnePercent2 + checkIceTrap(moveOne2);

    let dmgMoveTwoU2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, level2.value, undefined, true);
    let dmgMoveTwoL2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, level2.value, true, true);
    let dmgMoveTwoPercent2 = (dmgMoveTwoL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveTwoDmg2.innerHTML = dmgMoveTwoPercent2 + checkIceTrap(moveTwo2);

    let dmgMoveThreeU2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, level2.value, undefined, true);
    let dmgMoveThreeL2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, level2.value, true, true);
    let dmgMoveThreePercent2 = (dmgMoveThreeL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveThreeDmg2.innerHTML = dmgMoveThreePercent2 + checkIceTrap(moveThree2);

    let dmgMoveFourU2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, level2.value, undefined, true);
    let dmgMoveFourL2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, level2.value, true, true);

    let dmgMoveFourPercent2 = (dmgMoveFourL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveFourDmg2.innerHTML = dmgMoveFourPercent2 + checkIceTrap(moveFour2);
}

function detailedReport() {
    let selected = document.querySelector('input[name="moveResult"]:checked');
    let moveName;
    let move;
    let movePower;
    let crit;
    let second = false;
    let tempAtk = " ";
    let tempDef = " ";
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let level = level1.value;
    let hp;
    let ice = iceTrap2.checked;

    if (document.getElementById("moveOneLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl1").innerHTML;
        movePower = moveOnePower1.value;
        crit = moveOneCrit1.checked;
    }
    else if (document.getElementById("moveTwoLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl1").innerHTML;
        movePower = moveTwoPower1.value;
        crit = moveTwoCrit1.checked;
    }
    else if (document.getElementById("moveThreeLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl1").innerHTML;
        movePower = moveThreePower1.value;
        crit = moveThreeCrit1.checked;
    }
    else if (document.getElementById("moveFourLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl1").innerHTML;
        movePower = moveFourPower1.value;
        crit = moveFourCrit1.checked;
    }
    else if (document.getElementById("moveOneLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl2").innerHTML;
        movePower = moveOnePower2.value;
        crit = moveOneCrit2.checked;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
    }
    else if (document.getElementById("moveTwoLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl2").innerHTML;
        movePower = moveTwoPower2.value;
        crit = moveTwoCrit2.checked;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
    }
    else if (document.getElementById("moveThreeLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl2").innerHTML;
        movePower = moveThreePower2.value;
        crit = moveThreeCrit2.checked;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
    }
    else if (document.getElementById("moveFourLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl2").innerHTML;
        movePower = moveFourPower2.value;
        crit = moveFourCrit2.checked;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        ice = iceTrap1.checked;
    }

    let item = (second ? item1.value : item2.value);
    let ability = (second ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    move = findMove(moveName);
    hp = (second ? currentHP1.value : currentHP2.value);
    let selfHP = (second ? currentHP2.value : currentHP1.value);
    let currStatus = (second ? status1.value : status2.value);
    let counter = 0;
    let atkDef = getTempAtkDef(second, move);
    let atkPlus = "";
    let defPlus = "";

    if (atkDef.attack.stage != 0 && !isNaN(atkDef.attack.stage)) {
        tempAtk = (atkDef.attack.stage > 0 ? "+" : "") + atkDef.attack.stage + " ";
    }
    if (atkDef.defense.stage != 0 && !isNaN(atkDef.defense.stage)) {
        tempDef = (atkDef.defense.stage > 0 ? "+" : "") + atkDef.defense.stage + " ";
    }

    if (move.mr == "Ranged") {
        if (atkDef.attack.posNat == "smart" || atkDef.attack.negNat == "smart") {
            atkPlus = "+";
        }
        if (atkDef.attack.veryNat == "vSmart") {
            atkPlus = "++";
        }
        if (atkDef.defense.posNat == "clever" || atkDef.defense.negNat == "clever") {
            defPlus = "+";
        }
        if (atkDef.defense.veryNat == "vClever") {
            defPlus = "++";
        }

        //Negatives

        if (atkDef.attack.posNat == "clumsy" || atkDef.attack.negNat == "clumsy") {
            atkPlus = "-";
        }
        if (atkDef.attack.veryNat == "vClumsy") {
            atkPlus = "--";
        }
        if (atkDef.defense.posNat == "foolish" || atkDef.defense.negNat == "foolish") {
            defPlus = "-";
        }
        if (atkDef.defense.veryNat == "vFoolish") {
            defPlus = "--";
        }

        if (second) {
            tempAtk = tempAtk + atkREV2.value + " " + atkPlus + "AtkR";
            tempDef = tempDef + defREV1.value + " " + defPlus + "DefR";
        }
        else {
            tempAtk = tempAtk + atkREV1.value + " " + atkPlus + "AtkR";
            tempDef = tempDef + defREV2.value + " " + defPlus + "DefR";
        }
    }
    if (move.mr == "Melee") {
        if (atkDef.attack.posNat == "brawny" || atkDef.attack.negNat == "brawny") {
            atkPlus = "+";
        }
        if (atkDef.attack.veryNat == "vBrawny") {
            atkPlus = "++";
        }
        if (move.name == "Battering Ram" && (atkDef.attack.posNat == "robust" || atkDef.attack.negNat == "robust")) {
            atkPlus = "+";
        }
        if (move.name == "Battering Ram" && atkDef.attack.veryNat == "vRobust") {
            atkPlus = "++";
        }
        if (atkDef.defense.posNat == "robust" || atkDef.defense.negNat == "robust") {
            defPlus = "+";
        }
        if (atkDef.defense.veryNat == "vRobust") {
            defPlus = "++";
        }

        //Negatives

        if (atkDef.attack.posNat == "frail" || atkDef.attack.negNat == "frail") {
            atkPlus = "-";
        }
        if (atkDef.attack.veryNat == "vFrail") {
            atkPlus = "--";
        }
        if (move.name == "Battering Ram" && (atkDef.attack.posNat == "tender" || atkDef.attack.negNat == "tender")) {
            atkPlus = "-";
        }
        if (move.name == "Battering Ram" && (atkDef.attack.veryNat == "vTender")) {
            atkPlus = "--";
        }
        if (atkDef.defense.posNat == "tender" || atkDef.defense.negNat == "tender") {
            defPlus = "-";
        }
        if (atkDef.defense.veryNat == "vTender") {
            defPlus = "--";
        }

        if (second) {
            if (move.name == "Battering Ram") {
                tempAtk = tempAtk + defEV2.value + " " + atkPlus + "DefM";
            }
            else {
                tempAtk = tempAtk + atkEV2.value + " " + atkPlus + "AtkM";
            }
            tempDef = tempDef + defEV1.value + " " + defPlus + "DefM";
        }
        else {
            if (move.name == "Battering Ram") {
                tempAtk = tempAtk + defEV1.value + " " + atkPlus + "DefM";
            }
            else {
                tempAtk = tempAtk + atkEV1.value + " " + atkPlus + "AtkM";
            }
            tempDef = tempDef + defEV2.value + " " + defPlus + "DefM";
        }
    }

    if (move.power == 0) {
        let str = tempAtk + " " + firstLoom.name + " " + move.name + " vs. " + (!second ? hpEV2.value : hpEV1.value) + " HP / " + tempDef + " " + secondLoom.name + ": 0-0 (0 - 0%) -- nice move there, bud";

        document.getElementById("detailedResult").innerHTML = str;
        document.getElementById("possibleDmg").innerHTML = "Possible Damage Amounts: (0)";
        return;
    }

    let possibleDmg = getMultiplier(firstLoom, secondLoom, move, movePower, crit, level, undefined, second, true);
    let possibleDmg2 = possibleDmg;
    let possibleDmg3 = possibleDmg;
    let lowerPercent = (possibleDmg[0] / hp * 100).toFixed(1);
    let upperPercent = (possibleDmg[15] / hp * 100).toFixed(1);
    let stuffUsed = possibleDmg[16];
    possibleDmg.pop();
    let possibleDmgStr = "Possible Damage Amounts: (";
    let critStr = (crit == true ? " Crit " : "");
    let str = tempAtk + " " + stuffUsed.item1 + " " + stuffUsed.ability1 + " " + firstLoom.name + " " + critStr + move.name + " vs. " + (!second ? hpEV2.value : hpEV1.value) + " HP / " +
        tempDef + " " + stuffUsed.item2 + " " + stuffUsed.ability2 + " " + secondLoom.name + ": " + possibleDmg[0] + "-" + possibleDmg[15] + " (" + lowerPercent + " - " + upperPercent + "%) -- ";

    let hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, true)[1];

    for (let i = 0; i < possibleDmg.length; i++) {
        possibleDmgStr += (i != possibleDmg.length - 1 ? possibleDmg[i] + ", " : possibleDmg[i]);
    }
    possibleDmgStr += ")";
    document.getElementById("possibleDmg").innerHTML = possibleDmgStr;

    let addedDmg = 0;

    if (ice && !secondLoom.types.includes("Fire")) {
        addedDmg = 12.5;

        if (types[secondLoom.types[0].toLowerCase()].weaknesses.includes("ice")) {
            addedDmg *= 2;
        }
        if (secondLoom.types[1] != undefined && types[secondLoom.types[1].toLowerCase()].weaknesses.includes("ice")) {
            addedDmg *= 2;
        }
        if (types[secondLoom.types[0].toLowerCase()].resistances.includes("ice")) {
            addedDmg *= 0.5
        }
        if (secondLoom.types[1] != undefined && types[secondLoom.types[1].toLowerCase()].resistances.includes("ice")) {
            addedDmg *= 0.5;
        }
    }

    hp = hp - Math.floor(hp * addedDmg / 100);

    let OHKOs = [];
    let THKOs = [];
    let TRHKOs = [];

    for (let i = 0; i < possibleDmg.length; i++) {
        if (possibleDmg[i] >= hp) {
            OHKOs.push(possibleDmg[i]);
        }
    }

    if (OHKOs.length != 0) {
        let chance = (OHKOs.length / 16 * 100).toFixed(1);
        let chanceStr = chance + "% chance to OHKO";

        if (chance >= 100) chanceStr = "guaranteed OHKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    counter = 1;

    if (move.knockOff) {
        item = "";
    }

    possibleDmg2 = getMultiplier(firstLoom, secondLoom, move, movePower, crit, level, undefined, second, true, false, counter);
    counter = 0;
    possibleDmg3 = getMultiplier(firstLoom, secondLoom, move, movePower, crit, level, undefined, second, true, false, counter);

    hp = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second)[0];
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second)[1];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            if (possibleDmg[i] + possibleDmg2[j] >= hp) {
                THKOs.push(possibleDmg[i] + possibleDmg2[j]);
            }
        }
    }

    if (THKOs.length != 0) {
        let chance = (THKOs.length / 256 * 100).toFixed(1);
        let chanceStr = chance + "% chance to 2HKO";
        if (chance >= 100) chanceStr = "guaranteed 2HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    hp = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second)[0];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            for (let k = 0; k < possibleDmg3.length; k++) {
                if (possibleDmg[i] + possibleDmg2[j] + possibleDmg3[k] >= hp) {
                    TRHKOs.push(possibleDmg[i] + possibleDmg2[j] + possibleDmg3[k]);
                }
            }
        }
    }

    if (TRHKOs.length != 0) {
        let chance = (TRHKOs.length / 4096 * 100).toFixed(1);
        let chanceStr = chance + "% chance to 3HKO";
        if (chance >= 100) chanceStr = "guaranteed 3HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    hp = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second)[0];

    if (possibleDmg[15] * 4 >= hp) {
        let FHKO = "possible 4HKO";

        str += FHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    hp = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second)[0];

    if (possibleDmg[15] * 5 >= hp) {
        let FIHKO = "possible 5HKO";

        str += FIHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    let badMove = "don't even bother, low damage";
    str += badMove;

    document.getElementById("detailedResult").innerHTML = str;
}

function isStab(userTypes, move) {
    if (userTypes.primary == move.type || userTypes.secondary == move.type) {
        return true;
    }
    return false;
}

function getMultiplier(loom1, loom2, move, movePower, crit, level, ul = false, second = false, detailed = false, withoutSlapDown = true, takeSecondaryType = false) {
    if (move.power == 0 && detailed) return [0];
    if (move.power == 0) return 0;

    let bothTypes = getTypes(second);
    let types1 = bothTypes.firstLoom;
    let types2 = bothTypes.secondLoom;
    let multi = 1;
    let dmg;
    let tempType = move.type;
    let tempPower = movePower;
    let tempAtk;
    let tempDef;
    let gen1 = gender1.value;
    let gen2 = gender2.value;
    let ability1 = (second == false ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let ability2 = (second == false ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    let typeModAbility1 = findTypeModAbility(ability1);
    let typeModAbility2 = findTypeModAbility(ability2);
    let btl1 = (second == false ? enteredBtl2.checked : enteredBtl1.checked);
    let btl2 = (second == false ? enteredBtl1.checked : enteredBtl2.checked);
    let stat1 = (second == false ? status1.value : status2.value);
    let stat2 = (second == false ? status2.value : status1.value);
    let itemA = (second == false ? item1.value : item2.value);
    let itemB = (second == false ? item2.value : item1.value);
    let isDouble = (singleDouble.value == "singles" ? false : true);
    let dusk = (second == false ? dusk1.checked : dusk2.checked);
    let dawn = (second == false ? dawn1.checked : dawn2.checked);
    let possibleDmg = [];
    let stuffUsed = { ability1: "", ability2: "", item1: "", item2: "" };

    let immuneBoostCheck = (second == false ? immuneAbilityBoost1.checked : immuneAbilityBoost2.checked);

    tempAtk = getTempAtkDef(second, move).attack;
    tempDef = getTempAtkDef(second, move).defense;

    tempPower = (move.name == "Trip Root" ? getTripRootPower(loom2.weight) : tempPower);

    if (move.name == "Gloominous Roar" && ability1 == "Circadian" && types1.secondary != undefined) {
        tempType = (takeSecondaryType ? types1.secondary : types1.primary);
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Circadian" && types2.secondary != "") {
        types2.primary = (takeSecondaryType ? types2.secondary : types2.primary);
        types2.secondary = "None";
        stuffUsed.ability2 = ability2;
    }

    //Base ------------------------------------

    dmg = Math.floor(2 * level / 5) + 2;

    //Power ----------------------------------------

    if (typeModAbility1 != undefined && tempType == typeModAbility1.typeModifier.type && typeModAbility1.powerMod == true) {
        multi *= typeModAbility1.typeModifier.modifier;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Neutralize") {
        tempType = "Typeless"
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Overshadow" && tempType == "Typeless") {
        tempType = "Dark";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Illuminate" && tempType == "Typeless") {
        tempType = "Light";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Combustible" || ability1 == "Coursing Venom" || ability1 == "Noxious Weeds" || ability1 == "Prismatic") && immuneBoostCheck) {
        if (tempType == typeModAbility1.typeModifier.type) {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }
    if (ability1 == "Toxic Filter" && immuneBoostCheck) {
        if (tempType == "Air") {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }

    if (ability1 == "Ambush" && btl1 && withoutSlapDown) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Vengeance" && btl2 && withoutSlapDown) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Sharp Claws" && move.contact == true) {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }
    if (ability1 == "Brute Force" && move.secondaryEffect == true) {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Power Jaw" && move.bite == true) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Baneful" && stat2 == "poisoned") {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    if (gen1 == gen2 && ability1 == "Territorial") {
        multi *= 1.25;
        stuffUsed.ability1 = ability1;
    }
    else if (gen1 != gen2 && ability1 == "Territorial") {
        multi *= 0.75;
        stuffUsed.ability1 = ability1;
    }

    if (move.name == "Gloominous Roar" && loom1.name == "Tiklipse" && ability1 != "Circadian" && itemA.includes("Light")) {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }
    else if (itemA.includes(tempType)) {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    if (itemA == "Power Cuffs") {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    if (itemB != "None" && move.knockOff == true && withoutSlapDown) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
    }

    if (move.name == "Oppress" && stat2 != "healthy") {
        multi *= 2;
    }

    if (move.name == "Ill Will" && stat1 != "healthy") {
        multi *= 2;
    }

    if (move.name == "Battering Ram") {
        if (ability1 == "Trash Armor") {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
        if (itemA == "Heavy Armor") {
            multi *= 1.2;
            stuffUsed.item1 = itemA;
        }
    }

    if (move.sound == true && ability1 == "Tone Deaf") {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Specialization") {
        let count = specializationCount(second);
        if (count == 1) multi *= 1.25;
        if (count == 2) multi *= 1.5;
        if (count == 3) multi *= 2;
        if (count != 0) stuffUsed.ability1 = ability1 + " (" + Math.abs(count - 4) + ")";
    }

    if (move.name == "Rough Up" && loom1.height > loom2.height) {
        multi *= 1.25;
    }

    if (ability1 == "Heavy Fists" && (move.punch == true || move.slap == true)) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }

    tempPower = pokeRound(tempPower * multi);
    multi = 1;

    //Attack -------------------------------------------

    if (crit && tempAtk.stage < 0) {
        tempAtk.atk = calculateStat(tempAtk.base, tempAtk.iv.value, tempAtk.ev.value, tempAtk.level, undefined, tempAtk.posNat, tempAtk.negNat, tempAtk.veryNat, tempAtk.name);
    }
    if (ability1 == "Hasty" && move.mr == "Melee") {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    if (dusk && isDouble && move.mr == "Melee" && ability1 == "Dusk") {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    if (dawn && isDouble && move.mr == "Ranged" && ability1 == "Dawn") {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    if (itemA == "Mystic Wand" && loom1.name == "Shawchi") {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }

    tempAtk.atk = pokeRound(tempAtk.atk * multi);
    multi = 1;

    //Defense ----------------------------------------------------

    if (crit && tempDef.stage > 0) {
        tempDef.def = calculateStat(tempDef.base, tempDef.iv.value, tempDef.ev.value, tempDef.level, undefined, tempDef.posNat, tempDef.negNat, tempDef.veryNat, tempDef.name, tempDef.rest);
    }
    if (itemB == "Heavy Shield" && move.mr == "Ranged") {
        multi *= 1.2;
        stuffUsed.item2 = itemB;
    }
    if (itemB == "Heavy Armor" && move.mr == "Melee") {
        multi *= 1.2;
        stuffUsed.item2 = itemB;
    }
    if (itemB == "Drop of Youth" && loom2.finalEvo == false) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
    }
    if (ability2 == "Trash Armor" && move.mr == "Melee") {
        multi *= 1.5;
        stuffUsed.ability2 = ability2;
    }
    if (ability2 == "Slick Shell" && move.mr == "Ranged") {
        multi *= 2;
        stuffUsed.ability2 = ability2;
    }

    tempDef.def = pokeRound(tempDef.def * multi);
    multi = 1;

    dmg = Math.floor(Math.floor(dmg * tempAtk.atk / tempDef.def * tempPower) / 50) + 2;

    if (isDouble && move.aoe == true) {
        multi *= 0.75;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Crit and Random -----------------------------

    if (crit) {
        multi *= 1.5;
    }

    if (ul) {
        multi *= 0.85;
    }

    if (detailed) {
        for (let i = 0.85; i <= 1; i += 0.01) {
            possibleDmg.push(Math.floor(dmg * multi * i));
        }
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //STAB ---------------------------------

    if (isStab(types1, { type: tempType }) && ability1 == "Awakening") {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    else if (isStab(types1, { type: tempType })) {
        multi *= 1.25;
    }
    else if (move.name == "Gloominous Roar" && loom1.name == "Tiklipse" && ability1 != "Circadian") {
        multi *= 1.25;
    }

    if (detailed) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = Math.floor(possibleDmg[i] * multi);
        }
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Type -------------------------------

    if (typeModAbility2 == "Total Eclipse" && (ability1 == "Overshadow" || ability1 == "Illuminate")) {
        // nothing happens, prevents the next if statement 
    }
    else if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type && typeModAbility2.powerMod == false) {
        multi *= typeModAbility2.typeModifier.modifier;
        stuffUsed.ability2 = ability2;
    }
    else if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type2 && typeModAbility2.powerMod == false) {
        multi *= typeModAbility2.typeModifier.modifier;
        stuffUsed.ability2 = ability2;
    }

    if (types[types2.primary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        multi *= 2;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) {
        multi *= 2;
    }
    if (types[types2.primary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if (types[types2.primary.toLowerCase()].immunities.includes(tempType.toLowerCase())) {
        multi *= 0;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].immunities.includes(tempType.toLowerCase())) {
        multi *= 0;
    }
    if (move.typeModifier != undefined && (types2.primary == move.typeModifier.type || types2.secondary == move.typeModifier.type)) {
        multi *= move.typeModifier.modifier;
    }

    if (move.name == "Gloominous Roar" && loom1.name == "Tiklipse" && ability1 != "Circadian") {
        multi = 1;
        if (types2.primary == "Ancient" || types2.secondary == "Ancient") {
            multi = 2;
        }
        if (types2.primary == "Bug" || types2.secondary == "Bug") {
            multi *= 0.5;
        }
        if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type2 && typeModAbility2.powerMod == false) {
            multi = 0;
        }
    }

    if (multi > 1 && ability2 == "Enchanted Coat") {
        multi *= 0.75;
        stuffUsed.ability2 = ability2;
    }
    if (detailed) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = Math.floor(possibleDmg[i] * multi);
        }
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Status ------------------------

    if (stat1 == "burned" && move.mr == "Melee" && move.name != "Ill Will") {
        multi *= 0.5;
    }

    if (stat2 == "asleep" && ability1 == "Mean Spirited") {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Tank" && btl1 && withoutSlapDown) {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }

    stuffUsed.item2 = (itemB == "Health Amulet" ? itemB : stuffUsed.item2);
    if (detailed) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = Math.floor(possibleDmg[i] * multi);
        }
        possibleDmg[16] = stuffUsed;
        return possibleDmg;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Other --------------------------------

    return dmg;
}

function getTempAtkDef(second, mr) {
    let posNat1 = document.getElementById("posNat1").value;
    let negNat1 = document.getElementById("negNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    let negNat2 = document.getElementById("negNat2").value;
    let veryNat1 = document.getElementById("veryNat1").value;
    let veryNat2 = document.getElementById("veryNat2").value;
    let rest1 = document.getElementById("rest1").checked;
    let rest2 = document.getElementById("rest2").checked;

    let tempAtk;
    let tempDef;


    if (second && mr.mr == "Ranged") {
        tempAtk = { atk: atkR2, iv: atkRIV2, ev: atkREV2, base: baseAtkR2.value, name: "AttackR", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkRStages2.value), level: level2.value };
        tempDef = { def: defR1, iv: defRIV1, ev: defREV1, base: baseDefR1.value, name: "DefenseR", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defRStages1.value), level: level1.value, rest: rest1 };
    }
    else if (second && mr.mr == "Melee") {
        if (mr.name == "Battering Ram") {
            tempAtk = { atk: def2, iv: defIV2, ev: defEV2, base: baseDef2.value, name: "DefenseM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defStages2.value), level: level2.value };
        }
        else {
            tempAtk = { atk: atk2, iv: atkIV2, ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkStages2.value), level: level2.value };
        }
        tempDef = { def: def1, iv: defIV1, ev: defEV1, base: baseDef1.value, name: "DefenseM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defStages1.value), level: level1.value, rest: rest1 };
    }
    else if (mr.mr == "Melee") {
        if (mr.name == "Battering Ram") {
            tempAtk = { atk: def1, iv: defIV1, ev: defEV1, base: baseDef1.value, name: "DefenseM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defStages1.value), level: level1.value };
        }
        else {
            tempAtk = { atk: atk1, iv: atkIV1, ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkStages1.value), level: level1.value };
        }
        tempDef = { def: def2, iv: defIV2, ev: defEV2, base: baseDef2.value, name: "DefenseM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defStages2.value), level: level2.value, rest: rest2 };
    }
    else {
        tempAtk = { atk: atkR1, iv: atkRIV1, ev: atkREV1, base: baseAtkR1.value, name: "AttackR", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkRStages1.value), level: level1.value };
        tempDef = { def: defR2, iv: defRIV2, ev: defREV2, base: baseDefR2.value, name: "DefenseR", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defRStages2.value), level: level2.value, rest: rest2 };
    }

    return { attack: tempAtk, defense: tempDef };
}

function getTypes(second) {
    let obj = {};
    obj.firstLoom = {};
    obj.secondLoom = {};

    if (second) {
        obj.firstLoom.primary = primaryTypeDropdown2.value;
        obj.firstLoom.secondary = secondaryTypeDropdown2.value;

        obj.secondLoom.primary = primaryTypeDropdown1.value;
        obj.secondLoom.secondary = secondaryTypeDropdown1.value;

        return obj;
    }

    obj.firstLoom.primary = primaryTypeDropdown1.value;
    obj.firstLoom.secondary = secondaryTypeDropdown1.value;

    obj.secondLoom.primary = primaryTypeDropdown2.value;
    obj.secondLoom.secondary = secondaryTypeDropdown2.value;

    return obj;
}

function getTripRootPower(weight) {
    if (weight < 10) {
        return 20;
    }
    if (weight < 25) {
        return 40;
    }
    if (weight < 50) {
        return 60;
    }
    if (weight < 100) {
        return 80;
    }
    if (weight < 200) {
        return 100;
    }
    return 120;
}

function specializationCount(second) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);

    let counter = 0;
    if (second) {
        if (moveOne2.name == "(No Move)") counter++;
        if (moveTwo2.name == "(No Move)") counter++;
        if (moveThree2.name == "(No Move)") counter++;
        if (moveFour2.name == "(No Move)") counter++;
        return counter;
    }
    if (moveOne1.name == "(No Move)") counter++;
    if (moveTwo1.name == "(No Move)") counter++;
    if (moveThree1.name == "(No Move)") counter++;
    if (moveFour1.name == "(No Move)") counter++;
    return counter;
}

function adjustHP(loom1, loom2, hp1, hp2, item, ability, status, second = false, onlyIncludeIceTrap = false) {
    let newHP = hp1;
    let multi = 1;
    let ice = iceTrap2.checked;
    let sap = { attacker: sapPlant1.checked, defender: sapPlant2.checked };
    let bloodDrain = { attacker: bloodDrain1.checked, defender: bloodDrain2.checked };
    let pestilence = pestilence2.checked;
    let quicksand = quicksand2.checked;
    let hazardString = "";

    if (second) {
        ice = iceTrap1.checked;
        sap = { attacker: sapPlant2.checked, defender: sapPlant1.checked };
        bloodDrain = { attacker: bloodDrain2.checked, defender: bloodDrain1.checked };
        pestilence = pestilence1.checked;
        quicksand = quicksand1.checked;
    }

    if (ice && !loom2.types.includes("Fire")) {
        hazardString += "icicle trap and ";
        if (onlyIncludeIceTrap) {
            hazardString = hazardString.substr(0, hazardString.length - 5);
            hazardString = " after " + hazardString;
            return [newHP, hazardString];
        }
    }

    if (ability == "Drainage") {
        multi *= 1.5;
    }
    if (item == "Drain Orb") {
        multi *= 1.2;
    }
    if (!loom1.types.includes("Plant") && sap.attacker == true) {
        newHP += Math.floor(hp2 * 1 / 8 * multi);
        hazardString += "sap plant recovery and ";
    }
    if (!loom2.types.includes("Plant") && sap.defender == true) {
        newHP = Math.floor(newHP * 7 / 8);
        hazardString += "sap plant damage and ";
    }

    if (bloodDrain.attacker == true) {
        newHP += Math.floor(hp2 * 1 / 12 * multi);
        hazardString += "blood drain recovery and ";
    }
    if (bloodDrain.defender == true) {
        newHP = Math.floor(newHP * 11 / 12);
        hazardString += "blood drain damage and ";
    }

    if (pestilence) {
        newHP = Math.floor(newHP * 7 / 8);
        hazardString += "pestilence damage and ";
    }

    if (quicksand) {
        newHP = Math.floor(newHP * 7 / 8);
        hazardString += "quicksand damage and ";
    }

    if (item == "Health Amulet") {
        newHP = Math.floor(newHP * 17 / 16);
        hazardString += "health amulet recovery and ";
    }

    if (second) {
        loom1 = loomians[pokeDropdown2.value.toLowerCase()];
        loom2 = loomians[pokeDropdown1.value.toLowerCase()];
    }
    if (status == "burned" && !loom2.types.includes("Fire")) {
        newHP = Math.floor(newHP * 15 / 16);
        hazardString += "burn damage and ";
    }
    if (status == "poisoned" && !loom2.types.includes("Toxic")) {
        newHP = Math.floor(newHP * 7 / 8);
        hazardString += "poison damage and ";
    }

    hazardString = hazardString.substr(0, hazardString.length - 5);
    if (hazardString.length == 0) return [newHP, hazardString];
    hazardString = " after " + hazardString;
    return [newHP, hazardString];
}

function checkIceTrap(move) {
    if (move.hits == undefined) {
        return "";
    }
    else {
        return " per hit"
    }
}

function findMove(name) {
    for (let move in moves) {
        if (moves[move].name == name) {
            return moves[move];
        }
    }
}

function findTypeModAbility(name) {
    for (let ability in typeModAbilities) {
        if (typeModAbilities[ability].name == name) {
            return typeModAbilities[ability];
        }
    }
    return undefined;
}

function pokeRound(val) {
    if (val - Math.floor(val) > 0.5) {
        return Math.ceil(val);
    }
    return Math.floor(val);
}

function decode(txt) {
    let decoded = pako.inflate(atob(txt), { to: "string" });
    let json = JSON.parse(decoded);
    return json;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.substring(1);
}
