let counterValue = 1;

const counter = document.querySelector('#counter');
const numberValue = counter.querySelector('#value');

console.log(numberValue);

const buttonInc = counter.querySelector('[data-action = "increment"]');
const buttonDec = counter.querySelector('[data-action = "decrement"]');

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



