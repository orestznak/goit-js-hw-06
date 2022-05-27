const textInput = document.querySelector('#validation-input');
console.log(textInput);
const maxLengthInput = textInput.getAttribute('data-length');
console.log(maxLengthInput);

textInput.addEventListener("blur", function (){
    //event.preventDefault();
  
    if(this.value.length <= maxLengthInput){
        console.log(this.value.length)
        this.style.borderColor = '#4caf50';
            
    } else {
        this.style.borderColor = '#f44336';
        console.log(this.value.length)
    }

  });
  
//   textInput.addEventListener("blur", () => {
//     textInput.value = "";
//   });