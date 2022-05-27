const textInput = document.querySelector('#validation-input');
console.log(textInput);
const maxLengthInput = textInput.getAttribute('data-length');
console.log(maxLengthInput);

textInput.addEventListener("blur", funct => {
    //event.preventDefault();
  
    if(textInput.value.length < maxLengthInput){
        textInput.classList.remove('invalid');
        textInput.classList.add('valid');
    } else {
        textInput.classList.remove('valid');
        textInput.classList.add('invalid');
     
    }
});
  
