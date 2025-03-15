const password1 = document.querySelector('#password');
const password2 = document.querySelector('#confirm_password');
const errorMsg = document.querySelector('.error_message');

password2.addEventListener('input', doesMatch);

function doesMatch() {
    if (password2.value == password1.value) {
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "*Passwords do not match";
    }
}