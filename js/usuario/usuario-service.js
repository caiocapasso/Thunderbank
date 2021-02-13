//const urlBase = 'https://bankline-accenture.herokuapp.com/usuario';
const urlBase = 'http://localhost:8080/usuario';

const headers = new Headers({ 'Content-Type': 'application/json' });

const logar = (email, senha) => {

    return fetch(urlBase + '/logar', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            login: email,
            senha: senha
        })
    }).then(resposta => {
        return resposta.json();
    })
}

const criar = (usuario) => {
    return fetch(urlBase, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            login: usuario.email,
            senha: usuario.senha,
            nome: usuario.nome,
            cpf: usuario.cpf,
            contaTipo: "CORRENTE"

        })
    })
}



export const usuarioService = {
    logar,
    criar
}