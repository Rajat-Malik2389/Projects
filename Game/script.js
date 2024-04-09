let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userChoicepara = document.querySelector("#user-score");
const compChoicepara = document.querySelector("#comp-score");


const getCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31 ";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("you win!");
        msg.innerText = `You win! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userChoicepara.innerText = userScore;
    }
    else{
        compChoicepara.innerText = compScore;
        compScore++;
        console.log("you lose");
        msg.innerText = `You lose! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const PlayGame = (userChoice) => {
console.log("user choice = ",userChoice);
//Generate computer choice
const compChoice = getCompChoice();
console.log("comp choice = ", compChoice)
if(userChoice === compChoice){
    //Draw Game
    drawGame();
}
else{
    let userWin = true;
    if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissors" ? false:true;
    }
    else{
        //rock, paper
        userWin = compChoice === "rock" ? false:true;
    }
    showWinner(userWin);
}
};



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
       // console.log("choice was clicked", userChoice);
       PlayGame(userChoice);
    })
});