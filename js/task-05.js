
const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    
    output.textContent = textInput.value;

	if (textInput.value === '') {
		output.textContent = 'Anonymous'
	}
});