const rangeInput = document.querySelector('#font-size-control')
const currentLength = rangeInput.value;

const text = document.querySelector('#text')
let outputText = text.textContent;
console.log(outputText)

rangeInput.addEventListener('input', (event) =>{
    event.preventDefault();
    //console.log(rangeInput.value)
    const newText = outputText.slice(0,currentLength+1);
    console.log(newText)




   // text.textContent.length = rangeInput.value;



})


