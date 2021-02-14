import { usuarioService } from "./usuario/usuario-service.js";

document.querySelector("#login-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("logar usuario");
  const email = document.querySelector("#emailInput").value;
  const senha = document.querySelector("#passInput").value;

  usuarioService
    .logar(email, senha)
    .then((resposta) => {
      if (resposta){
        console.log("resposta = ", resposta);
        localStorage.setItem("token", resposta.token);
        window.location.replace("/user-dashboard.html");
      }
    })
    .catch((error) => {
      alert("Usuário e/ou senha inválido(s)");
      console.log(error);
    });
});