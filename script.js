// variables
const keys = ['key-c', 'key-csharp', 'key-d', 'key-dsharp', 'key-e', 'key-f', 'key-fsharp', 'key-g', 'key-gsharp', 'key-a', 'key-asharp', 'key-b', 'key-cc']

const keyList = [];

const lyricOne = document.getElementById('lyric-one');
const noteOne = document.getElementById('note-one');
const lyricTwo = document.getElementById('lyric-two');
const noteTwo = document.getElementById('note-two');
const lyricThree = document.getElementById('lyric-three');
const noteThree = document.getElementById('note-three');
const lyricFour = document.getElementById('lyric-four');
const noteFour = document.getElementById('note-four');
const lyricFive = document.getElementById('lyric-five');
const noteFive = document.getElementById('note-five');
const lyricSix = document.getElementById('lyric-six');
const noteSix = document.getElementById('note-six');
const lyricSeven = document.getElementById('lyric-seven')
const noteSeven = document.getElementById('note-seven');

const buttonOne = document.getElementById('button-one');
const buttonTwo = document.getElementById('button-two');
const buttonThree = document.getElementById('button-three');
const buttonFour = document.getElementById('button-four');
// const buttonFive = document.getElementById('button-five');


// LIST - TARGET ELEMENTS

// each piano key
keys.forEach(key => {
  keyList.push(document.getElementById(key));
})


// HIDDEN
buttonTwo.hidden = true;
buttonThree.hidden = true;
buttonFour.hidden = true;
// buttonFive.hidden = true;
lyricSeven.hidden = true;
noteSeven.hidden = true;

// DOM MANIPULATION
// WHAT
// piano key background to tomato
const keyDown = event => {
  event.target.style.backgroundColor = 'tomato';
}
// piano key background to normal
const keyUp = event => {
  event.target.style.backgroundColor = '';
}

// WHEN
// pinao key up/down
const keyPlay = play => {
  play.addEventListener('mousedown', keyDown);
  play.addEventListener('mouseup', keyUp);
}
// buttonOne click
buttonOne.addEventListener('click', () => {
  buttonOne.hidden = true;
  buttonTwo.hidden = false;
  noteFive.innerHTML = 'D';
  noteSix.innerHTML = 'C';
})
//buttonTwo click
buttonTwo.addEventListener('click', () => {
  buttonTwo.hidden = true;
  buttonThree.hidden = false;
  noteThree.innerHTML = 'G';
  noteFour.innerHTML = 'E';
  noteFive.innerHTML = 'C';
  noteSix.innerHTML = 'B';
  noteSeven.hidden = false;
  lyricFive.innerHTML = 'DEAR';
  lyricSix.innerHTML = 'FRI-';
  lyricSeven.hidden = false;
})
// buttonThree click
buttonThree.addEventListener('click', () => {
  buttonThree.hidden = true;
  buttonFour.hidden = false;
  noteSeven.hidden = true;
  lyricSeven.hidden = true;
  noteOne.innerHTML = 'F';
  noteTwo.innerHTML = 'F';
  noteThree.innerHTML = 'E';
  noteFour.innerHTML = 'C';
  noteFive.innerHTML = 'D';
  noteSix.innerHTML = 'C';
  lyricOne.innerHTML = 'HAP-';
  lyricTwo.innerHTML = 'PY';
  lyricThree.innerHTML = 'BIRTH';
  lyricFour.innerHTML = 'DAY';
  lyricFive.innerHTML = 'TO';
  lyricSix.innerHTML = 'YOU!';
})


// WHERE
keyList.forEach(keyPlay);
