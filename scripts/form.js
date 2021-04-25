"use strict";
// global variables
var formValidity = true;


// make sure that the name box is not empty
function validateName() {
    var errorDiv = document.querySelector(".errorNameMessage");
    var yourName = document.getElementById("name");
    var invColor = "rgb(255,233,233)";

    try {
        if (yourName !== "") {
            if (/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/.test(yourName.value) === false) {
                throw "Please enter only letters";
            }
        } else {
            throw "Please enter your name";
        }
        yourName.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        yourName.style.background = invColor;
        formValidity = false;
    }
}

// make sure that the email box is not empty
function validateEmail() {
    var errorDiv = document.querySelector(".errorEmailMessage");
    var email = document.getElementById("email");
    var validity = true;
    var invColor = "rgb(255,233,233)";
    try {
        if (email.value !== "") {
            if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value))) {
                // email is not in a valid format
                validity = false;
                throw "Please enter a valid email address";
            }
        } else {
            throw "Please enter your email address";
        }
        email.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        email.style.background = invColor;
        formValidity = false;
    }
}

// make sure text box is not empty
function validateTextbox() {
    var errorDiv = document.querySelector(".errorTextboxMessage");
    var textbox = document.getElementById("message");
    var invColor = "rgb(255,233,233)";
    try {
        if (textbox.value == "") {
            throw "Please enter your message";
        }
        textbox.style.background = "";
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        textbox.style.background = invColor;
        formValidity = false;
    }
}

// make sure all form fields are completed
function validateFormInfo() {
    var errorDiv = document.querySelector(".errorMessage");
    var yourName = document.getElementById("name");
    var email = document.getElementById("email");
    var textbox = document.getElementById("message");
    var invColor = "rgb(255,233,233)";
    try {
        yourName.style.background = "";
        email.style.background = "";
        textbox.style.background = "";
        errorDiv.style.display = "none";
        if (yourName.value === "" || email.value === "" || textbox.value == "") {
            throw "Please fill out all form fields.";
        }
    } catch (msg) {
        errorDiv.innerHTML = msg;
        errorDiv.style.display = "block";
        if (yourName.value === "") {
            yourName.style.background = invColor;
        }
        if (email.value === "") {
            email.style.background = invColor;
        }
        if (textbox.value === "") {
            textbox.style.background = invColor;
        }
        formValidity = false;
    }
}


// validate form before on submit
function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault(); // prevent form from submitting
    } else {
        evt.returnValue = false; // prevent form from submitting in IE8
    }
    formValidity = true; //reset value for revalidation

    validateEmail();
    validateName();
    validateTextbox();
    validateFormInfo();



    if (formValidity === true) {
        document.getElementById("errorText").innerHTML = "";
        document.getElementById("errorText").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorText").innerHTML = "Please fix the indicated errors and then resubmit your order.";
        document.getElementById("errorText").style.display = "block";
        scroll(0, 0);
    }
}

function createEventListeners() {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var textbox = document.getElementById("message");
    if (name.addEventListener) {
        name.addEventListener("change", validateName, false);
        email.addEventListener("change", validateEmail, false);
        textbox.addEventListener("change", validateTextbox, false);
    } else if (name.attachEvent) {
        name.attachEvent("onchange", validateName);
        email.attachEvent("onchange", validateEmail);
        textbox.attachEvent("onchange", validateTextbox);
    }

    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

/* run initial form configuration function */
function setUpPage() {
    createEventListeners();
}

/* run setup function when page finishes loading */
if (window.addEventListener) {
    window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", setUpPage);
}