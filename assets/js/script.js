document.addEventListener("DOMContentLoaded", function() {

    let questions = [

    ];
    

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


/**
 * The game loop, called when the "Let's Go" or "Try Again" buttons are clicked
 */

function runGame(){

}

/**
 * Displays questions and four answer options
 */
function displayQuestion(){

}

function checkAnswer(){

    ifAnswerCorrect();

    
}