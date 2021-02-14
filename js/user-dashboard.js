import { formatarDinheiro, formatarData } from "../js/util.js";
import { lancamentoService } from "./lancamento/lancamento-service.js";
import { dashboardService } from "./dashboard/dashboard-service.js";
import { tokenService } from "./token/token-service.js";
import { token } from "./util.js";


const nomeUsuario = document.querySelector("#nome-usuario");
nomeUsuario.textContent = tokenService.parseJwt(token).nome;

const saldoDisponivel = document.querySelector("[data-saldo-disponivel]");
const faturaAtual = document.querySelector("[data-fatura-atual]");
const limiteDisponivel = document.querySelector("[data-limite-disponivel]");

const ultimosLancamentos = document.querySelector("#ultimos-lancamentos");

dashboardService.obterSaldo().then((response) => {
  saldoDisponivel.textContent = formatarDinheiro(response.saldo);
  faturaAtual.textContent = formatarDinheiro(response.fatura);
  limiteDisponivel.textContent = formatarDinheiro(response.limite);
});

lancamentoService.obterLancamentos().then((response) => {
  //   response = [{
  //     contaDestinoId: 0,
  //     dataHora: "2021-02-14T17:37:01.328Z",
  //     descricao: "minha descricao",
  //     lancamentoTipo: "DESPESA",
  //     valor: 400
  //   },
  //   {
  //     contaDestinoId: 0,
  //     dataHora: "2019-03-31T17:37:01.328Z",
  //     descricao: "passagem para acapulco",
  //     lancamentoTipo: "VIAGEM",
  //     valor: 2000
  //   }
  // ];

  if (response) {
    response.slice(0,5).forEach((l) => {
      console.log('l = ', l)
      let lancamento = document.createElement("li");
      lancamento.classList.add('list-group-item')
      let card = document.createElement("div");
      //card.classList.add("card-body");

      let cardValue = document.createElement("h4");
      cardValue.textContent = formatarDinheiro(l.valor);

      let cardType = document.createElement("h6");
      cardType.textContent = `${l.lancamentoTipo} - ${formatarData(l.dataHora)}`;

      let cardDescription = document.createElement("h6");
      cardDescription.textContent = l.descricao

      card.appendChild(cardValue);
      card.appendChild(cardType);
      card.appendChild(cardDescription);

      lancamento.appendChild(card);
      ultimosLancamentos.appendChild(lancamento);
    });
  }
});