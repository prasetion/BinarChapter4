// let foods = [
//     "1",
//     "2",
//     "3"
// ]

// const variable
const suitItems = ["rock", "paper", "scissor"];
const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const WIN = "win";
const LOSE = "lose";
const DRAW = "draw";

// result div
let modalResult = document.getElementById("modalResult");
let textResult = document.getElementById("textResult");

// button rock paper scissors player
let rockButton = document.getElementById("rockButton");
let paperButton = document.getElementById("paperButton");
let scissorButton = document.getElementById("scissorButton");

// button rock paper scissors player
let buttonCom = document.querySelectorAll(".buttonCom");
// let rockButtonCom = document.getElementById("rockCom");
// let paperButtonCom = document.getElementById("paperCom");
// let scissorButtonCom = document.getElementById("scissorCom");

// reset button
let resetButton = document.getElementById("resetButton");

// rock paper scissor
class RockPaperScissors {
  constructor(name) {
    this.name = name;
  }

  getInput() {
    console.log(`i choose ${this.name}`);
  }

  getResult(input) {
    console.log("the result is ");
  }
}

// rock
class Rock extends RockPaperScissors {
  constructor(name) {
    super(name);
  }

  getResult(input) {
    super.getResult();

    switch (input) {
      case ROCK:
        return DRAW;
      case PAPER:
        return LOSE;
      case SCISSOR:
        return WIN;
    }
  }
}

// paper
class Paper extends RockPaperScissors {
  constructor(name) {
    super(name);
  }

  getResult(input) {
    super.getResult();

    switch (input) {
      case ROCK:
        return WIN;
      case PAPER:
        return DRAW;
      case SCISSOR:
        return LOSE;
    }
  }
}

// scissor
class Scissor extends RockPaperScissors {
  constructor(name) {
    super(name);
  }

  getResult(input) {
    super.getResult();

    switch (input) {
      case ROCK:
        return LOSE;
      case PAPER:
        return WIN;
      case SCISSOR:
        return DRAW;
    }
  }
}

// get active selected com
function getActiveSelectedCom(params) {
  console.log(buttonCom[params]);

  for (let index = 0; index < buttonCom.length; index++) {
    if (index == params) {
      buttonCom[params].classList.add("active");
      console.log(buttonCom[index]);
    } else {
      buttonCom[index].classList.remove("active");
    }
  }
}

// get random result
function randomResult(input) {
  let randomID = Math.floor(Math.random() * suitItems.length);
  getActiveSelectedCom(randomID);

  let setRandom = suitItems[randomID];
  console.log("Com select " + setRandom);

  let result;
  let selectedInput;

  switch (input) {
    case ROCK:
      selectedInput = new Rock(ROCK);
      result = selectedInput.getResult(setRandom);
      console.log(result);
      return result;
    case PAPER:
      selectedInput = new Paper(PAPER);
      result = selectedInput.getResult(setRandom);
      console.log(result);
      return result;
    case SCISSOR:
      selectedInput = new Scissor(SCISSOR);
      result = selectedInput.getResult(setRandom);
      console.log(result);
      return result;
  }
}

// win status
function winStatus(input) {
  modalResult.style.display = "block";

  if (input == WIN) {
    textResult.innerHTML = "Player Win";
  } else if (input == LOSE) {
    textResult.innerHTML = "Com Win";
  } else if (input == DRAW) {
    textResult.innerHTML = "Draw";
  }
}

// console.log(rockButton);
rockButton.onclick = function () {
  let result = randomResult(ROCK);
  winStatus(result);
};

paperButton.onclick = function () {
  let result = randomResult(PAPER);
  winStatus(result);
};

scissorButton.onclick = function () {
  let result = randomResult(SCISSOR);
  winStatus(result);
};
