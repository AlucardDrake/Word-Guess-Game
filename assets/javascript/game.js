var wordList = ["linux","archlinux","gnu","theinterjection","ubuntu","penguin"];
var hintList = ["This was invented by Linus Torvalds","This linux distro follows the KISS principle","The recursive acronym for not Unix","I would just like to interject for a moment","This distro is produced by the company Canonical","This cute animal is the character mascot for Linux"]
function game() {
    var randomNumber = [Math.floor(Math.random() * wordList.length)];

    let pickWord = wordList[randomNumber];
    let hint = hintList[randomNumber];
    let answerArray =[];
    let userGuess;
    var trackguesses = [];
    var guesses = 0;
    var numberGuesses = 11;
    for(var i=0; i < pickWord.length; i++) {
        answerArray[i] = " _ "
    }

    let remainingLetters = pickWord.length;

    document.onkeyup = function (event) {
            if(numberGuesses > 0){
            if (event.key.length === 1 && !(trackguesses.includes(event.key))) {
                userGuess = event.key;
                trackguesses.push(userGuess);
                guesses++;
            } else if(trackguesses.includes(event.key)){
                alert("You've already pressed that key!");
            } else {
                alert("That is not a valid key");
            }
            for(var i =0; i < pickWord.length; i++){
                if(userGuess === pickWord[i]) {
                    answerArray[i] = userGuess;
                }
            }
            if (!(answerArray.includes(userGuess))) {
                numberGuesses--
            }
            console.log(numberGuesses);
            if (!answerArray.includes(" _ ")) {
                alert("You've won the game! press any key to play again!");
                game();
            }

            html =
                "<p>Guess what word I'm thinking of! Here is your hint! " + (hint) +
                "<p>word: </p>" + answerArray +
                "<p>You chose: " + userGuess + "</p>" +
                "<p>Guesses so far: " + trackguesses + "</p>" +
                "<p>Guesses left " + numberGuesses + "</p>" ;

            document.querySelector("#game").innerHTML = html;


        } else {
            alert("You've lost the game! press anykey to play again!");
            game();
        }
    }
}

game();