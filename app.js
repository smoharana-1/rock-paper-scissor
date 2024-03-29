let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorePara = document.querySelector("#user-score");
const compscorePara = document.querySelector("#comp-score");


const genCompChoice = () => {
const options = ["rock","paper","scissor"];
const  randIx = Math.floor(Math.random() * 3);
return options[randIx];
};

const drawGame = () => {
  msg.innerText ="Game was draw . play Again";
  msg.style.backgroundColor ="red";
};
const showWinner = (userWin ,userChoice,compChoice) => {
if(userWin){
  userscore++;
  userscorePara.innerText = userscore;
  msg.innerText = `you win ! your ${userChoice} beats ${compChoice}`;
  msg.style.backgroundColor ="green";
}else{

  compscore++;
  compscorePara.innerText = compscore;
  msg.innerText =`you lose. ${compChoice} beats your ${userChoice}`;
  msg.style.backgroundColor ="purple";
}
}


const playgame = (userChoice) => {
console.log (" user choice = ", userChoice);
const compChoice = genCompChoice();
console.log("comp choice=", compChoice);


if(userChoice === compChoice) {
drawGame();
  }else {
let userWin = true;
if(userChoice ==="rock") {
  userWin = compChoice === "paper" ? false : true;
}else if(userChoice==="paper"){
 userWin=compChoice === "scissor" ? false : true;
}else{
  userWin=compChoice === "rock" ? false : true;
}

showWinner(userWin ,userChoice,compChoice);
  }
};


choices.forEach(choice => {
  choice.addEventListener ("click",()=>{
    const userChoice =choice.getAttribute("id");
playgame(userChoice);
  });
});
