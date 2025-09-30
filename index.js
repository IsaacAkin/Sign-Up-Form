const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confirm_password');
const errorMsg = document.querySelector('.error_message');

password2.addEventListener('input', (e) => {
    doesMatch();
    customValidity(e);
});

function doesMatch() {
    if (password2.value == password1.value) {
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "*Passwords do not match";
    }
}

function customValidity(e) {
    if (password2 != password1) {
        password2.setCustomValidity("The password doesn't match");
    } else {
        password2.setCustomValidity('');
    }
}