const botaoEsconder = document.querySelectorAll(".botao-esconder");

for (let i = 0; i < botaoEsconder.length; i++) {
    botaoEsconder[i].addEventListener('click', function () {
        document.querySelector('.conteudo' + i).classList.toggle('esconder-conteudo');
        if (document.querySelector('.conteudo' + i).classList.contains('esconder-conteudo')) {
            botaoEsconder[i].innerHTML = 'Mostrar';
        } else {
            botaoEsconder[i].innerHTML = 'Esconder';
        }
    })
}