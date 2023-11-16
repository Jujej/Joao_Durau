document.addEventListener('DOMContentLoaded', function () {
    let cliques = 0;
    const iniciarChatBtn = document.getElementById('iniciarChat');
    const campoIdade = document.getElementById('campoIdade');
    const botaoCaptcha = document.getElementById('botaoCaptcha');
    const chatButton = document.getElementById('chatButton');
    const chatBox = document.getElementById('chatBox');
    const enviarMensagemBtn = document.getElementById('enviarMensagem');
    const mensagemInput = document.getElementById('mensagemInput');

    iniciarChatBtn.addEventListener('click', function () {
        campoIdade.style.display = 'block';
    });

    botaoCaptcha.addEventListener('click', function () {
        cliques++;

        if (cliques === 5) {
            console.log('Captcha Fictício validado. Exibindo botão de chat...');
            botaoCaptcha.style.display = 'none';
             chatBox.classList.remove('hidden');
        } else {
            console.log(`Clique ${cliques} de 5 no Captcha Fictício.`);
        }
    });
});