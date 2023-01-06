const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

const btnEl = document.getElementById("btn")

const spanEl = document.querySelector(".color")

btnEl.addEventListener("click", function () {


    let hexColor = "#"


    for (let i = 0; i < 6; i++) {
        hexColor += hex[randomHex()];
    }

    document.body.style.backgroundColor = hexColor

    spanEl.textContent = hexColor


})


function randomHex() {
    return Math.floor(Math.random() * hex.length)
}