function checkButton() {
    const form = document.getElementById("formulario");
    const button = document.getElementById("enviar");
    form.classList.add("aparecer");
    setTimeout(() => {
        form.classList.add("ativo");
    }, 100);
    button.classList.remove("escondido");
    form.classList.remove("escondido");
};