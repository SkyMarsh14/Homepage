function generateGameboard(container) {
  for (let i = 0; i < 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.cellNumber = i;
    container.append(cell);
  }
}

function markShips(array, cellContainer) {
  const hasMarked = cellContainer.querySelectorAll(".hasShip");
  hasMarked.forEach((item) => {
    item.classList.remove("hasShip");
  });
  const cells = cellContainer.querySelectorAll(".cell");
  for (let i = 0; i < array.length; i++) {
    const rowNumber = i * array[i].length;
    array[i].forEach((item, index) => {
      if (item) {
        cells[rowNumber + index].classList.add("hasShip");
      }
    });
  }
}

function markAttackedCell(playerGrid, gameControl) {
  playerGrid.addEventListener("click", (e) => {
    const gameLog = document.querySelector(".gameLog");
    gameLog.textContent = "";
    e.stopPropagation();
    const player = playerGrid.dataset.player;
    const cellIndex = e.target.dataset.cellNumber;
    if (isNaN(cellIndex)) return;
    const x = cellIndex % 10;
    const y = Math.floor(cellIndex / 10);
    try {
      const attack = (ax, ay) => gameControl[player].attack(ax, ay);
      if (attack(x, y)) {
        e.target.classList.add("gotHit");
        if (gameControl.playerTwo.gameboard.areAllShipsSunk()) {
          document.querySelector(".winAnnounce").textContent =
            `${gameControl.playerOne.name} won!`;
          gameLog.textContent = "";
          modal.showModal();
        }
        gameLog.textContent = "You hit a target, your turn again!";
        return;
      } else {
        e.target.classList.add("missed");
      }
    } catch {
      alert("The selected cell has already been attacked.");
      return;
    }
    const playerOneBoard = document.querySelector(`[data-player="playerOne"]`);
    const grid = playerOneBoard.querySelectorAll(".cell");

    const boardInfo = gameControl.playerOne.gameboard.botAttack();
    let message;

    boardInfo.miss.forEach((item) => {
      grid[item[0] + item[1] * 10].classList.add("missed");
    });
    boardInfo.hit.forEach((item) => {
      grid[item[0] + item[1] * 10].classList.add("gotHit");
    });
    if (boardInfo.log.size > 1) {
      message = `The bot hit ${boardInfo.log.size - 1} of your ships!`;
    } else {
      for (const x of boardInfo.log) {
        message = `The bot attacked X,Y ${x}`;
      }
    }
    if (gameControl.playerOne.gameboard.areAllShipsSunk()) {
      document.querySelector(".winAnnounce").textContent =
        `${gameControl.playerOne.name} lost agaist ${gameControl.playerTwo.name}.`;
      modal.showModal();
      message = "Bot has won the game";
      return;
    }
    document.querySelector(".gameLog").textContent = message;
  });
}

const modal = document.querySelector("dialog");

export { generateGameboard, markShips, markAttackedCell };
