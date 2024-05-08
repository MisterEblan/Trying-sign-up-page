var continueButton = document.querySelector('#continue');


continueButton.addEventListener('click', () => {
    var loginInput = document.getElementById('loginField').value;
    var passwordInput = document.getElementById('passwordField').value;

    if (loginInput === '' || passwordInput === '') return alert('Fulfill all fields!')

    let newUser = createNewUser(loginInput, passwordInput);

    console.log(newUser);
});


function createNewUser(login, password) {
    return {
        login: login,
        password: password,
    }
}
