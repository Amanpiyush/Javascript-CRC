const RandomNumber = Math.floor(Math.random() * 100 + 1);
const Submit = document.querySelector('#subt');
const GuessField = document.querySelector('.guessField').value;

const GuessSlot = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');

const LoworHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');


const p = document.createElement('p');

let PreviousGuess = [];
let RemainGuess = 1

let playGame = true;

if(playGame){
  Submit.addEventListener('click', (event) => {
    event.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    
    validation(guess)
  })
}

const validation = ((Guess) => {
  //Validate Guess
  if (Guess < 0 || Guess > 100 || isNaN(Guess)){
    alert('please a Valid Number')
  }else if(Guess < 1){
    alert('Enter the Number Greater than 1')
  }else if(Guess > 100){
    alert('Enter the Number less than 100')
  }else{
    PreviousGuess.push(Guess);
    if(RemainGuess === 11){
        DisplayGuess(Guess3)
    }
  }
})

const CheckGuess = ((Guess) => {
  //Value random == userInput
})

const DisplayGuess = ((Guess) => {
  //display you won
})

const DisplayMessage = ((Message) => {
  //Display Message
})

const endGame = ((Game) => {

})

const newGame = ((Game) => {

})
