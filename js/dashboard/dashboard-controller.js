import { usuarioService } from '../usuario/usuario-service.js';
import { dashboardService } from './dashboard-service.js';

const saldoDisponivel = document.querySelector('[data-saldo-disponivel]')
const limiteDisponivel = document.querySelector('[data-limite-disponivel]')
const nomeUsuario = document.querySelector('#nome-usuario')


dashboardService.obterSaldo().then(response => {
        saldoDisponivel.textContent = response.saldo;
        limiteDisponivel.textContent = response.limite;
    }
);

usuarioService.obterDados().then(response => {
    nomeUsuario.textContent = response.nome;
})