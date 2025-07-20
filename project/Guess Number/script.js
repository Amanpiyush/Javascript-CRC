const RandomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField').value;
const Guess = document.querySelector('.guesses');
const Remaining = document.querySelector('.lastResult');
const LoworHigh = document.querySelector('.lowOrHi');
const Startover = document.querySelector('.resultParas');


const p = document.createElement('p'); 


let preGUess = [];
let NumGUess = 1;
let playGame = true;

const Validate = ((ValidateGuess) => {
    if(userInput < 0 || isNaN(userInput)){
        submit.innerHTML = `You are Choosen Number is ${userInput} `
        if(userInput > 100){
            submit.innerHTML = 'You have select Number from 1-100'
        }
    }
})

const GuuessNumber = ((guess) => {

})

