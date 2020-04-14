//created words for game
const words = ['JAZZ', 'PEANUTS', 'TRANSYLVANIA', 'AMPHIBIAN','TRAIL','BICYCLE','FREEDOM','FREEZE'];
//making them show up on random mode
const random = Math.floor(Math.random() * words.length);
const randomWord = words[random];
// console.log(randomWord);


const correctLetters = [];
const wrongLetters = [];
let displayCharacters = [];

function updateDisplayCharacters() {
    displayCharacters = [];
    for (let i = 0; i < randomWord.length; i++) {
        //if we guessed the correct letter put in the letter if not an underscore
        if (correctLetters.includes(randomWord[i])) {
            displayCharacters.push(randomWord[i]);


        } else {

            displayCharacters.push('_');
        }
    }
}
updateDisplayCharacters();
displayBoard();


function displayBoard() {
    wordboard.innerHTML = '';
    for (let i = 0; i < displayCharacters.length; i++) {
//span makes empty underscore for every letter to be guessed
        wordboard.innerHTML = wordboard.innerHTML + '<span>' + displayCharacters[i] + '</span>';
    }
}
displayBoard();

function changeButtonColor(isCorrect, letter) {
    let selectedButton
    for (i = 0; i < buttons.length; i++) {
        const currentButton = buttons[i];
        if (currentButton.textContent === letter) {
            selectedButton = currentButton;
        }
    }
    selectedButton.disabled = true;
    if (isCorrect) {
        selectedButton.style.color = 'green';
    } else {
        selectedButton.style.color = 'red';
    }
}
//function for win or lose alerts
function checkWinOrLose() {
    if(!displayCharacters.includes('_')) {
        alert('You win!');
    }
    if(wrongLetters.length >= 9) {
        alert('You lose');
    }
}
//hangman images get updated to show each time a wrong button clicked
const hangmanImage = document.querySelector('#hangman-image');
function updateImage() {
    hangmanImage.src = `/images/hangman${wrongLetters.length}.png`;
}
function refreshPage() {
    window.location.reload();
}
//button click 
const buttons = document.querySelectorAll('.letter-btn');

buttons.forEach(btn => btn.addEventListener('click', handleButtonClick))

function handleButtonClick() {
    // console.log(this);
    const letter = this.textContent;
    
    if (randomWord.includes(letter)) {
        //correct guess
        correctLetters.push(letter);
        changeButtonColor(true, letter);
        
    } else {
        wrongLetters.push(letter);
        changeButtonColor(false, letter);
        
    }
    updateDisplayCharacters();
    displayBoard();
    updateImage();
    checkWinOrLose();
    
}
