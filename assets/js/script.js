let questions = [
    { question: "What is the main ingredient in a traditional meringue?", answers: ["Butter", "Egg whites", "Flour"], correct: "Egg whites" },
    { question: "Which country is the origin of the cocktail Mojito?", answers: ["Brazil", "Cuba", "Mexico"], correct: "Cuba" },
    { question: "What type of pasta is shaped like small rice grains?", answers: ["Fusilli", "Penne", "Orzo"], correct: "Orzo" },
    { question: "Which cheese is traditionally used in a Greek salad?", answers: ["Gorgonzola", "Feta", "Brie"], correct: "Feta" },
    { question: "What type of pastry is used to make profiteroles?", answers: ["Filo", "Choux", "Puff"], correct: "Choux" },
    { question: "Which spice is known as 'the queen of spices'?", answers: ["Cardamom", "Turmeric", "Cinnamon"], correct: "Cardamom" },
    { question: "What is the main ingredient in a traditional Carbonara?", answers: ["Cream", "Butter", "Eggs"], correct: "Eggs" },
    { question: "Which herb is commonly used to make pesto?", answers: ["Basil", "Parsley", "Coriander"], correct: "Basil" },
    { question: "Which meat is used in a traditional shepherd's pie?", answers: ["Lamb", "Chicken", "Beef"], correct: "Lamb" },
    { question: "What type of bread is used to make a traditional Reuben sandwich?", answers: ["Rye", "Baguette", "Sourdough"], correct: "Rye" },
    { question: "What is the main ingredient in a traditional Japanese miso soup?", answers: ["Fish stock", "Seaweed", "Soybean paste"], correct: "Soybean paste" },            
    { question: "What is the main ingredient in a traditional British black pudding?", answers: ["Kidney", "Liver", "Blood"], correct: "Blood" },
    { question: "What is the main ingredient in a traditional Italian tiramisu?", answers: ["Mascarpone", "Cream cheese", "Ricotta"], correct: "Mascarpone" },      
    { question: "Which vegetable is traditionally used to make coleslaw?", answers: ["Lettuce", "Cabbage", "Spinach"], correct: "Cabbage" },            
    { question: "Which herb is commonly used in a traditional mojito?", answers: ["Thyme", "Mint", "Basil"], correct: "Mint" },
    { question: "What is the main ingredient in a traditional French bouillabaisse?", answers: ["Chicken", "Beef", "Fish"], correct: "Fish" },
    { question: "Which type of pasta is shaped like little ears?", answers: ["Penne", "Fusilli", "Orecchiette"], correct: "Orecchiette" },
    { question: "What is the main ingredient in a traditional Spanish paella?", answers: ["Rice", "Potato", "Pasta"], correct: "Rice" },
    { question: "Which cheese is traditionally used in an Italian Margherita pizza?", answers: ["Parmesan", "Mozzarella", "Gorgonzola"], correct: "Mozzarella" },
    { question: "What is the main ingredient in a traditional Vietnamese pho?", answers: ["Chicken", "Pork", "Beef"], correct: "Beef" },
    { question: "Which fruit is used to make a traditional clafoutis?", answers: ["Apple", "Cherry", "Pear"], correct: "Cherry" },
    { question: "What is the main ingredient in a traditional Moroccan tagine?", answers: ["Fish", "Chicken", "Lamb"], correct: "Lamb" },
    { question: "Which type of pasta is shaped like little tubes?", answers: ["Spaghetti", "Penne", "Fusilli"], correct: "Penne" },
    { question: "What is the main ingredient in a traditional Greek tzatziki?", answers: ["Cream", "Cheese", "Yogurt"], correct: "Yogurt" },
    { question: "Which spice is known as 'the king of spices'?", answers: ["Paprika", "Cumin", "Black pepper"], correct: "Black pepper" },
    { question: "What is the main ingredient in a traditional French béchamel sauce?", answers: ["Milk", "Butter", "Cream"], correct: "Milk" },
    { question: "Which herb is commonly used in a traditional tabbouleh?", answers: ["Parsley", "Mint", "Cilantro"], correct: "Parsley" },
    { question: "What is the main ingredient in a traditional Korean kimchi?", answers: ["Cabbage", "Lettuce", "Spinach"], correct: "Cabbage" },
    { question: "Which cheese is traditionally used in a French croque monsieur?", answers: ["Brie", "Camembert", "Gruyère"], correct: "Gruyère" },
    { question: "What is the main ingredient in a traditional Japanese tempura?", answers: ["Chicken", "Fish", "Shrimp"], correct: "Shrimp" },
    { question: "What is the main ingredient in a traditional American pumpkin pie?", answers: ["Carrot", "Pumpkin", "Squash"], correct: "Pumpkin" },
    { question: "Which type of rice is used to make sushi?", answers: ["Basmati", "Short-grain rice", "Long-grain rice"], correct: "Short-grain rice" },
    { question: "What is the main ingredient in a traditional Spanish gazpacho?", answers: ["Pepper", "Cucumber", "Tomato"], correct: "Tomato" },
    { question: "Which herb is commonly used in a traditional pesto?", answers: ["Parsley", "Mint", "Basil"], correct: "Basil" },
    { question: "What is the main ingredient in a traditional British trifle?", answers: ["Jelly", "Custard", "Cream"], correct: "Custard" },
    { question: "Which cheese is traditionally used in a Caesar salad?", answers: ["Feta", "Mozzarella", "Parmesan"], correct: "Parmesan" },
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
    { question: "What type of fat is traditionally used in a British suet pudding?", answers: ["Butter", "Lard", "Suet"], correct: "Suet" },
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
    { question: "What is the primary ingredient in 'Ratatouille'?", answers: ["Tomato", "Zucchini", "Eggplant"], correct: "Eggplant" },
    { question: "What is the main ingredient in a traditional 'Wiener Schnitzel'?", answers: ["Chicken", "Veal", "Pork"], correct: "Veal" },
    { question: "Which herb is a main ingredient in 'Chimichurri'?", answers: ["Parsley", "Basil", "Cilantro"], correct: "Parsley" },
    { question: "What is the primary ingredient in the Japanese dish 'Natto'?", answers: ["Rice", "Soybeans", "Fish"], correct: "Soybeans" },
    { question: "Which spice is essential in a traditional 'Garam Masala'?", answers: ["Cumin", "Turmeric", "Cardamom"], correct: "Cardamom" },
    { question: "What is the main ingredient in a 'Hollandaise sauce'?", answers: ["Cream", "Butter", "Milk"], correct: "Butter" },
    { question: "What type of pasta is 'Pappardelle'?", answers: ["Thin strips", "Wide ribbons", "Small tubes"], correct: "Wide ribbons" },
  ]
    const gameButton = document.getElementsByClassName('game-button');
    const homeButton = document.getElementById('home-button');
    const highScore = document.getElementById('high-score');
    const yourScore = document.getElementById('your-score');
    const timeRemainingElement = document.getElementById('time-remaining');
    const questionText = document.getElementById('question-text');
    const finalAnswer = document.getElementById('final-correct-answer');
    const finalScore = document.getElementById('final-score');
    const answerButtons = document.getElementsByClassName('answer-button');

    let shuffledQuestions, currentQuestionIndex, 
    

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("class") === "game-button"){
                runGame();
            } else if (this.getAttribute("class") === "answer-button"){
                checkAnswer();
            } else if (this.getAttribute("class") === "home-button"){
                document.getElementById('game-over-container').classList.add('hide')
                document.getElementById('home-container').classList.remove('hide')
            }
        });
    }


/**
 * The game loop, called when the "Let's Go" or "Try Again" buttons are clicked
 */

function runGame(){
    shuffledQuestions = shuffleQuestions([...questions])
    currentQuestionIndex = 0
    yourScore = 0
    timeRemainingElement.textContent = 30
    document.getElementById('home-container').classList.add('hide')
    document.getElementById('game-container').classList.remove('hide')
    startTimer()
    displayQuestion()

}

/**
 * Fisher-Yates shuffle for randomising which question is shown (from StackOverflow https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
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
function displayQuestion(question){
    for
}

/**
 * Checks if the answer-button that is clicked by user is correct
 */

function checkAnswer(){

        
}

function startTimer(){

}

function resetState(){
    for (let button of answerButtons) {
        button.textContent = '';
    }
}

function endGame(){

}