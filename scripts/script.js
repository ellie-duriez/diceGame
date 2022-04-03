const rollPlayer1 = document.getElementById("dice1");
const rollPlayer2 = document.getElementById("dice2");

const randNum = () => {
return Math.ceil(Math.random() * 6);
}

const resetVisibility = (playerNum) => {
    for (let i = 1; i < 7; i++)
        document.getElementById(`dice${playerNum}dot${i}`).style.visibility = "hidden";
}

const changeVisuals = (playerNum, diceRoll) => {
    document.getElementById(`dice${playerNum}dot${diceRoll}`).style.visibility = "visible";
}

rollPlayer1.addEventListener("mousedown", (event) => {
// RESET VISUALS
resetVisibility("1");
// ROLL THE DICE BETWEEN 1 - 6
let diceRoll1 = randNum();
alert(diceRoll1);
// CHANGE DICE VISUALS PROP TO DOT
changeVisuals("1",diceRoll1);
// DISPLAY CURRENT ROLL SCORE

// DISPLAY CUMULATIVE TOTAL SCORE

})
