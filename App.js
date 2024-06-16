let userScore=0;
let compScore=0;

const msg=document.querySelector("#msg");
const choices=document.querySelectorAll(".choice");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const radIdx=Math.floor(Math.random()*3);
    return options[radIdx];
}

const drawGame=()=>{
    msg.innerText="Game is draw.Play Again!!!";
    msg.style.backgroundColor="#081b31"
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin)
        {
          userScore++;
          userScorePara.innerText=userScore;
          msg.innerText=`You win!!!Your ${userChoice} beats ${compChoice}`;
          msg.style.backgroundColor="Green";
          msg.style.color="white";
       }
   else 
    {
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost!!!${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="Red";
        msg.style.color="white";
    }
}

const playGame=(userChoice)=>{
  //console.log("user's choice=",userChoice);
 const compChoice=genCompChoice();
  //console.log("computer's choice=",compChoice);

 if(userChoice===compChoice){
    //Draw Game
    drawGame();
 }
 else {
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }
    else if(userChoice==="paper"){
        userWin=compChoice==="scissors"?false:true;
    }
    else{
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice);
 }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choices was clicked",userChoice) ;
        playGame(userChoice);
    })
})