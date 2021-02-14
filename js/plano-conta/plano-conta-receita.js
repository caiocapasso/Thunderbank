import { planoContaService } from '../plano-conta/plano-conta-service.js';

const getPlanos = planoContaService.getPlanosReceita().then((response) => {
  const select = document.querySelector("#inputPlanoDeConta");

  if (response){
    response.forEach((p) => {
      let option = document.createElement("option");
      option.text = p.descricao;
      option.value = p.tipo;
      select.appendChild(option);
    });
  }
});

document.addEventListener("DOMContentLoaded", getPlanos, false);
