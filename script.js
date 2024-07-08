document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        validateInputs();
    });

    function validateInputs() {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        if (usernameValue === '') {
            setErrorFor(username, 'Username cannot be blank');
        } else {
            setSuccessFor(username);
        }

        if (emailValue === '') {
            setErrorFor(email, 'Email cannot be blank');
        } else if (!isValidEmail(emailValue)) {
            setErrorFor(email, 'Not a valid email');
        } else {
            setSuccessFor(email);
        }

        if (passwordValue === '') {
            setErrorFor(password, 'Password cannot be blank');
        } else {
            setSuccessFor(password);
        }

        if (confirmPasswordValue === '') {
            setErrorFor(confirmPassword, 'Confirm Password cannot be blank');
        } else if (passwordValue !== confirmPasswordValue) {
            setErrorFor(confirmPassword, 'Passwords do not match');
        } else {
            setSuccessFor(confirmPassword);
        }
    }

    function setErrorFor(input, message) {
        const formGroup = input.parentElement;
        const small = formGroup.querySelector('small');
        small.innerText = message;
        small.style.display = 'block';
        input.style.borderColor = 'red';
    }

    function setSuccessFor(input) {
        const formGroup = input.parentElement;
        const small = formGroup.querySelector('small');
        small.style.display = 'none';
        input.style.borderColor = 'green';
    }

    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()\[\]\.,;:\s@"]+\.)+[^<>()\[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
