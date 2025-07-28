var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitError = document.getElementById('submit-error');

function validateName() {
    var name = document.getElementById('Contact-name').value.trim();

    if (name.length === 0) {
        nameError.innerHTML = 'Name is required';
        return false;
    }

    if (!name.match(/^[A-Za-z]+ [A-Za-z]+$/)) {
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<img src="check.png" width="16" height="16">';

    return true;
}

function validatePhone() {
    var phone = document.getElementById('Contact-phone').value;

    if (phone.length === 0) {
        phoneError.innerHTML = 'Phone number is required';
        return false;
    }

    if (!phone.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = 'Enter 10 digit phone no';
        return false;
    }

    phoneError.innerHTML = '<img src="check.png" width="16" height="16">';
    return true;
}

function validateEmail() {
    var email = document.getElementById('Contact-email').value;

    if (email.length === 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailPattern)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }

    emailError.innerHTML = '<img src="check.png" width="16" height="16">';
    return true;
}

function validateMessage() {
    var message = document.getElementById('Contact-message').value;
    var required = 30;
    var left = required - message.length;

    if (left > 0) {
        messageError.innerHTML = left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<img src="check.png" width="16" height="16">';
    return true;
}

function validateForm() {
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function () { submitError.style.display = 'none'; }, 3000);
        return false;
    }
    alert("Form submitted");
    return true;
}