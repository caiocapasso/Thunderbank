import { tokenService } from '../token/token-service.js';
import { baseUrl } from '../util.js';

const url = baseUrl + 'conta/dashboard';

const headers = new Headers({ 'Content-Type': 'application/json' });
const token = localStorage.getItem('token');
const obterSaldo = () => {

    if (token) {
        headers.append('authorization', 'Bearer ' + token)
        const jwtDecode = tokenService.parseJwt(token)
        return fetch(url + '/' + jwtDecode.conta, { method: 'GET', headers: headers }).then(response => {
            return response.json();
        })
    }
}

export const dashboardService = {
    obterSaldo
}