// PREDEFINING GLOBAL VARIBALES
const rollPlayer1 = document.getElementById("dice1");
const rollPlayer2 = document.getElementById("dice2");
let currScorePlayer1 = document.getElementById("currentScore1");
let currScorePlayer2 = document.getElementById("currentScore2");
let totScorePlayer1 = document.getElementById("totalScore1");
let totScorePlayer2 = document.getElementById("totalScore2");
let trackScorePlayer1 = 0;
let trackScorePlayer2 = 0;
let diceRoll1;
let playAgain = document.getElementById("playAgain");

// PREDEFINING FUNCTIONS
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

const resetScore1 = () => {
    console.log("resetScore")
    currScorePlayer1.innerText = "";
    trackScorePlayer1 = 0;
    totScorePlayer1.innerText = "0";
}

// ADD MOUSEDOWN EVENT
rollPlayer1.addEventListener("mousedown", () => {
    console.log("rollPlayer1 mousedown event"); 
    doPlayer1RollFunc(checkScore1);
})

// DICE ROLL FOR PLAYER 1. INITIATED ON MOUSEDOWN
const doPlayer1RollFunc = (func1) => {
    console.log("diceRollFunc1");
    // RESET VISUALS
    resetVisibility("1");
    // ROLL THE DICE BETWEEN 1 - 6
    diceRoll1 = randNum();
    // CHANGE DICE VISUALS PROP TO DOT
    changeVisuals("1",diceRoll1);
    // DISPLAY CURRENT ROLL SCORE
    console.log("one")
    currScorePlayer1.append(diceRoll1," ");
    // DISPLAY CUMULATIVE TOTAL SCORE
    trackScorePlayer1 += diceRoll1;
    totScorePlayer1.innerText = trackScorePlayer1;
    func1()
}

const playNewGame1 = () => {
    console.log("playNewGame1")
    resetScore1();
    diceRoll1 = null;

    // RESET CLICKABILITY
    rollPlayer1.style.pointerEvents = "initial";
    playAgain.style.visibility = "hidden";
    resetVisibility("1");


    
    // CHECK SCORE FOR WIN/LOSE
    checkScore1 = () => {
        if (diceRoll1 != 1 || trackScorePlayer1 < 30) {
            
        }

        if (trackScorePlayer1 >= 20) {
            // document.getElementById("playAgain").style.display = "show";
            alert("You win!");
            console.log("over30")
            playAgain.style.visibility = "visible";
            rollPlayer1.style.pointerEvents = "none";
            playAgain.addEventListener("mousedown", () => {
                playNewGame1();
                })
        }

        else if (diceRoll1 == 1) {
            // document.getElementById("playAgain").style.display = "show";
            alert("You rolled a 1! Too bad, game over.");
            console.log("equals1")
            playAgain.style.visibility = "visible";
            rollPlayer1.style.pointerEvents = "none";
            playAgain.addEventListener("mousedown", () => {
                playNewGame1();
                })
        }}
}

//FUNCTION TO KICKSTART THE GAME
playNewGame1();