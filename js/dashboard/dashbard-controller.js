import { dashboardService } from './dashboard-service.js'

const saldoDisponivel = document.querySelector('[data-saldo-disponivel]')
const limiteDisponivel = document.querySelector('[data-limite-disponivel]')


dashboardService.obterSaldo().then(response => {

        saldoDisponivel.textContent = response.saldo;
        limiteDisponivel.textContent = response.limite;
    }

);