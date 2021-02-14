import { formatarDinheiro, formatarData } from "../../js/util.js";
import { lancamentoService } from "../lancamento/lancamento-service.js";
import { usuarioService } from "../usuario/usuario-service.js";
import { dashboardService } from "./dashboard-service.js";

const saldoDisponivel = document.querySelector("[data-saldo-disponivel]");
const faturaAtual = document.querySelector("[data-fatura-atual]");
const limiteDisponivel = document.querySelector("[data-limite-disponivel]");
const nomeUsuario = document.querySelector("#nome-usuario");
const ultimosLancamentos = document.querySelector("#ultimos-lancamentos");

dashboardService.obterSaldo().then((response) => {
  saldoDisponivel.textContent = formatarDinheiro(response.saldo);
  faturaAtual.textContent = formatarDinheiro(response.fatura);
  limiteDisponivel.textContent = formatarDinheiro(response.limite);
});

usuarioService.obterDados().then((response) => {
  if (response && response.nome) {
    nomeUsuario.textContent = response.nome;
  }
});

lancamentoService.obterLancamentos().then((response) => {
  console.log('coco')
  //if (response) {

    const mock = [{
      contaDestinoId: 0,
      dataHora: "2021-02-14T17:37:01.328Z",
      descricao: "minha descricao",
      lancamentoTipo: "DESPESA",
      valor: 400
    },
    {
      contaDestinoId: 0,
      dataHora: "2019-03-31T17:37:01.328Z",
      descricao: "passagem para acapulco",
      lancamentoTipo: "VIAGEM",
      valor: 2000
    }
  ];

    mock.slice(0,5).forEach((l) => {
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
  //}
});