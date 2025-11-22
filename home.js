document.addEventListener('DOMContentLoaded', () => {

    const comment = document.getElementById('comment');
    const result = document.getElementById('result');
    const btn = document.getElementById('predictBtn');

    const token = localStorage.getItem("token"); 

    // if (!token) {
    //     result.innerText = "Erreur: Vous devez etre connecte. Token non trouve"
    //     btn.disabled = true;
    //     return;
    // }

    btn.addEventListener('click', async () => {

        const text = comment.value;
        if (!text) {
            result.innerText = "veuillez ecrire un commentaire";
            return;
        }

        try {
            //  Envoi au backend
            const response = await fetch("http://127.0.0.1:8000/docs#/default/predict_predict_post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                },
                body: JSON.stringify({text: text})
            });

            if (!response.ok) {
                result.innerText = "Erreur backend : " + response.status;
            }

            const data = await response.json();

            //afficher la reponse
            result.innerText = "Sentiment predit : " + data.sentiment;

        } catch (error) {
            result.innerText = "Erreur : impossible de contacter le backend";
        }
    });
})