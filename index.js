//number guessing game

let guess;
let randomNumber = Math.floor(Math.random() * 20) + 1;
let attempt = 0;
do{
    guess = window.prompt("enter number");

    if(guess > randomNumber){
        window.alert("number too high");
    }
    else if(guess < randomNumber){
        window.alert("number too low");
    }
    else{
        window.alert(`you guessed right. it took ${attempt}`);
    }
    attempt++;

} while(guess != randomNumber);