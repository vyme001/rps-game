/*
OBJECT
- Where the name/positons live within a defined rules set
*/
const posRules = {
    "rock":"scissors",
    "scissors":"paper",
    "paper":"rock",
};



/*
FUNCTION:
- Get value for pc position on start up
*/
function pcPosition(){
    const arr = Object.keys(posRules);
    return arr[Math.floor(Math.random() * arr.length)];    
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
const usrPosition = function(){
    let validate;

    while(!Object.keys(posRules).includes(validate)){

        if(validate === undefined){
            validate = prompt("Choose one: 'rock', 'paper', or 'scissors'.").toLowerCase();
        }else if(!Object.keys(posRules).includes(validate)){
        validate = prompt(`'${validate}' is an invalid value, try again!`).toLowerCase();
        }else{
            return;
        };
        }; 
    return validate;
};
 

/*
Scores:
- Create variables in the global scope for the pc and user both intially value 0
*/
let pcScore = 0;
let userScore = 0;


/*
FUNCTION:
- gameRound judges the progress of the game
- take the values from the user per round and create a single property object
- judge the new object against every property of the posRules object
- if the two isolated properties match:
    - declare the winner of the round
    - += 1 that players score
*/
function gameRound(pcV, usrV){
    console.log(`cache (pc:[${pcV}], user:[${usrV}])`);
    
    //removed the if block from out of the find beacuase it executed for each item; 3 arrays = 3 occurances
           if(pcV === usrV){
            alert(`Tie: ${pcV} and ${usrV}`);
            return;
        };

    Object.entries(posRules).find((item)=>{
        if(item[0] === pcV && item[1] === usrV){
            pcScore += 1;
            alert(`pc: (${pcV}) beats ${usrV}. Scores: [pc: ${pcScore}, user: ${userScore}]`);
            return;
        } else if(item[0] === usrV && item[1] === pcV){
            userScore += 1;
            alert(`user: (${usrV}) beats ${pcV}. Scores: [user: ${userScore}, pc: ${pcScore}]`);
            return;
        };
        return;
    });
    };



// while scores are not equal to 5 do this code block; run the string returning functions. assign their returning value into a variable
// feed the variable into the game processes function
// do this until one players scores 5 points
while(pcScore != 5 && userScore != 5){
try {
    const pcCurrent = pcPosition();
    const usrCurrent = usrPosition();
    gameRound(pcCurrent, usrCurrent);
} catch (e) {
    console.log(e.message);
};
};

//When a player wins alert the game
if(pcScore === 5 || userScore === 5){
  pcScore > userScore ? alert(`pc wins! score [${pcScore} to ${userScore}]`) : alert(`user wins! score [${userScore} to ${pcScore}]`);
};