//created words for game
const word = ['JAZZ', 'PEANUTS', 'TRANSYLVANIA','AMPHIBIAN'];
//making them show up on random mode
const random = Math.floor(Math.random() * word.length);
const randomWord = word[random];
const space = [];
//making spaces for number of letters in each word
const spacesAppear = function() {
    for(let i = 0; i < randomWord.length; i++) {
       space.push('_'); 
    }
    return space;
}
console.log(spacesAppear());





