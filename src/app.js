const STAB = 1.25;

var pokeDropdown1 = document.getElementById("pokes1");
var pokeDropdown2 = document.getElementById("pokes2");

var primaryTypeDropdown1 = document.getElementById("primaryType1");
var secondaryTypeDropdown1 = document.getElementById("secondaryType1");

var primaryTypeDropdown2 = document.getElementById("primaryType2");
var secondaryTypeDropdown2 = document.getElementById("secondaryType2");

var bpType = document.getElementById("bpType");

var abilityDropdown1 = document.getElementById("ability1");
var abilityDropdown2 = document.getElementById("ability2");

let bst1 = document.getElementById("BST1");
let bst2 = document.getElementById("BST2");

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

let moveOneEnergy1 = document.getElementById("moveOneEnergy1");
let moveTwoEnergy1 = document.getElementById("moveTwoEnergy1");
let moveThreeEnergy1 = document.getElementById("moveThreeEnergy1");
let moveFourEnergy1 = document.getElementById("moveFourEnergy1");
let moveOneEnergy2 = document.getElementById("moveOneEnergy2");
let moveTwoEnergy2 = document.getElementById("moveTwoEnergy2");
let moveThreeEnergy2 = document.getElementById("moveThreeEnergy2");
let moveFourEnergy2 = document.getElementById("moveFourEnergy2");

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
let soulMoveLbl1 = document.getElementById("soulMoveLbl1");
let moveOneDmg1 = document.getElementById("moveOneDmg1");
let moveTwoDmg1 = document.getElementById("moveTwoDmg1");
let moveThreeDmg1 = document.getElementById("moveThreeDmg1");
let moveFourDmg1 = document.getElementById("moveFourDmg1");
let soulMoveDmg1 = document.getElementById("soulMoveDmg1");

let moveOneLbl2 = document.getElementById("moveOneLbl2");
let moveTwoLbl2 = document.getElementById("moveTwoLbl2");
let moveThreeLbl2 = document.getElementById("moveThreeLbl2");
let moveFourLbl2 = document.getElementById("moveFourLbl2");
let soulMoveLbl2 = document.getElementById("soulMoveLbl2");
let moveOneDmg2 = document.getElementById("moveOneDmg2");
let moveTwoDmg2 = document.getElementById("moveTwoDmg2");
let moveThreeDmg2 = document.getElementById("moveThreeDmg2");
let moveFourDmg2 = document.getElementById("moveFourDmg2");
let soulMoveDmg2 = document.getElementById("soulMoveDmg2");

let moveOneCrit1 = document.getElementById("moveOneCrit1");
let moveTwoCrit1 = document.getElementById("moveTwoCrit1");
let moveThreeCrit1 = document.getElementById("moveThreeCrit1");
let moveFourCrit1 = document.getElementById("moveFourCrit1");
let moveOneCrit2 = document.getElementById("moveOneCrit2");
let moveTwoCrit2 = document.getElementById("moveTwoCrit2");
let moveThreeCrit2 = document.getElementById("moveThreeCrit2");
let moveFourCrit2 = document.getElementById("moveFourCrit2");

let moveOneHits1 = document.getElementById("moveOneHits1");
let moveTwoHits1 = document.getElementById("moveTwoHits1");
let moveThreeHits1 = document.getElementById("moveThreeHits1");
let moveFourHits1 = document.getElementById("moveFourHits1");
let moveOneHits2 = document.getElementById("moveOneHits2");
let moveTwoHits2 = document.getElementById("moveTwoHits2");
let moveThreeHits2 = document.getElementById("moveThreeHits2");
let moveFourHits2 = document.getElementById("moveFourHits2");

let moveOneSwarm1 = document.getElementById("moveOneSwarm1");
let moveTwoSwarm1 = document.getElementById("moveTwoSwarm1");
let moveThreeSwarm1 = document.getElementById("moveThreeSwarm1");
let moveFourSwarm1 = document.getElementById("moveFourSwarm1");
let moveOneSwarm2 = document.getElementById("moveOneSwarm2");
let moveTwoSwarm2 = document.getElementById("moveTwoSwarm2");
let moveThreeSwarm2 = document.getElementById("moveThreeSwarm2");
let moveFourSwarm2 = document.getElementById("moveFourSwarm2");

let moveOneSnowball1 = document.getElementById("moveOneSnowball1");
let moveTwoSnowball1 = document.getElementById("moveTwoSnowball1");
let moveThreeSnowball1 = document.getElementById("moveThreeSnowball1");
let moveFourSnowball1 = document.getElementById("moveFourSnowball1");
let moveOneSnowball2 = document.getElementById("moveOneSnowball2");
let moveTwoSnowball2 = document.getElementById("moveTwoSnowball2");
let moveThreeSnowball2 = document.getElementById("moveThreeSnowball2");
let moveFourSnowball2 = document.getElementById("moveFourSnowball2");

let repeating1 = document.getElementById("repeating1");
let repeating2 = document.getElementById("repeating2");

let soulMove1;
let soulMove2;
let soulMovePower1;
let soulMovePower2;
let soulMoveType1;
let soulMoveType2;
let soulMoveMR1;
let soulMoveMR2;

let abilityBPDropdown = document.getElementById("abilityBPDropdown");
let itemBP = document.getElementById("itemBP");
let moveBPDropdown = document.getElementById("moveBPDropdown");
let moveBPDropdown2 = document.getElementById("moveBPDropdown2");
let moveBPDropdown3 = document.getElementById("moveBPDropdown3");
let moveBPDropdown4 = document.getElementById("moveBPDropdown4");
let moveBPEnergy = document.getElementById("moveBPEnergy");
let moveBPEnergy2 = document.getElementById("moveBPEnergy2");
let moveBPEnergy3 = document.getElementById("moveBPEnergy3");
let moveBPEnergy4 = document.getElementById("moveBPEnergy4");
let moveBPTimes = document.getElementById("moveBPTimes");
let moveBPTimes2 = document.getElementById("moveBPTimes2");
let moveBPTimes3 = document.getElementById("moveBPTimes3");
let moveBPTimes4 = document.getElementById("moveBPTimes4");
let moveBPResult = document.getElementById("moveBPResult");

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

let noWeather = document.getElementById("noWeather");
let rain = document.getElementById("rain");
let winds = document.getElementById("winds");
let fog = document.getElementById("fog");
let heat = document.getElementById("heat");
let storm = document.getElementById("storm");

let fungus = document.getElementById("fungus");
let cosmic = document.getElementById("cosmic");

let iceTrap1 = document.getElementById("iceTrap1");
let iceTrap2 = document.getElementById("iceTrap2");

let halfIce1 = document.getElementById("halfIce1");
let halfStyle1 = document.getElementById("halfStyle1");
let halfIce2 = document.getElementById("halfIce2");
let halfStyle2 = document.getElementById("halfStyle2");

let leftBarb0 = document.getElementById("leftBarb0");
let leftBarb1 = document.getElementById("leftBarb1");
let leftBarb2 = document.getElementById("leftBarb2");
let leftBarb3 = document.getElementById("leftBarb3");
let rightBarb0 = document.getElementById("rightBarb0");
let rightBarb1 = document.getElementById("rightBarb1");
let rightBarb2 = document.getElementById("rightBarb2");
let rightBarb3 = document.getElementById("rightBarb3");

let barbs = [0,0];

let wall1 = document.getElementById("wall1");
let wall2 = document.getElementById("wall2");

let shield1 = document.getElementById("shield1");
let shield2 = document.getElementById("shield2");

let enteredBtl1 = document.getElementById("enteredBtl1");
let enteredBtl2 = document.getElementById("enteredBtl2");

let status1 = document.getElementById("status1");
let status2 = document.getElementById("status2");

let diseased1 = document.getElementById("diseased1");
let diseased2 = document.getElementById("diseased2");

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

let buzzolen1 = document.getElementById("buzzolen1");
let buzzolen2 = document.getElementById("buzzolen2");

let hellstorm1 = document.getElementById("hellstorm1");
let hellstorm2 = document.getElementById("hellstorm2");

let bloodDrain1 = document.getElementById("bloodDrain1");
let bloodDrain2 = document.getElementById("bloodDrain2");

let softWater1 = document.getElementById("softWater1");
let softWater2 = document.getElementById("softWater2");

let teamwork1 = document.getElementById("teamwork1");
let teamwork2 = document.getElementById("teamwork2");

let overcharged1 = document.getElementById("overcharged1");
let overcharged2 = document.getElementById("overcharged2");

let dusk1 = document.getElementById("dusk1");
let dusk2 = document.getElementById("dusk2");

let dawn1 = document.getElementById("dawn1");
let dawn2 = document.getElementById("dawn2");

let guardian1 = document.getElementById("guardian1");
let guardian2 = document.getElementById("guardian2");

let coerce1 = document.getElementById("coerce1");
let coerce2 = document.getElementById("coerce2");
let coerce3 = document.getElementById("coerce3");

let motivational1 = document.getElementById("motivational1");
let motivational2 = document.getElementById("motivational2");
let motivational3 = document.getElementById("motivational3");

let tagTeam1 = document.getElementById("tagTeam1");
let tagTeam2 = document.getElementById("tagTeam2");

let currentHP1 = document.getElementById("currentHP1");
let currentHP2 = document.getElementById("currentHP2");

let totalHP1 = document.getElementById("totalHP1");
let totalHP2 = document.getElementById("totalHP2");

let percentHP1 = document.getElementById("percentHP1");
let percentHP2 = document.getElementById("percentHP2");

let currentNRG1 = document.getElementById("currentNRG1");
let currentNRG2 = document.getElementById("currentNRG2");

let totalNRG1 = document.getElementById("totalNRG1");
let totalNRG2 = document.getElementById("totalNRG2");

let percentNRG1 = document.getElementById("percentNRG1");
let percentNRG2 = document.getElementById("percentNRG2");

let singleDouble = document.getElementById("singleDouble");
let levelCheck = document.getElementById("levelCheck");
let gsbCheck = document.getElementById("gsbCheck");
levelCheck.value = "Level 50";

let energyRegen1 = document.getElementById("energyRegen1");
let energyRegen2 = document.getElementById("energyRegen2");

let dodgeCalc = "left";
let tankHazard1 = "none";
let tankHazard2 = "none";

let firstLoomian;
let hp1;
let energy1;
let atk1;
let def1;
let atkR1;
let defR1;
let spd1;
let tempAbility1;

let secondLoomian;
let hp2;
let energy2;
let atk2;
let def2;
let atkR2;
let defR2;
let spd2;
let tempAbility2;

let adjustmentCount = 0;
let getTempStats1;
let getTempStats2;

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
    currentNRG1.addEventListener("keyup", updatePercent);
    currentNRG2.addEventListener("keyup", updatePercent);

    percentHP1.addEventListener("keyup", updateNumber);
    percentHP2.addEventListener("keyup", updateNumber);
    percentNRG1.addEventListener("keyup", updateNumber);
    percentNRG2.addEventListener("keyup", updateNumber);

    currentHP1.addEventListener("change", update);
    currentHP2.addEventListener("change", update);
    currentNRG1.addEventListener("change", update);
    currentNRG2.addEventListener("change", update);

    percentHP1.addEventListener("change", update);
    percentHP2.addEventListener("change", update);
    percentNRG1.addEventListener("change", update);
    percentNRG2.addEventListener("change", update);

    currentHP1.value = hp1;
    currentHP2.value = hp2;
    currentNRG1.value = energy1;
    currentNRG2.value = energy2;
    updatePercent();
    update();
}

function saveCookie() {
    let json = JSON.stringify(sets);
    let encoded = pako.deflate(json, { to: "string" });
    localStorage.setItem("setData", btoa(encoded));

    document.cookie = "changelog1=true; expires=Mon, 1 Jan 2026 12:00:00 UTC";
    document.cookie = "changelog2=true; expires=Mon, 1 Jan 2000 12:00:00 UTC";

    if (darkMode.checked) {
        document.cookie = "darkMode=true; expires=Mon, 1 Jan 2026 12:00:00 UTC"
    }
    else {
        document.cookie = "darkMode=false; expires=Mon, 1 Jan 2026 12:00:00 UTC";
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
        if (loomians[loom].name == "Iron Fumble") {
            optG1.appendChild(new Option(loomians[loom].name + " (Sherbot)", loomians[loom].name));
        } else optG1.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown1.options[pokeDropdown1.options.length - 1].set = makeBlankSet(loomians[loom].name);

        let optG2 = document.createElement("optgroup");
        optG2.label = loomians[loom].name;
        pokeDropdown2.appendChild(optG2);
        if (loomians[loom].name == "Iron Fumble") {
            optG2.appendChild(new Option(loomians[loom].name + " (Sherbot)", loomians[loom].name));
        } else optG2.appendChild(new Option(loomians[loom].name + " (Blank Set)", loomians[loom].name));
        pokeDropdown2.options[pokeDropdown2.options.length - 1].set = makeBlankSet(loomians[loom].name)
    }

    for (let type in types) {
        let capitalized = capitalizeFirstLetter(type);
        primaryTypeDropdown1.options[primaryTypeDropdown1.options.length] = new Option(capitalized);
        primaryTypeDropdown2.options[primaryTypeDropdown2.options.length] = new Option(capitalized);
        bpType.options[bpType.options.length] = new Option(capitalized);

        secondaryTypeDropdown1.options[secondaryTypeDropdown1.options.length] = new Option(capitalized);
        secondaryTypeDropdown2.options[secondaryTypeDropdown2.options.length] = new Option(capitalized);
    }

    for (let ability in abilities) {
        abilityDropdown1.options[abilityDropdown1.options.length] = new Option(abilities[ability]);
        abilityDropdown2.options[abilityDropdown2.options.length] = new Option(abilities[ability]);
        abilityBPDropdown.options[abilityBPDropdown.options.length] = new Option(abilities[ability]);
    }

    for (let move in moves) {
        moveNames.push(moves[move].name);
    }

    for (let item in items) {
        item1.options[item1.options.length] = new Option(items[item]);
        item2.options[item2.options.length] = new Option(items[item]);
        itemBP.options[itemBP.options.length] = new Option(items[item]);
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
        moveBPDropdown.options[moveBPDropdown.options.length] = new Option(moveNames[move]);
        moveBPDropdown2.options[moveBPDropdown2.options.length] = new Option(moveNames[move]);
        moveBPDropdown3.options[moveBPDropdown3.options.length] = new Option(moveNames[move]);
        moveBPDropdown4.options[moveBPDropdown4.options.length] = new Option(moveNames[move]);
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

    document.getElementById("loom1Info").innerHTML = firstLoom.name + "'s moves (select one for more info)";
    document.getElementById("loom2Info").innerHTML = secondLoom.name + "'s moves (select one for more info)";

    if (updateBaseStats) loadBaseStats();
    loadStats();
    firstLoomian = firstLoom;
    secondLoomian = secondLoom;

    totalHP1.innerHTML = hp1;
    totalHP2.innerHTML = hp2;
    totalNRG1.innerHTML = energy1;
    totalNRG2.innerHTML = energy2;

    currentHP1.max = hp1;
    currentHP2.max = hp2;
    currentNRG1.max = energy1;
    currentNRG2.max = energy2;

    (currentHP1.value > hp1 ? currentHP1.value = hp1 : null);
    (currentHP2.value > hp2 ? currentHP2.value = hp2 : null);
    (currentNRG1.value > energy1 ? currentNRG1.value = energy1 : null);
    (currentNRG2.value > energy2 ? currentNRG2.value = energy2 : null);

    loadMoves(updatePower);
    detailedReport();

    updatePercent();
    addStats();

    if (abilityDropdown1.value == "Combustible" || abilityDropdown1.value == "Noxious Weeds" || abilityDropdown1.value == "Coursing Venom" || abilityDropdown1.value == "Prismatic" || abilityDropdown1.value == "Toxic Filter" || abilityDropdown1.value == "Boast" ||
        abilityDropdown1.value == "Dauntless" || abilityDropdown1.value == "Terrifying" || abilityDropdown1.value == "Petrifying" || abilityDropdown1.value == "Adorable" || abilityDropdown1.value == "Defensive Priority" || abilityDropdown1.value == "Analyze" ||
        abilityDropdown1.value == "Sob" || abilityDropdown1.value == "Disenchant") {
        immuneAbilityBoost1.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost1.style.visibility = "hidden";
        immuneAbilityBoost1.checked = false;
    }

    if (abilityDropdown2.value == "Combustible" || abilityDropdown2.value == "Noxious Weeds" || abilityDropdown2.value == "Coursing Venom" || abilityDropdown2.value == "Prismatic" || abilityDropdown2.value == "Toxic Filter" || abilityDropdown2.value == "Boast" ||
        abilityDropdown2.value == "Dauntless" || abilityDropdown2.value == "Terrifying" || abilityDropdown2.value == "Petrifying" || abilityDropdown2.value == "Adorable" || abilityDropdown2.value == "Defensive Priority" || abilityDropdown2.value == "Analyze" ||
        abilityDropdown2.value == "Sob" || abilityDropdown2.value == "Disenchant") {
        immuneAbilityBoost2.style.visibility = "visible";
    }
    else {
        immuneAbilityBoost2.style.visibility = "hidden";
        immuneAbilityBoost2.checked = false;
    }

    if (abilityDropdown1.value == "Recurrent" || abilityDropdown1.value == "Wail") repeating1.style.display = "inline";
    else {
        repeating1.style.display = "none";
        repeating1.value = 0;
    }

    if (abilityDropdown2.value == "Recurrent" || abilityDropdown2.value == "Wail") repeating2.style.display = "inline";
    else {
        repeating2.style.display = "none";
        repeating2.value = 0;
    }

    if (status1.value == "diseased") {
        diseased1.style.visibility = "visible";
    } else {
        diseased1.style.visibility = "hidden";
        diseased1.value = "1/16";
    }
    if (status2.value == "diseased") {
        diseased2.style.visibility = "visible";
    } else {
        diseased2.style.visibility = "hidden";
        diseased2.value = "1/16";
    }
}

function addStats() {
    let baseTotal1 = parseInt(baseHP1.value) + parseInt(baseEnergy1.value) + parseInt(baseAtk1.value) + parseInt(baseDef1.value) + parseInt(baseAtkR1.value) + parseInt(baseDefR1.value) + parseInt(baseSpd1.value);
    let baseTotal2 = parseInt(baseHP2.value) + parseInt(baseEnergy2.value) + parseInt(baseAtk2.value) + parseInt(baseDef2.value) + parseInt(baseAtkR2.value) + parseInt(baseDefR2.value) + parseInt(baseSpd2.value);
    bst1.innerHTML = "Total: " + baseTotal1;
    bst2.innerHTML = "Total: " + baseTotal2;
}

function updateItem(item) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    if (item == "item1") {
        if (item1.value == "Thunder Orb" && !firstLoom.types.includes("Electric")) status1.value = "paralasis";
        else if (item1.value == "Volcanic Ash" && !firstLoom.types.includes("Fire")) status1.value = "burned";
        else if (item1.value == "Dry Ice" && !firstLoom.types.includes("Ice")) status1.value = "freezing";
        else if (item1.value == "Virulent Fang" && !firstLoom.types.includes("Toxic")) status1.value = "diseased";
        else status1.value = "healthy";
    } else if (item == "item2") {
        if (item2.value == "Thunder Orb" && !secondLoom.types.includes("Electric")) status2.value = "paralasis";
        else if (item2.value == "Volcanic Ash" && !secondLoom.types.includes("Fire")) status2.value = "burned";
        else if (item2.value == "Dry Ice" && !secondLoom.types.includes("Ice")) status2.value = "freezing";
        else if (item2.value == "Virulent Fang" && !secondLoom.types.includes("Toxic")) status2.value = "diseased";
        else status2.value = "healthy";
    }
    update();
}

function updateAbility(ability) {
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    let weatherAbility = false;

    if (ability1 == "Rain Summon" || ability2 == "Rain Summon") {
        rain.checked = true;
        weatherAbility = true;
    }    
    if (ability1 == "Heat Summon" || ability2 == "Heat Summon") {
        heat.checked = true;
        weatherAbility = true;
    }    
    if (ability1 == "Wind Summon" || ability2 == "Wind Summon") {
        winds.checked = true;
        weatherAbility = true;
    }    
    if (ability1 == "Fog Summon" || ability2 == "Fog Summon") {
        fog.checked = true;
        weatherAbility = true;
    }    
    if (ability1 == "Thunder Summon" || ability2 == "Thunder Summon") {
        storm.checked = true;
        weatherAbility = true;
    }    
    if (ability1 == "Cosmic Pressure" || ability2 == "Cosmic Pressure") {
        cosmic.checked = true;
        noWeather.checked = true;
    }
    if (cosmic.checked && !(ability1 == "Cosmic Pressure" || ability2 == "Cosmic Pressure") && weatherAbility) cosmic.checked = false;
    else if (cosmic.checked && !(ability1 == "Cosmic Pressure" || ability2 == "Cosmic Pressure") && !weatherAbility) noWeather.checked = true;
    if (ability1 == "Mycotic" || ability2 == "Mycotic") fungus.checked = true;

    update();
}

$(".dmg").change(function() {
    let moveName = $(this).val();
    let move = findMove(moveName);
    let moveGroupObj = $(this).parent();
    if (move.hits) {
        moveGroupObj.children(".move-hits").show();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
        if (move.name == "Winter's Fury") {
            moveGroupObj.children(".move-hits").children(".fury").hide();
            moveGroupObj.children(".move-hits").children(".dart").hide();
        } else if (move.name !=  "Dart Burst" && move.name != "Winter's Fury") {
            moveGroupObj.children(".move-hits").children(".fury").show();
            moveGroupObj.children(".move-hits").children(".dart").hide();
        } else if (move.name == "Dart Burst") {
            moveGroupObj.children(".move-hits").children(".fury").show();
            moveGroupObj.children(".move-hits").children(".dart").show();
        }
        let loomi = $(this).closest(".loomian-info");
        let moveHits = (loomi.find(".trait").val() == "Capoeira") ? 5 : 3;
        moveGroupObj.children(".move-hits").val(moveHits + " hits");
        if (move.name == "Pepper Burst" || move.name == "Double Beat" || move.name == "Rapid Fire" || move.name == "Double Whack") moveGroupObj.children(".move-hits").hide();
    } else if (move.name == "Expert Onslaught" || move.name == "Stampede") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".swarm").show();
        moveGroupObj.children(".snowball").hide();
        moveGroupObj.children(".swarm").val(1 + " loom");
        if (move.name == "Expert Onslaught") {
            moveGroupObj.children(".swarm").children(".onslaught").show();
            moveGroupObj.children(".swarm").children(".stampede").hide();
        } else {
            moveGroupObj.children(".swarm").children(".onslaught").hide();
            moveGroupObj.children(".swarm").children(".stampede").show();
        }    
    } else if (move.name == "Snowdozer") {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").show();
        moveGroupObj.children(".snowball").val(1);
    } else {
        moveGroupObj.children(".move-hits").hide();
        moveGroupObj.children(".swarm").hide();
        moveGroupObj.children(".snowball").hide();
    }
});

/* Click-to-copy function */
$("#detailedResult").click(function () {
    navigator.clipboard.writeText($("#detailedResult").text()).then(function () {
        document.getElementById('tooltipText').style.visibility = 'visible';
        setTimeout(function () {
            document.getElementById('tooltipText').style.visibility = 'hidden';
        }, 1500);
    });
});

function updateLevel() {
    if (levelCheck.value == "Level 5") {
        level1.value = 5;
        level2.value = 5;
    } else if (levelCheck.value == "Level 50") {
        level1.value = 50;
        level2.value = 50;
    } else {
        level1.value = 100;
        level2.value = 100;
    }
    update();
}

function updateFormat() {
    let collection = document.getElementsByClassName("doubles");
    let field = document.getElementsByClassName("field")[0];
    let fieldTraps = document.getElementsByClassName("fieldTraps")[0];

    if (singleDouble.value == "singles") {
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = 'none';
        }
        field.style.height = "560px";
        fieldTraps.style.height = "57%";
    }    
    else {
        for (let i = 0; i < collection.length; i++) {
            collection[i].style.display = 'inline-block';
        }
        field.style.height = "700px";
        fieldTraps.style.height = "66%";
    }

    update();
}

function changeButton(button) {
    let side;
    if (button == halfIce1) {
        if (iceTrap1.checked) {
            iceTrap1.checked = false;
            halfIce1.checked = true;
        }
        side = 1;
    } else if (button == halfIce2) {
        if (iceTrap2.checked) {
            iceTrap2.checked = false;
            halfIce2.checked = true;
        }
        side = 2
    } else if (button == iceTrap1) {
        if (halfIce1.checked) {
            iceTrap1.checked = true;
            halfIce1.checked = false;
        }
        side = 1
    } else if (button == iceTrap2) {
        if (halfIce2.checked) {
            iceTrap2.checked = true;
            halfIce2.checked = false;
        }  
        side = 2  
    }
    updateHazards("traps", side);
}

function updateHazards(hazard, side) {
    if (side == 1) tankHazard1 = hazard;
    if (side == 2) tankHazard2 = hazard;
    console.log(tankHazard1, tankHazard2);
    update();
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

        level1.value = levelCheck.value.split(' ')[1];

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
        if (firstLoom.ability) {
            abilityDropdown1.value = firstLoom.ability;
        }
        item1.value = (set1.item == undefined ? "none" : set1.item);
        if (firstLoom.item) item1.value = firstLoom.item;
        updateAbility(abilityDropdown1.value);
        updateItem('item1');

        primaryTypeDropdown1.value = loomians[pokeDropdown1.value.toLowerCase()].types[0];
        secondaryTypeDropdown1.value = (loomians[pokeDropdown1.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown1.value.toLowerCase()].types[1] : "None");

        if (set1.setName != "Blank Set" && set1.builtIn == undefined) {
            document.getElementById("deleteSet1").style.visibility = "visible";
        }
        else {
            document.getElementById("deleteSet1").style.visibility = "hidden";
        }

        baseHP1.value = firstLoom.baseStats.hp;
        baseEnergy1.value = firstLoom.baseStats.energy;
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
        if (gsbCheck.checked && firstLoom.gsbStats) {
            baseHP1.value = firstLoom.gsbStats.hp;
            baseEnergy1.value = firstLoom.gsbStats.energy;
            baseAtk1.value = firstLoom.gsbStats.attack;
            baseDef1.value = firstLoom.gsbStats.defense;
            baseAtkR1.value = firstLoom.gsbStats.attackR;
            baseDefR1.value = firstLoom.gsbStats.defenseR;
            baseSpd1.value = firstLoom.gsbStats.speed;
            addStats();
        }
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

        level2.value = levelCheck.value.split(' ')[1];

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
        if (secondLoom.ability) {
            abilityDropdown2.value = secondLoom.ability;
        }    
        item2.value = (set2.item == undefined ? "none" : set2.item);
        if (secondLoom.item) item2.value = secondLoom.item;
        updateAbility(abilityDropdown2.value);
        updateItem('item2');

        primaryTypeDropdown2.value = loomians[pokeDropdown2.value.toLowerCase()].types[0];
        secondaryTypeDropdown2.value = (loomians[pokeDropdown2.value.toLowerCase()].types[1] != undefined ? loomians[pokeDropdown2.value.toLowerCase()].types[1] : "None");

        if (set2.setName != "Blank Set" && set2.builtIn == undefined) {
            document.getElementById("deleteSet2").style.visibility = "visible";
        }
        else {
            document.getElementById("deleteSet2").style.visibility = "hidden";
        }

        baseHP2.value = secondLoom.baseStats.hp;
        baseEnergy2.value = secondLoom.baseStats.energy;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
        if (gsbCheck.checked && secondLoom.gsbStats) {
            baseHP2.value = secondLoom.gsbStats.hp;
            baseEnergy2.value = secondLoom.gsbStats.energy;
            baseAtk2.value = secondLoom.gsbStats.attack;
            baseDef2.value = secondLoom.gsbStats.defense;
            baseAtkR2.value = secondLoom.gsbStats.attackR;
            baseDefR2.value = secondLoom.gsbStats.defenseR;
            baseSpd2.value = secondLoom.gsbStats.speed;
            addStats();
        }
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
    let nrgBar1 = document.getElementById("nrgBar1");
    let nrgBar2 = document.getElementById("nrgBar2");

    let percent1 = parseInt(percentHP1.value);
    let percent2 = parseInt(percentHP2.value);
    let nrgPercent1 = parseInt(percentNRG1.value);
    let nrgPercent2 = parseInt(percentNRG2.value);

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
    nrgBar1.style = "background: linear-gradient(to right, rgba(0,150,255) " + nrgPercent1 + "%, white 0%);";
    nrgBar2.style = "background: linear-gradient(to right, rgba(0,150,255) " + nrgPercent2 + "%, white 0%);";
}

function updatePercent() {
    percentHP1.value = Math.floor(currentHP1.value / totalHP1.innerHTML * 100);
    percentHP2.value = Math.floor(currentHP2.value / totalHP2.innerHTML * 100);
    if (totalNRG1.innerHTML == 0) {
        percentNRG1.value = 0;
    } else percentNRG1.value = Math.floor(currentNRG1.value / totalNRG1.innerHTML * 100);
    if (totalNRG2.innerHTML == 0) {
        percentNRG2.value = 0;
    } else percentNRG2.value = Math.floor(currentNRG2.value / totalNRG2.innerHTML * 100);

    updateHealthBar();
}

function updateNumber() {
    currentHP1.value = Math.ceil(totalHP1.innerHTML * percentHP1.value / 100);
    currentHP2.value = Math.ceil(totalHP2.innerHTML * percentHP2.value / 100);
    currentNRG1.value = Math.ceil(totalNRG1.innerHTML * percentNRG1.value / 100);
    currentNRG2.value = Math.ceil(totalNRG2.innerHTML * percentNRG2.value / 100);

    updateHealthBar();
}

function loadBaseStats(side) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    tempAbility1 = abilities.find((x) => x == abilityDropdown1.value);
    tempAbility2 = abilities.find((x) => x == abilityDropdown2.value);
    
    if (side == 1 || side == undefined) {
        baseHP1.value = firstLoom.baseStats.hp;
        baseEnergy1.value = firstLoom.baseStats.energy;
        baseAtk1.value = firstLoom.baseStats.attack;
        baseDef1.value = firstLoom.baseStats.defense;
        baseAtkR1.value = firstLoom.baseStats.attackR;
        baseDefR1.value = firstLoom.baseStats.defenseR;
        baseSpd1.value = firstLoom.baseStats.speed;
        if (ability1 == "Idiosyncratic") {
            baseAtk1.value = firstLoom.baseStats.attackR;
            baseDef1.value = firstLoom.baseStats.defenseR;
            baseAtkR1.value = firstLoom.baseStats.attack;
            baseDefR1.value = firstLoom.baseStats.defense;
        }
        if (gsbCheck.checked && firstLoom.gsbStats) {
            baseHP1.value = firstLoom.gsbStats.hp;
            baseEnergy1.value = firstLoom.gsbStats.energy;
            baseAtk1.value = firstLoom.gsbStats.attack;
            baseDef1.value = firstLoom.gsbStats.defense;
            baseAtkR1.value = firstLoom.gsbStats.attackR;
            baseDefR1.value = firstLoom.gsbStats.defenseR;
            baseSpd1.value = firstLoom.gsbStats.speed;
            if (ability1 == "Idiosyncratic") {
                baseAtk1.value = firstLoom.gsbStats.attackR;
                baseDef1.value = firstLoom.gsbStats.defenseR;
                baseAtkR1.value = firstLoom.gsbStats.attack;
                baseDefR1.value = firstLoom.gsbStats.defense;
            }
        }
    }
    if (side == 2 || side == undefined) {
        baseHP2.value = secondLoom.baseStats.hp;
        baseEnergy2.value = secondLoom.baseStats.energy;
        baseAtk2.value = secondLoom.baseStats.attack;
        baseDef2.value = secondLoom.baseStats.defense;
        baseAtkR2.value = secondLoom.baseStats.attackR;
        baseDefR2.value = secondLoom.baseStats.defenseR;
        baseSpd2.value = secondLoom.baseStats.speed;
        if (ability2 == "Idiosyncratic") {
            baseAtk2.value = secondLoom.baseStats.attackR;
            baseDef2.value = secondLoom.baseStats.defenseR;
            baseAtkR2.value = secondLoom.baseStats.attack;
            baseDefR2.value = secondLoom.baseStats.defense;
        }
        if (gsbCheck.checked && secondLoom.gsbStats) {
            baseHP2.value = secondLoom.gsbStats.hp;
            baseEnergy2.value = secondLoom.gsbStats.energy;
            baseAtk2.value = secondLoom.gsbStats.attack;
            baseDef2.value = secondLoom.gsbStats.defense;
            baseAtkR2.value = secondLoom.gsbStats.attackR;
            baseDefR2.value = secondLoom.gsbStats.defenseR;
            baseSpd2.value = secondLoom.gsbStats.speed;
            if (ability2 == "Idiosyncratic") {
                baseAtk2.value = secondLoom.gsbStats.attackR;
                baseDef2.value = secondLoom.gsbStats.defenseR;
                baseAtkR2.value = secondLoom.gsbStats.attack;
                baseDefR2.value = secondLoom.gsbStats.defense;
            }
        }
    }
}

function loadMoves(updatePower = false) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let firstSoul = firstLoom.soulMove;
    let secondSoul = secondLoom.soulMove;

    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);
    let moveBreakpoint = findMove(moveBPDropdown.value);
    let moveBreakpoint2 = findMove(moveBPDropdown2.value);
    let moveBreakpoint3 = findMove(moveBPDropdown3.value);
    let moveBreakpoint4 = findMove(moveBPDropdown4.value);

    if (firstSoul) {
        soulMove1 = findMove(firstSoul);
        soulMoveLbl1.style.display = "inline-block";
        soulMoveDmg1.style.display = "inline";
    } else {
        soulMove1 = findMove("(No Move)");
        soulMoveLbl1.style.display = "none";
        soulMoveDmg1.style.display = "none";
    }
    if (secondSoul) {
        soulMove2 = findMove(secondSoul);
        soulMoveLbl2.style.display = "inline-block";
        soulMoveDmg2.style.display = "inline";
    } else {
        soulMove2 = findMove("(No Move)");
        soulMoveLbl2.style.display = "none";
        soulMoveDmg2.style.display = "none";
    }

    if (updatePower) {
        moveOnePower1.value = moveOne1.power;
        moveTwoPower1.value = moveTwo1.power;
        moveThreePower1.value = moveThree1.power;
        moveFourPower1.value = moveFour1.power;
        moveOnePower2.value = moveOne2.power;
        moveTwoPower2.value = moveTwo2.power;
        moveThreePower2.value = moveThree2.power;
        moveFourPower2.value = moveFour2.power;
        soulMovePower1 = soulMove1.power;
        soulMovePower2 = soulMove2.power;
    }

    moveOneType1.value = moveOne1.type;
    moveTwoType1.value = moveTwo1.type;
    moveThreeType1.value = moveThree1.type;
    moveFourType1.value = moveFour1.type;
    moveOneType2.value = moveOne2.type;
    moveTwoType2.value = moveTwo2.type;
    moveThreeType2.value = moveThree2.type;
    moveFourType2.value = moveFour2.type;
    soulMoveType1 = soulMove1.type;
    soulMoveType2 = soulMove2.type;

    checkEnergy(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2, moveBreakpoint, moveBreakpoint2, moveBreakpoint3, moveBreakpoint4);

    moveOneMR1.value = moveOne1.mr;
    moveTwoMR1.value = moveTwo1.mr;
    moveThreeMR1.value = moveThree1.mr;
    moveFourMR1.value = moveFour1.mr;
    moveOneMR2.value = moveOne2.mr;
    moveTwoMR2.value = moveTwo2.mr;
    moveThreeMR2.value = moveThree2.mr;
    moveFourMR2.value = moveFour2.mr;
    soulMoveMR1 = soulMove1.mr;
    soulMoveMR2 = soulMove2.mr;

    moveOneLbl1.innerHTML = moveOne1.name;
    moveTwoLbl1.innerHTML = moveTwo1.name;
    moveThreeLbl1.innerHTML = moveThree1.name;
    moveFourLbl1.innerHTML = moveFour1.name;
    moveOneLbl2.innerHTML = moveOne2.name;
    moveTwoLbl2.innerHTML = moveTwo2.name;
    moveThreeLbl2.innerHTML = moveThree2.name;
    moveFourLbl2.innerHTML = moveFour2.name;
    soulMoveLbl1.innerHTML = soulMove1.name;
    soulMoveLbl2.innerHTML = soulMove2.name;

    calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2, soulMove1, soulMove2);
}

function loadStats() {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let firstItem = item1.value;
    let secondItem = item2.value;
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    let posNat1 = document.getElementById("posNat1").value;
    let negNat1 = document.getElementById("negNat1").value;
    let posNat2 = document.getElementById("posNat2").value;
    let negNat2 = document.getElementById("negNat2").value;
    let veryNat1 = document.getElementById("veryNat1").value;
    let veryNat2 = document.getElementById("veryNat2").value;

    let wasMaxHP1 = (currentHP1.value == hp1 ? true : false);
    let wasMaxHP2 = (currentHP2.value == hp2 ? true : false);
    let wasMaxNRG1 = (currentNRG1.value == energy1 ? true : false);
    let wasMaxNRG2 = (currentNRG2.value == energy2 ? true : false);

    hp1 = calculateStat(baseHP1.value, hpIV1.value, hpEV1.value, level1.value, true, undefined, undefined, undefined, undefined);
    energy1 = calculateStat(baseEnergy1.value, energyIV1.value, energyEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, undefined, undefined, true);
    atk1 = calculateStat(baseAtk1.value, atkIV1.value, atkEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "AttackM");
    def1 = calculateStat(baseDef1.value, defIV1.value, defEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "DefenseM");
    atkR1 = calculateStat(baseAtkR1.value, atkRIV1.value, atkREV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "AttackR");
    defR1 = calculateStat(baseDefR1.value, defRIV1.value, defREV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "DefenseR");
    spd1 = calculateStat(baseSpd1.value, spdIV1.value, spdEV1.value, level1.value, undefined, posNat1, negNat1, veryNat1, "Speed");
    if (firstLoom.name == "Spirivii" || firstLoom.name == "Eidohusk" || firstLoom.name == "Harvesect") energy1 = 0;
    if (firstLoom.name == "Mistlebud" || firstLoom.name == "Hollibunch") atkR1 = 0;

    hp2 = calculateStat(baseHP2.value, hpIV2.value, hpEV2.value, level2.value, true, undefined, undefined, undefined, undefined);
    energy2 = calculateStat(baseEnergy2.value, energyIV2.value, energyEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, undefined, undefined, true);
    atk2 = calculateStat(baseAtk2.value, atkIV2.value, atkEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "AttackM");
    def2 = calculateStat(baseDef2.value, defIV2.value, defEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "DefenseM");
    atkR2 = calculateStat(baseAtkR2.value, atkRIV2.value, atkREV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "AttackR");
    defR2 = calculateStat(baseDefR2.value, defRIV2.value, defREV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "DefenseR");
    spd2 = calculateStat(baseSpd2.value, spdIV2.value, spdEV2.value, level2.value, undefined, posNat2, negNat2, veryNat2, "Speed");
    if (secondLoom.name == "Spirivii" || secondLoom.name == "Eidohusk" || secondLoom.name == "Harvesect") energy2 = 0;
    if (secondLoom.name == "Mistlebud" || secondLoom.name == "Hollibunch") atkR2 = 0;
    
    if (firstLoomian && firstLoomian != firstLoom) {
        atkStages1.value = "--";
        defStages1.value = "--";
        atkRStages1.value = "--";
        defRStages1.value = "--";
        spdStages1.value = "--";
        status1.value = "healthy";
    } 
    if (secondLoomian && secondLoomian != secondLoom) {
        atkStages2.value = "--";
        defStages2.value = "--";
        atkRStages2.value = "--";
        defRStages2.value = "--";
        spdStages2.value = "--";
        status2.value = "healthy";
    }

    (wasMaxHP1 ? currentHP1.value = hp1 : null);
    (wasMaxHP2 ? currentHP2.value = hp2 : null);
    (wasMaxNRG1 ? currentNRG1.value = energy1 : null);
    (wasMaxNRG2 ? currentNRG2.value = energy2 : null);
    if (ability1 == "Festive Spirit") atkR1 = currentNRG1.value;
    if (ability2 == "Festive Spirit") atkR2 = currentNRG2.value;

    getTempStats1 = {energy: energy1, atk: atk1, def: def1, atkR: atkR1, defR: defR1, spd: spd1};
    getTempStats2 = {energy: energy2, atk: atk2, def: def2, atkR: atkR2, defR: defR2, spd: spd2};
    
    checkStages();

    let multi = 1;

    statHP1.innerHTML = hp1;
    statEnergy1.innerHTML = energy1;
    energyRegen1.innerHTML = "(+" + Math.round(energy1 / 20) + ")";
    statAtk1.innerHTML = Math.floor(atk1 * multi);
    multi = 1;
    if (ability1 == "Trash Armor" || ability1 == "Hard Candy" || ability1 == "Safety Pot") multi *= 1.5;
    if (firstItem == "Drop of Youth" && firstLoom.finalEvo == false) multi *= 1.4;
    if (firstItem == "Heavy Armor") multi *= 1.2;
    statDef1.innerHTML = Math.floor(def1 * multi);
    multi = 1;
    if (firstLoom.name == "Shawchi" && firstItem == "Mystic Wand") multi *= 1.5;
    statAtkR1.innerHTML = Math.floor(atkR1 * multi);
    multi = 1;
    if (ability1 == "Slick Shell") multi *= 2;
    if (ability1 == "Safety Pot") multi *= 1.5;
    if (firstItem == "Drop of Youth" && firstLoom.finalEvo == false) multi *= 1.4;
    if (firstItem == "Heavy Shield") multi *= 1.2;
    statDefR1.innerHTML = Math.floor(defR1 * multi);
    multi = 1;
    if (firstItem == "Specialty Boots") multi *= 1.5;
    if (status1.value == "paralasis" && !firstLoom.types.includes("Electric") && ability1 != "Thriving Pace") multi *= 0.5;
    if ((firstLoom.types.includes("Air") || ability1 == "Adaptable") && winds.checked) multi *= 1.25;
    if ((ability1 == "Thriving Pace" && status1.value != "healthy") || ability1 == "Rush Hour") multi *= 1.5;
    if ((ability1 == "Sugar Rush" && firstItem == "None") || (ability1 == "Rain Rush" && rain.checked) || (ability1 == "Prowler" && fog.checked) || (ability1 == "Hotfoot" && heat.checked) || (ability1 == "Overclock" && storm.checked)) multi *= 2;
    if (ability1 == "Safety Pot") multi *= 2/3;
    statSpd1.innerHTML = Math.floor(spd1 * multi);
    multi = 1;

    statHP2.innerHTML = hp2;
    statEnergy2.innerHTML = energy2;
    energyRegen2.innerHTML = "(+" + Math.round(energy2 / 20) + ")";
    statAtk2.innerHTML = Math.floor(atk2 * multi);
    multi = 1;
    if (ability2 == "Trash Armor" || ability2 == "Hard Candy" || ability2 == "Safety Pot") multi *= 1.5;
    if (secondItem == "Drop of Youth" && secondLoom.finalEvo == false) multi *= 1.4;
    if (secondItem == "Heavy Armor") multi *= 1.2;
    statDef2.innerHTML = Math.floor(def2 * multi);
    multi = 1;
    if (secondLoom.name == "Shawchi" && secondItem == "Mystic Wand") multi *= 1.5;
    statAtkR2.innerHTML = Math.floor(atkR2 * multi);
    multi = 1;
    if (ability2 == "Slick Shell") multi *= 2;
    if (ability2 == "Safety Pot") multi *= 1.5;
    if (secondItem == "Drop of Youth" && secondLoom.finalEvo == false) multi *= 1.4;
    if (secondItem == "Heavy Shield") multi *= 1.2;
    statDefR2.innerHTML = Math.floor(defR2 * multi);
    multi = 1;
    if (secondItem == "Specialty Boots") multi *= 1.5;
    if (status2.value == "paralasis" && !secondLoom.types.includes("Electric") && ability2 != "Thriving Pace") multi *= 0.5;
    if ((secondLoom.types.includes("Air" || ability2 == "Adaptable")) && winds.checked) multi *= 1.25;
    if ((ability2 == "Thriving Pace" && status2.value != "healthy") || ability2 == "Rush Hour") multi *= 1.5;
    if ((ability2 == "Sugar Rush" && secondItem == "None") || (ability2 == "Rain Rush" && rain.checked) || (ability2 == "Prowler" && fog.checked) || (ability2 == "Hotfoot" && heat.checked) || (ability2 == "Overclocked" && storm.checked)) multi *= 2;
    if (ability2 == "Safety Pot") multi *= 2/3;
    statSpd2.innerHTML = Math.floor(spd2 * multi);
    multi = 1;
}

function calculateStat(base, IV, EV, level, isHP = false, posNat, negNat, veryNat, name, rest = false, isEnergy = false) {
    let stat;

    IV = parseInt(IV);
    level = parseInt(level);
    if (isHP) {
        return Math.floor((2 * base + IV + Math.floor(EV / 4)) * level / 100) + level + 10;
    }

    if (isEnergy) {
        stat = Math.floor(Math.floor(2 * base + IV + Math.floor(EV / 4)) * (level == 5 ? 50 : level) / 65 + 80);
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
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);

    let tempDefStage1 = (defStages1.value != "--" ? parseInt(defStages1.value) - rest1 : 0 - rest1);
    let tempDefStage2 = (defStages2.value != "--" ? parseInt(defStages2.value) - rest2 : 0 - rest2);

    let tempDefRStage1 = (defRStages1.value != "--" ? parseInt(defRStages1.value) - rest1 : 0 - rest1);
    let tempDefRStage2 = (defRStages2.value != "--" ? parseInt(defRStages2.value) - rest2 : 0 - rest2);

    let tempAtkStage1 = (atkStages1.value != "--" ? parseInt(atkStages1.value) : 0);
    let tempAtkStage2 = (atkStages2.value != "--" ? parseInt(atkStages2.value) : 0);

    if (tempAtkStage1 > 0) {
        atk1 = Math.floor(atk1 * (1 + 0.5 * tempAtkStage1));
    }
    else if (tempAtkStage1 < 0) {
        atk1 = Math.max(1, Math.floor(atk1 * (2 / (2 - tempAtkStage1))));
    }

    if (tempDefStage1 > 0) {
        def1 = Math.floor(def1 * (1 + 0.5 * tempDefStage1));
    }
    else if (tempDefStage1 < 0) {
        def1 = Math.max(1, Math.floor(def1 * (2 / (2 - tempDefStage1))));
    }

   if (atkRStages1.value != "--" && parseInt(atkRStages1.value) > 0) {
        atkR1 = Math.floor(atkR1 * (1 + 0.5 * parseInt(atkRStages1.value)));
    }
    else if (atkRStages1.value != "--" && parseInt(atkRStages1.value) < 0) {
        atkR1 = Math.max(1, Math.floor(atkR1 * (2 / (2 - parseInt(atkRStages1.value)))));
    }

    if (tempDefRStage1 > 0) {
        defR1 = Math.floor(defR1 * (1 + 0.5 * tempDefRStage1));
    }
    else if (tempDefRStage1 < 0) {
        defR1 = Math.max(1, Math.floor(defR1 * (2 / (2 - tempDefRStage1))));
    }

    if (spdStages1.value != "--" && parseInt(spdStages1.value) > 0) {
        spd1 = Math.floor(spd1 * (1 + 0.5 * parseInt(spdStages1.value)));
    }
    else if (spdStages1.value != "--" && parseInt(spdStages1.value) < 0) {
        spd1 = Math.max(1, Math.floor(spd1 * (2 / (2 - parseInt(spdStages1.value)))));
    }

    if (tempAtkStage2 > 0) {
        atk2 = Math.floor(atk2 * (1 + 0.5 * tempAtkStage2));
    }
    else if (tempAtkStage2 < 0) {
        atk2 = Math.max(1, Math.floor(atk2 * (2 / (2 - tempAtkStage2))));
    }

    if (tempDefStage2 > 0) {
        def2 = Math.floor(def2 * (1 + 0.5 * tempDefStage2));
    }
    else if (tempDefStage2 < 0) {
        def2 = Math.max(1, Math.floor(def2 * (2 / (2 - tempDefStage2))));
    }

    if (atkRStages2.value != "--" && parseInt(atkRStages2.value) > 0) {
        atkR2 = Math.floor(atkR2 * (1 + 0.5 * parseInt(atkRStages2.value)));
    }
    else if (atkRStages2.value != "--" && parseInt(atkRStages2.value) < 0) {
        atkR2 = Math.max(1, Math.floor(atkR2 * (2 / (2 - parseInt(atkRStages2.value)))));
    }

    if (tempDefRStage2 > 0) {
        defR2 = Math.floor(defR2 * (1 + 0.5 * tempDefRStage2));
    }
    else if (tempDefRStage2 < 0) {
        defR2 = Math.max(1, Math.floor(defR2 * (2 / (2 - tempDefRStage2))));
    }

    if (spdStages2.value != "--" && parseInt(spdStages2.value) > 0) {
        spd2 = Math.floor(spd2 * (1 + 0.5 * parseInt(spdStages2.value)));
    }
    else if (spdStages2.value != "--" && parseInt(spdStages2.value) < 0) {
        spd2 = Math.max(1, Math.floor(spd2 * (2 / (2 - parseInt(spdStages2.value)))));
    }
}

function battleAdjustments(move, ability1, ability2, stuffUsed, atk, def, boastAttack, analyzeDefs, tempType, abilityCheck1, abilityCheck2, crit, firstHit, hitConfirm, foulHit, energyCurrent) {
    //Grabbing unboosted stats and what boosts are currently in the calc.
    let baseAttack;
    if (ability1 == "Festive Spirit" && atk.name == "AttackR" && move.mr1 == "Ranged Attack") baseAttack = energyCurrent;
    else baseAttack = calculateStat(atk.base, atk.iv.value, atk.ev.value, atk.level, undefined, atk.posNat, atk.negNat, atk.veryNat, atk.name);
    let baseDefense = calculateStat(def.base, def.iv.value, def.ev.value, def.level, undefined, def.posNat, def.negNat, def.veryNat, def.name);
    let atkStage = (!atk.stage ? 0 : atk.stage);
    let defStage = (!def.stage ? 0 : def.stage);
    let moveMod;

    //Counting what hit this is during the calc process; 0 being the first hit.
    adjustmentCount += 1;
    if (firstHit) adjustmentCount = 0;
    let moveAdjustmentCount = adjustmentCount;

    //Checks for moves that affect the currently used offensive stat and adjusts subsequent hits' offensive stat
    if (move.stat && move.stat.battle == "Offense" && move.stat.stat == atk.name && !(move.secondaryEffect && ability1 == "Brute Force")) {
        moveMod = (ability1 == "Anomaly" ? move.stat.amount * -1 : move.stat.amount);
        if (ability1 == "Staunch" && move.stat.amount < 0) {
            moveMod = 0;
            stuffUsed.ability1 = ability1;
        }
        if (move.stat.first) moveAdjustmentCount += 1;

        atkStage = (moveMod < 0 ? Math.max(atkStage + moveAdjustmentCount * moveMod, -6) : Math.min(atkStage + moveAdjustmentCount * moveMod, 6));

        if (ability1 == "One of Many" && moveMod < 0) {
            if (foulHit && atkStage < -1) atkStage = -1;
            else if (!foulHit && atkStage < 0) atkStage = 0;
            stuffUsed.ability1 = ability1;
        }

        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Protective Shell") atk.atk = baseAttack;
        if (firstHit && ability1 == "Anomaly") stuffUsed.ability1 = ability1;
    }

    //Checking for attack increasing abilities that are manually checked and adjusts subsequent hits' offensive stat
    if (((ability1 == "Dauntless" || ability1 == "Boast" || ability1 == "Analyze") && abilityCheck1)) {
        if (ability1 == "Dauntless" && move.mr1 == "Melee Attack" && atk.name == "AttackM") moveMod = 1;
        if (ability1 == "Boast" && move.mr1 == "Melee Attack" && atk.name == "AttackM") moveMod = (atk.atk > boastAttack ? 1 : -1);
        if (ability1 == "Analyze" && (move.mr1 == "Melee Attack" && atk.name == "AttackM" && analyzeDefs[0] < analyzeDefs[1]) || (move.mr1 == "Ranged Attack" && atk.name == "AttackR" && analyzeDefs[0] > analyzeDefs[1])) moveMod = 1;

        if (!moveMod) return;
        atkStage = (moveMod < 0 ? Math.max(atkStage + moveMod, -6) : Math.min(atkStage + moveMod, 6));
        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Protective Shell") atk.atk = baseAttack;
        if (firstHit) stuffUsed.ability1 = ability1;
    }

    //Checking for attack decreasing abilities that are manually checked and adjusts subsequent hits' offensive stat
    if ((ability2 == "Terrifying" || ability2 == "Petrifying" || ability2 == "Adorable") && abilityCheck2) {
        moveMod = 0;
        if ((ability2 == "Terrifying" && move.mr1 == "Melee Attack" && atk.name == "AttackM") || (ability2 == "Petrifying" && move.mr1 == "Ranged Attack" && atk.name == "AttackR") || (ability2 == "Adorable" && move.mr1 == "Melee Defense" && atk.name == "DefenseM")) moveMod -= 1;
        if (ability1 == "Staunch" || ability1 == "Anomaly") {
            moveMod = (ability1 == "Anomaly" ? 1 : 0);
            stuffUsed.ability1 = ability1;
        }
        if ((ability1 == "Combative" && move.mr1 == "Melee Attack" && atk.name == "AttackM") || (ability1 == "Applied Frustration" && move.mr1 == "Ranged Attack" && atk.name == "AttackR")) {
            moveMod += 2;
            stuffUsed.ability1 = ability1;
        }

        atkStage = (moveMod < 0 ? Math.max(atkStage + moveMod, -6) : Math.min(atkStage + moveMod, 6));

        if (ability1 == "One of Many" && moveMod < 0) {
            if (atkStage < 0 && !firstHit) atkStage = 0;
            stuffUsed.ability1 = ability1;
        }

        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Protective Shell") atk.atk = baseAttack;
        if (firstHit) stuffUsed.ability2 = ability2;
    }

    //Checking for Glide boosting speed which affects Tempest damage
    if (ability1 == "Glide" && tempType == "Air" && move.mr1 == atk.name) {
        atkStage = Math.min(atkStage + adjustmentCount, 6);
        atk.atk = (atkStage < 0 ? Math.floor(baseAttack * (2 / (2 - atkStage))) : Math.floor(baseAttack * ((2 + atkStage) / 2)));
        if (crit && atkStage < 0 && ability2 != "Protective Shell") atk.atk = baseAttack;
        if (firstHit) stuffUsed.ability1 = ability1;
    }

    //Checks for moves that affect the currently used defensive stat and adjusts subsequent hits' defensive stat
    if (move.stat && move.stat.battle == "Defense" && move.stat.stat == def.name && !(move.secondaryEffect && ability1 == "Brute Force")) {
        moveMod = (ability2 == "Anomaly" ? move.stat.amount * -1 : move.stat.amount);
        if ((ability2 == "Staunch" && move.stat.amount < 0) || ((ability2 == "Battle Armor" || ability2 == "Odd Husk") && move.secondaryEffect)) {
            moveMod = 0;
            stuffUsed.ability2 = ability2;
        }
        if (move.stat.first && firstHit) moveAdjustmentCount = 1;

        defStage = (moveMod < 0 ? Math.max(defStage + (moveAdjustmentCount * moveMod), -6) : Math.min(defStage + moveAdjustmentCount * moveMod, 6));

        if (ability2 == "One of Many" && moveMod < 0) {
            if (foulHit && defStage < -1 * moveMod * -1) defStage = -1 * moveMod * -1;
            else if (!foulHit && defStage < 0) defStage = 0;
            stuffUsed.ability2 = ability2;
        }

        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0 && ability2 != "Protective Shell") def.def = baseDefense;
        if (firstHit && ability2 == "Anomaly") stuffUsed.ability2 = ability2;
    }

    //Checks for certain defense increasing abilities and adjusts subsequent hits' defensive stat
    if ((((ability2 == "Resilience" && move.contact) || (ability2 == "Oxidize" && (tempType == "Air" || tempType == "Water"))) && move.mr2 == "Melee Defense" && def.name == "DefenseM") || (ability2 == "Defensive Priority" && abilityCheck2)) {
        defStage = (ability2 == "Defensive Priority" ? Math.min(defStage + 1, 6) : Math.min(defStage + adjustmentCount, 6));
        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0) def.def = baseDefense;
        if (ability1 == "Designated Chompers" && move.bite && ability2 == "Resilience") {
            def.def = baseDefense;
            if (firstHit) stuffUsed.ability1 = ability1;
        }
        if (firstHit) stuffUsed.ability2 = ability2;
    }

    //Checks for certain defense decreasing abilities and adjusts subsequent hits' defensive stat
    if ((ability2 == "Frail Armor" && move.mr == "Melee") && move.mr2 == "Melee Defense" && def.name == "DefenseM") {
        moveMod = adjustmentCount * -1
        defStage = Math.max(defStage + moveMod, -6);
        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0) def.def = baseDefense;
        if (firstHit) stuffUsed.ability2 = ability2;
    }

    //Checking for defense decreasing abilities that are manually checked and adjusts subsequent hits' defensive stat
    if (ability1 == "Adorable" && abilityCheck1) {
        moveMod = 0;
        if (ability1 == "Adorable" && move.mr2 == "Melee Defense" && def.name == "DefenseM") moveMod -= 1;
        if (ability2 == "Staunch" || ability2 == "Anomaly") {
            moveMod = (ability2 == "Anomaly" ? 1 : 0);
            stuffUsed.ability2 = ability2;
        }

        defStage = (moveMod < 0 ? Math.max(defStage + moveMod, -6) : Math.min(defStage + moveMod, 6));

        if (ability2 == "One of Many" && moveMod < 0) {
            if (defStage < 0 && !firstHit) defStage = 0;
            stuffUsed.ability2 = ability2;
        }

        def.def = (defStage < 0 ? Math.floor(baseDefense * (2 / (2 - defStage))) : Math.floor(baseDefense * ((2 + defStage) / 2)));
        if (crit && defStage > 0 && ability2 != "Protective Shell") def.def = baseDefense;
        if (firstHit) stuffUsed.ability1 = ability1;

    }
}

function checkEnergy(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2, moveBreakpoint, moveBreakpoint2, moveBreakpoint3, moveBreakpoint4) {
    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    let abilityBP = abilities.find((x) => x == abilityBPDropdown.value);
    let itemA = item1.value;
    let itemB = item2.value;
    let itemC = itemBP.value;
    let movesEnergy1 = [moveOne1.energy, moveTwo1.energy, moveThree1.energy, moveFour1.energy];
    let movesEnergy2 = [moveOne2.energy, moveTwo2.energy, moveThree2.energy, moveFour2.energy];
    let moves1 = [moveOne1, moveTwo1, moveThree1, moveFour1];
    let moves2 = [moveOne2, moveTwo2, moveThree2, moveFour2];
    let movesBPEnergy = [moveBreakpoint.energy, moveBreakpoint2.energy, moveBreakpoint3.energy, moveBreakpoint4.energy];
    let moves3 = [moveBreakpoint, moveBreakpoint2, moveBreakpoint3, moveBreakpoint4]
    let maxNRG1 = totalNRG1.innerHTML;
    let maxNRG2 = totalNRG2.innerHTML;

// Side 1
    for (let i = 0; i < 4; i++) {
           if (moves1[i].protect) movesEnergy1[i] = Math.floor(maxNRG1 / 10);
    }

    if (ability1 == "Expertise") {
       for (let i = 0; i < 4; i++) {
           movesEnergy1[i] = movesEnergy1[i] * 0.75;
       }
    }
    else if (ability1 == "Virtuoso") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].sound) {
                movesEnergy1[i] = movesEnergy1[i] * 0.75;
            }
        }
    }
    /*else if (ability1 == "Hag") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Mind") {
                movesEnergy1[i] = movesEnergy1[i] * 0.75;
            }
        }
    }*/
    else if (ability1 == "Reign") {
        for (let i = 0; i < 4; i++) {
           movesEnergy1[i] = movesEnergy1[i] * 0.9;
       }
    }
    /*else if (ability1 == "Pyro" || ability1 == "Burning Rage") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Fire" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.25;
            }
        }
    }
    else if (ability1 == "Chilling Passion") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Ice" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.25;
            }
        }
    }
    else if (ability1 == "Incandescent") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Light" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.25;
            }
        }
    }
    else if (ability1 == "Pitch-Black") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Dark" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.25;
            }
        }
    }*/
    else if (ability1 == "Pyro Pro") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Fire" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 0.9;
            }
        }
    }
    else if (ability1 == "Railgun") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Electric" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.1;
            }
        }
    }
    else if (ability1 == "Obsidian Heart") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Ancient" && moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.1;
            }
        }
    }
    else if (ability1 == "Heavy Fists") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].punch || moves1[i].slap) movesEnergy1[i] = movesEnergy1[i] * 1.1;
        }
    }
    else if (ability1 == "Power Jaw") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].bite) movesEnergy1[i] = movesEnergy1[i] * 1.1;
        }
    }
    else if (ability1 == "Sharp Focus") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].accuracy != 100 && moves1[i].accuracy != "N/A") {
                movesEnergy1[i] = movesEnergy1[i] * 1.1;
            }
        }
    }
    if (ability2 == "Reign" || coerce1.checked) {
        for (let i = 0; i < 4; i++) {
           movesEnergy1[i] = movesEnergy1[i] * 1.1;
       }
    }
    if (itemA == "Energy Orb") {
        for (let i = 0; i < 4; i++) {
           movesEnergy1[i] = movesEnergy1[i] * 0.75;
       }
    }
    else if (itemA == "Power Cuffs") {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].mr != "Support") {
                movesEnergy1[i] = movesEnergy1[i] * 1.25;
            }
        }
    }
    else if (itemA == "Heavy Armor" || itemA == "Heavy Shield") {
        for (let i = 0; i < 4; i++) {
            movesEnergy1[i] = movesEnergy1[i] * 1.15;
        }
    }
    if (motivational1.checked) {
        for (let i = 0; i < 4; i++) {
            movesEnergy1[i] = movesEnergy1[i] * 0.9;
        }
    }
    if (loomians[pokeDropdown1.value.toLowerCase()].types.includes("Bug") && heat.checked) {
        for (let i = 0; i < 4; i++) {
            movesEnergy1[i] = movesEnergy1[i] * 0.9;
        }
    }
    if (storm.checked) {
        for (let i = 0; i < 4; i++) {
            if (moves1[i].type == "Electric") movesEnergy1[i] = movesEnergy1[i] * 0.75;
        }
    }

//Side 2
    for (let i = 0; i < 4; i++) {
           if (moves2[i].protect) movesEnergy2[i] = Math.floor(maxNRG2 / 10);
    }

    if (ability2 == "Expertise") {
       for (let i = 0; i < 4; i++) {
           movesEnergy2[i] = movesEnergy2[i] * 0.75;
       }
    }
    else if (ability2 == "Virtuoso") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].sound) {
                movesEnergy2[i] = movesEnergy2[i] * 0.75;
            }
        }
    }
    /*else if (ability2 == "Hag") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Mind") {
                movesEnergy2[i] = movesEnergy2[i] * 0.75;
            }
        }
    }*/
    if (ability2 == "Reign") {
       for (let i = 0; i < 4; i++) {
           movesEnergy2[i] = movesEnergy2[i] * 0.9;
       }
    }
    /*else if (ability2 == "Pyro" || ability2 == "Burning Rage") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Fire" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.25;
            }
        }
    }
    else if (ability2 == "Chilling Passion") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Ice" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.25;
            }
        }
    }
    else if (ability2 == "Incandescent") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Light" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.25;
            }
        }
    }
    else if (ability2 == "Pitch-Black") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Dark" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.25;
            }
        }
    }*/
    else if (ability2 == "Pyro Pro") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Fire" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 0.9;
            }
        }
    }
    else if (ability2 == "Railgun") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Electric" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.1;
            }
        }
    }
    else if (ability2 == "Obsidian Heart") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Ancient" && moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.1;
            }
        }
    }
    else if (ability2 == "Heavy Fists") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].punch || moves2[i].slap) movesEnergy2[i] = movesEnergy2[i] * 1.1;
        }
    }
    else if (ability2 == "Power Jaw") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].bite) movesEnergy2[i] = movesEnergy2[i] * 1.1;
        }
    }
    else if (ability2 == "Sharp Focus") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].accuracy != 100 && moves2[i].accuracy != "N/A") {
                movesEnergy2[i] = movesEnergy2[i] * 1.1;
            }
        }
    }
    if (ability1 == "Reign" || coerce2.checked) {
       for (let i = 0; i < 4; i++) {
           movesEnergy2[i] = movesEnergy2[i] * 1.1;
       }
    }
    if (itemB == "Energy Orb") {
        for (let i = 0; i < 4; i++) {
           movesEnergy2[i] = movesEnergy2[i] * 0.75;
       }
    }
    else if (itemB == "Power Cuffs") {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].mr != "Support") {
                movesEnergy2[i] = movesEnergy2[i] * 1.25;
            }
        }
    }
    else if (itemB == "Heavy Armor" || itemB == "Heavy Shield") {
        for (let i = 0; i < 4; i++) {
            movesEnergy2[i] = movesEnergy2[i] * 1.15;
        }
    }
    if (motivational2.checked) {
        for (let i = 0; i < 4; i++) {
            movesEnergy2[i] = movesEnergy2[i] * 0.9;
        }
    }
    if (loomians[pokeDropdown2.value.toLowerCase()].types.includes("Bug") && heat.checked) {
        for (let i = 0; i < 4; i++) {
            movesEnergy2[i] = movesEnergy2[i] * 0.9;
        }
    }
    if (storm.checked) {
        for (let i = 0; i < 4; i++) {
            if (moves2[i].type == "Electric") movesEnergy2[i] = movesEnergy2[i] * 0.75;
        }
    }

// Breakpoint Calc
    if (dodgeCalc == "left") {
        for (let i = 0; i < 4; i++) {
               if (moves3[i].protect) movesBPEnergy[i] = Math.floor(maxNRG1 / 10);
        }
    } else {
        for (let i = 0; i < 4; i++) {
               if (moves3[i].protect) movesBPEnergy[i] = Math.floor(maxNRG2 / 10);
        }
    }

    if (abilityBP == "Expertise") {
       for (let i = 0; i < 4; i++) {
           movesBPEnergy[i] = movesBPEnergy[i] * 0.75;
       }
    }
    else if (abilityBP == "Virtuoso") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].sound) {
                movesBPEnergy[i] = movesBPEnergy[i] * 0.75;
            }
        }
    }
    /*else if (abilityBP == "Hag") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Mind") {
                movesBPEnergy[i] = movesBPEnergy[i] * 0.75;
            }
        }
    }*/
    else if (abilityBP == "Reign") {
       for (let i = 0; i < 4; i++) {
           movesBPEnergy[i] = movesBPEnergy[i] * 0.9;
       }
    }
    /*else if (abilityBP == "Pyro" || abilityBP == "Burning Rage") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Fire" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.25;
            }
        }
    }
    else if (abilityBP == "Chilling Passion") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Ice" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.25;
            }
        }
    }
    else if (abilityBP == "Incandescent") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Light" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.25;
            }
        }
    }
    else if (abilityBP == "Pitch-Black") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Dark" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.25;
            }
        }
    }*/
    else if (abilityBP == "Pyro Pro") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Fire" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 0.9;
            }
        }
    }
    else if (abilityBP == "Railgun") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Electric" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.1;
            }
        }
    }
    else if (abilityBP == "Obsidian Heart") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Ancient" && moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.1;
            }
        }
    }
    else if (abilityBP == "Heavy Fists") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].punch || moves1[i].slap) movesBPEnergy[i] = movesBPEnergy[i] * 1.1;
        }
    }
    else if (abilityBP == "Power Jaw") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].bite) movesBPEnergy[i] = movesBPEnergy[i] * 1.1;
        }
    }
    else if (abilityBP == "Sharp Focus") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].accuracy != 100 && moves3[i].accuracy != "N/A") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.1;
            }
        }
    }
    if (itemC == "Energy Orb") {
        for (let i = 0; i < 4; i++) {
           movesBPEnergy[i] = movesBPEnergy[i] * 0.75;
       }
    }
    else if (itemC == "Power Cuffs") {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].mr != "Support") {
                movesBPEnergy[i] = movesBPEnergy[i] * 1.25;
            }
        }
    }
    else if (itemC == "Heavy Armor" || itemC == "Heavy Shield") {
        for (let i = 0; i < 4; i++) {
            movesBPEnergy[i] = movesBPEnergy[i] * 1.15;
        }
    }
    if (motivational3.checked) {
        for (let i = 0; i < 4; i++) {
            movesBPEnergy[i] = movesBPEnergy[i] * 0.9;
        }
    }
    if (coerce3.checked) {
        for (let i = 0; i < 4; i++) {
            movesBPEnergy[i] = movesBPEnergy[i] * 1.1;
        }
    }
    if (bpType.value == "Bug" && heat.checked) {
        for (let i = 0; i < 4; i++) {
            movesBPEnergy[i] = movesBPEnergy[i] * 0.9;
        }
    }
    if (storm.checked) {
        for (let i = 0; i < 4; i++) {
            if (moves3[i].type == "Electric") movesBPEnergy[i] = movesBPEnergy[i] * 0.75;
        }
    }
    
    moveOneEnergy1.value = (Math.round(movesEnergy1[0])).toString();
    moveTwoEnergy1.value = (Math.round(movesEnergy1[1])).toString();
    moveThreeEnergy1.value = (Math.round(movesEnergy1[2])).toString();
    moveFourEnergy1.value = (Math.round(movesEnergy1[3])).toString();
    moveOneEnergy2.value = (Math.round(movesEnergy2[0])).toString();
    moveTwoEnergy2.value = (Math.round(movesEnergy2[1])).toString();
    moveThreeEnergy2.value = (Math.round(movesEnergy2[2])).toString();
    moveFourEnergy2.value = (Math.round(movesEnergy2[3])).toString();
    moveBPEnergy.value = (Math.round(movesBPEnergy[0])).toString();
    moveBPEnergy2.value = (Math.round(movesBPEnergy[1])).toString();
    moveBPEnergy3.value = (Math.round(movesBPEnergy[2])).toString();
    moveBPEnergy4.value = (Math.round(movesBPEnergy[3])).toString();
    moveBPResult.innerHTML = energyBreakpoint(moveBPEnergy.value, moveBPEnergy2.value, moveBPEnergy3.value, moveBPEnergy4.value, moves3);
}


function calculateDamage(moveOne1, moveTwo1, moveThree1, moveFour1, moveOne2, moveTwo2, moveThree2, moveFour2, soulMove1, soulMove2) {
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];

    let ability1 = abilities.find((x) => x == abilityDropdown1.value);
    let ability2 = abilities.find((x) => x == abilityDropdown2.value);
    /*if (fog.checked && !firstLoom.types.includes("Spirit") && ability1 != "Gloomy") ability1 = "None";
    if (fog.checked && !secondLoom.types.includes("Spirit") && ability2 != "Gloomy") ability2 = "None";*/
    if ((tempAbility1 != ability1 && (tempAbility1 == "Idiosyncratic" || ability1 == "Idiosyncratic"))) {
        loadBaseStats(1);
        loadStats();
    }
    if ((tempAbility2 != ability2 && (tempAbility2 == "Idiosyncratic" || ability2 == "Idiosyncratic"))) {
        loadBaseStats(2);
        loadStats();
    }

    let repeat1 = repeating1.value;
    let repeat2 = repeating2.value;

    let itemA = item1.value;
    let itemB = item2.value;

    let critOne1 = moveOneCrit1.checked;
    let critTwo1 = moveTwoCrit1.checked;
    let critThree1 = moveThreeCrit1.checked;
    let critFour1 = moveFourCrit1.checked;

    let critOne2 = moveOneCrit2.checked;
    let critTwo2 = moveTwoCrit2.checked;
    let critThree2 = moveThreeCrit2.checked;
    let critFour2 = moveFourCrit2.checked;

    let hitsOne1 = moveOneHits1.value;
    let hitsTwo1 = moveTwoHits1.value;
    let hitsThree1 = moveThreeHits1.value;
    let hitsFour1 = moveFourHits1.value;
    let hitsOne2 = moveOneHits2.value;
    let hitsTwo2 = moveTwoHits2.value;
    let hitsThree2 = moveThreeHits2.value;
    let hitsFour2 = moveFourHits2.value;

    let swarmOne1 = moveOneSwarm1.value;
    let swarmTwo1 = moveTwoSwarm1.value;
    let swarmThree1 = moveThreeSwarm1.value;
    let swarmFour1 = moveFourSwarm1.value;
    let swarmOne2 = moveOneSwarm2.value;
    let swarmTwo2 = moveTwoSwarm2.value;
    let swarmThree2 = moveThreeSwarm2.value;
    let swarmFour2 = moveFourSwarm2.value;

    let snowballOne1 = moveOneSnowball1.value;
    let snowballTwo1 = moveTwoSnowball1.value;
    let snowballThree1 = moveThreeSnowball1.value;
    let snowballFour1 = moveFourSnowball1.value;
    let snowballOne2 = moveOneSnowball2.value;
    let snowballTwo2 = moveTwoSnowball2.value;
    let snowballThree2 = moveThreeSnowball2.value;
    let snowballFour2 = moveFourSnowball2.value;

    let dmgMoveOneU1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, repeat1, hitsOne1, swarmOne1, snowballOne1, false, level1.value);
    let dmgMoveOneL1 = getMultiplier(firstLoom, secondLoom, moveOne1, moveOnePower1.value, critOne1, repeat1, hitsOne1, swarmOne1, snowballOne1, false, level1.value, true);
    let dmgMoveOnePercent1 = (dmgMoveOneL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveOneDmg1.innerHTML = dmgMoveOnePercent1 + checkIceTrap(moveOne1, Math.min(dmgMoveOneL1, hp2), Math.min(dmgMoveOneU1, hp2), hp1, energy1, itemA, ability1, ability2);

    let dmgMoveTwoU1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, repeat1, hitsTwo1, swarmTwo1, snowballTwo1, false, level1.value);
    let dmgMoveTwoL1 = getMultiplier(firstLoom, secondLoom, moveTwo1, moveTwoPower1.value, critTwo1, repeat1, hitsTwo1, swarmTwo1, snowballTwo1, false, level1.value, true);
    let dmgMoveTwoPercent1 = (dmgMoveTwoL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveTwoDmg1.innerHTML = dmgMoveTwoPercent1 + checkIceTrap(moveTwo1, Math.min(dmgMoveTwoL1, hp2), Math.min(dmgMoveTwoU1, hp2), hp1, energy1, itemA, ability1, ability2, ability2);

    let dmgMoveThreeU1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, repeat1, hitsThree1, swarmThree1, snowballThree1, false, level1.value);
    let dmgMoveThreeL1 = getMultiplier(firstLoom, secondLoom, moveThree1, moveThreePower1.value, critThree1, repeat1, hitsThree1, swarmThree1, snowballThree1, false, level1.value, true);
    let dmgMoveThreePercent1 = (dmgMoveThreeL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveThreeDmg1.innerHTML = dmgMoveThreePercent1 + checkIceTrap(moveThree1, Math.min(dmgMoveThreeL1, hp2), Math.min(dmgMoveThreeU1, hp2), hp1, energy1, itemA, ability1, ability2);

    let dmgMoveFourU1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, repeat1, hitsFour1, swarmFour1, snowballFour1, false, level1.value);
    let dmgMoveFourL1 = getMultiplier(firstLoom, secondLoom, moveFour1, moveFourPower1.value, critFour1, repeat1, hitsFour1, swarmFour1, snowballFour1, false, level1.value, true);
    let dmgMoveFourPercent1 = (dmgMoveFourL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU1 / hp2 * 100).toFixed(1).toString() + "%";

    moveFourDmg1.innerHTML = dmgMoveFourPercent1 + checkIceTrap(moveFour1, Math.min(dmgMoveFourL1, hp2), Math.min(dmgMoveFourU1, hp2), hp1, energy1, itemA, ability1, ability2);

    let dmgSoulMoveOneU1 = getMultiplier(firstLoom, secondLoom, soulMove1, soulMovePower1, critOne1, undefined, undefined, undefined, undefined, false, level1.value);
    let dmgSoulMoveOneL1 = getMultiplier(firstLoom, secondLoom, soulMove1, soulMovePower1, critOne1, undefined, undefined, undefined, undefined, false, level1.value, true);
    let dmgSoulMoveOnePercent1 = (dmgSoulMoveOneL1 / hp2 * 100).toFixed(1).toString() + " - " + (dmgSoulMoveOneU1 / hp2 * 100).toFixed(1).toString() + "%";

    soulMoveDmg1.innerHTML = dmgSoulMoveOnePercent1 + checkIceTrap(soulMove1, Math.min(dmgSoulMoveOneL1, hp2), Math.min(dmgSoulMoveOneU1, hp2), hp1, energy1, itemA, ability1, ability2);

    //----------------------------------------------------------

    let dmgMoveOneU2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, repeat2, hitsOne2, swarmOne2, snowballOne2, false, level2.value, undefined, true);
    let dmgMoveOneL2 = getMultiplier(secondLoom, firstLoom, moveOne2, moveOnePower2.value, critOne2, repeat2, hitsOne2, swarmOne2, snowballOne2, false, level2.value, true, true);
    let dmgMoveOnePercent2 = (dmgMoveOneL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveOneU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveOneDmg2.innerHTML = dmgMoveOnePercent2 + checkIceTrap(moveOne2, Math.min(dmgMoveOneL2, hp1), Math.min(dmgMoveOneU2, hp1), hp2, energy2, itemB, ability2, ability1);

    let dmgMoveTwoU2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, repeat2, hitsTwo2, swarmTwo2, snowballTwo2, false, level2.value, undefined, true);
    let dmgMoveTwoL2 = getMultiplier(secondLoom, firstLoom, moveTwo2, moveTwoPower2.value, critTwo2, repeat2, hitsTwo2, swarmTwo2, snowballTwo2, false, level2.value, true, true);
    let dmgMoveTwoPercent2 = (dmgMoveTwoL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveTwoU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveTwoDmg2.innerHTML = dmgMoveTwoPercent2 + checkIceTrap(moveTwo2, Math.min(dmgMoveTwoL2, hp1), Math.min(dmgMoveTwoU2, hp1), hp2, energy2, itemB, ability2, ability1);

    let dmgMoveThreeU2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, repeat2, hitsThree2, swarmThree2, snowballThree2, false, level2.value, undefined, true);
    let dmgMoveThreeL2 = getMultiplier(secondLoom, firstLoom, moveThree2, moveThreePower2.value, critThree2, repeat2, hitsThree2, swarmThree2, snowballThree2, false, level2.value, true, true);
    let dmgMoveThreePercent2 = (dmgMoveThreeL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveThreeU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveThreeDmg2.innerHTML = dmgMoveThreePercent2 + checkIceTrap(moveThree2, Math.min(dmgMoveThreeL2, hp1), Math.min(dmgMoveThreeU2, hp1), hp2, energy2, itemB, ability2, ability1);

    let dmgMoveFourU2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, repeat2, hitsFour2, swarmFour2, snowballFour2, false, level2.value, undefined, true);
    let dmgMoveFourL2 = getMultiplier(secondLoom, firstLoom, moveFour2, moveFourPower2.value, critFour2, repeat2, hitsFour2, swarmFour2, snowballFour2, false, level2.value, true, true);

    let dmgMoveFourPercent2 = (dmgMoveFourL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgMoveFourU2 / hp1 * 100).toFixed(1).toString() + "%";

    moveFourDmg2.innerHTML = dmgMoveFourPercent2 + checkIceTrap(moveFour2, Math.min(dmgMoveFourL2, hp1), Math.min(dmgMoveFourU2, hp1), hp2, energy2, itemB, ability2, ability1);

    let dmgSoulMoveTwoU2 = getMultiplier(secondLoom, firstLoom, soulMove2, soulMovePower2, critOne2, undefined, undefined, undefined, undefined, false, level2.value, undefined, true);
    let dmgSoulMoveTwoL2 = getMultiplier(secondLoom, firstLoom, soulMove2, soulMovePower2, critOne2, undefined, undefined, undefined, undefined, false, level2.value, true, true);

    let dmgSoulMoveTwoPercent2 = (dmgSoulMoveTwoL2 / hp1 * 100).toFixed(1).toString() + " - " + (dmgSoulMoveTwoU2 / hp1 * 100).toFixed(1).toString() + "%";

    soulMoveDmg2.innerHTML = dmgSoulMoveTwoPercent2 + checkIceTrap(soulMove2, Math.min(dmgSoulMoveTwoL2, hp1), Math.min(dmgSoulMoveTwoU2, hp1), hp2, energy2, itemB, ability2, ability1);
}

function detailedReport() {
    let selected = document.querySelector('input[name="moveResult"]:checked');
    let moveName;
    let move;
    let movePower;
    let crit;
    let repeat;
    let hits;
    let swarm;
    let snowball;
    let second = false;
    let tempAtk = "";
    let tempDef = "";
    let firstLoom = loomians[pokeDropdown1.value.toLowerCase()];
    let secondLoom = loomians[pokeDropdown2.value.toLowerCase()];
    let level = level1.value;
    let hp;
    let atks = {melee: atk1, ranged: atkR1};
    let ice = iceTrap2.checked;
    let halfIce = halfIce2.checked;
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barb = barbs[1];

    if (document.getElementById("moveOneLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl1").innerHTML;
        movePower = moveOnePower1.value;
        crit = moveOneCrit1.checked;
        repeat = repeating1.value;
        hits = moveOneHits1.value;
        swarm = moveOneSwarm1.value;
        snowball = moveOneSnowball1.value;
    }
    else if (document.getElementById("moveTwoLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl1").innerHTML;
        movePower = moveTwoPower1.value;
        crit = moveTwoCrit1.checked;
        repeat = repeating1.value;
        hits = moveTwoHits1.value;
        swarm = moveTwoSwarm1.value;
        snowball = moveTwoSnowball1.value;
    }
    else if (document.getElementById("moveThreeLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl1").innerHTML;
        movePower = moveThreePower1.value;
        crit = moveThreeCrit1.checked;
        repeat = repeating1.value;
        hits = moveThreeHits1.value;
        swarm = moveThreeSwarm1.value;
        snowball = moveThreeSnowball1.value;
    }
    else if (document.getElementById("moveFourLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl1").innerHTML;
        movePower = moveFourPower1.value;
        crit = moveFourCrit1.checked;
        repeat = repeating1.value;
        hits = moveFourHits1.value;
        swarm = moveFourSwarm1.value;
        snowball = moveFourSnowball1.value;
    }
    else if (document.getElementById("soulMoveLbl1").htmlFor == selected.id) {
        moveName = document.getElementById("soulMoveLbl1").innerHTML;
        movePower = soulMovePower1;
        crit = moveOneCrit1.checked;
    }
    else if (document.getElementById("moveOneLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveOneLbl2").innerHTML;
        movePower = moveOnePower2.value;
        crit = moveOneCrit2.checked;
        repeat = repeating2.value;
        hits = moveOneHits2.value;
        swarm = moveOneSwarm2.value;
        snowball = moveOneSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
    }
    else if (document.getElementById("moveTwoLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveTwoLbl2").innerHTML;
        movePower = moveTwoPower2.value;
        crit = moveTwoCrit2.checked;
        repeat = repeating2.value;
        hits = moveTwoHits2.value;
        swarm = moveTwoSwarm2.value;
        snowball = moveTwoSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
    }
    else if (document.getElementById("moveThreeLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveThreeLbl2").innerHTML;
        movePower = moveThreePower2.value;
        crit = moveThreeCrit2.checked;
        repeat = repeating2.value;
        hits = moveThreeHits2.value;
        swarm = moveThreeSwarm2.value;
        snowball = moveThreeSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
    }
    else if (document.getElementById("moveFourLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("moveFourLbl2").innerHTML;
        movePower = moveFourPower2.value;
        crit = moveFourCrit2.checked;
        repeat = repeating2.value;
        hits = moveFourHits2.value;
        swarm = moveFourSwarm2.value;
        snowball = moveFourSnowball2.value;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
    }
    else if (document.getElementById("soulMoveLbl2").htmlFor == selected.id) {
        moveName = document.getElementById("soulMoveLbl2").innerHTML;
        movePower = soulMovePower2;
        crit = moveOneCrit2.checked;
        second = true;
        firstLoom = loomians[pokeDropdown2.value.toLowerCase()];
        secondLoom = loomians[pokeDropdown1.value.toLowerCase()];
        level = level2.value;
        atks = {melee: atk2, ranged: atkR2};
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
    }
    let item = (second ? item1.value : item2.value);
    let playerItem = (second ? item2.value : item1.value);
    let ability = (second ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let tankHazard = (second ? tankHazard1 : tankHazard2)
    let playerAbility = (second ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    move = findMove(moveName);
    let qualifier = (move.hits ? "approx. " : "");
    hp = (second ? currentHP1.value : currentHP2.value);
    let selfHP = (second ? currentHP2.value : currentHP1.value);
    let maxHP = (second ? hp1 : hp2);
    let myStatus = (second ? status2.value : status1.value);
    let currStatus = (second ? status1.value : status2.value);
    let statStr = "";
    let statStr2 = " " + currStatus.charAt(0).toUpperCase() + currStatus.slice(1);
    let counter = 0;
    let adaptive = { mr: "", mr1: "", mr2: ""};
    let adaptiveResult;
    let atkDef;
    if ((move.name == "Adaptive Assault") && (firstLoom.baseStats.attackR > firstLoom.baseStats.attack) || (firstLoom.name == "Hydrolen" && atks.ranged > atks.melee) ||
       (move.name == "Expert Onslaught" && atks.ranged > atks.melee) ) {
        adaptive.mr = "Ranged";
        adaptive.mr1 = "Ranged Attack";
        adaptive.mr2 = "Ranged Defense";
        adaptiveResult = "ranged";
        atkDef = getTempAtkDef(second, adaptive);
    } else if (move.name == "Expert Onslaught" && atks.melee >= atks.ranged){
        adaptive.mr = "Melee";
        adaptive.mr1 = "Melee Attack";
        adaptive.mr2 = "Melee Defense";
        adaptiveResult = "melee";
        atkDef = getTempAtkDef(second, adaptive);
    } else atkDef = getTempAtkDef(second, move);
    if (move.mr == "Melee" && myStatus == "burned" && !firstLoom.types.includes("Fire") && !(adaptiveResult && adaptiveResult == "ranged")) statStr = " " + myStatus.charAt(0).toUpperCase() + myStatus.slice(1);
    else if (move.mr == "Ranged" && myStatus == "freezing" && !firstLoom.types.includes("Ice") && !(adaptiveResult && adaptiveResult == "melee")) statStr = " Frostbitten";
    else if (move.mr1 == "Speed" && myStatus == "paralasis" && !firstLoom.types.includes("Electric")) statStr = " Paralyzed";
    if (statStr2 == " Healthy" || (statStr2 == " Burned" && secondLoom.types.includes("Fire")) || (statStr2 == " Paralasis" && secondLoom.types.includes("Electric")) || ((statStr2 == " Poisoned" || statStr2 == " Diseased") && secondLoom.types.includes("Toxic")) || (statStr2 == " Freezing" && secondLoom.types.includes("Ice"))) statStr2 = "";
    else if (statStr2 == " Paralasis") statStr2 = " Paralyzed";
    else if (statStr2 == " Diseased") statStr2 = " Badly Poisoned";
    else if (statStr2 == " Freezing") statStr2 = " Frostbitten";
    let atkPlus = "";
    let defPlus = "";

    if (atkDef.attack.stage != 0 && !isNaN(atkDef.attack.stage)) {
        tempAtk = (atkDef.attack.stage > 0 ? "+" : "") + atkDef.attack.stage + " ";
    }
    if (atkDef.defense.stage != 0 && !isNaN(atkDef.defense.stage)) {
        tempDef = (atkDef.defense.stage > 0 ? "+" : "") + atkDef.defense.stage + " ";
    }

    //tempAtk
    if ((move.mr1 == "Ranged Attack" && move.name != "Expert Onslaught") || (adaptiveResult == "ranged")) {
        if ((playerAbility == "Festive Spirit" && atkDef.attack.posNat == "hyper") || (playerAbility == "Festive Spirit" && atkDef.attack.negNat == "hyper")) {
            atkPlus = "+";
        }
        else if (atkDef.attack.posNat == "smart" || atkDef.attack.negNat == "smart") {
            atkPlus = "+";
        }
        else if (playerAbility == "Festive Spirit" && atkDef.attack.veryNat == "vHyper") {
            atkPlus = "++";
        }
        else if (atkDef.attack.veryNat == "vSmart") {
            atkPlus = "++";
        }
        //Negatives
        if ((playerAbility == "Festive Spirit" && atkDef.attack.posNat == "dull") || (playerAbility == "Festive Spirit" && atkDef.attack.negNat == "dull")) {
            atkPlus = "-";
        }
        else if ((atkDef.attack.posNat == "clumsy" || atkDef.attack.negNat == "clumsy") && playerAbility != "Festive Spirit") {
            atkPlus = "-";
        }
        else if (playerAbility == "Festive Spirit" && atkDef.attack.veryNat == "vDull") {
            atkPlus = "--";
        }
        else if (atkDef.attack.veryNat == "vClumsy") {
            atkPlus = "--";
        }
        //Used Stat
        if (second) {
            if (playerAbility == "Festive Spirit") tempAtk = tempAtk + energyEV2.value + " " + atkPlus + "Energy";
            else tempAtk = tempAtk + atkREV2.value + " " + atkPlus + "AtkR";

        }
        else {
            if (playerAbility == "Festive Spirit") tempAtk = tempAtk + energyEV1.value + " " + atkPlus + "Energy";
            else tempAtk = tempAtk + atkREV1.value + " " + atkPlus + "AtkR";
        }
    }
    else if (move.mr1 == "Melee Attack" || adaptiveResult == "melee") {
        if (atkDef.attack.posNat == "brawny" || atkDef.attack.negNat == "brawny") {
            atkPlus = "+";
        }
        else if (atkDef.attack.veryNat == "vBrawny") {
            atkPlus = "++";
        }
        //Negatives
        if (atkDef.attack.posNat == "frail" || atkDef.attack.negNat == "frail") {
            atkPlus = "-";
        }
        else if (atkDef.attack.veryNat == "vFrail") {
            atkPlus = "--";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + atkDef.attack.ev.value + " " + atkPlus + "AtkM";           
        }
        else {
            tempAtk = tempAtk + atkDef.attack.ev.value + " " + atkPlus + "AtkM";
        }    
    }
    else if (move.mr1 == "Ranged Defense") {
        if (atkDef.attack.posNat == "clever" || atkDef.attack.negNat == "clever") {
            atkPlus = "+";
        }
        else if (atkDef.attack.veryNat == "vClever") {
            atkPlus = "++";
        }
        //Negatives
        if (atkDef.attack.posNat == "clumsy" || atkDef.attack.negNat == "clumsy") {
            atkPlus = "-";
        }
        else if (atkDef.attack.veryNat == "vClumsy") {
            atkPlus = "--";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + defREV2.value + " " + atkPlus + "DefR";           
        }
        else {
            tempAtk = tempAtk + defREV1.value + " " + atkPlus + "DefR";
        } 
    }
    else if (move.mr1 == "Melee Defense") {
        if (atkDef.attack.posNat == "robust" || atkDef.attack.negNat == "robust") {
            atkPlus = "+";
        }
        else if (atkDef.attack.veryNat == "vRobust") {
            atkPlus = "++";
        }
        //Negatives
        if (atkDef.attack.posNat == "tender" || atkDef.attack.negNat == "tender") {
            atkPlus = "-";
        }
        else if (atkDef.attack.veryNat == "vTender") {
            atkPlus = "--";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + defEV2.value + " " + atkPlus + "DefM";           
        }
        else {
            tempAtk = tempAtk + defEV1.value + " " + atkPlus + "DefM";
        } 
    }
    else if (move.mr1 == "Speed") {
        if (atkDef.attack.posNat == "nimble" || atkDef.attack.negNat == "nimble") {
            atkPlus = "+";
        }
        else if (atkDef.attack.veryNat == "vNimble") {
            atkPlus = "++";
        }
        //Negatives
        if (atkDef.attack.posNat == "sluggish" || atkDef.attack.negNat == "sluggish") {
            atkPlus = "-";
        }
        else if (atkDef.attack.veryNat == "vSluggish") {
            atkPlus = "--";
        }
        //Used Stat
        if (second) {
            tempAtk = tempAtk + spdEV2.value + " " + atkPlus + "Spd";           
        }
        else {
            tempAtk = tempAtk + spdEV1.value + " " + atkPlus + "Spd";
        } 
    }

    //tempDef
    if (move.mr2 == "Ranged Attack") {
        if (atkDef.defense.posNat == "smart" || atkDef.defense.negNat == "smart") {
            defPlus = "+";
        }
        else if (atkDef.defense.veryNat == "vSmart") {
            defPlus = "++";
        }
        //Negatives
        if (atkDef.defense.posNat == "clumsy" || atkDef.defense.negNat == "clumsy") {
            defPlus = "-";
        }
        else if (atkDef.defense.veryNat == "vClumsy") {
            defPlus = "--";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + atkREV1.value + " " + defPlus + "AtkR";
        }
        else {
            tempDef = tempDef + atkREV2.value + " " + defPlus + "AtkR";           
        } 
    }
    else if (move.mr2 == "Melee Attack") {
        if (atkDef.defense.posNat == "brawny" || atkDef.defense.negNat == "brawny") {
            defPlus = "+";
        }
        else if (atkDef.defense.veryNat == "vBrawny") {
            defPlus = "++";
        }
        //Negatives
        if (atkDef.defense.posNat == "frail" || atkDef.defense.negNat == "frail") {
            defPlus = "-";
        }
        else if (atkDef.defense.veryNat == "vFrail") {
            defPlus = "--";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + atkEV1.value + " " + defPlus + "AtkM";
        }
        else {
            tempDef = tempDef + atkEV2.value + " " + defPlus + "AtkM";           
        } 
    }
    else if ((move.mr2 == "Ranged Defense" && move.name != "Expert Onslaught") || (adaptiveResult == "ranged")) {
        if (atkDef.defense.posNat == "clever" || atkDef.defense.negNat == "clever") {
            defPlus = "+";
        }
        else if (atkDef.defense.veryNat == "vClever") {
            defPlus = "++";
        }
        //Negatives
        if (atkDef.defense.posNat == "foolish" || atkDef.defense.negNat == "foolish") {
            defPlus = "-";
        }
        else if (atkDef.defense.veryNat == "vFoolish") {
            defPlus = "--";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + defREV1.value + " " + defPlus + "DefR";
        }
        else {
            tempDef = tempDef + defREV2.value + " " + defPlus + "DefR";           
        } 
    }
    else if (move.mr2 == "Melee Defense" || adaptiveResult == "melee") {
        if (atkDef.defense.posNat == "robust" || atkDef.defense.negNat == "robust") {
            defPlus = "+";
        }
        else if (atkDef.defense.veryNat == "vRobust") {
            defPlus = "++";
        }
        //Negatives
        if (atkDef.defense.posNat == "tender" || atkDef.defense.negNat == "tender") {
            defPlus = "-";
        }
        else if (atkDef.defense.veryNat == "vTender") {
            defPlus = "--";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + defEV1.value + " " + defPlus + "DefM";
        }
        else {
            tempDef = tempDef + defEV2.value + " " + defPlus + "DefM";           
        } 
    }
    else if (move.mr2 == "Speed") {
        if (atkDef.defense.posNat == "nimble" || atkDef.defense.negNat == "nimble") {
            defPlus = "+";
        }
        else if (atkDef.defense.veryNat == "vNimble") {
            defPlus = "++";
        }
        //Negatives
        if (atkDef.defense.posNat == "sluggish" || atkDef.defense.negNat == "sluggish") {
            defPlus = "-";
        }
        else if (atkDef.defense.veryNat == "vSluggish") {
            defPlus = "--";
        }
        //Used Stat
        if (second) {
            tempDef = tempDef + spdEV1.value + " " + defPlus + "Spd";
        }
        else {
            tempDef = tempDef + spdEV2.value + " " + defPlus + "Spd";           
        } 
    }

    if (move.power == 0 || (move.name == "Spit Out" && playerItem == "None")) {
        let str = firstLoom.name + " " + move.name + " vs. " + (!second ? hpEV2.value : hpEV1.value) + " HP / " + secondLoom.name + ": 0-0 (0 - 0%) -- nice move there, bud";
        document.getElementById("detailedResult").innerHTML = str;
        document.getElementById("possibleDmg").innerHTML = "Possible Damage Amounts: (0)";
        return;
    }

    let possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true);
    let possibleDmg = possibleArray[0];
    let foulDamage = possibleArray[1];
    let possibleDmg2 = possibleDmg[0];
    let possibleDmg3 = possibleDmg[15];
    if (foulDamage) {
        possibleDmg2 = possibleDmg2 + foulDamage[0];
        possibleDmg3 = possibleDmg3 + foulDamage[15];
    }
    let turnCount = 0;
    let lowerPercent = (possibleDmg2 / hp * 100).toFixed(1);
    let upperPercent = (possibleDmg3 / hp * 100).toFixed(1);
    let stuffUsed = possibleDmg[16];
    stuffUsed.ability1 = (stuffUsed.ability1 == "" ? "" : " " + stuffUsed.ability1);
    stuffUsed.ability2 = (stuffUsed.ability2 == "" ? "" : " " + stuffUsed.ability2);
    stuffUsed.item1 = (stuffUsed.item1 == "" ? "" : " " + stuffUsed.item1);
    stuffUsed.item2 = (stuffUsed.item2 == "" ? "" : " " + stuffUsed.item2);
    possibleDmg.pop();
    let possibleDmgStr = "Possible Damage Amounts: (" + displayDamage(possibleArray) + ")";
    let critStr = (((crit == true || (playerAbility == "Brutal Wrath" && (currStatus == "poisoned" || currStatus == "diseased")))) ? "Crit " : "");

    let str = tempAtk + stuffUsed.item1 + stuffUsed.ability1 + statStr + " " + firstLoom.name + " " + critStr + move.name + stuffUsed.extra1 + " vs. " + (!second ? hpEV2.value : hpEV1.value) + " HP / " +
        tempDef + stuffUsed.item2 + stuffUsed.ability2 + statStr2 + " " + secondLoom.name + stuffUsed.weather + ": " + possibleDmg2 + "-" + possibleDmg3 + " (" + lowerPercent + " - " + upperPercent + "%) -- ";

    let hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount, true)[1];

    document.getElementById("possibleDmg").innerHTML = possibleDmgStr;

    let addedDmg = 0;

    if ((ice || halfIce) && !(ability == "Flutter" || ability == "Mysterious Cloak")) {
        addedDmg = 12.5;
        if (halfIce) addedDmg = 6.25;

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
        if (secondLoom.types.includes("Fire")) {
            addedDmg *= 0.5;
            if (halfIce) addedDmg *= 0;
        }
        if (secondLoom.types.includes("Ice")) {
            addedDmg *= 0
        }
        if (ability == "Tank" && tankHazard == "traps") addedDmg /= 2;

    }

    if (barb > 0 && !secondLoom.types.includes("Air") && !(ability == "Flutter" || ability == "Mysterious Cloak" || ability == "Hover")) {
        if (barb == 1) {
            addedDmg += 12.5;
        } else if (barb == 2) {
            addedDmg += 1 / 6 * 100;
        } else if (barb == 3) {
            addedDmg += 25;
        }
        if (ability == "Tank" && tankHazard == "barbs") addedDmg /= 2;

    }

    let tickDamage = adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount, "OHKO")[0];
    tickDamage = tickDamage + Math.floor(maxHP * addedDmg / 100);
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount, "OHKO")[1];
    
    let OHKOs = [];
    let tickOHKOs = [];
    let THKOs = [];
    let TRHKOs = [];

    if (foulDamage && foulDamage.length == possibleDmg.length) {
        for (let i = 0; i < possibleDmg.length; i++) {
            possibleDmg[i] = possibleDmg[i] + foulDamage[i];
        }
    }

    for (let i = 0; i < possibleDmg.length; i++) {
        if (possibleDmg[i] >= hp) {
            OHKOs.push(possibleDmg[i]);
        }
        if (possibleDmg[i] + tickDamage >= hp) {
            tickOHKOs.push(possibleDmg[i]);
        }
    }

    if (tickOHKOs.length != 0) {
        let chance = (OHKOs.length / 16 * 100).toFixed(1);
        let chanceStr = qualifier + chance + "% chance to OHKO";

        if (chance >= 100) {
            chanceStr = "guaranteed OHKO";
            str += chanceStr;
            document.getElementById("detailedResult").innerHTML = str;
            return;
        } else {
            chance = (tickOHKOs.length / 16 * 100).toFixed(1);
            chanceStr = qualifier + chance + "% chance to OHKO";
            if (chance >= 100) {
                chanceStr = "guaranteed OHKO";
            }
        }
        str += chanceStr + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    counter = 1;
    hp = hp - tickDamage;

    if (move.knockOff) {
        item = "";
    }

    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg2 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg2.length - 1) {
        for (let i = 0; i < possibleDmg2.length; i++) {
            possibleDmg2[i] = possibleDmg2[i] + foulDamage[i];
        }
    }
    
    counter = 0;
    
    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true, false, counter);
    possibleDmg3 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg3.length - 1) {
        for (let i = 0; i < possibleDmg3.length; i++) {
            possibleDmg3[i] = possibleDmg3[i] + foulDamage[i];
        }
    }

    counter = 1;
    
    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true, false, counter);
    let possibleDmg4 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg4.length - 1) {
        for (let i = 0; i < possibleDmg4.length; i++) {
            possibleDmg4[i] = possibleDmg4[i] + foulDamage[i];
        }
    }

    counter = 0;
    
    possibleArray = getMultiplier(firstLoom, secondLoom, move, movePower, crit, repeat, hits, swarm, snowball, false, level, undefined, second, true, false, counter);
    let possibleDmg5 = possibleArray[0];
    foulDamage = possibleArray[1];
    if (foulDamage && foulDamage.length == possibleDmg5.length - 1) {
        for (let i = 0; i < possibleDmg5.length; i++) {
            possibleDmg5[i] = possibleDmg5[i] + foulDamage[i];
        }
    }

    turnCount = 1;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];
    hazardStr = adjustHP(firstLoom, secondLoom, hp, selfHP, item, ability, currStatus, second, turnCount)[1];

    for (let i = 0; i < possibleDmg.length; i++) {
        for (let j = 0; j < possibleDmg2.length; j++) {
            if (possibleDmg[i] + possibleDmg2[j] >= hp) {
                THKOs.push(possibleDmg[i] + possibleDmg2[j]);
            }
        }
    }

    if (THKOs.length != 0) {
        let chance = (THKOs.length / 256 * 100).toFixed(1);
        let chanceStr = qualifier + chance + "% chance to 2HKO";
        if (chance >= 100) chanceStr = "guaranteed 2HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 2;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

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
        let chanceStr = qualifier + chance + "% chance to 3HKO";
        if (chance >= 100) chanceStr = "guaranteed 3HKO";

        str += chanceStr + hazardStr;

        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 3;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    if (possibleDmg[0] + possibleDmg2[0] + possibleDmg3[0] + possibleDmg4[0] >= hp) {
        let FHKO = "guaranteed 4HKO";

        str += FHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    } else if (possibleDmg[15] + possibleDmg2[15] + possibleDmg3[15] + possibleDmg4[15] >= hp) {
        let FHKO = "possible 4HKO";

        str += FHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    }

    turnCount = 4;
    hp = hp - adjustHP(firstLoom, secondLoom, maxHP, selfHP, item, ability, currStatus, second, turnCount)[0];

    if (possibleDmg[0] + possibleDmg2[0] + possibleDmg3[0] + possibleDmg4[0] + possibleDmg5[0] >= hp) {
        let FIHKO = "guaranteed 5HKO";

        str += FIHKO + hazardStr;
        document.getElementById("detailedResult").innerHTML = str;
        return;
    } else if (possibleDmg[15] + possibleDmg2[15] + possibleDmg3[15] + possibleDmg4[15] + possibleDmg5[15] >= hp) {
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

function getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, hitConfirmer = false, level, ul = false, second = false, detailed = false, withoutSlapDown = true, takeSecondaryType = false, foulHit = false) {
    if (move.power == 0 && detailed) return [0];
    if (move.power == 0) return 0;

    let bothTypes = getTypes(second);
    let types1 = bothTypes.firstLoom;
    let types2 = bothTypes.secondLoom;
    let multi = 1;
    let effectiveness;
    let dmg;
    let foulDmg = 0;
    let tempType = move.type;
    let tempPower = movePower;
    let powerCheck = movePower;
    let tempAtk;
    let tempDef;
    let tempStats;
    if (hits && !hitConfirmer) hits = hits.split(' ')[0];
    let gen1 = gender1.value;
    let gen2 = gender2.value;
    let stats1;
    let stats2;
    if (second) {
        stats1 = {atk: atk2, def: def2, atkR: atkR2, defR: defR2, spd: spd2};
        stats2 = {atk: atk1, def: def1, atkR: atkR1, defR: defR1, spd: spd1};
    } else {
        stats1 = {atk: atk1, def: def1, atkR: atkR1, defR: defR1, spd: spd1};
        stats2 = {atk: atk2, def: def2, atkR: atkR2, defR: defR2, spd: spd2};
    }
    let currentEnergy1 = (second == false ? currentNRG1.value : currentNRG2.value);
    let currentEnergy2 = (second == false ? currentNRG2.value : currentNRG1.value);
    let ability1 = (second == false ? abilities.find((x) => x == abilityDropdown1.value) : abilities.find((x) => x == abilityDropdown2.value));
    let ability2 = (second == false ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    let btl1 = (second == false ? enteredBtl2.checked : enteredBtl1.checked);
    let btl2 = (second == false ? enteredBtl1.checked : enteredBtl2.checked);
    let wall = (second == false ? wall2.checked : wall1.checked);
    let shield = (second == false? shield2.checked : shield1.checked);
    let stat1 = (second == false ? status1.value : status2.value);
    let stat2 = (second == false ? status2.value : status1.value);
    let itemA = (second == false ? item1.value : item2.value);
    let itemB = (second == false ? item2.value : item1.value);
    let tempItem;
    let isDouble = (singleDouble.value == "singles" ? false : true);
    //let dusk = (second == false ? dusk1.checked : dusk2.checked);
    let dawn = (second == false ? dawn1.checked : dawn2.checked);
    let guardian = (second == false ? guardian2.checked : guardian1.checked);
    let tagTeam = (second == false ? tagTeam1.checked : tagTeam2.checked);
    let teamwork = (second == false ? teamwork1.checked : teamwork2.checked);
    let possibleDmg = [];
    let possibleFoulDmg;
    let stuffUsed = { ability1: "", ability2: "", item1: "", item2: "", extra1: "", extra2: "", weather: ""};
    let adaptive = { mr: "", mr1: "", mr2: ""};
    let energyValue = (second ? percentNRG2.value : percentNRG1.value);
    let boastAttack = (second ? getTempStats1.atk : getTempStats2.atk);
    let analyzeDefs = (second ? [getTempStats1.def,  getTempStats1.defR] : [getTempStats2.def,  getTempStats2.defR])
    let immuneBoostCheck1 = (second == false ? immuneAbilityBoost1.checked : immuneAbilityBoost2.checked);
    let immuneBoostCheck2 = (second == false ? immuneAbilityBoost2.checked : immuneAbilityBoost1.checked);
    let ovrCharged1 = (second ? overcharged2.checked : overcharged1.checked);
    let ovrCharged2 = (second ? overcharged1.checked : overcharged2.checked);
    let icicle = (second ? iceTrap1.checked : iceTrap2.checked);
    let icicleH = (second ? halfIce1.checked : halfIce2.checked);
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barbH = (second ? barbs[0] : barbs[1]);

    if (move.name == "Adaptive Assault") {
        tempType = types1.primary;
        if ((loom1.baseStats.attackR > loom1.baseStats.attack) || (loom1.name == "Hydrolen" && stats1.atkR > stats1.atk)) {
            adaptive.mr = "Ranged";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
            move.contact = false;
        } else {
            adaptive.mr = "Melee";
            adaptive.mr1 = "Melee Attack";
            adaptive.mr2 = "Melee Defense";
            move.contact = true;
        }
        tempStats = getTempAtkDef(second, adaptive);
        stuffUsed.extra1 += " (" + adaptive.mr + " " + tempType + ")";
    } else if (move.name == "Expert Onslaught") {
        tempType = types1.primary;
        swarm = parseInt(swarm.charAt(0));
        tempPower = Number(tempPower) + 25 * swarm;
        if (stats1.atkR > stats1.atk) {
            adaptive.mr = "Ranged";
            adaptive.mr1 = "Ranged Attack";
            adaptive.mr2 = "Ranged Defense";
        } else {
            adaptive.mr = "Melee";
            adaptive.mr1 = "Melee Attack";
            adaptive.mr2 = "Melee Defense";
        }
        tempStats = getTempAtkDef(second, adaptive);
        stuffUsed.extra1 += " (" + tempType + " " + tempPower + " BP)";
    } else tempStats = getTempAtkDef(second, move);
    tempAtk = tempStats.attack;
    tempDef = tempStats.defense;

    tempPower = (move.name == "Trip Root" ? getTripRootPower(loom2.weight) : tempPower);

    if (move.name == "Trip Root") {
        stuffUsed.extra1 += " (" + getTripRootPower(loom2.weight) + " BP)";
    }

    if (move.name == "Stampede") {
        swarm = parseInt(swarm.charAt(0));
        tempPower = 30 * swarm;
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    /*if (move.name == "Tempest") {
        tempPower = getSpeedPower(stats1.spd, stats2.spd);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }*/

    if (move.name == "Outburst") {
        tempPower = Math.max(1, Math.floor(125 * energyValue / 100));
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.name == "Spit Out" && itemA == "None") {
        if (detailed) return [0];
        else return 0;
    }

    if (move.name == "Spit Out" && ((itemA.includes("Shell")) || (itemA.includes("Essence")) || (itemA.includes("Pearl")))) {
        if (itemA.includes("Essence")) {
            tempType = itemA.split(" ")[0];
        } else if (itemA.includes("Shell") || itemA.includes("Pearl") && withoutSlapDown && !foulHit) {
            let itemName = itemA.split(" ")[0].toLowerCase();
            for (let type in types) {
                if (itemName == types[type].otherName) tempType = String(type.charAt(0).toUpperCase() + type.slice(1));
            }
        }
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if ((move.name == "Oppress" && stat2 != "healthy") ||
       ((move.name == "Ill Will" || move.name == "Splitting Headache") && stat1 != "healthy") ||
       (move.name == "Gobble Goop" && stat2 == "poisoned")) {
        powerCheck *= 2;
        multi *= 2;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 2) + " BP)";
    }

    if (move.name == "Rough Up" && loom1.height > loom2.height) {
        powerCheck *= 1.25;
        multi *= 1.25;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 1.25) + " BP)";
    }

    if (move.name == "Climate Cannon" && !noWeather.checked) {
        tempType = (rain.checked ? "Water" : winds.checked ? "Air" : fog.checked ? "Spirit" : heat.checked ? "Fire" : storm.checked ? "Electric" : "Simple");
        stuffUsed.extra1 += " (" + tempType + ")";
    }

    if (ability2 == "Malware" && move.contact) {
        if (!withoutSlapDown) ability1 = "None";
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Idiosyncratic") stuffUsed.ability1 = ability1;
    if (ability2 == "Idiosyncratic") stuffUsed.ability2 = ability2;

    if (move.name == "Cosmic Chime") ability2 = "None";

    if (ability1 == "Effulgent" || (ability1 == "Puncture" && move.bite)) stuffUsed.ability1 = ability1;
    if (ability2 == "Effulgent") stuffUsed.ability2 = ability2;

    if ((ability1 == "Devious") || 
       (ability1 == "Bully" && loom1.height > loom2.height)) {
        ability2 = "None";
        stuffUsed.ability1 = ability1;
    }

    /*if (fog.checked) {
        if (!loom1.types.includes("Spirit") && ability1 != "Gloomy" && ability1 != "Adaptable") ability1 = "None";
        if (!loom2.types.includes("Spirit") && ability2 != "Gloomy" && ability2 != "Adaptable") ability2 = "None";
    }*/

    if (fog.checked) {
        if (((!loom1.types.includes("Spirit") || !loom1.types.includes("Light")) && loom2.types.includes("Spirit")) && ability1 != "Gloomy" && ability1 != "Adaptable") ability1 = "None";
        if (((!loom2.types.includes("Spirit") || !loom2.types.includes("Light")) && loom1.types.includes("Spirit")) && ability2 != "Gloomy" && ability2 != "Adaptable") ability2 = "None";
    }

    if (ability1 == "Royal Decree" && tempType == "Electric" && loom2.types.includes("Earth")) stuffUsed.ability1 = ability1;
    if (ability1 == "Assertive" && tempType == "Brawler" && loom2.types.includes("Spirit")) stuffUsed.ability1 = ability1;

    if (ability1 == "Sly") {
        itemB = "None";
        stuffUsed.ability1 = ability1;
    }
    if (ability2 == "Sly") {
        itemA = "None";
        stuffUsed.ability2 = ability2;
    }

    if ((move.name == "Gloominous Roar" || move.name == "Gloominous Fangs") && ability1 == "Circadian" && types1.secondary != "None" && types1.secondary != undefined) {
        tempType = (takeSecondaryType ? types1.secondary : types1.primary);
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Circadian" && types2.secondary != "") {
        types2.primary = (takeSecondaryType ? types2.secondary : types2.primary);
        types2.secondary = "None";
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Adaptable" && !noWeather.checked) {
        types1.primary = (rain.checked ? "Water" : winds.checked ? "Air" : heat.checked ? "Fire" : fog.checked ? "Spirit" : storm.checked ? "Electric" : types1.primary);
        types1.secondary = "None";
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Adaptable" && !noWeather.checked) {
        types2.primary = (rain.checked ? "Water" : winds.checked ? "Air" : heat.checked ? "Fire" : fog.checked ? "Spirit" : storm.checked ? "Electric" : types2.primary);
        types2.secondary = "None";
        stuffUsed.ability2 = ability2;
    }

    //Base ------------------------------------

    dmg = Math.floor(2 * level / 5) + 2;

    //Power ----------------------------------------
    let typeModAbility1 = findTypeModAbility(ability1);
    let typeModAbility2 = findTypeModAbility(ability2);

    if (typeModAbility1 != undefined && tempType == typeModAbility1.typeModifier.type && typeModAbility1.powerMod == true) {
        multi *= typeModAbility1.typeModifier.modifier;
        stuffUsed.ability1 = ability1;
    }

    if (ability1 == "Berserk" || ability1 == "Eager") {
        multi *= 1.5;
        itemA = "None";
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Berserk" || ability2 == "Eager") {
        itemB = "None";
        stuffUsed.ability2 = ability2;
    }

    if (ability1 == "Neutralize") {
        tempType = "Simple"
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Overshadow" && tempType == "Simple") {
        tempType = "Dark";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Illuminate" && tempType == "Simple") {
        tempType = "Light";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Chill" && tempType == "Simple") {
        tempType = "Ice";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Turbulent" && tempType == "Simple") {
        tempType = "Air";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    else if (ability1 == "Metamorphosis" && tempType == "Simple") {
        tempType = "Bug";
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }

    if (move.name == "Flare" && (parseInt(stats1.spd) > parseInt(stats2.spd) && (!btl1 || btl1 && !withoutSlapDown)) ||
       ((move.name == "Revolution" || move.name == "Kindled Rage" || move.name == "Reflection Burst") && parseInt(stats2.spd) > parseInt(stats1.spd) && !btl1)) {
        multi *= 2;
        stuffUsed.extra1 += " (" + tempPower * 2 + " BP)";
    }

    if (move.name == "Snowdozer") {
        tempPower = Number(tempPower) * 2 ** (snowball - 1);
        stuffUsed.extra1 += " (" + tempPower + " BP)";
    }

    if (move.name == "Undermine" && btl2 && withoutSlapDown) {
        powerCheck *= 2;
        multi *= 2;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 2) + " BP)";
    }

    if (ability1 == "Recurrent" && tempType == "Electric") {
        let chanting = Math.min((1 + 0.2 * (repeat)), 2);
        multi *= chanting;
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + Math.round(tempPower * chanting) + " BP)";
    }

    if (ability1 == "Wail") {
        let chanting = Math.min((1 + 0.1 * (repeat)), 1.4);
        multi *= chanting;
        stuffUsed.ability1 = ability1;
        stuffUsed.extra1 += " (" + Math.round(tempPower * chanting) + " BP)";
    }

    if ((ability1 == "Combustible" || ability1 == "Coursing Venom" || ability1 == "Noxious Weeds" || ability1 == "Prismatic") && immuneBoostCheck1) {
        if (tempType == typeModAbility1.typeModifier.type) {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }
    if (ability1 == "Toxic Filter" && immuneBoostCheck1) {
        if (tempType == "Air") {
            multi *= 1.5;
            stuffUsed.ability1 = ability1;
        }
    }

    if ((ability1 == "Vengeance" && btl2 && withoutSlapDown) ||
       (ability1 == "Ambush" && btl1 && withoutSlapDown && move.name != "Chase Down")) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Sharp Claws" && move.contact == true) || 
       (ability1 == "Brute Force" && move.secondaryEffect == true) ||
       (ability1 == "Overcharged" && tempType == "Electric") ||
       (ability1 == "Watcher" && (stats1.spd < stats2.spd || (btl1 && withoutSlapDown))) ||
       (ability1 == "Gloomy" && fog.checked) ||
       (ability1 == "Tumultuous" && winds.checked) ||
       (ability1 == "Upper Hand" && stats1.spd > stats2.spd)) {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Power Jaw" && move.bite == true) ||
       (ability1 == "Heavy Fists" && (move.punch == true || move.slap == true)) ||
       (ability1 == "Guru" && tempPower <= 70 && powerCheck <= 70) ||
       (ability1 == "High Explosive" && move.bomb == true)) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }

    if ((ability1 == "Bloodsucker" && move.drain) ||
       (gen1 == gen2 && ability1 == "Territorial") ||
       (ability1 == "Hag" && tempType == "Mind") ||
       (ability1 == "Battle Armor" && tempType == "Metal")) {
        multi *= 1.25;
        stuffUsed.ability1 = ability1;
    }

    if (ability2 == "Overcharged" && tempType == "Electric") {
        multi *= 1.3;
        stuffUsed.ability2 = ability2;
    }

    if ((ability1 == "Baneful" && (stat2 == "poisoned" || stat2 == "diseased")) ||
       (move.sound == true && ability1 == "Tone Deaf") ||
       (move.recoil && ability1 == "Madcap") ||
       (stat2 != "healthy" && ability1 == "Mean Spirited")) {
        multi *= 1.2;
        stuffUsed.ability1 = ability1;
    }
    if (gen1 != gen2 && ability1 == "Territorial") {
        multi *= 0.75;
        stuffUsed.ability1 = ability1;
    }

    if (((move.name == "Gloominous Roar" || move.name == "Gloominous Fangs") && loom1.name == "Tiklipse" && ability1 != "Circadian" && itemA.includes("Light")) ||
       (itemA.includes(tempType) && itemA.includes("Essence")) ||
       (itemA == "Power Cuffs")) {
        multi *= 1.2;
        stuffUsed.item1 = itemA;
    }

    /*if ((itemB.includes("burst") && move.knockOff) || (itemB != "None" && move.knockOff == true && (withoutSlapDown || ability2 == "Clingy"))) {
        if (move.name == "Slap Down") multi *= 1.5;
        stuffUsed.item2 = itemB;
        stuffUsed.ability2 = (ability2 == "Clingy" ? ability2 : stuffUsed.ability2);
    }
    else if (ability1 == "Sly" && move.knockOff == true) {
        tempItem = (second == false ? item2.value : item1.value);
        if (tempItem != "None" && withoutSlapDown) {
            multi *= 1.5;
            stuffUsed.item2 = tempItem;
        }
    }*/
    if (tempType != "Null" && itemA.includes(types[tempType.toLowerCase()].otherName.charAt(0).toUpperCase() + types[tempType.toLowerCase()].otherName.slice(1)) && itemA.includes("Shell") && withoutSlapDown && !foulHit && ability2 != "Effulgent") {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }

    if (ability1 == "Specialization") {
        let count = specializationCount(second);
        if (count == 1) multi *= 1.25;
        else if (count == 2) multi *= 1.5;
        else if (count == 3) multi *= 2;
        if (count != 0) stuffUsed.ability1 = ability1 + " (" + Math.abs(count - 4) + ")";
    }

    if(move.name == "Chase Down" && btl1) {
        multi *= 1.5;
        stuffUsed.extra1 += " (" + Math.floor(tempPower * 1.5) + " BP)";
    }

    if (ability2 == "Repugnant" && move.bite == true) {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }

    if (foulHit) {
        multi *= 0.25;
    }

    if (tagTeam && isDouble) {
        multi *= 1.5;
        stuffUsed.extra1 += " (Conspire)";
    }
    if (teamwork && isDouble) {
        multi *= 1.5;
        stuffUsed.extra1 += " (Teamwork)";
    }

    if (ovrCharged1 && tempType == "Electric" && isDouble) {
        multi *= 1.3;
        stuffUsed.extra1 += " (Ally Overcharge)";
    }
    if (ovrCharged2 && tempType == "Electric" && isDouble) {
        multi *= 1.3;
        stuffUsed.extra1 += " (Enemy Overcharge)";
    }

    if ((rain.checked && tempType == "Water") || (heat.checked && tempType == "Fire")) {
        multi *= 1.3;
    }

    if ((storm.checked && tempType == "Electric") || (winds.checked && tempType == "Toxic") || (cosmic.checked && tempType == "Ancient")) {
        multi *= 1.25;
    }

    if ((rain.checked && tempType == "Fire") || (heat.checked && tempType == "Water")) {
        multi *= 0.7;
    }

    if (cosmic.checked && tempType == "Ancient") {
        stuffUsed.weather += " under Cosmic Pressure";
    } else if (rain.checked && ((tempType == "Water" || tempType == "Fire") || ability1 == "Rain Rush")) {
        stuffUsed.weather += " in Heavy Rainfall";
    } else if (winds.checked && ((tempType == "Toxic") || (loom1.types.includes("Air") && move.mr1 == "Speed") || ability1 == "Tumultuous")) {
        stuffUsed.weather += " in Strong Gusts";
    } else if (heat.checked && ((tempType == "Fire" || tempType == "Water") || (ability1 == "Inferno" && move.mr1 == "Ranged Attack") || ability1 == "Hotfoot")) {
        stuffUsed.weather += " in Smoldering Heat";
    } else if (fog.checked && ((!(loom1.types.includes("Spirit") || loom1.types.includes("Light")) && loom2.types.includes("Spirit")) || (loom1.types.includes("Spirit") && !(loom2.types.includes("Spirit") || loom2.types.includes("Light"))) || ability1 == "Gloomy" || ability1 == "Prowler")) {
        stuffUsed.weather += " in Dense Fog";
    } else if (storm.checked && (tempType == "Electric" || (tempType == "Earth" && loom2.types.includes("Air")) || ability1 == "Overclock")) {
        stuffUsed.weather += " in Severe Thunderstorms";
    }
    if (fungus.checked && (tempType == "Light" || tempType == "Dark") && loom2.types.includes("Plant")) {
        stuffUsed.weather += " under Fungus Curse";
    }

    tempPower = pokeRound(tempPower * multi);
    multi = 1;

    battleAdjustments(move, ability1, ability2, stuffUsed, tempAtk, tempDef, boastAttack, analyzeDefs, tempType, immuneBoostCheck1, immuneBoostCheck2, crit, withoutSlapDown, hitConfirmer, foulHit, currentEnergy1);

    //Attack -------------------------------------------

    if ((((crit || (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased"))) && ability2 != "Protective Shell") && tempAtk.stage < 0)) {
        if (ability1 == "Festive Spirit" && move.mr1 == "Ranged Attack") {
            tempAtk.atk = currentEnergy1;
        } else tempAtk.atk = calculateStat(tempAtk.base, tempAtk.iv.value, tempAtk.ev.value, tempAtk.level, undefined, tempAtk.posNat, tempAtk.negNat, tempAtk.veryNat, tempAtk.name);
    }

    if ((ability2 == "Ignorant") ||
        (ability2 == "Sob" && immuneBoostCheck2)) {
        if (ability1 == "Festive Spirit" && move.mr1 == "Ranged Attack") {
            tempAtk.atk = currentEnergy1;
        } else tempAtk.atk = calculateStat(tempAtk.base, tempAtk.iv.value, tempAtk.ev.value, tempAtk.level, undefined, tempAtk.posNat, tempAtk.negNat, tempAtk.veryNat, tempAtk.name);
        stuffUsed.ability2 = ability2;
    }
    if ((ability1 == "Hasty" && move.mr1 == "Melee Attack") ||
       (ability1 == "Vigorous" && stat1 != "healthy" && move.mr1 == "Melee Attack") ||
       (ability1 == "Vicious" && (stat1 == "poisoned" || stat1 == "diseased")) ||
       (dawn && isDouble && move.mr1 == "Melee Attack" && ability1 == "Dusk") ||
       (dawn && isDouble && move.mr1 == "Ranged Attack" && ability1 == "Dawn") ||
       (move.mr1 == "Melee Defense" && ability1 == "Trash Armor") ||
       ((move.mr1 == "Melee Defense" || move.mr1 == "Ranged Defense") && ability1 == "Safety Pot") ||
       (ability1 == "Inferno" && heat.checked && move.mr1 == "Ranged Attack")) {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }   
    if ((move.mr1 == "Melee Defense" && itemA == "Heavy Armor") ||
       (move.mr1 == "Ranged Defense" && itemA == "Heavy Shield")) {
            multi *= 1.2;
            stuffUsed.item1 = itemA;
    }
    if (move.mr1 == "Ranged Defense" && ability1 == "Slick Shell") {
        multi *= 2;
        stuffUsed.ability1 = ability1
    }
    if ((itemA == "Mystic Wand" && loom1.name == "Shawchi" && move.mr1 == "Ranged Attack") ||
        (itemA == "Specialty Goggles" && ((move.mr1 == "Ranged Attack" && adaptive.mr1 != "Melee Attack") || adaptive.mr1 == "Ranged Attack")) ||
        (itemA == "Specialty Gloves" && ((move.mr1 == "Melee Attack" && adaptive.mr1 != "Ranged Attack") || adaptive.mr1 == "Melee Attack")) ||
        (itemA == "Specialty Boots" && move.mr1 == "Speed")) {
        multi *= 1.5;
        stuffUsed.item1 = itemA;
    }
    if (itemA == "Drop of Youth" && loom1.finalEvo == false && (move.mr1 == "Melee Defense" || move.mr1 == "Ranged Defense")) {
        multi *= 1.4;
        stuffUsed.item1 = itemA;
    }
    if (winds.checked && move.mr1 == "Speed" && loom1.types.includes("Air")) {
        multi *= 1.25;
    }
    if (move.mr1 == "Speed" && stat1 == "paralasis") {
        multi *= 0.5;
    }

    tempAtk.atk = pokeRound(tempAtk.atk * multi);
    multi = 1;

    //Defense ----------------------------------------------------

    if ((((crit || (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased"))) && ability2 != "Protective Shell") || move.name == "Vice Jaws" || move.name == "Bone Crunch") && tempDef.stage > 0) {
        tempDef.def = calculateStat(tempDef.base, tempDef.iv.value, tempDef.ev.value, tempDef.level, undefined, tempDef.posNat, tempDef.negNat, tempDef.veryNat, tempDef.name, tempDef.rest);
    }
    if ((ability1 == "Ignorant") || 
       (ability1 == "Bully" && loom1.height > loom2.height && tempDef.stage >= 1) ||
        (ability1 == "Sob" && immuneBoostCheck1) ||
        (ability1 == "Puncture" && move.bite && tempDef.stage >= 1)) {
        tempDef.def = calculateStat(tempDef.base, tempDef.iv.value, tempDef.ev.value, tempDef.level, undefined, tempDef.posNat, tempDef.negNat, tempDef.veryNat, tempDef.name, tempDef.rest);
        stuffUsed.ability1 = ability1;
    }
    if ((itemB == "Heavy Shield" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense")) ||
       (itemB == "Heavy Armor" && ((move.mr2 == "Melee Defense" && adaptive.mr2 != "Ranged Defense") || adaptive.mr2 == "Melee Defense")) && !(ability1 == "Puncture" & move.bite)) {
        multi *= 1.2;
        stuffUsed.item2 = itemB;
    }
    if (itemB == "Drop of Youth" && loom2.finalEvo == false && !(ability1 == "Puncture" & move.bite)) {
        multi *= 1.4;
        stuffUsed.item2 = itemB;
    }
    if ((itemB == "Restrictive Shield" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense")) ||
        (itemB == "Restrictive Armor" && ((move.mr2 == "Melee Defense" && adaptive.mr2 != "Ranged Defense") || adaptive.mr2 == "Melee Defense")) && !(ability1 == "Puncture" & move.bite)) {
        multi *= 1.5;
        stuffUsed.item2 = itemB;
    }
    if ((ability2 == "Trash Armor" || ability2 == "Hard Candy" || ability2 == "Safety Pot") && ((move.mr2 == "Melee Defense" && adaptive.mr2 != "Ranged Defense") || adaptive.mr2 == "Melee Defense") && !(ability1 == "Puncture" & move.bite)) {
        multi *= 1.5;
        stuffUsed.ability2 = ability2;
    }
    if ((ability2 == "Safety Pot" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense") && !(ability1 == "Puncture" & move.bite)) ||
        (ability2 == "Oxidize" && (winds.checked || rain.checked) && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense"))) {
        multi *= 1.5;
        stuffUsed.ability2 = ability2;
    }
    if (ability2 == "Slick Shell" && ((move.mr2 == "Ranged Defense" && adaptive.mr2 != "Melee Defense") || adaptive.mr2 == "Ranged Defense") && !(ability1 == "Puncture" & move.bite)) {
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

    if ((crit || (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased"))) && ability2 != "Protective Shell") {
        if (ability1 == "Brutal Wrath" && (stat2 == "poisoned" || stat2 == "diseased")) stuffUsed.ability1 = ability1;
        if (ability1 == "Marksman" || ability1 == "Luck Of The Sea") {
            multi *= 2.25;
            stuffUsed.ability1 = ability1;
        }
        else multi *= 1.5;
    }
    if (crit && ability2 == "Protective Shell") stuffUsed.ability2 = ability2;

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //STAB ---------------------------------

    if (isStab(types1, { type: tempType }) && ability1 == "Awakening") {
        multi *= 1.5;
        stuffUsed.ability1 = ability1;
    }
    else if (isStab(types1, { type: tempType }) && ability1 == "Ace") {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }
    else if (isStab(types1, { type: tempType }) || ability1 == "Mask Swap") {
        multi *= 1.25;
        if (ability1 == "Mask Swap") stuffUsed.ability1 = ability1;
    }
    else if ((move.name == "Gloominous Roar" || move.name == "Gloominous Fangs") && loom1.name == "Tiklipse" && ability1 != "Circadian") {
        multi *= 1.25;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Type -------------------------------

    if((ability1 == "Devious") || 
       (ability1 == "Bully" && loom1.height > loom2.height) ||
       (fog.checked && loom1.types.includes("Spirit") && !(loom2.types.includes("Spirit") || loom2.types.includes("Light")))) {
        typeModAbility2 = undefined;
    }

    else if (typeModAbility2 && typeModAbility2.name == "Total Eclipse" && (ability1 == "Overshadow" || ability1 == "Illuminate")) {
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

    if ((types[types2.primary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) ||
        (fungus.checked && types[types2.primary.toLowerCase()].fungusWeaknesses && types[types2.primary.toLowerCase()].fungusWeaknesses.includes(tempType.toLowerCase()))) {
        multi *= 2;
    }
    if ((types2.secondary != "None" && types[types2.secondary.toLowerCase()].weaknesses.includes(tempType.toLowerCase())) ||
        (fungus.checked && types2.secondary != "None" && types[types2.secondary.toLowerCase()].fungusWeaknesses && types[types2.secondary.toLowerCase()].fungusWeaknesses.includes(tempType.toLowerCase()))) {
        multi *= 2;
    }
    if (types[types2.primary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if (types2.secondary != "None" && types[types2.secondary.toLowerCase()].resistances.includes(tempType.toLowerCase())) {
        multi *= 0.5;
    }
    if ((types[types2.primary.toLowerCase()].immunities.includes(tempType.toLowerCase()) && !((ability1 == "Royal Decree" && tempType == "Electric") || (storm.checked && tempType == "Earth")) && !(fungus.checked && types[types2.primary.toLowerCase()].fungusWeaknesses && types[types2.primary.toLowerCase()].fungusWeaknesses.includes(tempType.toLowerCase())) && !(ability1 == "Assertive" && tempType == "Brawler" && types2.primary == "Spirit") && move.name != "Rock Slide") ||
        (fungus.checked && types[types2.primary.toLowerCase()].fungusImmunities && types[types2.primary.toLowerCase()].fungusImmunities.includes(tempType.toLowerCase()))) {
        multi *= 0;
    }
    if ((types2.secondary != "None" && types[types2.secondary.toLowerCase()].immunities.includes(tempType.toLowerCase()) && !((ability1 == "Royal Decree" && tempType == "Electric") || (storm.checked && tempType == "Earth")) && !(fungus.checked && types[types2.secondary.toLowerCase()].fungusWeaknesses && types[types2.secondary.toLowerCase()].fungusWeaknesses.includes(tempType.toLowerCase())) && !(ability1 == "Assertive" && tempType == "Brawler" && types2.secondary == "Spirit") && move.name != "Rock Slide") ||
        (fungus.checked && types2.secondary != "None" && types[types2.secondary.toLowerCase()].fungusImmunities && types[types2.secondary.toLowerCase()].fungusImmunities.includes(tempType.toLowerCase()))) {
        multi *= 0;
    }
    if (move.typeModifier != undefined && (types2.primary == move.typeModifier.type || types2.secondary == move.typeModifier.type)) {
        multi *= move.typeModifier.modifier;
    }

    if ((move.name == "Gloominous Roar" || move.name == "Gloominous Fangs") && loom1.name == "Tiklipse" && ability1 != "Circadian") {
        multi = 1;
        if (types2.primary == "Ancient" || types2.secondary == "Ancient") {
            multi = 2;
        }
        if (types2.primary == "Bug" || types2.secondary == "Bug") {
            multi *= 0.5;
        }
        if (types2.primary == "Plant" || types2.secondary == "Plant") {
            multi *= 0;
        }
        if (typeModAbility2 != undefined && tempType == typeModAbility2.typeModifier.type2 && typeModAbility2.powerMod == false) {
            multi = 0;
        }
    }
    if (ability2 == "Gummy" && move.bomb) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }

    effectiveness = multi;

    if (ability1 == "Wise" && effectiveness < 1) {
        multi *= 2;
        stuffUsed.ability1 = ability1;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Status ------------------------

    if (stat1 == "burned" && move.mr == "Melee" && move.name != "Ill Will" && ability1 != "Vigorous" && ability1 != "Aqua Body" && !loom1.types.includes("Fire") && !(adaptive.mr && adaptive.mr == "Ranged") ||
        (stat1 == "freezing" && move.mr == "Ranged" && move.name != "Splitting Headache" && !loom1.types.includes("Ice") && !(adaptive.mr && adaptive.mr == "Melee"))) {
        multi *= 0.5;
    }

    dmg = Math.floor(dmg * multi);
    multi = 1;

    //Other --------------------------------

    if (wall && move.mr == "Melee" && ability1 != "Finesse" && ability1 != "All Seeing" && !(ability1 == "Disenchant" && immuneBoostCheck1) && move.name != "Piercing Drive") {
        if (isDouble == false ? multi *= 0.5 : multi *= 2/3);
        stuffUsed.weather += " through Near Enchantment";
    }
    if (shield && move.mr == "Ranged" && ability1 != "Finesse" && ability1 != "All Seeing" && !(ability1 == "Disenchant" && immuneBoostCheck1)) {
        if (isDouble == false ? multi *= 0.5 : multi *= 2/3);
        stuffUsed.weather += " through Far Enchantment";
    }

    if (ability1 == "Do or Die") {
        multi *= 1.3;
        stuffUsed.ability1 = ability1;
    }

    if ((ability2 == "Tank" && btl1 && withoutSlapDown && !(icicle && !loom2.types.includes("Ice")) && !(icicleH && !loom2.types.includes("Ice")) && (barbH == 0 || loom2.types.includes("Air")) && !foulHit && !(ability1 == "Puncture" & move.bite)) ||
        (ability2 == "Elusive" && stat1 != "healthy")) {
        multi *= 0.5;
        stuffUsed.ability2 = ability2;
    }
    if ((ability2 == "Seize" && move.pivot) ||
        (ability2 == "Mesmerizing" && (move.priority || (ability1 == "Foresight" && tempType == "Mind" && stats1.hpPercent > 49) || (ability1 == "Wildfire" && tempType == "Fire" && stats1.hpPercent > 49) || (move.name == "Adaptive Assault" && tempType == "Simple"))) ||
        ((ability2 == "Fortissimo" || ability2 == "Reverberate") && move.sound)) {
        multi *= 0;
        stuffUsed.ability2 = ability2;
    }
    if (tempType != "Null" && itemB.includes(types[tempType.toLowerCase()].otherName.charAt(0).toUpperCase() + types[tempType.toLowerCase()].otherName.slice(1)) && itemB.includes("Pearl") && withoutSlapDown && !foulHit && ability1 != "Effulgent" && !(ability1 == "Puncture" & move.bite)) {
        multi *= 0.5;
        stuffUsed.item2 = itemB;
    }

    if (effectiveness > 1 && ability2 == "Enchanted Coat") {
        multi *= 0.75;
        stuffUsed.ability2 = ability2;
    }
    if (isDouble && guardian) {
        multi *= 0.75;
    }

    if (itemB == "Health Amulet") stuffUsed.item2 = itemB;

    if (ability1 == "Double Strike" && !foulHit && !(isDouble && move.aoe == true) && !move.hits) {
        if (detailed) {
            let foulArray = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, false, level, ul, second, detailed, false, takeSecondaryType, true);
            foulDmg = foulArray[0];
            possibleFoulDmg = foulArray[1];
        } else {
            foulDmg = getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, false, level, ul, second, detailed, false, takeSecondaryType, true);
        }
        stuffUsed.ability1 = ability1;
    }

    if (ul) {
        multi *= 0.85;
    }

    dmg = (dmg * multi);
    multi = 1;

    if (!ability1 || ability1 == "None") stuffUsed.ability1 = "";
    if (!ability2 || ability2 == "None") stuffUsed.ability2 = "";
    if (itemA == "None") stuffUsed.item1 = "";
    if (itemB == "None") stuffUsed.item2 = "";

    let multiHits = [];
    let multiDmg = 0;
    if (move.hits && !hitConfirmer) {
        if (move.name == "Pepper Burst" || move.name == "Double Beat" || move.name == "Double Whack") hits = 2;
        if (move.name == "Rapid Fire") hits = 3;
        for (let i = 0; i < hits - 1; i++) {
            multiHits.push(getMultiplier(loom1, loom2, move, movePower, crit, repeat, hits, swarm, snowball, true, level, ul, second, detailed, false));
        }
        if (hits > 1) stuffUsed.extra1 += " (" + hits + " hits)";
        else stuffUsed.extra1 += " (" + hits + " hit)";
        multiHits.forEach(num => multiDmg += num);
    }

    if (detailed && !hitConfirmer) {
        let numb;
        if (move.hits) {
            if (move.name == "Pepper Burst" || move.name == "Double Beat" || move.name == "Double Whack") hits = 2;
            if (move.name == "Rapid Fire") hits = 3;
        }
        for (let i = 0.85; i <= 1; i += 0.01) {
            let sum = 0;
            numb = i.toFixed(3);
            multiHits.forEach(num => sum += Math.floor(num * numb));
            possibleDmg.push(Math.floor(dmg * multi * numb + sum));
        }
        if (foulHit) {
            return [dmg, possibleDmg];
        }
        possibleDmg[16] = stuffUsed;
        return [possibleDmg, possibleFoulDmg];
    }

    dmg = Math.floor(dmg * multi + multiDmg);

    return dmg + foulDmg;
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
    //tempAtk
    if (mr.mr1 == "Ranged Attack") {
        if (second) {
            tempAtk = { atk: atkR2, iv: atkRIV2, ev: atkREV2, base: baseAtkR2.value, name: "AttackR", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkRStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: atkR1, iv: atkRIV1, ev: atkREV1, base: baseAtkR1.value, name: "AttackR", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkRStages1.value), level: level1.value };
        }    
    }
    else if (mr.mr1 == "Melee Attack") {
        if (second) {
            if (mr.name == "Tricky Tactics") {
                tempAtk = { atk: atk1, iv: atkIV1, ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkStages1.value), level: level1.value };
            } else {
                tempAtk = { atk: atk2, iv: atkIV2, ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkStages2.value), level: level2.value };
            }
        } else {
            if (mr.name == "Tricky Tactics") {
                tempAtk = { atk: atk2, iv: atkIV2, ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkStages2.value), level: level2.value };
            } else {
                tempAtk = { atk: atk1, iv: atkIV1, ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkStages1.value), level: level1.value };
            }
        }
    }
    else if (mr.mr1 == "Ranged Defense") {
        if (second) {
            tempAtk = { atk: defR2, iv: defRIV2, ev: defREV2, base: baseDefR2.value, name: "DefenseR", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defRStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: defR1, iv: defRIV1, ev: defREV1, base: baseDefR1.value, name: "DefenseR", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defRStages1.value), level: level1.value };
        }
    }
    else if (mr.mr1 == "Melee Defense") {
        if (second) {
            tempAtk = { atk: def2, iv: defIV2, ev: defEV2, base: baseDef2.value, name: "DefenseM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: def1, iv: defIV1, ev: defEV1, base: baseDef1.value, name: "DefenseM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defStages1.value), level: level1.value };
        }
    }
    else if (mr.mr1 == "Speed") {
        if (second) {
            tempAtk = { atk: spd2, iv: spdIV2, ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(spdStages2.value), level: level2.value };
        } else {
            tempAtk = { atk: spd1, iv: spdIV1, ev: spdEV1, base: baseSpd1.value, name: "Speed", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(spdStages1.value), level: level1.value };
        }
    }
    else {
        tempAtk = { atk: spd2, iv: spdIV2, ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(spdStages2.value), level: level2.value };
    }
    //tempDef
    if (mr.mr2 == "Ranged Attack") {
        if (second) {
            tempDef = { def: atkR1, iv: atkRIV1, ev: atkREV1, base: baseAtkR1.value, name: "AttackR", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkRStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: atkR2, iv: atkRIV2, ev: atkREV2, base: baseAtkR2.value, name: "AttackR", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkRStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Melee Attack") {
        if (second) {
            tempDef = { def: atk1, iv: atkIV1, ev: atkEV1, base: baseAtk1.value, name: "AttackM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(atkStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: atk2, iv: atkIV2, ev: atkEV2, base: baseAtk2.value, name: "AttackM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(atkStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Ranged Defense") {
        if (second) {
            tempDef = { def: defR1, iv: defRIV1, ev: defREV1, base: baseDefR1.value, name: "DefenseR", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defRStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: defR2, iv: defRIV2, ev: defREV2, base: baseDefR2.value, name: "DefenseR", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defRStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Melee Defense") {
        if (second) {
            tempDef = { def: def1, iv: defIV1, ev: defEV1, base: baseDef1.value, name: "DefenseM", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(defStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: def2, iv: defIV2, ev: defEV2, base: baseDef2.value, name: "DefenseM", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(defStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else if (mr.mr2 == "Speed") {
        if (second) {
            tempDef = { def: spd1, iv: spdIV1, ev: spdEV1, base: baseSpd1.value, name: "Speed", posNat: posNat1, negNat: negNat1, veryNat: veryNat1, stage: parseInt(spdStages1.value), level: level1.value, rest: rest1 };
        } else {
            tempDef = { def: spd2, iv: spdIV2, ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(spdStages2.value), level: level2.value, rest: rest2 };
        }
    }
    else {
        tempDef = { def: spd2, iv: spdIV2, ev: spdEV2, base: baseSpd2.value, name: "Speed", posNat: posNat2, negNat: negNat2, veryNat: veryNat2, stage: parseInt(spdStages2.value), level: level2.value, rest: rest2 };
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

function getSpeedPower(spd1, spd2) {
    if (spd2 > spd1 || spd2 == 0) return 40;
    if (spd1 / spd2 >= 1 && spd1 / spd2 < 2) return 60;
    if (spd1 / spd2 >= 2 && spd1 / spd2 < 3) return 80;
    if (spd1 / spd2 >= 3 && spd1 / spd2 < 4) return 120;
    return 150;
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

function loadBreakCalc(side) {
    let moveOne1 = findMove(moveOneDropdown1.value);
    let moveTwo1 = findMove(moveTwoDropdown1.value);
    let moveThree1 = findMove(moveThreeDropdown1.value);
    let moveFour1 = findMove(moveFourDropdown1.value);
    let moveOne2 = findMove(moveOneDropdown2.value);
    let moveTwo2 = findMove(moveTwoDropdown2.value);
    let moveThree2 = findMove(moveThreeDropdown2.value);
    let moveFour2 = findMove(moveFourDropdown2.value);
    let ability1 = abilityDropdown1.value;
    let ability2 = abilityDropdown2.value;
    let itemA = item1.value;
    let itemB = item2.value;
    dodgeCalc = side;

    if (side == "left") {
        $("#moveBPDropdown").val(moveOne1.name);
        $("#moveBPDropdown").select2().trigger('change');
        $("#moveBPDropdown2").val(moveTwo1.name);
        $("#moveBPDropdown2").select2().trigger('change');
        $("#moveBPDropdown3").val(moveThree1.name);
        $("#moveBPDropdown3").select2().trigger('change');
        $("#moveBPDropdown4").val(moveFour1.name);
        $("#moveBPDropdown4").select2().trigger('change');
        $("#abilityBPDropdown").val(ability1);
        $("#abilityBPDropdown").select2().trigger('change');
        $("#itemBP").val(itemA);
        $("#itemBP").select2().trigger('change');
    } else if (side == "right") {
        $("#moveBPDropdown").val(moveOne2.name);
        $("#moveBPDropdown").select2().trigger('change');
        $("#moveBPDropdown2").val(moveTwo2.name);
        $("#moveBPDropdown2").select2().trigger('change');
        $("#moveBPDropdown3").val(moveThree2.name);
        $("#moveBPDropdown3").select2().trigger('change');
        $("#moveBPDropdown4").val(moveFour2.name);
        $("#moveBPDropdown4").select2().trigger('change');
        $("#abilityBPDropdown").val(ability2);
        $("#abilityBPDropdown").select2().trigger('change');
        $("#itemBP").val(itemB);
        $("#itemBP").select2().trigger('change');
    }

    loadMoves();
}

function energyBreakpoint(EC, EC2, EC3, EC4, moves) {
    let cost = [parseInt(EC), parseInt(EC2), parseInt(EC3), parseInt(EC4)]; //Read Energy Costs of 4 moves
    let times = [cost[0] == 0 ? 0 : moveBPTimes.value, cost[1] == 0 ? 0 : moveBPTimes2.value, cost[2] == 0 ? 0 : moveBPTimes3.value, cost[3] == 0 ? 0 : moveBPTimes4.value]; //Read Times used for each move. If no move, then ignore.
    let timesT = parseInt(times[0]) + parseInt(times[1]) + parseInt(times[2]) + parseInt(times[3]); //Sloppy way of adding all the times above.
    let timesP = 0;
    let total = 0;
    for (i = 0; i < 4; i++) {
        if (cost[i] > 0) total += cost[i] * times[i];
        if (moves[i].pivot) timesP += parseInt(times[i]);
    }
    if (total == 0) return 0;
    if (timesP > 0) timesP -= 1;
    let regen = Math.max(Math.floor(total / 40), 1); //Starting point to figure out breakpoint
    let breakpoint = 0; //Functions end goal
    let breakBase = 0; //General regen point
    let breakMath = 0; //Used to find exact needed Energy
    let numb;
    for (i = regen; i > 0; i--) { //starts with energy regen given at the total cost of the move combo, then works its way down until a match is found
        breakpoint = total - i * (timesT + timesP - 1);
        breakBase = Math.max(Math.floor(breakpoint / 40), 1);
        if (breakBase >= i) {
            if (breakBase > i) { //if match is found with leftovers, bring down breakpoint until smallest possible leftover is left
                for (j = (breakpoint / 40); j >= i; j -= 0.025) {
                    breakMath = breakpoint - total + (timesT + timesP - 1) * Math.floor(breakpoint / 40);
                    if (breakMath == 0) return breakpoint;
                    else if (breakMath < 0) return (breakpoint + 1)
                    breakpoint -= 1;
                }
            }
            return breakpoint;
        }
    }
    breakpoint = 0;
    return breakpoint;
}

function displayDamage(damage) {
    if (damage[1]) {
        return "1st Hit: " + damage[0].join(", ") + "; 2nd Hit: " + damage[1].join(", ");
    }
    damage.pop();
    return damage[0].join(", ");
}

function adjustHP(loom1, loom2, hp1, hp2, item, ability, status, second = false, counter, OHKO, onlyIncludeIceTrap = false) {
    let newHP = 0;
    let multi = 1;
    let ice = iceTrap2.checked;
    let halfIce = halfIce2.checked;
    barbs = [~~$("input:radio[name='barbsL']:checked").val(), ~~$("input:radio[name='barbsR']:checked").val()];
    let barb = barbs[1];
    let sap = { attacker: sapPlant1.checked, defender: sapPlant2.checked };
    let bloodDrain = { attacker: bloodDrain1.checked, defender: bloodDrain2.checked };
    let pestilence = pestilence2.checked;
    let quicksand = quicksand2.checked;
    let buzzolen = buzzolen2.checked;
    let hellstorm = hellstorm2.checked;
    let softWater = softWater2.checked;
    let disease = diseased2.value;
    let hazardString = "";

    if (second) {
        ice = iceTrap1.checked;
        halfIce = halfIce1.checked;
        barb = barbs[0];
        sap = { attacker: sapPlant2.checked, defender: sapPlant1.checked };
        bloodDrain = { attacker: bloodDrain2.checked, defender: bloodDrain1.checked };
        pestilence = pestilence1.checked;
        quicksand = quicksand1.checked;
        buzzolen = buzzolen1.checked;
        hellstorm = hellstorm1.checked;
        softWater = softWater1.checked;
        disease = diseased1.value;
    }
    disease = parseInt(disease);

    if ((ice || halfIce) && !(loom2.types.includes("Ice")) && !(ability == "Flutter" || ability == "Mysterious Cloak")) {
        if (loom2.types.includes("Fire") || halfIce) {
            if (loom2.types.includes("Fire") && halfIce){
            } else {
                hazardString += "halved icicle trap and "
            }
        }    
        else {
            hazardString += "icicle trap and ";
        }
        if (onlyIncludeIceTrap) {
            hazardString = hazardString.substr(0, hazardString.length - 5);
            hazardString = " after " + hazardString;
            return [hp1, hazardString];
        }
    }

    if (barb > 0  && !loom2.types.includes("Air") && !(ability == "Flutter" || ability == "Mysterious Cloak" || ability == "Hover")) {
        if (barb == 1) {
            hazardString += "1 layer of barbs and ";
        } else if (barb == 2) {
            hazardString += "2 layers of barbs and ";
        } else if (barb == 3) {
            hazardString += "3 layer of barbs and ";
        }
    }

    if (ability == "Drainage") {
        multi *= 1.5;
    }
    if (item == "Drain Orb") {
        multi *= 1.2;
    }
    
    if (!loom2.types.includes("Plant") && sap.defender == true) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "sap plant damage and ";
    }

    if (bloodDrain.defender == true) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "blood drain damage and ";
    }

    if (pestilence) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "pestilence damage and ";
    }

    if (quicksand) {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "quicksand damage and ";
    }

    if (buzzolen) {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "stinger damage and ";
    }

    if (hellstorm) {
        newHP += Math.floor(hp1 * 1 / 6);
        hazardString += "hellstorm damage and ";
    }

    if (ability == "Appetite") {
        newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "appetite damage and ";
    }

    if (!OHKO) {
        if (!loom1.types.includes("Plant") && sap.attacker == true) {
            newHP -= Math.floor(hp2 * 1 / 8 * multi);
            hazardString += "sap plant recovery and ";
        }
        if (bloodDrain.attacker == true) {
            newHP -= Math.floor(hp2 * 1 / 8 * multi);
            hazardString += "blood drain recovery and ";
        }
        if (softWater) {
            newHP -= Math.floor(hp1 * 1 / 8);
            hazardString += "soft water recovery and "
        }
        if (item == "Health Amulet") {
            newHP -= Math.floor(hp1 * 1 / 16);
            hazardString += "health amulet recovery and ";
        }
        if (loom2.types.includes("Plant") && rain.checked) {
            newHP -= Math.floor(hp1 * 1 / 16);
            hazardString += "rain recovery and ";
        }
        if (rain.checked && ability == "Pluvial") {
            newHP -= Math.floor(hp1 * 1 / 16);
            hazardString += "pluvial recovery and ";
        }
    }

    if (second) {
        loom1 = loomians[pokeDropdown2.value.toLowerCase()];
        loom2 = loomians[pokeDropdown1.value.toLowerCase()];
    }
    
    let otherAbility = (second ? abilities.find((x) => x == abilityDropdown2.value) : abilities.find((x) => x == abilityDropdown1.value));
    if (status == "burned" && !loom2.types.includes("Fire") && ability != "Aqua Body" && ability != "One of Many") {
        if (otherAbility == "Third-Degree Burn") newHP += Math.floor(hp1 * 1 / 8);
        else newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "burn damage and ";
    }

    if (status == "freezing" && !loom2.types.includes("Ice") && ability != "One of Many") {
        if (otherAbility == "Deep Frostbite") newHP += Math.floor(hp1 * 1 / 8);
        else newHP += Math.floor(hp1 * 1 / 16);
        hazardString += "frostbite damage and ";
    }

    if (status == "poisoned" && !loom2.types.includes("Toxic") && ability != "One of Many") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "poison damage and ";
    }
    if (status == "diseased" && !loom2.types.includes("Toxic") && ability != "One of Many") {
        newHP += Math.floor(hp1 * (disease + counter) / 16);
        hazardString += "poison damage and ";
    }

    if (status == "asleep" && otherAbility == "Nightmarish" && ability != "One of Many") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "nightmarish damage and ";
    }

    if (heat.checked && ability == "Inferno") {
        newHP += Math.floor(hp1 * 1 / 8);
        hazardString += "inferno damage and ";
    }

    hazardString = hazardString.substr(0, hazardString.length - 5);
    if (hazardString.length == 0) return [newHP, hazardString];
    hazardString = " after " + hazardString;
    return [newHP, hazardString];
}

function checkIceTrap(move, l, u, hp, energy, item, ability, ability2) {
    if (l == 0 && u == 0) return "";
    if (move.drain || ability == "Demanding") {
        let drain = move.drain;
        if (ability == "Demanding") {
            if (!drain) drain = 1/4;
            else drain += 1/4;
        }
        let drainMI = (item == "Drain Orb" ? 1.2 : 1);
        let drainMA = (ability == "Drainage" ? 1.5 : 1); 
        let drainL = Math.max(Math.floor(l * drain * drainMI * drainMA), 1);
        let drainU = Math.max(Math.floor(u * drain * drainMI * drainMA), 1);
        if (ability2 == "Ungracious Host") return " (" + (drainL / hp * 100).toFixed(1) + " - " + (drainU / hp * 100).toFixed(1) + "% recoil damage)";
        return " (" + (drainL / hp * 100).toFixed(1) + " - " + (drainU / hp * 100).toFixed(1) + "% recovered)";
    }
    if (move.recoil) {
        if (ability == "Mysterious Cloak") return "";
        let recoilL = Math.max(Math.floor(l * move.recoil), 1);
        let recoilU = Math.max(Math.floor(u * move.recoil), 1);
        if (l == 0 && u == 0) return "";
        return " (" + (recoilL / hp * 100).toFixed(1) + " - " + (recoilU / hp * 100).toFixed(1) + "% recoil damage)";
    }
    if (move.name == "Flail") {
        return " (" + (Math.floor(hp / 8) / hp * 100).toFixed(1) + "% recoil damage)";
    }
    if (move.regen) {
        let regenL = Math.max(Math.floor(l * move.regen), 1);
        let regenU = Math.max(Math.floor(u * move.regen), 1);
        return " (" + regenL + " - " + regenU + " energy refunded)";
    }
    else return "";
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
