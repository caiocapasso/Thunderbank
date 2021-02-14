//export const baseUrl = 'http://localhost:8080/';
export const baseUrl = 'https://bankline-accenture.herokuapp.com/';

export const token = localStorage.getItem('token');

export const monetizar = (valor) => {
    return valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) : "valor indisponível";
}