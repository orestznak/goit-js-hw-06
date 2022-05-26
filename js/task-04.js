let counterValue = 1;

const counter = document.querySelector('#counter');
const buttons = counter.querySelectorAll('button');
const numberValue = counter.querySelector('#value');

console.log(numberValue);

const buttonInc = buttons[1];
const buttonDec = buttons[0];

counterValue = parseInt(numberValue.textContent);
console.log(parseInt(numberValue.textContent));

//Button increment
buttonInc.addEventListener('click', () => {
    counterValue += 1;
    numberValue.textContent = counterValue;
    console.log(counterValue);
});

//Button decrement
buttonDec.addEventListener('click', () => {
    counterValue -= 1;
    numberValue.textContent = counterValue;
    console.log(counterValue);
});



