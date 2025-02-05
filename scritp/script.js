

function fechar() {
    const navBar = document.getElementById('navbarNavDropdown');
    const navToggle = document.querySelector('.navbar-toggler');

    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show'); // Fecha a navbar
        navToggle.setAttribute('aria-expanded', 'false'); // Atualiza o atributo aria-expanded
    }
}

function enviarFormulario() {
    // Pegando os valores dos campos
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msg').value;

    // Verificando se os campos não estão vazios
    if (nome && email && msg) {
        // Codificando a mensagem para que possa ser usada na URL
        var mensagem = `*Nome:* ${nome}%0A*Email:* ${email}%0A*Mensagem:* ${msg}`;

        // Criando a URL do WhatsApp
        var whatsappURL = `https://api.whatsapp.com/send?phone=5547996073554&text=${mensagem}`;

        // Redirecionando para o WhatsApp
        window.open(whatsappURL, '_blank');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}
