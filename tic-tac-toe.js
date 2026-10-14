document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    const newGameButton = document.querySelector(".btn");
    const originalStatusText = status.textContent;


    let currentPlayer = "X";
    let gameOver = false;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let square of squares) {
        square.classList.add("square");

        square.addEventListener("click", function() {
            if (gameOver || square.textContent !== "") {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.remove("X", "O");
            square.classList.add(currentPlayer);
            

            // Check for a win
            for (let combination of winningCombinations) {
                const [a, b, c] = combination;
                if (squares[a].textContent === currentPlayer &&
                    squares[b].textContent === currentPlayer &&
                    squares[c].textContent === currentPlayer
                ) {
                    status.textContent = "Congratulations! " + currentPlayer + " wins!";
                    status.classList.add("you-won");
                    gameOver = true;
                    break;
                }
            }

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        // Hover effects
        square.addEventListener("mouseenter", function() {
            square.classList.add("hover");
        });

        square.addEventListener("mouseleave", function() {
            square.classList.remove("hover");
        });

        // Restart the game when the "New Game" button is clicked
        newGameButton.addEventListener("click", function() {
            for (let square of squares) {
                square.textContent = "";
                square.classList.remove("X", "O", "hover");
            }
            gameOver = false;
            currentPlayer = "X";
            status.textContent = originalStatusText;
            status.classList.remove("you-won");
        });
    }
})