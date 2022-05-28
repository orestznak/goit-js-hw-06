const loginForm = document.querySelector('form.login-form');
console.log(loginForm);

// const emailForm = loginForm.querySelector('.email')
// console.log(emailForm);

// const passwordForm = loginForm.querySelector('.password');
// console.log(passwordForm);

// const buttonSubmit = loginForm.querySelector('button')
// console.log(buttonSubmit);

const user = {};

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (loginForm.email.value === "" || loginForm.password.value === "") {
        return alert("Please fill in all the fields!");
    }

    user.email = loginForm.email.value;
    user.password = loginForm.password.value;

    console.log(`User\nemail : ${user.email}\nuser password is : ${user.password}`);
    loginForm.reset();
});

