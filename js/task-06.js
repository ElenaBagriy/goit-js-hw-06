
const textInput = document.querySelector("#validation-input");
const inputRequiredLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", () => {
    
    if (textInput.value.length === inputRequiredLength) {

        textInput.classList.toggle("valid")
        
        if (textInput.classList.contains('invalid')) {
			textInput.classList.remove('invalid')
        }
        return;
    }
    
    if (textInput.classList.contains('valid')) {
		textInput.classList.remove('valid')
	}
		textInput.classList.add('invalid')
});