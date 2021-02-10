import { usuarioService } from './usuario/usuario-service.js';

const urlBase = 'https://bankline-accenture.herokuapp.com';

(function() {

    var loginForm = document.querySelector('#login-form');

    //adicionar os names corretos aos inputs conforme o back quer
    loginForm.addEventListener('submit', function(e) {
        console.log('login form submit');
        e.preventDefault();
        const email = e.target.querySelector('#emailInput').value;
        const senha = e.target.querySelector('#passInput').value;
        usuarioService.login(email, senha).then(resposta => {
            localStorage.setItem('token', resposta.token);
            window.location.href = 'user-dashboard.html';
        }).catch(error => {
            console.log(error);
        })
    })


})();

async function loginUser(query) {
    console.log("loginUser()");
    const joke = await loginUserRequest(query);

    jokeIcon.src = joke.result[0].icon_url;
    jokeText.innerText = joke.result[0].value;
    jokeContainer.setAttribute('style', 'opacity: 1.0');
}



async function getRandomJokeFromQuery(query) {
    console.log("getRandomJokeFromQuery => query = ", query);
    try {
        const response = await fetch(`${BASE_URL}search?query=${query}`, {
            method: METHOD,
            mode: MODE,
            headers: {
                'Content-Type': CONTENT_TYPE
            }
        })

        return await response.json();
    } catch (error) {
        console.log(error);
    } finally {

    }
}