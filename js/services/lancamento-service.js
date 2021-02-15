import { tokenService } from "./token-service.js";
import { baseUrl, token } from "../util.js";

const url = baseUrl + "lancamento";
const salvar = (lancamento) => {

    if (token) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const jwtDecode = tokenService.parseJwt(token);
        headers.append('authorization', 'Bearer ' + token)

        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                'contaId': jwtDecode.conta,
                'contaDestinoNumero': lancamento.get('numeroContaDestino'),
                'planoContaId': lancamento.get('plano'),
                'valor': lancamento.get('valor'),
                'descricao': lancamento.get('descricao'),
                'lancamentoTipo': 'TRANSFERENCIA',
                'dataHora': new Date(lancamento.get('data'))
            }),
            headers: headers
        }).then(response => {
            return response.json();
        })
    }
}
const obterLancamentos = () => {
    if (token) {
        const headers = new Headers({ "Content-Type": "application/json" });
        headers.append("authorization", "Bearer " + token);

        const jwtDecode = tokenService.parseJwt(token);

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

export const lancamentoService = {
    salvar,
    obterLancamentos,
};