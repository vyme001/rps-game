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