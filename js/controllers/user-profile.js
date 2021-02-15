import { usuarioService } from "../services/usuario-service.js"

//FIXME: adaptar para fazer funcionar para editar os dados do usuário com base nos campos do profile-form
// document.querySelector("#login-form")?.addEventListener("submit", function (e) {
//     e.preventDefault();
//     console.log("logar usuario");
//     const email = document.querySelector("#emailInput").value;
//     const senha = document.querySelector("#passInput").value;
  
//     usuarioService
//       .logar(email, senha)
//       .then((resposta) => {
//         console.log("resposta = ", resposta);
//         localStorage.setItem("token", resposta.token);
//         window.location.replace("/user-dashboard.html");
//       })
//       .catch((error) => {
//         alert("Usuário e/ou senha inválido(s)");
//         console.log(error);
//       });
//   });


const obterDados = () => {
  usuarioService.obterDados().then((response) => {
    if (response){
      console.log("response");
      document.querySelector("#nomeInput").value = response.nome;
      document.querySelector("#cpfInput").value = response.cpf;
      document.querySelector("#telInput").value = response.tel;
      document.querySelector("#emailInput").value = response.username;
    }
  });
};

document.addEventListener("DOMContentLoaded", obterDados, false);


