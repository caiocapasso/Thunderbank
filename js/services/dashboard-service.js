import { tokenService } from './token-service.js';
import { baseUrl, token } from '../util.js';

const url = baseUrl + "conta/dashboard";

const obterSaldo = () => {
  if (token) {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("authorization", "Bearer " + token);
    const jwtDecode = tokenService.parseJwt(token);
    console.log('jwtDecode', jwtDecode)
 
    return fetch(url + "/" + jwtDecode.conta, {
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

export const dashboardService = {
  obterSaldo,
};
