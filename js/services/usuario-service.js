import { tokenService } from "./token-service.js";
import { baseUrl, token } from "../util.js";

const url = baseUrl + "usuario";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const logar = (email, senha) => {
  return fetch(url + "/logar", {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      login: email,
      senha: senha,
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(`Erro: ${response.status} - ${response.statusText}`);
      }
      return response;
    })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

const criar = ({ email, senha, nome, cpf, tel }) => {
  return fetch(url, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      contaTipo: "CORRENTE",
      cpf: cpf,
      login: email,
      nome: nome,
      saldo: 1000,
      senha: senha,
      //tel: tel
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(`Erro: ${response.status} - ${response.statusText}`);
      }
      return response;
    })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => {
      console.log(error);
    });
};

const obterDados = () => {
  if (token) {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("authorization", "Bearer " + token);
    const jwtDecode = tokenService.parseJwt(token);

    return fetch(url + "/findByid/" + jwtDecode.sub, {
      method: "GET",
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

export const usuarioService = {
  logar,
  criar,
  obterDados,
};
