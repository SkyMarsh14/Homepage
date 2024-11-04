import placeShipScreen from "./placeShip";
export default function loadFirstPage() {
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("containerDiv");
  const title = document.createElement("h1");
  title.classList.add("mainTitle");
  title.textContent = "Battleship";
  document.querySelector(".inner-header").append(containerDiv);
  containerDiv.append(title);
  const playerNameForm = document.createElement("form");
  const nameFormDiv = document.createElement("div");
  nameFormDiv.classList.add("nameFormDiv");
  const label = document.createElement("label");
  const nameInput = document.createElement("input");
  const startGameBtn = document.createElement("input");
  startGameBtn.classList.add("startGameBtn");
  startGameBtn.type = "submit";
  startGameBtn.value = "Start Game";
  nameInput.id = "nameInput";
  label.setAttribute("for", "nameInput");
  label.textContent = "Enter Player's Name";
  nameInput.setAttribute("placeholder", "Player One");
  containerDiv.append(playerNameForm);
  playerNameForm.append(nameFormDiv);
  nameFormDiv.append(label, nameInput);
  playerNameForm.append(startGameBtn);

  playerNameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    placeShipScreen((nameInput.value = "Player One"));
  });
}
