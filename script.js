const gameBoard = (function () {
  const boardArray = ["", "", "", "", "", "", "", "", ""];

  function mark(position, marker) {
    if (isEmpty(position)) {
      return (boardArray[position] = marker);
    } else {
      console.log("invalid position");
    }
  }

  function isEmpty(position) {
    if (boardArray[position] == "") {
      return boardArray[position] == "";
    } else {
      return false;
    }
  }

  function reset() {
    for (let i = 0; i < boardArray.length; i++) {
      boardArray[i] = "";
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

const gameController = (function () {
  const p1 = createPlayer("Player 1", "X");
  const p2 = createPlayer("Player 2", "O");

  let currentPlayer = p1;

  function startGame() {
    gameBoard.reset();
  }
  function playRound(position) {
    gameBoard.mark(position, currentPlayer.getMarker());

    if (currentPlayer == p1) {
      currentPlayer = p2;
    } else {
      currentPlayer = p1;
    }
  }

  return { startGame, playRound };
})();

gameController.startGame();
gameController.playRound(1);
gameController.playRound(2);
gameController.playRound(2);

console.log(gameBoard.boardArray);
