document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form')
    const username = document.getElementById('username')
    const password = document.getElementById('password')
    const ErrorElement = document.getElementById('error')

    form.addEventListener('submit', async (e) =>{
        e.preventDefault();
        let message = []
        if (username.value === '' ||  username.value == null) {
            message.push('username is required')
        }
        
        if (password.value <= 4) {
            message.push('Password must be longer than 4 characters')
        }
        if (password.value > 20) {
            message.push('Password must be less than 20 characters')
        }

        if (message.length > 0) {
            e.preventDefault()
            ErrorElement.innerText = message.join(', ')
            return
        }

       try {
            const response = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value
                })
            });

            if (!response.ok) {
                ErrorElement.innerText = "Username ou password incorrect";
                return;
            }

            const data = await response.json();


            localStorage.setItem("token", data.token);


            window.location.href = "home.html";

        } catch (error) {
            ErrorElement.innerText = "Erreur de connexion au serveur";
        }
    });
});

