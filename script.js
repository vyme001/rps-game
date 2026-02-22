/*
OBJECT
- Where the name/positons live within a defined rules set
*/
const positionRules = {
    "rock":"scissors",
    "scissors":"paper",
    "paper":"rock",
};



/*
FUNCTION:
- Get value for pc position on start up
*/
function generatePCposition(){
    const arrPositionRules = Object.keys(positionRules);
    return arrPositionRules[Math.floor(Math.random() * arrPositionRules.length)];    
};


/*
FUNCTION:
- display prompt for user input:
- text input a string value
- save the value and return it
---------------------------------
ternary operators are only ideal for singleline - simple conditional value assignment
Use complex while or for loops to have cyclical loops run until the ideal condition is met/true
- while validate is null, prompt user to enter a valid value unless condition is met
*/
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
 

/*
Scores:
- Create variables in the global scope for the pc and user both intially value 0
*/
let PCsScore = 0;
let usersScore = 0;


/*
FUNCTION:
- gameRound judges the progress of the game
- take the values from the user per round and create a single property object
- judge the new object against every property of the positionRules object
- if the two isolated properties match:
    - declare the winner of the round
    - += 1 that players score
*/
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



// while scores are not equal to 5 do this code block; run the string returning functions. assign their returning value into a variable
// feed the variable into the game processes function
// do this until one players scores 5 points
while(PCsScore != 5 && usersScore != 5){
try {
    const pcsCurrentPosition = generatePCposition();
    const usersCurrentPosition = generateUserPosition();
    gameEngine(pcsCurrentPosition, usersCurrentPosition);
} catch (e) {
    console.log(e.message);
};
};

//When a player wins alert the game
if(PCsScore === 5 || usersScore === 5){
  PCsScore > usersScore ? alert(`pc wins! score [${PCsScore} to ${usersScore}]`) : alert(`user wins! score [${usersScore} to ${PCsScore}]`);
};