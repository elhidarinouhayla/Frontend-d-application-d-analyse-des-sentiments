document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const ErrorElement = document.getElementById('error')

    form.addEventListener('submit', e =>{
        e.preventDefault();
        let message = []
        if (username.value === '' ||  username.value == null) {
            message.push('username is required')
        }
        
        if (password.value <= 6) {
            message.push('Password must be longer than 4 characters')
        }
        if (password.value > 20) {
            message.push('Password must be less than 20 characters')
        }

        if (message.length > 0) {
            e.preventDefault()
            ErrorElement.innerText = message.join(', ')
        }
        if (username.value === "admin" && password.value === "abcd") {
            window.location.href = "home.html";
        }
    });
});

