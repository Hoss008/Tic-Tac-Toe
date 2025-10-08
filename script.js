const gameBoard = (function () {
  const boardArray = ["", "", "", "", "", "", "", "", ""]; 

  function mark(position, marker) {
    if (isEmpty(position)) {
      return boardArray[position]=marker;
    } else {
      console.log("invalid position");
    }
  }

  function isEmpty(position) {
    if (boardArray[position] == '') {
      return boardArray[position] == '';
    } else {
      return false;
    }
  }

  function reset() {
    for(let i=0;i<boardArray.length;i++){
      boardArray[i]='';
    }
  }

  return { mark, isEmpty, reset, boardArray };
})();


function createPlayer(name, marker) {
  function getName() {
    return name;
  }

  function getMarker() {
    return marker;
  }

  return { getName, getMarker };
}

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');


// gameBoard.mark(3,"X")
// gameBoard.mark(4,"O")
// // gameBoard.mark(4,"X")
// gameBoard.reset()
// console.log(gameBoard.boardArray);