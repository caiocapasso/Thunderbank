//export const baseUrl = 'http://localhost:8080/';
export const baseUrl = 'https://bankline-accenture.herokuapp.com/';

export const token = localStorage.getItem('token');

export const formatarDinheiro = (valor) => {
    return valor ? valor.toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' }) : "valor indisponível";
}

export const formatarData = (valor) => {
    const tempDate = new Date(valor);
    console.log(tempDate)
    const bla = `${tempDate.getDate()}/${(tempDate.getMonth()+1)}/${tempDate.getFullYear()}`;
    console.log(bla);
    return bla;
}
