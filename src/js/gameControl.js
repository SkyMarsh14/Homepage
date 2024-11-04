class Gamecontrol {
  constructor(playerOne, playerTwo) {
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
    this.activePlayer = playerOne;
  }

  getActivePlayer = () => this.activePlayer;
  switchPlayerTurn() {
    this.activePlayer =
      this.getActivePlayer() === this.playerOne
        ? this.playerTwo
        : this.playerOne;
  }

  getOpponentGameboard() {
    return this.activePlayer === this.playerOne
      ? this.playerTwo.gameboard
      : this.playerOne.gameboard;
  }
  getAttack(x, y) {
    this.activePlayer.gameboard.board.receveAttack(x, y);
    this.switchPlayerTurn();
  }
  reset() {
    this.playerOne.gameboard.resetBoard();
    this.playerTwo.gameboard.resetBoard();
    console.log("Gameboard resetted. Starting a new game.");
  }
  printTables() {
    console.log("Player One's table");
    this.playerOne.gameboard.printTable();
    console.log("Player Two's table");
    this.playerTwo.gameboard.printTable();
  }
}

export { Gamecontrol };
