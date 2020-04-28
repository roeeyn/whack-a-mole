const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let hitPosition = null;
let result = 0;
let currentTime = timeLeft.textContent;

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result = result + 1;
      score.textContent = result;
    }
  });
});

const randomSquare = () => {
  squares.forEach((className) => className.classList.remove("mole"));
  const randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add("mole");
  hitPosition = randomPosition.id;
};

const moleInterval = setInterval(randomSquare, 1000);

const countDown = () => {
  currentTime--;
  timeLeft.textContent = currentTime;

  if (currentTime == 0) {
    clearInterval(timerId);
    clearInterval(moleInterval);
    alert("Ganaste, tu score es " + result);
  }
};

const timerId = setInterval(countDown, 1000);
