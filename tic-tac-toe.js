document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll("#board div");
    for (let square of squares) {
        square.classList.add("square");
    }
})