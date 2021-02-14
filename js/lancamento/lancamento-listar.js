document
  .querySelector("#deposito-form")
  ?.addEventListener("submit", (event) => {
    console.log("depositar form");
    event.preventDefault();

    const valor = document.querySelector("#inputValor").value;
    const descricao = document.querySelector("#inputDescricao").value;
    const planoDeConta = document.querySelector("#inputPlanoDeConta").value;

    lancamentoService
      .salvar({
        valor: valor,
        descricao: descricao,
        planoDeConta: planoDeConta
      })      
      .then(response => {
        if (response){
          alert('deposito realizado');
          window.location.replace('./user-dashboard.html')
        } else {
          alert('houve um problema no deposito. Tente novamente mais tarde');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  