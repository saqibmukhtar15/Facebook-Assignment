const loggedInUser = JSON.parse(localStorage.getItem('fbLoggedInUser'));

if (!loggedInUser) {
    window.location.href = '../index.html';
}

function loadUserData() {
    if (!loggedInUser) return;

    const fullName = `${loggedInUser.firstName} ${loggedInUser.lastName}`;

    document.getElementById('userName').textContent = loggedInUser.firstName;
    document.getElementById('fullName').textContent = fullName;
    document.getElementById('fullNameDetail').textContent = fullName;
    document.getElementById('emailOrMobile').textContent = loggedInUser.emailOrMobile;
    document.getElementById('dob').textContent = loggedInUser.dob;
    document.getElementById('gender').textContent = loggedInUser.genderLabel;

    const initials = loggedInUser.firstName.charAt(0).toUpperCase() + loggedInUser.lastName.charAt(0).toUpperCase();
    document.getElementById('profile-img').textContent = initials;
}

function logout() {
    localStorage.removeItem('fbLoggedInUser');
    window.location.href = '../index.html';
}

document.getElementById('logoutBtn').addEventListener('click', logout);

loadUserData();
