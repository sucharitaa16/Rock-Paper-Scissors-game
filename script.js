// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';


let userScore=0;
let compScore=0;

const userScorePara=document.querySelector("#userscore");

const compScorePara=document.querySelector("#computerscore");


const choices= document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");


const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() *3);
  return options[randIdx];
};
const showWinner =(userWin)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("you win");
    msg.innerText="You Win!";
    msg.style.backgroundColor="green";
    msg.style.color="white";


  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
    console.log("you lose");
    msg.innerText="Oops you lose";
        msg.style.backgroundColor="red";
    msg.style.color="white";

  }
};

const drawGame = () =>{
  console.log("draw");
  msg.innerText="It's a draw play again...";
  msg.style.backgroundColor="antiquewhite";
    msg.style.color="rgb(91, 12, 164)";
};

const playGame = (userChoiceRaw) =>{

   const userChoice = userChoiceRaw.trim().toLowerCase();
  const compChoice = genCompChoice();
  
  console.log("user choice=", userChoice);
  //const compChoice = genCompChoice();
  console.log("computer choice=", compChoice);

  if (userChoice.trim().toLowerCase() === compChoice.trim().toLowerCase()) {
  drawGame();
} else {
  let userWin=true;
  if(userChoice === "rock"){
    //paper & sc
    userWin = compChoice ==="paper"  ? false: true;
  }
  else if(userChoice === "paper"){
    //c-choice rock,sc
    userWin=compChoice === "scissors" ? false:true;

  }
  else{
    //c choice rock ,paper
    userWin=compChoice ==="rock" ? false:true;
  }
  showWinner(userWin);
}
};


choices.forEach((choice) => {
  choice.addEventListener("click", () => {

     const selectedChoice= choice.getAttribute("id");
   
    playGame(selectedChoice);

  });
});