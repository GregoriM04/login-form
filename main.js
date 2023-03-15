// Show and Hide the password functionality

const showHidePass = document.querySelector("#show-hide-pass");
const password = document.querySelector("#password");

showHidePass.addEventListener("click", function() {

    // changing the icon 
    const name = showHidePass.getAttribute("name") === "eye-outline" ? "eye-off-outline" : "eye-outline";
    showHidePass.setAttribute("name", name)

    // charging the state of the input field
    const type = password.getAttribute("type") === "password" ? "text" : "password";
        password.setAttribute("type", type);
});

// Spinner 
window.addEventListener("load", function () {

    // add the hidden class once the page loads
    const loader = document.querySelector(".loader");
    loader.classList.add("loader-hidden");

    // remove the tag once the page loads
    loader.addEventListener("transitionend", function () {
       document.body.removeChild("loader") 
    });
});