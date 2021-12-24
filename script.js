"use strict"




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
    
    i++

    
}

console.log(uniDivs)

let j = 0

while (j < numUnicorns) {
    
    uniXs[j] = 0
    
    j++
}
    
let winner=document.getElementById("winner")

let startButton=document.getElementById("startButton")
startButton.addEventListener("click",runTheGame)


let playAgain=document.getElementById("playAgain")
playAgain.addEventListener("click",resetHorses)


function runTheGame(){
    requestAnimationFrame(moveUnicorns)

    function moveUnicorns() {

        let i = 0 
        
        while (uniXs[i] <= 80) {
            uniXs[i] += Math.random()*0.5
            uniDivs[i].style.left = uniXs[i] + "%"

            if (uniXs[i] >= 80 ) {
                //alert(`Unicorn #${i+1} is the winner`)
                winner.innerHTML=`Unicorn #${i+1} is the winner!`
                winner.style.color="gold"
                resetGame() //stops the game from making a new winner everytime a horse is above 80%
                playAgain.style.height="40px"
                playAgain.style.backgroundColor="gold"
                startButton.style.backgroundColor="gray"
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
}

function resetHorses(){
    location.reload()
}

let finishLine=document.getElementById("finishLine")
let ctx=finishLine.getContext("2d")

let finishLineLength=finishLine.height/100*75
let x=finishLine.width/100*80
ctx.beginPath()
ctx.moveTo(x,0)
ctx.lineTo(x,finishLineLength)
ctx.strokeStyle="red"
ctx.stroke()






