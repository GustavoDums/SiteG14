

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


// Pegando a navbar
var navbar = document.getElementById("navbar");
    
// Variáveis para monitorar o scroll
var lastScrollTop = 0; // Posição do último scroll
var navbarHeight = navbar.offsetHeight; // Altura da navbar

window.addEventListener("scroll", function() {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > navbarHeight) {
        // Se o scroll for para baixo, esconder a navbar
        navbar.style.top = "-" + navbarHeight + "px";
    } else if (currentScroll < lastScrollTop) {
        // Se o scroll for para cima, mostrar a navbar
        navbar.style.top = "0";
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
});