let userScore = 0 ;
let compScore = 0;

const genComp = () => {
    const array = ["rock", "paper" , "scissor"];
    const random = Math.floor(Math.random() * 3);
    return array[random];
};



const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

if (userChoice === compChoice){
    const message = document.querySelector("p")
    message.innerText = "The Game is Drawn!! Play Again."
}else if(userChoice === "rock" && compChoice === "paper"){
    message.innerText = `You lost. paper beats your rock`;
    compScore ++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
}else if(userChoice === "rock" && compChoice === "scissor"){
    message.innerText = `You win. your rock beats scissor`;
    userScore++;
    userScorePara.innerText = userScore;
}else if(userChoice === "paper" && compChoice === "rock"){
    message.innerText = `You win. your paper beats rock`;
    userScore++;
    userScorePara.innerText = userScore;
}else if(userChoice === "paper" && compChoice === "scissor"){
    message.innerText = `You lost. Scissor beats your paper`;
    compScore ++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
}else if(userChoice === "scissor" && compChoice === "paper"){
    message.innerText = `You win. your scissor beats paper`
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
}else if(userChoice === "scissor" && compChoice === "rock"){
    message.innerText = `You lost. rock beats your scissor`;
    compScore ++;
    compScorePara.innerText = compScore;
    msg.style.backgroundColor = "red";
}
const playGame = (userChoice) => {
    console.log("user choice =" ,userChoice);
    const compChoice = genComp();
    console.log("comp choice" ,compChoice);
}


const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener(("click") , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
