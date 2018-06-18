var wordList = ["linux","archlinux","gnu","theinterjection","ubuntu","penguin"];
var hintList = ["This was invented by Linus Torvalds","This linux distro follows the KISS principle","The recursive acronym for not Unix","I would just like to interject for a moment","This distro is produced by the company Canonical","This cute animal is the character mascot for Linux"]
function game() {
var randomNumber = [Math.floor(Math.random() * wordList.length)];
let pickWord = wordList[randomNumber];
let hint = hintList[randomNumber];
let answerArray =[];
let userGuess;
for(var i=0; i < pickWord.length; i++) {
    answerArray[i] = "_"
}
let remainingLetters = pickWord.length;

document.onkeyup = function (event) {
		if (event.keyCode < 65 && event.keyCode > 90) {return; }
    userGuess = event.key;
    
    for(var i =0; i < pickWord.length; i++){
        if(userGuess === pickWord[i]) {
            answerArray[i] = userGuess;
            remainingLetters--;
        }
    }
    if (!answerArray.includes("_")) {
    game();
    }
    html =
        "<p>Guess what word I'm thinking of! Here is your hint! " + (hint) +
        "<p>word: </p>" + answerArray +
        "<p>You chose: " + userGuess + "</p>";

    document.querySelector("#game").innerHTML = html;


}
}

game();