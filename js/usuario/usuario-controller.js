import { usuarioService } from './usuario-service.js';

const urlBase = 'https://bankline-accenture.herokuapp.com';


var loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = e.target.querySelector('#emailInput').value;
    const senha = e.target.querySelector('#passInput').value;
    usuarioService.logar(email, senha).then(resposta => {
        localStorage.setItem('token', resposta.token);
        window.location.href = 'user-dashboard.html';
    }).catch(error => {
        console.log(error);
    })
})



(() => {
    const registerForm = document.getElementById('register');

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e.FormData);
        console.log(e);
        const usuario = new FormData(e.FormData);
        console.log(JSON.stringify(usuario));
    })
})();