const input = document.getElementById("campo_input");
const botao = document.getElementById("btn");
const texto = document.getElementById("text");

// Habilitar botão ao digitar

input.addEventListener("input", () => {

if (input.value.trim() !== "") {

    botao.disabled = false;

} else {

    botao.disabled = true;

}

});

// Clique no botão
botao.addEventListener("click", () => {

  texto.textContent = input.value; // troca texto

  input.value = ""; // limpa input

  botao.disabled = true; // desativa botão

});