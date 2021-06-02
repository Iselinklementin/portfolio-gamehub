const form = document.querySelector("form");
const button = document.querySelector("#submitBtn");

const email = document.querySelector("#email");
const password = document.querySelector("#password");

const pswError = document.querySelector("#password-error");
const emailError = document.querySelector("#email-error");
const buttonError = document.querySelector(".error-button");
const inputs = document.querySelectorAll("input");


 function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

const isPasswordSecure = (password) => {
    const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.{8,})");
    return re.test(password);
};

function validateForm(event) {
    event.preventDefault();

    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";

        if (buttonError.style.display = "block") {
            buttonError.style.display = "none"
        } 

    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
    };

    if (isPasswordSecure(password.value)) {
        password.style.borderColor = "rgb(42, 179, 42)";
        pswError.style.display = "none";

        if (buttonError.style.display = "block") {
            buttonError.style.display = "none"
        }
    } else {
        password.style.borderColor = "red";
        pswError.style.display = "block";
    };

};

function submitForm(event) {
    event.preventDefault();

    let mail = validateEmail(email.value);
    let psw = isPasswordSecure(password.value);
 
    if (mail && psw) {
     button.disabled = false;
     buttonError.style.display = "none";
     document.location.href = "account.html";
    } else {
     button.disabled = true;
     buttonError.style.display = "block";
 }
     form.reset();
 };

 button.addEventListener("click", submitForm);
 button.addEventListener("click", validateForm);
 window.addEventListener("click", removeCart)