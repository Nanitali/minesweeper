document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [{ row: 0, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 0, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 0, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 1, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 1, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 1, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 2, col: 0, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 2, col: 1, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },
  { row: 2, col: 2, isMine: false, isMarked: false, hidden: true, surroundingMines: 0 },]

};

function startGame() {
  // Don't remove this function call: it makes the game work!

  for (let i = 0; i < board.cells.length; i++) {
    if (Math.random() < .30) {
      board.cells[i].isMine = true;
    }
  }
  for (let j = 0; j < board.cells.length; j++) {
    board.cells[j].surroundingMines = countSurroundingMines(board.cells[j]);
  }
  

  lib.initBoard()

}

// document.addEventListener('click', checkForWin);
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin() {

  // var countHiddenMines=0;
  var countTotalMines = 0;
  var countMarkedMines = 0;
  for (var i = 0; i < board.cells.length; i++) {
    if (board.cells[i].hidden === true && board.cells[i].isMine === false) {
      // console.log(`Cell ${i} is a hidden non-mine:`, board.cells[i]);
      return;
    }
    if (board.cells[i].isMine === true) {
      // console.log(`Cell ${i} is a mine:`, board.cells[i]);
      countTotalMines++;
    } if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      // console.log(`Cell ${i} is a marked mine:`, board.cells[i]);
      countMarkedMines++;
    }
  }  
    if (countTotalMines === countMarkedMines) {

      lib.displayMessage('You Win!!');
    }
    else {
      return;
    }
}

document.addEventListener('click', checkForWin);
// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
//   lib.displayMessage('You win!')

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var countMinesAround = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for (let i = 0; i < surrounding.length; i++) {
    if (surrounding[i].isMine === true) {
      countMinesAround++;
    }
  }
  return countMinesAround;
}

