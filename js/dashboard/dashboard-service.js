import { tokenService } from '../token/token-service.js';
import { baseUrl, token } from '../util.js';

const url = baseUrl + "conta/dashboard";

const obterSaldo = () => {
  if (token) {
    const headers = new Headers({ "Content-Type": "application/json" });
    headers.append("authorization", "Bearer " + token);
    const jwtDecode = tokenService.parseJwt(token);

    return fetch(url + "/" + jwtDecode.conta, {
      method: "GET",
      headers: headers,
    }).then((response) => {
      return response.json();
    });
  }
};

export const dashboardService = {
  obterSaldo,
};
