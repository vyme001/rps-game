console.log('test connection');


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
console.log(pcPosition());


/*
FUNCTION:
- display prompt for user input:
- text input a string value
- save the value and return it
*/
const usrPosition = function(arr){
    let validate = prompt("Choose one: 'rock', 'paper', or 'scissors'.");
    return Object.keys(arr).includes(validate) ? validate : undefined;
};
console.log(usrPosition(posRules));


