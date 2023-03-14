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
})