document.addEventListener("DOMContentLoaded", () => {
    const rows = 6;
    const cols = 7;
    const board = [];
    const boardElement = document.getElementById("board");
    const messageElement = document.getElementById("message");
    let currentPlayer = "red";

    function createBoard() {
        boardElement.innerHTML = "";
        for (let row = 0; row < rows; row++) {
            board[row] = [];
            for (let col = 0; col < cols; col++) {
                const cell = document.createElement("div");
                cell.classList.add("cell");
                cell.dataset.row = row;
                cell.dataset.col = col;
                cell.addEventListener("click", () => handleCellClick(row, col));
                boardElement.appendChild(cell);
                board[row][col] = "";
            }
        }
    }

    function handleCellClick(row, col) {
        for (let r = rows - 1; r >= 0; r--) {
            if (!board[r][col]) {
                board[r][col] = currentPlayer;
                const cell = document.querySelector(`.cell[data-row='${r}'][data-col='${col}']`);
                cell.classList.add(currentPlayer);
                if (checkWin(r, col)) {
                    messageElement.textContent = `${currentPlayer.toUpperCase()} wins!`;
                    boardElement.removeEventListener("click", handleCellClick);
                } else {
                    currentPlayer = currentPlayer === "red" ? "yellow" : "red";
                    messageElement.textContent = `${currentPlayer.toUpperCase()}'s turn`;
                }
                break;
            }
        }
    }

    function checkWin(row, col) {
        const directions = [
            [[0, 1], [0, -1]], // horizontal
            [[1, 0], [-1, 0]], // vertical
            [[1, 1], [-1, -1]], // diagonal \
            [[1, -1], [-1, 1]] // diagonal /
        ];
        for (let direction of directions) {
            let count = 1;
            for (let [dr, dc] of direction) {
                let r = row + dr;
                let c = col + dc;
                while (r >= 0 && r < rows && c >= 0 && c < cols && board[r][c] === currentPlayer) {
                    count++;
                    if (count === 4) {
                        return true;
                    }
                    r += dr;
                    c += dc;
                }
            }
        }
        return false;
    }

    document.getElementById("reset").addEventListener("click", () => {
        createBoard();
        currentPlayer = "red";
        messageElement.textContent = `${currentPlayer.toUpperCase()}'s turn`;
    });

    createBoard();
    messageElement.textContent = `${currentPlayer.toUpperCase()}'s turn`;
});
