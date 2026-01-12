const btns = [
  document.querySelector(".btn-1"),
  document.querySelector(".btn-2"),
  document.querySelector(".btn-3"),
  document.querySelector(".btn-4"),
  document.querySelector(".btn-5"),
  document.querySelector(".btn-6"),
  document.querySelector(".btn-7"),
  document.querySelector(".btn-8"),
  document.querySelector(".btn-9"),
];

let isX = true;
let gameActive = true;

let arr = [
  ["-", "-", "-"],
  ["-", "-", "-"],
  ["-", "-", "-"],
];

function resetGame() {
  arr = [
    ["-", "-", "-"],
    ["-", "-", "-"],
    ["-", "-", "-"],
  ];
  isX = true;
  gameActive = true;
  btns.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = false;
  });
}

function checkWinner() {
  for (let i = 0; i < 3; i++) {
    if (
      arr[i][0] !== "-" &&
      arr[i][0] === arr[i][1] &&
      arr[i][1] === arr[i][2]
    ) {
      return true;
    }
    if (
      arr[0][i] !== "-" &&
      arr[0][i] === arr[1][i] &&
      arr[1][i] === arr[2][i]
    ) {
      return true;
    }
  }

  if (arr[0][0] !== "-" && arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    return true;
  }
  if (arr[0][2] !== "-" && arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
    return true;
  }

  return false;
}

btns.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (!gameActive) return;

    let row = Math.floor(index / 3);
    let col = index % 3;

    const currentPlayer = isX ? "X" : "O";
    arr[row][col] = currentPlayer;
    item.textContent = currentPlayer;
    item.disabled = true;
    if (checkWinner()) {
      console.log(`Bu oyinchi ${currentPlayer}! yutib qoydi `);
      gameActive = false;
      setTimeout(() => {
        alert(`Bu oyinchi ${currentPlayer} yutib qoydi !`);
        resetGame();
      }, 100);
      return;
    }

    if (!arr.flat().includes("-")) {
      alert("Hich kim yutmadi!");
      resetGame();
      return;
    }
    isX = !isX;
  });
});

const startBtn = document.querySelector(".start-btn");
const box1Item = document.querySelector(".boxes1");
const box2Item = document.querySelector(".boxes2");

let isId = null;
let count = 0;

const items = ["./rock.jpg", "./scissors.jpg", "./paper.jpg"];

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  count = 0; 

  isId = setInterval(() => {
    const random1 = items[Math.floor(Math.random() * 3)];
    const random2 = items[Math.floor(Math.random() * 3)];

    box1Item.innerHTML = `<img src="${random1}" class="w-full h-full object-contain">`;
    box2Item.innerHTML = `<img src="${random2}" class="w-full h-full object-contain">`;

    count++;

    if (count > 20) {
      clearInterval(isId);
      startBtn.disabled = false;
    }
  }, 100);
});