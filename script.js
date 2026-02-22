

let PCsScore = 0;
let usersScore = 0;

const positionRules = {
    "rock":"scissors",
    "scissors":"paper",
    "paper":"rock",
};


function generatePCposition(){
    const arrPositionRules = Object.keys(positionRules);
    return arrPositionRules[Math.floor(Math.random() * arrPositionRules.length)];    
};



const generateUserPosition = function(){
    let validatePosition;

    while(!Object.keys(positionRules).includes(validatePosition)){

        if(validatePosition === undefined){
            validatePosition = prompt("Choose one: 'rock', 'paper', or 'scissors'.").toLowerCase();
        }else if(!Object.keys(positionRules).includes(validatePosition)){
        validatePosition = prompt(`'${validatePosition}' is not invalid, try again!`).toLowerCase();
        }else{
            return;
        };
        }; 
    return validatePosition;
};
 

//Game logic engine
function gameEngine(PCposition, UserPosition){
    console.log(`cache (pc:[${PCposition}], user:[${UserPosition}])`);
    
    //removed the if block from out of the find beacuase it executed for each item; 3 arrays = 3 occurances
           if(PCposition === UserPosition){
            alert(`Tie: ${PCposition} and ${UserPosition}`);
            return;
        };

    Object.entries(positionRules).find((positionPair)=>{
        if(positionPair[0] === PCposition && positionPair[1] === UserPosition){
            PCsScore += 1;
            alert(`pc: (${PCposition}) beats ${UserPosition}. Scores: [pc: ${PCsScore}, user: ${usersScore}]`);
            return;
        } else if(positionPair[0] === UserPosition && positionPair[1] === PCposition){
            usersScore += 1;
            alert(`user: (${UserPosition}) beats ${PCposition}. Scores: [user: ${usersScore}, pc: ${PCsScore}]`);
            return;
        };
        return;
    });
    };



//while no player has gained 5 points;
// generate player position values
// giving  those player positions to the gameEngine Fx
while(PCsScore != 5 && usersScore != 5){
try {
    const pcsCurrentPosition = generatePCposition();
    const usersCurrentPosition = generateUserPosition();
    gameEngine(pcsCurrentPosition, usersCurrentPosition);
} catch (e) {
    console.log(e.message);
};
};

//Decalre the winner in a alert once either players score reaches the Number value 5
if(PCsScore === 5 || usersScore === 5){
  PCsScore > usersScore ? alert(`pc wins! score [${PCsScore} to ${usersScore}]`) : alert(`user wins! score [${usersScore} to ${PCsScore}]`);
};