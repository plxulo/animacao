var botaoClicado = false;
const botao = document.getElementsByClassName("quero");

botao.AddEventListener('click', () => {
    botaoClicado = true;
})