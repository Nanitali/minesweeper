document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {cells:[{row:0,col:0,isMine:false,isMarked: false,hidden:true,surroundingMines: 1},
                    {row:0,col:1,isMine:false,isMarked: false,hidden:true,surroundingMines: 0},
                    {row:0,col:2,isMine:false,isMarked:false,hidden:true,surroundingMines: 0},
                    {row:1,col:0,isMine:true,isMarked:false,hidden:true,surroundingMines: 0},
                    {row:1,col:1,isMine:false,isMarked: false,hidden:true,surroundingMines: 0},
                    {row:1,col:2,isMine:false,isMarked: false,hidden:true,surroundingMines: 0},
                    {row:2,col:0,isMine:false,isMarked: false,hidden:true,surroundingMines: 2},
                    {row:2,col:1,isMine:true,isMarked: false,hidden:true,surroundingMines: 0},
                    {row:2,col:2,isMine:false,isMarked: false,hidden:true,surroundingMines: 1},]

};

function startGame (cells) {
  // Don't remove this function call: it makes the game work!
  let countSurroundingMines =[];
  for(i=0;i<board.cells.length;i++){
    countSurroundingMines.push([]);
    for(let j=0;j<board.cells[i].length;j++){
      countSurroundingMines[i][j]=0;
    }
  }
  
  lib.initBoard() 
  
  }

document.addEventListener('click', checkForWin);
// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  debugger;
  // var countHiddenMines=0;
  var countTotalMines = 0;
  var countMarkedMines = 0;
  for (var i = 0; i < board.cells.length; i++) {
  if (board.cells[i].hidden === true && board.cells[i].isMine === false)
   {
    return;
  }
    if (board.cells[i].isMine === true) {
      countTotalMines++;
    }if(board.cells[i].isMine === true && board.cells[i].isMarked === true) 
    {
      countMarkedMines++;
    }
  
  if  (countTotalMines===countMarkedMines) {
    lib.displayMessage('You Win!!');
  }else {
    return;
  }
}
    }
  
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
function countSurroundingMines (cell) {
  var countMinesAround = 0;
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  
  for (let i=0; i <surrounding.length; i++){
    if (surrounding[i].isMine === true) {
      countMinesAround++;
    } 
  }
  return countMinesAround;
}
 
