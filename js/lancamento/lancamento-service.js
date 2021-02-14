import { tokenService } from "../token/token-service.js";
import { baseUrl, token } from "../util.js";

const url = baseUrl + "lancamento";
const salvar = ({ valor, descricao, planoDeConta }) => {
  if (token) {
    const headers = new Headers({ "Content-Type": "application/json" });
    const jwtDecode = tokenService.parseJwt(token);
    headers.append("authorization", "Bearer " + token);

    return fetch(url, {
      method: "POST",
      body: JSON.stringify({
        contaId: jwtDecode.conta,
        planoContaId: planoDeConta,
        valor: valor,
        descricao: descricao,
        lancamentoTipo: "RECEITA",
        dataHora: new Date(),
      }),
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        return response;
      })
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const lancamentoService = {
  salvar,
};
