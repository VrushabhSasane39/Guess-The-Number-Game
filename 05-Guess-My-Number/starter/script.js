'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'ð Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);9

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    //
    displayMessage('ðNo number');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'ð Correct Number!';
    displayMessage('.Correct Answer ð');
    document.querySelector('.score').textContent = score;

    document.querySelector('body').style.backgroundColor = '#ff0066';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '15rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'â°(*Â°â½Â°*)â¯ to high!' : '(*/Ïï¼¼*) to low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '(â¬â¬ï¹â¬â¬) you lost';
      displayMessage('.(â¬â¬ï¹â¬â¬) you lost');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'â°(*Â°â½Â°*)â¯ to high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '(â¬â¬ï¹â¬â¬) you lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '(*/Ïï¼¼*) to low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '(â¬â¬ï¹â¬â¬) you lost';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else {
  //   document.querySelector('.message').textContent = 'pls enter the number !';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('Start Guessing....');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#000000';
  document.querySelector('.guess').textContent = '0';
  document.querySelector('.number').style.width = '15rem';
});
