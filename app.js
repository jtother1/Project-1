//created words for game
const word = ['JAZZ', 'PEANUTS', 'TRANSYLVANIA','AMPHIBIAN'];
//making them show up on random mode
const random = Math.floor(Math.random() * word.length);
const randomWord = word[random];
console.log(randomWord);
const space = [];
let mistakeCounter = 0;
let attemptCounter  = 0;
//making spaces for number of letters in each word
const spacesAppear = function() {
    for(let i = 0; i < randomWord.length; i++) { 
        let  wordboard = document.getElementById('wordboard');
        wordboard.innerHTML = wordboard.innerHTML + '<span id="space'+i+'">_</span>';
    }
}
spacesAppear();

const showImage = function(mistakeCount){
    document.getElementById('hangman-image').src = "images/hangman"+mistakeCount+".png";
}
const showLetter = function(letter){
    for(let i = 0; i < randomWord.length; i++) { 
        if(randomWord[i] === letter){
            document.getElementById("space"+i).innerHTML = letter;
        }
    }
}
//make buttons functional
/*document.getElementById('button-a').onclick = function(e){
    console.log('A');
}
document.getElementById('button-b').onclick = function(){
    console.log('B');
}*/
const buttons = document.getElementsByTagName('button');
console.log(buttons);
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",function(e){ 
        let currentLetter = e.target.innerText;
        if(randomWord[attemptCounter] !== currentLetter){
            mistakeCounter++;
            showImage(mistakeCounter);
            //console.log(mistakeCounter);
        }else{
            showLetter(currentLetter);
        }
        attemptCounter++;
    });
}
//buttons.addEventListener('click', handleButtonClick)






