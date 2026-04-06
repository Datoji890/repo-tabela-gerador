const input = document.getElementById("inputTexto")

const botao = document.getElementById("btnTrocar")

const texto = document.getElementById("texto")

//habilitar botão ao digitar

input.addEventListener("input", () =>{
    if (input.value.trim() !== ""){

        botao.disable = false;
    } else{

        botao.disable = true;
    }
});



//Clique no botão

botao.addEventListener("click", () => {
    texto.textContent = input.value,

    input.value = "";

    botao.disable = true;
});