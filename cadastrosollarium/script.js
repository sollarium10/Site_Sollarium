document.addEventListener("DOMContentLoaded", function () {
    var userForm = document.getElementById("userForm");
 
    userForm.addEventListener("submit", function (event) {
     
      var nomeInput = document.getElementById("nome");
      if (nomeInput.value.trim() === "") {
        alert("Por favor, preencha o campo Nome.");
        event.preventDefault();
      }
 
     
      var sobrenomeInput = document.getElementById("sobrenome");
      if (sobrenomeInput.value.trim() === "") {
        alert("Por favor, preencha o campo Sobrenome.");
        event.preventDefault();
      }
 
     
      var estadoInput = document.getElementById("estado");
      if (estadoInput.value === "") {
        alert("Por favor, selecione um Estado.");
        event.preventDefault();
      }
 
     
      var cidadeInput = document.getElementById("cidade");
      if (cidadeInput.value.trim() === "") {
        alert("Por favor, preencha o campo Cidade.");
        event.preventDefault();
      }
 
     
      var emailInput = document.getElementById("email");
      var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        event.preventDefault();
      }
 
     
      var senhaInput = document.getElementById("senha");
      if (senhaInput.value.length < 8) {
        alert("A senha deve ter pelo menos oito caracteres.");
        event.preventDefault();
      }
    });
  });