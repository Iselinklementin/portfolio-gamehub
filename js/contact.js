const form = document.querySelector(".contact-form");
const fullName = document.querySelector(".fullName");
const subject = document.querySelector(".subject");
const email = document.querySelector(".email");
const address = document.querySelector(".address");
const button = document.querySelector(".button");
const message = document.querySelector(".message");
const para = document.querySelector(".info");

const buttonError = document.querySelector(".error-button");
const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");

function checkLength(value, len) {
    if (value.trim().length > len) {
    return true;
} else {
    return false;
}
};

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

function required(input) {
   if (input.trim().length === 0) {
       return true;
   } else {
       return false;
   }
}

function checkButton() {

    if (required(fullName.value, 2)) {
        nameError.style.display = "block";
    } else {
        nameError.style.display = "none";
    }
    
    if (checkLength(subject.value, 9)) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if (checkLength(address.value, 19)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block"
    }

    if  (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }
};

function submitForm(event) {
    event.preventDefault();
    if (!required(fullName.value, 2) && checkLength(subject.value, 9) && checkLength(address.value, 19) && validateEmail(email.value)) {
    message.style.display = "block";
    message.innerHTML += `<p>Your information has been sent<p>`;
    button.disabled = false;
    buttonError.style.display = "none";
    form.reset();
} else {
    button.disabled = true;
    buttonError.style.display = "block";
}};

button.addEventListener("click", checkButton);
button.addEventListener("click", submitForm);
window.addEventListener("click", removeCart)