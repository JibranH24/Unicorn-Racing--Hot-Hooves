"use strict"


const colors = "green,red,blue,yellow,pink,silver,grey,gold,black,brown, ".split(",")

let uniDivs=[]

let uniXs = []

const numUnicorns = 15

let i = 0

while (i < numUnicorns) {
    uniDivs[i] = document.createElement("Div")
    document.body.appendChild(uniDivs[i])
    uniDivs[i].classList.add("unicorn")

    uniDivs[i].style.left = 0 + "%"

    uniDivs[i].style.top = [i] * 5 + "%"
    // uniDivs[i].style.backgroundColor = colors[i]
    i++

    
}

console.log(uniDivs)

let j = 0

while (j < numUnicorns) {
    
    uniXs[j] = 0
    
    j++
}
    
requestAnimationFrame(moveUnicorns)

function moveUnicorns() {

    let i = 0 
    
    while (uniXs[i] <= 80) {
        uniXs[i] += Math.random()
        uniDivs[i].style.left = uniXs[i] + "%"

        if (uniXs[i] >= 80 ) {
            alert(`Unicorn #${i} is the winner`)
            resetGame()
        }

        i++
    }

    
    requestAnimationFrame(moveUnicorns)
}

function resetGame() {
    let k = 0
    while (k < uniXs.length) {
        uniXs[k] = 0 + "%"
        k++
    }
}
