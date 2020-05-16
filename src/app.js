const newGame = document.querySelector(`.btn-new`);
const roll = document.querySelector(`.btn-roll`);
const hold = document.querySelector(`.btn-hold`);
let flag = 0;
let score0 = 0;
let score1 = 0;
let current0 = 0;
let current1 = 0;

function getRandomInt(min, max) {
  // Don't worry about how this works, just trust that it
  // generates an integer between min and max.
  return Math.floor(Math.random() * (max + 1 - min)) + min;
}

function resetNewGame() {
  flag = 0;
  score0 = 0;
  score1 = 0;
  current0 = 0;
  current1 = 0;
  document.getElementById(`score-0`).textContent = 0;
  document.getElementById(`current-0`).textContent = 0;
  document.getElementById(`score-1`).textContent = 0;
  document.getElementById(`current-1`).textContent = 0;
  document.querySelector(`.player-0-panel`).classList.add(`active`);
  document.querySelector(`.player-1-panel`).classList.remove(`active`);
}

function addScore() {
  let value1 = getRandomInt(1, 6);
  let value2 = getRandomInt(1, 6);
  if (flag == 0) {
    if (value1 != 1 && value2 != 1) {
      current0 = (value1 + value2);
      score0 += current0;
      if (score0 >= 100) {
        alert(`Player1 Win The Game!`);
        return resetNewGame();
      }
    } else {
      score0 = 0;
      current0 = 0;
      flag = !flag;
      document.querySelector(`.player-0-panel`).classList.toggle(`active`);
      document.querySelector(`.player-1-panel`).classList.toggle(`active`);
    }
    document.getElementById(`dice1`).setAttribute('src',`dice-${value1}.png`);
    document.getElementById(`dice2`).setAttribute('src',`dice-${value2}.png`);
    document.getElementById(`score-0`).textContent = score0;
    document.getElementById(`current-0`).textContent = current0;
  } else {
    if (value1 != 1 && value2 != 1) {
      current1 = (value1 + value2);
      score1+= current1;
      if (score1 >= 100) {
        alert(`Player2 Win The Game!`);
        return resetNewGame();
      }
    } else {
      score1 = 0;
      current1 = 0;
      flag = !flag;
      document.querySelector(`.player-1-panel`).classList.toggle(`active`);
      document.querySelector(`.player-0-panel`).classList.toggle(`active`);
    }
    document.getElementById(`dice1`).setAttribute('src',`dice-${value1}.png`);
    document.getElementById(`dice2`).setAttribute('src',`dice-${value2}.png`);
    document.getElementById(`score-1`).textContent = score1;
    document.getElementById(`current-1`).textContent = current1;
  }
}

newGame.addEventListener(`click`, resetNewGame);

roll.addEventListener(`click`,addScore);

hold.addEventListener(`click`, function () {
  flag = !flag;
  document.querySelector(`.player-0-panel`).classList.toggle(`active`);
  document.querySelector(`.player-1-panel`).classList.toggle(`active`);
});