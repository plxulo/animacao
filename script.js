var botaoClicado = false;
const botao = document.getElementById("quero");

botao.AddEventListener('click', () => {
    botaoClicado = true;
});

if (botaoClicado == true) {
    window.alert("botao clicado")
};