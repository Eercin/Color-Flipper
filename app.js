const colors = ["green", "red", "rgba(133,122,200)", "#f15025"]

const btnEl = document.getElementById("btn")

const spanEl = document.querySelector(".color")

btnEl.addEventListener("click", function () {

    const randomNumber = getRandomNumber()

    let docEl = document.body.style.backgroundColor = colors[randomNumber]
    spanEl.textContent = docEl



})

function getRandomNumber() {

    return Math.floor(Math.random() * colors.length)


}