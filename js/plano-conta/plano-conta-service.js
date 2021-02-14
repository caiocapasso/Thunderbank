import { baseUrl, token } from "../util.js";

const url = baseUrl + "plano-conta/";

export const getPlanosReceita = () => {
  console.log('getPlanosReceita()')
  if (token) {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Authorization", "Bearer " + token);

    return fetch(url + "tipo/1", {
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

export const planoContaService = {
  getPlanosReceita,
};
