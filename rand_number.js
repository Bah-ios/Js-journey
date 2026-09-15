import * as readline from "node:readline/promises"
import {stdin as input, stdout as output} from "node:process"

const r1 = readline.createInterface({input, output});

try{
    const secret = Math.floor(Math.random() * 20 ) +1 ;
    let tries = 0;
    let guess = 0;
    
    while(guess !== secret){
        const guess = parseInt( await r1.question("Take a guess between 1 & 20: "),10);

        tries = tries + 1; // add 1 try

        if (guess < 1 || guess > 20) {
            console.log("That number is out of range. Try again.");
        } else if (guess < secret) {
            console.log("Too low, try again.");
        } else if (guess > secret) {
            console.log("Too high, try again.");
        } else {
            console.log("You got it in", tries, "tries!");
        }
        
    }
}
 finally {
    rl.close();
 }