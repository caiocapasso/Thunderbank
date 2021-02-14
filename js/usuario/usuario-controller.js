import { usuarioService } from './usuario-service.js';

document.querySelector("#login-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('logar usuario')
    const email = document.querySelector("#emailInput").value;
    const senha = document.querySelector("#passInput").value;

    usuarioService
      .logar(email, senha)
      .then((resposta) => {
        console.log('resposta = ', resposta)
        localStorage.setItem("token", resposta.token);
        window.location.replace("/user-dashboard.html");
      })
      .catch((error) => {
        alert("Usuário e/ou senha inválido(s)")
        console.log(error);
      });
  });


document.querySelector("#register-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log('criar usuario')

    const usuario = {
      cpf: document.querySelector("#cpfInput")?.value || null,
      nome: document.querySelector("#nomeInput")?.value || null,
      tel: document.querySelector("#telInput")?.value || null,
      email: document.querySelector("#emailInput")?.value || null,
      senha: document.querySelector("#passInput")?.value || null,
  
    }
  
    usuarioService
      .criar(usuario)
      .then((resposta) => {
        console.log(resposta);
        alert("usuario criado com sucesso! Realize o login");
        window.location.replace("/user-login.html");
      })
      .catch((error) => {
        console.log(error);
        alert("aconteceu um erro. Tente novamente mais tarde");
      });
  });


const sair = () => {
  console.log("saiu");
  window.localStorage.removeItem("token");
  window.location.replace("/");
};

window.sair = sair;
