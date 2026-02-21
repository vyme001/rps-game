

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
            validate = prompt("Choose one: 'rock', 'paper', or 'scissors'.");
        }else if(!Object.keys(posRules).includes(validate)){
        validate = prompt(`'${validate}' is an invalid value (case sensitive), try again!`);
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
- It assigns score accordingly and ends the game
- prompt the winner in the terminal as the game progesses to conclude the winner
*/
function gameRound(){
    console.log(pcPosition());
};

try {
    const capturePC = pcPosition();
    const captureUsr = usrPosition();
    console.log(capturePC);
    console.log(captureUsr);
    
} catch (e) {
    console.log(e.message);
}