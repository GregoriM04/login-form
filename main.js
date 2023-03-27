// Show and Hide the password functionality (Login section)

const showHidePass = document.querySelector("#show-hide-pass");
const password = document.querySelector("#password");

showHidePass.addEventListener("click", () => {

    // changing the icon 
    const name = showHidePass.getAttribute("name") === "eye-outline" ? "eye-off-outline" : "eye-outline";
    showHidePass.setAttribute("name", name)

    // charging the state of the input field
    const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
});

// Show and Hide the password functionality (Signup section)



// Spinner 
window.addEventListener("load", () => {

    // add the hidden class once the page loads
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    // remove the tag once the page loads
    loader.addEventListener("transitionend", () => {
       document.body.removeChild("loader") 
    });
});

// clear inputs when section is not focus
const allInputs = document.querySelectorAll(".input-val");


// Password-reset movement settings 
const login = document.querySelector(".login-form");
const reset = document.querySelector(".reset-form");
const forgotPassword = login.querySelector(".pass-forgot")
const backButton = reset.querySelector(".back")

forgotPassword.addEventListener('click', () => {
    login.classList.add('not-active-sec');
    reset.classList.add('active-sec');

    // clear inputs
    allInputs.forEach(input => input.value = '');
})

backButton.addEventListener('click', () => {
    login.classList.remove('not-active-sec');
    reset.classList.remove('active-sec');

    // clear inputs
    allInputs.forEach(input => input.value = '');
})

// Signup section settings
const signupBtn = document.querySelector(".signup");
const signup = document.querySelector(".signup-form");
const hideBtn = document.querySelector(".hide");

signupBtn.addEventListener('click', () => {
    login.classList.add('not-active-signup');
    signup.classList.add('active-signup');

    // clear inputs
    allInputs.forEach(input => input.value = '');
});

hideBtn.addEventListener('click', () => {
    login.classList.remove('not-active-signup');
    signup.classList.remove('active-signup');

    // clear inputs
    allInputs.forEach(input => input.value = '');
});


