//score and shots tracking
let win = 1;
let loose = -1;
let draw = 0;
let shots = 0;
let points = 0
let totalGames = 0;
let wonGames = 0;
let lostGames = 0;

let wonGamesElement = document.getElementById("wonGames");
wonGamesElement.innerHTML = ` <h5>${0}</h5>`;

let lostGamesElement = document.getElementById("lostGames");
lostGamesElement.innerHTML = ` <h5>${0}</h5>`;

//opponent's choices
let choicesArray = ["rock", "paper", "scissors"];
function generateOpponentChoice(){
    let randomIndex = Math.floor(Math.random() * choicesArray.length);
    let opponentChoice = choicesArray[randomIndex];
    return opponentChoice;
}

// result of the two choices against each other
function getResult(playersChoice, opponentChoice) {
    if (playersChoice === opponentChoice) {
        points = points + 0;
        return draw;
        
    } else if (
        (playersChoice === "rock" && opponentChoice === "scissors") ||
        (playersChoice === "paper" && opponentChoice === "rock") ||
        (playersChoice === "scissors" && opponentChoice === "paper")
    ) {
        points = points + 1;
        return win;
    } else {
        points = points  -1;
        return loose;
    }
}

//resetting/ changing the colors of the score boxes to default
function resetScoreBoxColors(){
    let scoreBoxes = document.querySelectorAll(".score-box");
    scoreBoxes.forEach(function(scoreBox) {
        scoreBox.style.backgroundColor = "grey";
    });
}

// showing the computers throw
function showCompDiv(){
    let compDivs = document.querySelectorAll(".no-show-div");
    compDivs.forEach(function(compDiv) {
        compDiv.style.display = "block";
    });
    let compChoiceDiv = document.getElementById("computer-choice-div");
    compChoiceDiv.className = "choice-box"
}


// changing the colors of the score boxes while playing/scroing
function scoreBoxColors(result){
    let boxId = `score-box${shots}`;
    
    if (result == win){
        document.getElementById(boxId).style.backgroundColor="green";
    } else if(result == loose){
        document.getElementById(boxId).style.backgroundColor="red";
    } else{
        document.getElementById(boxId).style.backgroundColor="white";
    }
}



// text inside the game over banner
function gameOverText(){
    let gameOverText = document.getElementById("game-result-reveal-text");
    if (points >= 1){
        gameOverText.innerHTML = `Game over! </br> Congratulations! You Won by ${points} Points`;
    } else {
        gameOverText.innerHTML = `Game over! </br> You Lost this time`;
    }
}


// displaying and hiding  the game over banner
function showGameOver(){
    let gameOverBanner = document.getElementById("game-result-reveal");
    gameOverBanner.style.display = "block";
}

function hideGameOver(){
    //game score history
    if (points >= 1) {
        wonGames = wonGames + 1;
    } else {
        lostGames = lostGames + 1;
    }
    //resetting the points
    points = 0;

    let pointsDiv = document.getElementById("points-div");
    pointsDiv.innerHTML = ` <h1>${points}</h1>`;

    let totalGamesDiv = document.getElementById("totalGames");
    totalGames = totalGames + 1
    totalGamesDiv.innerHTML = ` <h3>Total rounds :${totalGames}</h3>`;

    // let wonGamesElement = document.getElementById("wonGames");
    wonGamesElement.innerHTML = ` <h4>${wonGames}</h4>`;

    // let lostGamesElement = document.getElementById("lostGames");
    lostGamesElement.innerHTML = ` <h5>${lostGames}</h5>`;

    resetScoreBoxColors()
    let gameOverBanner = document.getElementById("game-result-reveal");
    gameOverBanner.style.display = "none";
    
}


//checking if the number of shots taken is 5 and giving results
function checkShots() {
    if (shots >= 5) { 
        gameOverText();
        showGameOver();
        shots = 0; 
    }
}


// Game based on user's choice -rock
function playGameRock(event){
    event.preventDefault();
    playersChoice = "rock";
    opponentChoice = generateOpponentChoice();
    result = getResult(playersChoice, opponentChoice);
    let compDiv = document.getElementById("computer-choice-div");
    compDiv.innerHTML = ` <h1>${opponentChoice}</h1>`;
    let pointsDiv = document.getElementById("points-div");
    pointsDiv.innerHTML = ` <h1>${points}</h1>`;
    
    
    scoreBoxColors(result);
    shots++;
    checkShots();
    showCompDiv();

}


// Game based on user's choice -paper
function playGamePaper(event){
    event.preventDefault();
    playersChoice = "paper";
    opponentChoice = generateOpponentChoice();
    result = getResult(playersChoice, opponentChoice);
    let compDiv = document.getElementById("computer-choice-div");
    let pointsDiv = document.getElementById("points-div");
    compDiv.innerHTML = ` <h1>${opponentChoice}</h1>`;
    pointsDiv.innerHTML = ` <h1>${points}</h1>`;
    compDiv.innerHTML = ` <h1>${opponentChoice}</h1>`;
    scoreBoxColors(result);
    shots++;
    checkShots();
    showCompDiv();
}


// Game based on user's choice -scissors
function playGameScissors(event){
    event.preventDefault();
    playersChoice = "scissors";
    opponentChoice = generateOpponentChoice();
    result = getResult(playersChoice, opponentChoice);
    let compDiv = document.getElementById("computer-choice-div");
    let pointsDiv = document.getElementById("points-div");
    compDiv.innerHTML = ` <h1>${opponentChoice}</h1>`;
    pointsDiv.innerHTML = ` <h1>${points}</h1>`;
    compDiv.innerHTML = ` <h1>${opponentChoice}</h1>`;
    scoreBoxColors(result);
    shots++;
    checkShots();
    showCompDiv();
}


