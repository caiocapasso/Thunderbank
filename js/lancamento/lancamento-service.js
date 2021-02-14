import { baseUrl, token } from '../util.js';
import { tokenService } from '../token/token-service.js'

const url = baseUrl + 'lancamento'
const salvar = (lancamento) => {

    if (token) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const jwtDecode = tokenService.parseJwt(token);
        headers.append('authorization', 'Bearer ' + token)

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'contaId': jwtDecode.conta,
                'planoContaId': lancamento.get('plano'),
                'valor': lancamento.get('valor'),
                'descricao': lancamento.get('descricao'),
                'lancamentoTipo': 'RECEITA',
                'dataHora': new Date()
            }),
            headers: headers
        }).then(response => {
            return response.json();
        })
    }
}

export const lancamentoService = {
    salvar
}