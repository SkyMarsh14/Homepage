import { generateGameboard, markShips } from "../util/util";
import { Gamecontrol } from "../js/gameControl";
import { Player } from "../js/player";
import startGame from "./gameplay";

export default function placeShipScreen(playerName) {
  const containerDiv = document.querySelector(".containerDiv");
  containerDiv.innerHTML = "";
  const placeYourShip = document.createElement("h1");
  placeYourShip.classList.add("placeShipTitile");
  placeYourShip.textContent = "Place Your Ships and Get Started!";
  const shipTable = document.createElement("div");
  shipTable.classList.add("shipGrid");
  containerDiv.append(placeYourShip, shipTable);
  generateGameboard(shipTable);
  const randomizeShipsBtn = document.createElement("button");
  randomizeShipsBtn.textContent = "Randomize";
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  containerDiv.append(randomizeShipsBtn, startBtn);
  randomizeShipsBtn.classList.add("randomize");
  const bot = new Player("bot", true);
  const playerOne = new Player(playerName);
  const gameboard = new Gamecontrol(playerOne, bot);
  randomizeShipsBtn.addEventListener("click", () => {
    const shipArr = gameboard.playerOne.gameboard.placeAllShipsRandom();
    markShips(shipArr, shipTable);
  });
  //place ship when the content is loaded
  randomizeShipsBtn.click();
  gameboard.playerTwo.gameboard.placeAllShipsRandom();
  startBtn.addEventListener("click", () => {
    startGame(gameboard);
  });
}
