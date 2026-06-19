const signupForm = document.querySelector('form');

const submitHandler = (event) => {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const contactInfo = document.getElementById('contactInfo').value.trim();
    const password = document.getElementById('password').value;

    const day = document.getElementById('birthDay').value;
    const month = document.getElementById('birthMonth').value;
    const year = document.getElementById('birthYear').value;
    const gender = document.getElementById('gender').value;

    if (!firstName || !lastName || !contactInfo || !password) {
        alert("Error: Form cannot be empty. Please fill all fields.");
        return;
    }

    if (day === "Day" || month === "Month" || year === "Year" || gender === "Select your gender") {
        alert("Error: Please select your Birthday and Gender.");
        return;
    }

    if (password.length < 8) {
        alert("Error: Password must be at least 8 characters long.");
        return;
    }

    const users = JSON.parse(localStorage.getItem('fbUsers')) || [];

    const alreadyExists = users.find(u => u.emailOrMobile === contactInfo);
    if (alreadyExists) {
        alert("Error: This email or mobile number is already registered.");
        return;
    }

    const genderLabels = { "1": "Female", "2": "Male", "3": "Custom" };

    const userObj = {
        firstName: firstName,
        lastName: lastName,
        emailOrMobile: contactInfo,
        password: password,
        dob: `${day}/${month}/${year}`,
        gender: gender,
        genderLabel: genderLabels[gender] || "Not specified"
    };

    users.push(userObj);
    localStorage.setItem('fbUsers', JSON.stringify(users));

    alert("Account created successfully! Please log in.");
    window.location.href = '../index.html';
};

signupForm.addEventListener('submit', submitHandler);
