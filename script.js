let userScore = 0;
let compScore = 0;

let result = document.querySelector(".output");
let images = document.querySelectorAll("img");

let userCount = document.querySelector("#user-count");
let compCount = document.querySelector("#comp-count");

const genCompChoice = () => {
    const choice = ["rock", "paper", "scissor"]
    const ran = Math.floor(Math.random() * 3);
    return choice[ran];
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (userChoice === compChoice) {
        result.textContent = "It's Draw";
        result.style.backgroundColor = "rgb(0, 25, 46)";
    }
    else {
        if (userChoice === "rock") {
            if (compChoice === "paper") {
                result.textContent = `You lost! ${compChoice} beats your ${userChoice}`;
                result.style.backgroundColor = "red";
                compCount.textContent = ++compScore;
            }
            else {
                result.textContent = `You Won! your ${userChoice} beats ${compChoice}`;
                result.style.backgroundColor = "green";
                userCount.textContent = ++userScore;
            }
        }
        else if (userChoice === "paper") {
            if (compChoice === "scissor") {
                result.textContent = `You lost! ${compChoice} beats your ${userChoice}`;
                result.style.backgroundColor = "red";
                compCount.textContent = ++compScore;
            }
            else {
                result.textContent = `You Won! your ${userChoice} beats ${compChoice}`;
                result.style.backgroundColor = "green";
                userCount.textContent = ++userScore;
            }
        }
        else {
            if (compChoice === "rock") {
                result.textContent = `You lost! ${compChoice} beats your ${userChoice}`;
                result.style.backgroundColor = "red";
                compCount.textContent = ++compScore;
            }
            else {
                result.textContent = `You Won! your ${userChoice} beats ${compChoice}`;
                result.style.backgroundColor = "green";
                userCount.textContent = ++userScore;
            }
        }
    }
}

let userSelect = () => {
    for (const image of images) {
        image.addEventListener("click", () => {
            let userChoice = image.getAttribute("class");
            playGame(userChoice);
        });
    }
}

userSelect();