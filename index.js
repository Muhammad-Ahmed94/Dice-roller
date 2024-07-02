const tempInput = document.querySelector("#temp-input");
const toFahrenheit = document.querySelector("#toFahrenheit");
const toCelciius = document.querySelector("#toCelciius");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");
let temp;

btn.addEventListener("click", function() {
    temp = Number(tempInput.value);

    if(toFahrenheit.checked) {
        temp = ((temp) * (9 / 5) + 32).toFixed(2);
        result.textContent = `${temp} *F`;
    }
    else if(toCelciius.checked) {
        temp = ((temp - 32) * (5 / 9)).toFixed(2);
        result.textContent = `${temp} *C`
    }
    else {
        result.textContent = `please select a unit first`;
    }
})