const rangeInput = document.querySelector('#font-size-control')


const text = document.querySelector('#text')
let outputText = text.textContent;
console.log(outputText)

rangeInput.addEventListener('input', () =>{
    const currentInputValue = rangeInput.value;
       text.style.fontSize = currentInputValue +'px';

})


