import { tokenService } from "../token/token-service.js";
import { baseUrl, token } from "../util.js";

const url = baseUrl + "plano-conta/";

// const getPlanosReceita = () => {
//   if (token) {
//     const headers = new Headers({ "Content-Type": "application/json" });
//     headers.append("Authorization", "Bearer " + token);
//     return fetch(url + "tipo/1", { method: "GET", headers: headers })
//       .then((response) => {
//         return response.json();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
// };

// FIXME -> era pra ser isso? Pegando o token do usuario e passando adiante?
export const getPlanosReceita = () => {
  if (token) {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("Authorization", "Bearer " + token);
    const jwtDecode = tokenService.parseJwt(token);

    return fetch(url + "tipo/" + jwtDecode.conta, {
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
