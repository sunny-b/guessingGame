document.addEventListener('DOMContentLoaded', function() {
  var message = document.querySelector('p');
  var button = document.querySelector('input[type="submit"]');
  var guess = document.getElementById('guess');
  var link = document.querySelector('a');
  var answer;
  var guessCounter;

  function newGame() {
    answer = Math.floor(Math.random() * 100) + 1;
    guessCounter = 0;
    message.innerText = "Guess a number from 1 to 100";
  }

  function isValidGuess(guess) {
    return String(Number(guess)) === guess
  }

  button.addEventListener('click', function() {
    var newMessage;
    guessCounter++;

    if (isValidGuess(guess.value)) {
      var newGuess = Number(guess.value);

      if (newGuess > answer) {
        newMessage = 'My number is lower than ' + newGuess;
      } else if (newGuess < answer) {
        newMessage = 'My number is higher than ' + newGuess;
      } else {
        newMessage = 'You guessed it! It took you ' +
                            guessCounter + ' guesses.'
        button.disabled = true;
      }
    } else {
      newMessage = 'Please enter a valid number';
    }

    message.innerText = newMessage;
  });

  link.addEventListener('click', function(event) {
    event.preventDefault();
    newGame();
  });

  newGame();
});
