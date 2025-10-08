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

gameBoard.mark(3,"X")
gameBoard.mark(4,"O")
// gameBoard.mark(4,"X")
gameBoard.reset()
console.log(gameBoard.boardArray);