alert('You got 5 guesses. Guess 1 to 5');
const answer = 2;
let guess = prompt('What do you guess?');
let i = 0;
while (i < 5) {
  if (guess == answer) {
    alert('Good job! See what happens next :)');
    break;
  } else {
    guess = prompt('Ops! Maybe, another try?');
    i++;
  }
}
