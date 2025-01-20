const boxes = document.querySelectorAll(".box");

const resetBtn = document.querySelector("#reset-btn");

let player1 = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
  

    if (player1 === true) {
      box.innerText = "X";
      box.classList.add("bigger-text");
      player1 = false;
    } else {
      box.innerText = "O";
      box.classList.add("bigger-text");
      player1 = true;
    }
  });
});
