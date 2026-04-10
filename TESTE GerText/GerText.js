const input = document.getElementById("inputTexto")

const botao = document.getElementById("btnTrocar")

const texto = document.getElementById("texto")

//habilitar botão ao digitar
botao.disabled = true;

input.addEventListener("keyup", () =>{

    if (input.value.trim() !== ""){

        botao.disabled = false;
    } else{

        botao.disabled = true;
    }
});



//Clique no botão

botao.addEventListener("click", () => {
    texto.textContent = input.value,

    input.value = "";

    botao.disabled = true;
});