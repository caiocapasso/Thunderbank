import { tokenService } from '../token/token-service.js'
import { lancamentoService } from '../lancamento/lancamento-service.js'
import { baseUrl, token } from '../util.js';

(() => {
    const form = document.querySelector('#depositar')

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let lancamento = new FormData(form);
        lancamentoService.salvar(lancamento).then(window.location.href = 'user-dashboard.html').catch(error => {
            console.log(error)
        })
    })
})()