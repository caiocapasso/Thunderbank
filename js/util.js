//export const baseUrl = 'http://localhost:8080/';
export const baseUrl = "https://bankline-accenture.herokuapp.com/";

export const token = localStorage.getItem("token");

export const formatarDinheiro = (valor) => {
  return valor
    ? valor.toLocaleString("pt-BR", {
        minimumFractionDigits: 2,
        style: "currency",
        currency: "BRL",
      })
    : "valor indisponível";
};

export const formatarData = (valor) => {
  const tempDate = new Date(valor);
  console.log(tempDate);
  const bla = `${tempDate.getDate()}/${
    tempDate.getMonth() + 1
  }/${tempDate.getFullYear()}`;
  console.log(bla);
  return bla;
};

export const sair = () => {
  console.log("saiu");
  window.localStorage.removeItem("token");
  window.location.replace("/");
};

export const isLogado = () => {
  console.log("isLogado = ", window.localStorage.getItem("token"));
  return window.localStorage.getItem("token");
};

window.sair = sair;
window.isLogado = isLogado;
