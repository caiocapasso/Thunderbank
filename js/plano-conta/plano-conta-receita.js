import { planoContaService } from '../plano-conta/plano-conta-service.js';

(() => {
    planoContaService.planosReceita().then(response => {
        const select = document.getElementById('plano');

        response.forEach(p => {
            let option = document.createElement('option');
            option.text = p.descricao;
            option.value = p.tipo;
            select.appendChild(option);
        })
    })
})()