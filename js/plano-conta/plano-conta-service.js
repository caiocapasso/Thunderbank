import { tokenService } from '../token/token-service.js';
import { baseUrl, token } from '../util.js';

const url = baseUrl + 'plano-conta/';

export const planosReceita = () => {
    if (token) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        headers.append('authorization', 'Bearer ' + token)
        return fetch(url + 'tipo/1', { method: 'GET', headers: headers }).then(response => {
            return response.json();
        })
    }

}

export const planoContaService = {
    planosReceita
}