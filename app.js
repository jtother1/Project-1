//created words for game
const words = ['JAZZ', 'PEANUT', 'TRANSYLVANIA', 'AMPHIBIAN', 'TRAIL', 'BICYCLE', 'FREEDOM', 'FREEZE','GUACAMOLE', 'INTERNET', 'ROCKET'];
//making them show up on random mode
let randomWord
// console.log(randomWord);

//making empty variables in order to use in different functions 
let correctLetters = [];
let wrongLetters = [];
let displayCharacters = [];
//for loop to display the letters based on the length of the random word spit out
function updateDisplayCharacters() {
    displayCharacters = [];
    for (let i = 0; i < randomWord.length; i++) {
        //if we guessed the correct letter put in the letter if not an underscore
        if (correctLetters.includes(randomWord[i])) {
            displayCharacters.push(randomWord[i]);


        } else {
//displays empty _ underscores when a letter of the word hasnt been picked
            displayCharacters.push('_');
        }
    }
}


//diaplays 
function displayBoard() {
    wordboard.innerHTML = '';
    for (let i = 0; i < displayCharacters.length; i++) {
        //span makes empty underscore for every letter to be guessed
        wordboard.innerHTML = wordboard.innerHTML + '<span>' + displayCharacters[i] + '</span>';
    }
}

//for every correct and wrong letter turn a color to signify it has been used and is true or false
function changeButtonColor(isCorrect, letter) {
    let selectedButton
    for (i = 0; i < buttons.length; i++) {
        const currentButton = buttons[i];
        if (currentButton.textContent === letter) {
            selectedButton = currentButton;
        }
    }
    selectedButton.disabled = true;  //disables multiple attempts to press buttons
    if (isCorrect) {
        selectedButton.style.color = 'green';
    } else {
        selectedButton.style.color = 'red';
    }
}
//function that gives user a brand new board when play again is clicked
function reset() {
    const random = Math.floor(Math.random() * words.length);
    randomWord = words[random]
    correctLetters = [];
    wrongLetters = [];
    updateDisplayCharacters();
    displayBoard();
    alertPopUp.classList.add('alert-hidden');
    //  change image back to 0
    updateImage();

    // reset all the buttons
    resetButtons();
}

function resetButtons() {
    // buttons
    for (let i = 0; i < buttons.length; i++) {
        const currentButton = buttons[i] // the current button on in the loop
        // change disabled to false
        currentButton.disabled = false

        // set the color to black
        currentButton.style.color = 'black';
    }
}



const alertPopUp = document.querySelector('.alert');
const alertMessage = document.querySelector('.alert-message');
//function for win or lose alerts
function checkWinOrLose() {
    if (displayCharacters.includes('_') === false) {
        alertPopUp.classList.toggle('alert-hidden');
        alertMessage.textContent = 'You won!';
    }
    if (wrongLetters.length >= 9) {
        alertPopUp.classList.toggle('alert-hidden');
        alertMessage.textContent = 'You lose!';
    }
}
//getting images from class 
const hangmanImage = document.querySelector('#hangman-image');

//hangman images get updated to show each time a wrong button clicked
function updateImage() {
    hangmanImage.src = `./images/hangman${wrongLetters.length}.png`;
}

//button click 
const buttons = document.querySelectorAll('.letter-btn');
//using for each to create the click function
buttons.forEach(btn => btn.addEventListener('click', handleButtonClick))
//giving a if statement for when buttons are clicked correct and wrong letters appear
function handleButtonClick() {

    const letter = this.textContent;

    if (randomWord.includes(letter)) {
        //correct guess
        correctLetters.push(letter);
        changeButtonColor(true, letter);

    } else {
        wrongLetters.push(letter);
        changeButtonColor(false, letter);
        //wrong guess
    }
    //calling all functions made 
    updateDisplayCharacters();
    displayBoard();
    updateImage();
    checkWinOrLose();




}
reset();