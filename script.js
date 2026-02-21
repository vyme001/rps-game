

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
    if(pcV === usrV){
console.log(`tie; pc[${pcV}]:user[${usrV}]`);
        return;
    }else {
      const roundValues = [pcV, usrV];
       
       
    };
    
};

try {
    const capture = pcPosition();
    const capture2 = usrPosition();

    gameRound(capture, capture2)
    
} catch (e) {
    console.log(e.message);
}