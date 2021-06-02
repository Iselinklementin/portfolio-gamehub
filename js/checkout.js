const form = document.querySelectorAll("form");
const button = document.querySelector(".purchase-btn");

const email = document.querySelector("#email");
const street = document.querySelector("#street");
const state = document.querySelector("#state");
const postal = document.querySelector("#post-code")
const fullName = document.querySelector(".fullname");
const nameInput = document.querySelector("#name");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const streetError = document.querySelector("#street-error");
const postalError = document.querySelector("#postal-error");
const stateError = document.querySelector("#state-error");
const buttonError = document.querySelector(".error-button");

const deliver = document.querySelectorAll(`input[name="delivery"]`)
const pay = document.querySelectorAll(".pay-button");
const deliveryError = document.querySelector(".delivery-error");
const payError = document.querySelector(".payment-error");
const req = document.querySelectorAll(".req");

/* sticky error */

stick = buttonError.getBoundingClientRect().top + window.pageYOffset; 

window.onscroll = function() { 
  
    if (window.pageYOffset > stick) { 
        buttonError.style.position = "fixed"; 
        buttonError.style.top = "0px"; 
    } else { 
        buttonError.style.position = "relative"; 
        buttonError.style.top = "initial"; 
    } 
} 

function validateEmail(email) {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const patternMatches = regEx.test(email);
    return patternMatches
};

function checkLength(value, len) {
    if (value.trim().length < len) {
        return true;
    } else {
        return false;
    }
};

function checkedDelivery() {

    for (let i = 0; i < deliver.length; i++) {
        if (deliver[0].checked || deliver[1].checked) {
            deliveryError.style.display = "none";
            return true;
        }  else {
            deliveryError.style.display = "flex";
            return false;
        }
    }
};

function checkedPay() {

for (let i = 0; i < pay.length; i++) {

    if (pay[0].checked || pay[1].checked || pay[2].checked ) {
        payError.style.display = "none";
        return true;
    } else {
        payError.style.display = "flex";
        return false;
    } 
}};

function validateForm() {

    if (checkLength(fullName.value, 4)) {
        nameInput.style.borderColor = "red";
        nameError.style.display = "block";
    } else {
        nameInput.style.borderColor = "rgb(42, 179, 42)";
        nameError.style.display = "none";
    }

    if (validateEmail(email.value)) {
        email.style.borderColor = "rgb(42, 179, 42)";
        emailError.style.display = "none";
    } else {
        email.style.borderColor = "red";
        emailError.style.display = "block";
    }

    if (checkLength(street.value, 5)) {
        street.style.borderColor = "red";
        streetError.style.display = "block";
    } else {
        street.style.borderColor = "rgb(42, 179, 42)";
        streetError.style.display = "none";
    }

    if (checkLength(state.value, 1)) {
        state.style.borderColor = "red";
        stateError.style.display = "block";
    } else {
        state.style.borderColor = "rgb(42, 179, 42)";
        stateError.style.display = "none";
    }

    if (checkLength(postal.value, 4)) {
        postal.style.borderColor = "red";
        postalError.style.display = "block";
    } else {
        postal.style.borderColor = "rgb(42, 179, 42)";
        postalError.style.display = "none";
    }

    checkedDelivery();
    checkedPay();
};

function required() {
    for (let j = 0; j < req.length; j++) {
        req[j].style.display = "none";
    }
} 

function submitForm(event) {
    event.preventDefault();

    let mailVal = validateEmail(email.value);
    let nameVal = checkLength(fullName.value, 4);
    let streetVal = checkLength(street.value, 5);
    let stateVal = checkLength(state.value, 1);
    let postVal = checkLength(postal.value, 4);

    if (mailVal && !nameVal && !streetVal && !stateVal && !postVal && checkedPay() && checkedDelivery()) {
     button.disabled = false;
     buttonError.style.display = "none";
     document.location.href = "checkout-success.html";
    } else {
     button.disabled = true;
     buttonError.style.display = "flex";
     required();
 }
 };

 button.addEventListener("click", submitForm);
 button.addEventListener("click", validateForm);

 window.addEventListener("click", removeCart)