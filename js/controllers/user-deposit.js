import { lancamentoService } from "../services/lancamento-service.js";
import { planoContaService } from "../services/plano-conta-service.js";
import { protegeUrl } from '../util.js'

protegeUrl()

const form = document.querySelector("#deposito-form")

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let lancamento = new FormData(form)

    lancamentoService
        .salvar(lancamento)
        .then((response) => {
            if (response) {
                alert("deposito realizado");
                window.location.replace("./user-dashboard.html");
            } else {
                alert("houve um problema no deposito. Tente novamente mais tarde");
            }
        })
        .catch((error) => {
            console.log(error);
        });
});


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