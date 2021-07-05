const buttonClick = document.getElementById('buttonClick');
const buttonWheel = document.getElementById('buttonWheel');

const changeColor = (event) => {
  let randNum = Math.floor(Math.random() * 256);
  let color = `rgb(${randNum}, ${randNum}, ${randNum})`
  event.target.style.backgroundColor = color;
}

buttonClick.addEventListener('click', changeColor);
buttonWheel.addEventListener('wheel', changeColor);