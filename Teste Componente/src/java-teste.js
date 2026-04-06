const input = document.getElementById("inputTexto");

const botao = document.getElementById("btnTrocar");

const texto = document.getElementById("texto");



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