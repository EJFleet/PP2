document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "run-game-button"){
                runGame();
            } else if (this.getAttribute("class") === "next-question-button"){
                nextQuestion();
            } else {//display welcome container
            }
        });
    }
});
