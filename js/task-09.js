function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');

const btnChangeColor = body.querySelector('.change-color');


const nameColor = body.querySelector('.color');

btnChangeColor.addEventListener('click', (event) =>{
  event.preventDefault();

  const changeColor = getRandomHexColor();
  
  body.style.background = changeColor;
  nameColor.textContent = changeColor;

});
