import { usuarioService } from "../services/usuario-service.js"

document
  .querySelector("#register-form")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("criar usuario");

    const usuario = {
      cpf: document.querySelector("#cpfInput")?.value || null,
      nome: document.querySelector("#nomeInput")?.value || null,
      tel: document.querySelector("#telInput")?.value || null,
      email: document.querySelector("#emailInput")?.value || null,
      senha: document.querySelector("#passInput")?.value || null,
    };

    usuarioService
      .criar(usuario)
      .then((resposta) => {
        if (resposta){
          console.log(resposta);
          alert("usuario criado com sucesso! Realize o login");
          window.location.replace("/user-login.html");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("aconteceu um erro. Tente novamente mais tarde");
      });
  });