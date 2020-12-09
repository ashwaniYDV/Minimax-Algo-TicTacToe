window.onload = () => {
  // Matrix board representation
  let board;
  let turn;

  start = () => {
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    turn = "X";
    draw();
  };

  function changeturn() {
    turn = turn == "X" ? "O" : "X";
  }

  const isEqual = (a, b, c) => {
    return a == b && b == c && c == a && a != "";
  };

  let p = document.querySelectorAll(".p");
  cells = [
    [p[0], p[1], p[2]],
    [p[3], p[4], p[5]],
    [p[6], p[7], p[8]],
  ];

  // click feature
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let cell = cells[i][j];
      cell.addEventListener("click", () => {
        if (board[i][j] == "") {
          board[i][j] = turn;
          draw();
          changeturn();
          check();
        }
      });
    }
  }

  // draw
  draw = () => {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let cell = cells[i][j];
        cell.innerHTML = board[i][j];
      }
    }
  };

  check = () => {
    for (let i = 0; i < 3; i++) {
      if (isEqual(board[i][0], board[i][1], board[i][2])) {
        setTimeout(() => {
          alert(`Player ${board[i][0]} wins`);
          start();
        }, 100);
      }
    }
    for (let i = 0; i < 3; i++) {
      if (isEqual(board[0][i], board[1][i], board[2][i])) {
        setTimeout(() => {
          alert(`Player ${board[0][i]} wins`);
          start();
        }, 100);
      }
    }
    if (isEqual(board[0][0], board[1][1], board[2][2])) {
      setTimeout(() => {
        alert(`Player ${board[0][0]} wins`);
        start();
      }, 100);
    }
    if (isEqual(board[2][0], board[1][1], board[0][2])) {
      setTimeout(() => {
        alert(`Player ${board[2][0]} wins`);
        start();
      }, 100);
    }
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] == "") {
          return;
        }
      }
    }
    setTimeout(() => {
      alert("Game Tied");
      start();
    }, 100);
  };

  start();
};
