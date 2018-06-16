var wordList = ["javascript","jquery","html","var","array","iterate","css"];
var hintList = ["This language was created in 10 days","You use this to create and edit DOM elements in HTML","This is the basic language for all webpages","This is how you declare things in Javascript","This is an indexed list of elements","This means to move over","this is how you style elements in HTML"]
function game() {
var randomNumber = [Math.floor(Math.random() * wordList.length)];
var pickWord = wordList[randomNumber];
var hint = hintList[randomNumber];
var answerArray =[];
var userGuess;
for(var i=0; i < pickWord.length; i++) {
    answerArray[i] = "_"
}
var remainingGuesses = (pickWord.length);

document.onkeyup = function (event) {
		if (event.keyCode < 65 && event.keyCode > 90) {return; }
    userGuess = event.key;
    
    for(var i =0; i < pickWord.length; i++){
        if(userGuess === pickWord[i]) {
            answerArray[i] = userGuess;
            remainingGuesses--;
        } else {
            remainingGuesses--;
        }
    }
    if (!answerArray.includes("_")) {
    game();
    }
    if (remainingGuesses === 0){
        game();
        alert("Game Over!");
    }
    html = "<div><h1>JavaScript HangMan!</h1></div>" +
        "<p>Guess what word I'm thinking of! Here is your hint! " + (hint) +
        "<p>word: </p>" + answerArray +
        "<p>You chose: " + userGuess + "</p>";

    document.querySelector("#game").innerHTML = html;


}
}

game();