const rollDice = document.querySelector(".rollDice");




rollDice.addEventListener("click", function() {
    const diceInput = document.querySelector("#dice-input").value;
    const diceValue = document.querySelector(".dice-value");
    const diceImage= document.querySelector(".dice-images");

    const values = [];
    const images = [];
    
    for(let i=0; i<diceInput; i++) {
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/${value}.png" alt="dice${value}-image">`)
    }
    diceValue.textContent = values.join(",")
    diceImage.innerHTML = images
})