const loginBtn = document.getElementById('loginBtn');
const loginError = document.getElementById('loginError');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();

    const contact = document.getElementById('loginContact').value.trim();
    const password = document.getElementById('loginPassword').value;

    loginError.style.display = 'none';
    loginError.textContent = '';

    if (!contact || !password) {
        loginError.textContent = 'Please enter your email/mobile and password.';
        loginError.style.display = 'block';
        return;
    }

    const users = JSON.parse(localStorage.getItem('fbUsers')) || [];

    const foundUser = users.find(
        user => user.emailOrMobile === contact && user.password === password
    );

    if (!foundUser) {
        loginError.textContent = 'Incorrect email/mobile or password. Please try again.';
        loginError.style.display = 'block';
        return;
    }

    
    localStorage.setItem('fbLoggedInUser', JSON.stringify(foundUser));

   
    window.location.href = 'Pages/dashboard.html';
});
