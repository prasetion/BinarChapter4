// let foods = [
//     "1",
//     "2",
//     "3"
// ]

class RockPaperScissors {
    constructor(name) {
        this.name = name
    }

    getName() {
        console.log(`i choose ${this.name}`)
    }

    getResult() {
        console.log("the winner is ")
    }
}

// suit item
let suitItems = [
    "Batu",
    "Gunting",
    "Kertas"
]

// assign button suit
let buttonSuit = document.getElementById("changeButton").onclick = randomResult

// get random result
function randomResult() {

}