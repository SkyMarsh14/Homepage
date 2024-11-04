import { markShips, generateGameboard, markAttackedCell } from "./../util/util";
import placeShipScreen from "./placeShip";
const footer = document.querySelector(".content");
const gameLog = document.createElement("h1");
footer.append(gameLog);
gameLog.classList.add("gameLog");

export default function startGame(gameControl) {
  const containerDiv = document.querySelector(".containerDiv");
  containerDiv.classList.add("twoBoards");
  containerDiv.innerHTML = "";
  const playerOneGrid = document.createElement("div");
  const playerTwoGrid = document.createElement("div");
  playerOneGrid.classList.add("shipGrid");
  playerTwoGrid.classList.add("shipGrid");
  playerOneGrid.dataset.player = "playerOne";
  playerTwoGrid.dataset.player = "playerTwo";
  containerDiv.append(playerOneGrid, playerTwoGrid);
  generateGameboard(playerOneGrid);
  generateGameboard(playerTwoGrid);
  const playerOneBoard = gameControl.playerOne.gameboard.board;
  markShips(playerOneBoard, playerOneGrid);
  markAttackedCell(playerOneGrid, gameControl);
  markAttackedCell(playerTwoGrid, gameControl);
  document.querySelector("#playAgainBtn").addEventListener("click", () => {
    document.querySelector("dialog").close();
    containerDiv.classList.remove("twoBoards");
    placeShipScreen(gameControl.playerOne.name);
  });
}
