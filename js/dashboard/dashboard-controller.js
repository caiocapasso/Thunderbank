import { monetizar } from '../../js/util.js';
import { usuarioService } from '../usuario/usuario-service.js';
import { dashboardService } from './dashboard-service.js';

const saldoDisponivel = document.querySelector('[data-saldo-disponivel]')
const faturaAtual = document.querySelector('[data-fatura-atual]')
const limiteDisponivel = document.querySelector('[data-limite-disponivel]')
const nomeUsuario = document.querySelector('#nome-usuario')


dashboardService.obterSaldo().then(response => {
        console.log('response', response)
        saldoDisponivel.textContent = monetizar(response.saldo);
        faturaAtual.textContent = monetizar(response.fatura);
        limiteDisponivel.textContent = monetizar(response.limite);
    }
);

usuarioService.obterDados().then(response => {
    nomeUsuario.textContent = response.nome;
})


