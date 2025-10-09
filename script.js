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

  function checkWin() {
    const board = gameBoard.boardArray;
    const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of winningCombos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        console.log(`${board[a]} wins!`);
        return true;
      }
    }

    console.log("No winner yet");
    return false;
  }

  return { startGame, playRound, checkWin };
})();

gameController.startGame();
gameController.playRound(3);
gameController.playRound(2);
gameController.playRound(4);
gameController.playRound(8);
gameController.playRound(5);
gameController.checkWin();
// console.log(gameBoard.boardArray);
