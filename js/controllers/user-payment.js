import { lancamentoService } from "../services/lancamento-service.js";
import { planoContaService } from "../services/plano-conta-service.js";

//FIXME: adaptar para usar no payment
// document
//   .querySelector("#deposito-form")
//   ?.addEventListener("submit", (event) => {
//     console.log("depositar form");
//     event.preventDefault();

//     const valor = document.querySelector("#inputValor").value;
//     const descricao = document.querySelector("#inputDescricao").value;
//     const planoDeConta = document.querySelector("#inputPlanoDeConta").value;

//     lancamentoService
//       .salvar({
//         valor: valor,
//         descricao: descricao,
//         planoDeConta: planoDeConta,
//       })
//       .then((response) => {
//         if (response) {
//           alert("deposito realizado");
//           window.location.replace("./user-dashboard.html");
//         } else {
//           alert("houve um problema no deposito. Tente novamente mais tarde");
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   });



const getPlanos = planoContaService.getPlanosReceita().then((response) => {
  const select = document.querySelector("#inputPlanoDeConta");

  //mocked response, remove later
  // response = [
  //   {
  //     tipo: "DESPESA",
  //     descricao: "Conta de gás",
  //   },
  //   {
  //     tipo: "DESPESA",
  //     descricao: "super mercado",
  //   },
  //   {
  //     tipo: "DESPESA",
  //     descricao: "restaurante",
  //   },
  // ];

  if (response) {
    response.forEach((p) => {
      let option = document.createElement("option");
      option.text = p.descricao;
      option.value = p.tipo;
      select.appendChild(option);
    });
  }
});

document.addEventListener("DOMContentLoaded", getPlanos, false);
