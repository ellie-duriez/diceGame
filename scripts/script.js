const rollPlayer1 = document.getElementById("dice1");
const rollPlayer2 = document.getElementById("dice2");
let currScorePlayer1 = document.getElementById("currentScore1");
let currScorePlayer2 = document.getElementById("currentScore2");
let totScorePlayer1 = document.getElementById("totalScore1");
let totScorePlayer2 = document.getElementById("totalScore2");
let trackScorePlayer1 = 0;
let trackScorePlayer2 = 0;

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
// CHANGE DICE VISUALS PROP TO DOT
changeVisuals("1",diceRoll1);
// DISPLAY CURRENT ROLL SCORE
currScorePlayer1.innerText = diceRoll1;
// DISPLAY CUMULATIVE TOTAL SCORE
trackScorePlayer1 += diceRoll1;
alert(trackScorePlayer1);
totScorePlayer1.innerText = trackScorePlayer1;
})
