var continueButton = document.querySelector('#continue');
// var loginInput = document.querySelector('#login').value
// var passwordInput = document.querySelector('#password').value

continueButton.addEventListener('click', () => {
    var loginInput = document.getElementById('#loginField')[0].value;
    var passwordInput = document.getElementById('#passwordField')[0].value;

    console.log('Someone clicked on button\n', loginInput, passwordInput);
})