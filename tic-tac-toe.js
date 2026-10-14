document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";

    for (let square of squares) {
        square.classList.add("square");

        square.addEventListener("click", function() {
            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    }
})