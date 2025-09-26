const btn = document.querySelector("button");

const meuForm = document.forms.formCep.elements;

const logradouro = document.getElementById("logradouro");
const bairro = document.getElementById("bairro");
const localidade = document.getElementById("localidade");
const uf = document.getElementById("uf");

btn.addEventListener("click", (e) => {
  if (meuForm[0].value != "") {
    const url = `https://viacep.com.br/ws/${meuForm[0].value}/json/`;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if(data.erro) {
          alert("CEP não encontrado")
        } else {
        logradouro.value = data.logradouro;
        bairro.value = data.bairro;
        localidade.value = data.localidade;
        uf.value = data.uf;
        }
      });

    e.preventDefault();
  } else {
    alert("O campo CEP não pode estar vazio.");
  }
});
