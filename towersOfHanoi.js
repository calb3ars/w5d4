const Board = require('./tower.js');
let board = new Board;

// ******************************************************
// Array of 3 arrays: [[3,2,1], [], []]
// Endgame = [[], [3,2,1], []] || [[], [], [3, 2, 1]]

// play(board){
// Render board
//      board.forEach(el => console.log(el));
// If endgame
//      call endgameCallback
//          console.log(GREAT!)
//          rl.close
//      return;
// ELSE
// Ask for move:
//      From, to = parseInt(user_input)
//  Check if valid?
//      valid = From.last < To.last ?
//  Move
//      To.push(From.pop)
//  Play(board)
//
// ******************************************************
const readlines = require('readline');

const rl = readlines.createInterface({
  input: process.stdin,
  output: process.stdout
});

const endOfGame = function() {
  console.log("GRRRReat!");
  rl.close();
};

const play = function(gameboard) {
  gameboard.towers.forEach(el => console.log(el));

  if(gameboard.endgame()) {
    endOfGame();
    return;
  } else {
    rl.question("Where do you want to move from?", from => {
      from = parseInt(from);
      rl.question("Where to?", to => {
        to = parseInt(to);
        if (gameboard.checkMove(from, to)) {
          gameboard.move(from, to);
        }
        play(gameboard);
      });
    });
  }
};

play(board);
