const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    
    const elements = {
        email: event.currentTarget.email.value,
        password: event.currentTarget.password.value,
    }
    
    const { email, password } = elements;

    if (email === "" || password === "") {
        return alert("All fields must be filled. Please fill in all the fields!");
    }
    
    console.log(elements);
    event.currentTarget.reset();
}