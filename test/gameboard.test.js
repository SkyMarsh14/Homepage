import { Gameboard } from "../src/js/gameboard.js";
import { Ship } from "../src/js/ship.js";

it("placeShip", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3);
  expect(gameboard.board[0][0]).toEqual(new Ship(3));
  expect(gameboard.board[0][1]).toEqual(new Ship(3));
  expect(gameboard.board[0][2]).toEqual(new Ship(3));
});

it("placeShip Vertical", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(0, 0, 3, "vertical");
  expect(gameboard.board[0][0]).toEqual(new Ship(3));
  expect(gameboard.board[1][0]).toEqual(new Ship(3));
  expect(gameboard.board[2][0]).toEqual(new Ship(3));
});

it("invalid place ship", () => {
  const gameboard = new Gameboard();
  expect(() => gameboard.placeShip(10, 8, 1)).toThrow("Invalid coodinate");
  expect(() => gameboard.placeShip(2 ,6, 5,'horizontal')).toThrow(
    "Invalid coodinate: ship extends beyond board horizontally",
  );
  expect(() => gameboard.placeShip(7, 5, 5, "vertical")).toThrow(
    "Invalid coodinate: ship extends beyond board vertically",
  );
  gameboard.placeShip(1, 1, 3);
  expect(() => gameboard.placeShip(1, 2, 2)).toThrow(
    "Cannot place ship: position already occupied."
  );
});
it("receive Attack", () => {
  const gameboard = new Gameboard();
  expect(gameboard.receiveAttack(1, 1)).toBe(false);
  expect(gameboard.missed[0]).toEqual([1, 1]);
});

it("showMissedShots", () => {
  const gameboard = new Gameboard();
  gameboard.receiveAttack(3, 3);
  gameboard.receiveAttack(1, 2);
  expect(gameboard.showMissedShots()).toEqual([
    [3, 3],
    [1, 2],
  ]);
});

it("checkAllShips", () => {
  const gameboard = new Gameboard();
  gameboard.placeShip(1, 1, 2);
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(2, 1);
  expect(gameboard.areAllShipsSunk()).toBe(true); 

  gameboard.placeShip(4, 4, 2, "vertical");
  gameboard.receiveAttack(4, 4);
  gameboard.receiveAttack(4, 5);
  expect(gameboard.areAllShipsSunk()).toBe(true); 
});


it('isAdjacentToShip',()=>{
    const gameboard=new Gameboard();
    gameboard.placeShip(2,2,2);
    expect(gameboard.isAdjacentToShip(1,1)).toBe(true);
    expect(gameboard.isAdjacentToShip(6,6)).toBe(false);
})

it('hasUnsunkedShip',()=>{
  const gameboard=new Gameboard();
  gameboard.placeShip(0,0,2);
  gameboard.receiveAttack(0,0)
  expect(gameboard.hasUnsunkedShip()).toBe(true)
})


it('getNeighborCells',()=>{
  const gameboard=new Gameboard();
  expect(gameboard.getNeigborCells(0,0)).toEqual([[1,0],[0,1],[1,1]])
})
it('getShipNeighbors',()=>{
  const game= new Gameboard();
  game.placeShip(0,0,1);
  game.receiveAttack(0,0);
  expect(game.getShipNeighbors().sort()).toEqual([[0,1],[1,0],[1,1]].sort())
})