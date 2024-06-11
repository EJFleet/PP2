// Questions
let questions = [
    { question: "What is the main ingredient in a traditional meringue?", answers: ["Butter", "Egg whites", "Flour"], correct: "Egg whites" },
    { question: "Which country is the origin of the cocktail Mojito?", answers: ["Brazil", "Cuba", "Mexico"], correct: "Cuba" },
    { question: "What type of pasta is shaped like small rice grains?", answers: ["Fusilli", "Penne", "Orzo"], correct: "Orzo" },
    { question: "Which cheese is traditionally used in a Greek salad?", answers: ["Halloumi", "Feta", "Brie"], correct: "Feta" },
    { question: "What type of pastry is used to make profiteroles?", answers: ["Filo", "Choux", "Puff"], correct: "Choux" },
    { question: "Which spice is known as 'the queen of spices'?", answers: ["Cardamom", "Turmeric", "Cinnamon"], correct: "Cardamom" },
    { question: "What is the main ingredient in a traditional Carbonara?", answers: ["Cream", "Butter", "Eggs"], correct: "Eggs" },
    { question: "Which herb is commonly used to make pesto?", answers: ["Basil", "Parsley", "Coriander"], correct: "Basil" },
    { question: "Which meat is used in a traditional shepherd's pie?", answers: ["Lamb", "Chicken", "Beef"], correct: "Lamb" },
    { question: "What type of bread is used to make a traditional Reuben sandwich?", answers: ["Rye", "Baguette", "Ciabatta"], correct: "Rye" },
    { question: "What is the main ingredient in a traditional Japanese miso soup?", answers: ["Fish stock", "Seaweed", "Soybean paste"], correct: "Soybean paste" },            
    { question: "What is the main ingredient in a traditional British black pudding?", answers: ["Kidney", "Liver", "Blood"], correct: "Blood" },
    { question: "Which vegetable is traditionally used to make coleslaw?", answers: ["Lettuce", "Cabbage", "Spinach"], correct: "Cabbage" },            
    { question: "Which herb is commonly used in a traditional mojito?", answers: ["Thyme", "Mint", "Basil"], correct: "Mint" },
    { question: "What is the main ingredient in a traditional French bouillabaisse?", answers: ["Chicken", "Beef", "Fish"], correct: "Fish" },
    { question: "What is the main ingredient in a traditional Spanish paella?", answers: ["Rice", "Potato", "Pasta"], correct: "Rice" },
    { question: "Which cheese is traditionally used in an Italian Margherita pizza?", answers: ["Parmesan", "Mozzarella", "Cheddar"], correct: "Mozzarella" },
    { question: "What is the main ingredient in a traditional Vietnamese pho?", answers: ["Chicken", "Pork", "Beef"], correct: "Beef" },
    { question: "Which fruit is used to make a traditional clafoutis?", answers: ["Apple", "Cherry", "Pear"], correct: "Cherry" },
    { question: "What is the main ingredient in a traditional Moroccan tagine?", answers: ["Fish", "Chicken", "Lamb"], correct: "Lamb" },
    { question: "Which type of pasta is shaped like little tubes?", answers: ["Orzo", "Penne", "Fusilli"], correct: "Penne" },
    { question: "What is the main ingredient in a traditional Greek tzatziki?", answers: ["Cream", "Cheese", "Yogurt"], correct: "Yogurt" },
    { question: "Which spice is known as 'the king of spices'?", answers: ["Paprika", "Cumin", "Black pepper"], correct: "Black pepper" },
    { question: "What is the main ingredient in a traditional French béchamel sauce?", answers: ["Milk", "Butter", "Cream"], correct: "Milk" },
    { question: "Which herb is commonly used in a traditional tabbouleh?", answers: ["Parsley", "Mint", "Cilantro"], correct: "Parsley" },
    { question: "What is the main ingredient in a traditional Korean kimchi?", answers: ["Cabbage", "Lettuce", "Spinach"], correct: "Cabbage" },
    { question: "Which cheese is traditionally used in a French croque monsieur?", answers: ["Brie", "Comte", "Gruyère"], correct: "Gruyère" },
    { question: "What is the main ingredient in a traditional Japanese tempura?", answers: ["Chicken", "Fish", "Shrimp"], correct: "Shrimp" },
    { question: "Which type of rice is used to make sushi?", answers: ["Basmati", "Short-grain rice", "Long-grain rice"], correct: "Short-grain rice" },
    { question: "What is the main ingredient in a traditional Spanish gazpacho?", answers: ["Pepper", "Cucumber", "Tomato"], correct: "Tomato" },
    { question: "Which herb is commonly used in a traditional pesto?", answers: ["Parsley", "Mint", "Basil"], correct: "Basil" },
    { question: "Which cheese is traditionally used in a Caesar salad?", answers: ["Feta", "Cheddar", "Parmesan"], correct: "Parmesan" },
    { question: "What is the main ingredient in a traditional Italian risotto?", answers: ["Arborio rice", "Pasta", "Bread"], correct: "Arborio rice" },
    { question: "What is the main ingredient in a traditional Mexican salsa?", answers: ["Tomato", "Pepper", "Onion"], correct: "Tomato" },
    { question: "Which herb is commonly used in a traditional chimichurri?", answers: ["Parsley", "Basil", "Cilantro"], correct: "Parsley" },
    { question: "What is the primary ingredient in the Japanese dish 'Chawanmushi'?", answers: ["Eggs", "Rice", "Noodles"], correct: "Eggs" },
    { question: "Which of these is a traditional dish from Peru?", answers: ["Ceviche", "Paella", "Tacos"], correct: "Ceviche" },
    { question: "In which Italian region is Parmigiano Reggiano produced?", answers: ["Lombardy", "Emilia-Romagna", "Tuscany"], correct: "Emilia-Romagna" },
    { question: "What is the name of the thinly sliced raw fish dish popular in Japan?", answers: ["Sashimi", "Tempura", "Sushi"], correct: "Sashimi" },
    { question: "Which spice is derived from the crocus flower?", answers: ["Saffron", "Vanilla", "Cinnamon"], correct: "Saffron" },
    { question: "What is the main ingredient in the Korean dish Bibimbap?", answers: ["Noodles", "Rice", "Tofu"], correct: "Rice" },
    { question: "What is the key ingredient in the French dish Coq au Vin?", answers: ["Beef", "Chicken", "Pork"], correct: "Chicken" },
    { question: "Which type of tea is fermented and known for its dark color?", answers: ["Green tea", "Black tea", "Oolong tea"], correct: "Black tea" },
    { question: "What is the main ingredient in the Middle Eastern dish Falafel?", answers: ["Lentils", "Chickpeas", "Rice"], correct: "Chickpeas" },
    { question: "What is the main ingredient in the Greek dish Souvlaki?", answers: ["Lamb", "Pork", "Chicken"], correct: "Pork" },
    { question: "Which French term means 'to put in place'?", answers: ["Mirepoix", "Sous-vide", "Mise en place"], correct: "Mise en place" },
    { question: "What is the primary flavoring in aioli?", answers: ["Garlic", "Basil", "Cilantro"], correct: "Garlic" },
    { question: "What is the main ingredient in the Italian dish 'Osso Buco'?", answers: ["Beef shank", "Pork belly", "Veal shank"], correct: "Veal shank" },
    { question: "Which type of wine is used in a traditional beef Bourguignon?", answers: ["White wine", "Rosé", "Red wine"], correct: "Red wine" },
    { question: "Which region in France is famous for its sparkling wine?", answers: ["Bordeaux", "Burgundy", "Champagne"], correct: "Champagne" },
    { question: "What is the main ingredient in the dish 'Sauerbraten'?", answers: ["Pork", "Beef", "Chicken"], correct: "Beef" },
    { question: "What is the main ingredient in the Brazilian dish 'Feijoada'?", answers: ["Chicken", "Pork", "Fish"], correct: "Pork" },
    { question: "Which fish is traditionally used in a Nicoise salad?", answers: ["Salmon", "Tuna", "Cod"], correct: "Tuna" },
    { question: "What is the primary ingredient in the Spanish dish 'Patatas Bravas'?", answers: ["Potatoes", "Rice", "Chicken"], correct: "Potatoes" },
    { question: "What is the main ingredient in the Indian dish 'Saag Paneer'?", answers: ["Spinach", "Tomatoes", "Potatoes"], correct: "Spinach" },
    { question: "Which type of pastry is used to make a 'Galette'?", answers: ["Phyllo", "Puff", "Shortcrust"], correct: "Shortcrust" },
    { question: "What is the key ingredient in a traditional French 'Bouillabaisse'?", answers: ["Lamb", "Fish", "Chicken"], correct: "Fish" },
    { question: "Which region of Italy is famous for 'Balsamic Vinegar'?", answers: ["Tuscany", "Emilia-Romagna", "Piedmont"], correct: "Emilia-Romagna" },
    { question: "What is the main ingredient in a traditional 'Wiener Schnitzel'?", answers: ["Chicken", "Veal", "Pork"], correct: "Veal" },
    { question: "Which herb is a main ingredient in 'Chimichurri'?", answers: ["Parsley", "Basil", "Cilantro"], correct: "Parsley" },
    { question: "What is the primary ingredient in the Japanese dish 'Natto'?", answers: ["Rice", "Soybeans", "Fish"], correct: "Soybeans" },
    { question: "What is the main ingredient in a 'Hollandaise sauce'?", answers: ["Cream", "Butter", "Milk"], correct: "Butter" },
    { question: "What type of pasta is 'Pappardelle'?", answers: ["Thin strips", "Wide ribbons", "Small tubes"], correct: "Wide ribbons" },
  ];

// Variables
    const highScoreSpan = document.getElementById('high-score');
    const currentScore = document.getElementById('current-score'); //span
    const timerSpan = document.getElementById('timer-span');
    const answerButtonUl = document.querySelector('.answers-list');
    const questionText = document.getElementById('question-text'); //div .panel with h3 within it
    const finalAnswer = document.getElementById('final-correct-answer');
    const finalScoreNumber = document.getElementsByClassName('final-score-number');
    const gameContainer = document.getElementById('game-container');
    const gameOverContainer = document.getElementById('game-over-container');
    const timesUpContainer = document.getElementById('times-up-container');
    const homeContainer = document.getElementById('home-container');
    let shuffledQuestions, currentQuestionIndex, currentScoreText, timer;
    let timeLeft = 30;

// Adding event listeners to buttons to start game play or bring back to home screen
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "game-button"){
                clearInterval(timer);
                runGame();
            } else if (this.getAttribute("class") === "home-button"){
                gameContainer.classList.add('hide');
                gameOverContainer.classList.add('hide');
                timesUpContainer.classList.add('hide');
                homeContainer.classList.remove('hide');
            }
        });
    }


/**
 * The game loop, called when the "Yes! Let's Go" or "Try Again" buttons are clicked
 */

function runGame(){
    shuffledQuestions = shuffleQuestions([...questions]);
    currentQuestionIndex = 0;
    currentScoreText = 0;
    currentScore.textContent = currentScoreText;
    timeLeft = 30; // Reset the timer to 30 seconds
    timerSpan.innerText = timeLeft; // Update the timer display
    homeContainer.classList.add('hide');
    gameOverContainer.classList.add('hide');
    timesUpContainer.classList.add('hide');
    gameContainer.classList.remove('hide');
    clearInterval(timer);
    startTimer();
    displayQuestion();
}

/**
 * Fisher-Yates shuffle for randomising which question is shown 
 * (from StackOverflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
 */
function shuffleQuestions(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

/**
 * Displays questions and three answer options
 */
function displayQuestion(){
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.querySelector('h3').textContent = currentQuestion.question;

    answerButtonUl.innerHTML = '';

    for (let i = 0; i < currentQuestion.answers.length; i++){
       let liElement = document.createElement('li');
       let answerButton = document.createElement('button');
       answerButton.classList.add('answer-button');
       answerButton.textContent = currentQuestion.answers[i];

       answerButton.addEventListener('click', function(event){
            let clickedButton = event.currentTarget;
            checkAnswer(clickedButton);       
        }
    );    
        liElement.appendChild(answerButton);
        answerButtonUl.appendChild(liElement);
    }
}

/**
 * Checks if the answer-button that is clicked by user is correct
 */
function checkAnswer(selectedButton){
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    if (selectedButton.textContent === currentQuestion.correct){
        currentScoreText++;
        currentScore.textContent = currentScoreText;        
        currentQuestionIndex++;
        displayQuestion();    
    } else {
        endGame();
    }
} 

/**
 * Starts the timer at 30 seconds and counts down to zero
 */
function startTimer(){
    timer = setInterval(() => {
        timeLeft--;
        timerSpan.innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            timesUp();
        }
    }, 1000);
}

/**
 * Sets and displays the current highest score
 */
function getHighestScore(){
    return parseInt(localStorage.getItem('highestScore')) || 0;
}

function setHighestScore(){
    localStorage.setItem('highestScore', currentScoreText);
}

function updateHighestScore(){
    const highestScore = getHighestScore();
    if (currentScoreText > highestScore) {
        setHighestScore(currentScoreText);
    }
    highScoreSpan.textContent = getHighestScore();
}

/**
 * Displays the game-over panel when a wrong answer is clicked
 */
function endGame(){
    clearInterval(timer);
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    finalAnswer.innerText = currentQuestion.correct;
    gameContainer.classList.add('hide');
    gameOverContainer.classList.remove('hide');
    finalScoreNumber[0].innerText = currentScoreText;  
    updateHighestScore();
}


/**
 * Displays the times-up panel when the timer runs out 
 */
function timesUp(){
    clearInterval(timer);
    gameContainer.classList.add('hide');
    timesUpContainer.classList.remove('hide');
    finalScoreNumber[1].innerText = currentScoreText;  
    updateHighestScore();
}

highScoreSpan.textContent = getHighestScore();

