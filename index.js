const number = document.querySelector(".number");
const btn = document.querySelector(".btn");

/* btn.onclick = function() {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    number.innerHTML = randomNumber;
} */

btn.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 5) + 1;
    number.innerHTML = randomNumber
})