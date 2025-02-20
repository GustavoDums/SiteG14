
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

// Script para alterar a imagem do modal
var modal = document.getElementById('imageModal');
var modalImage = document.getElementById('modalImage');
var images = document.querySelectorAll('[data-bs-toggle="modal"]');

images.forEach(function(image) {
    image.addEventListener('click', function() {
        var imageSrc = this.getAttribute('data-bs-img-src');
        modalImage.src = imageSrc;
    });
});

// Função para desabilitar o Modal de expandir fotos em dispositivos móveis
// Detecta o tipo de dispositivo
function checkDeviceType() {
    const isMobile = window.innerWidth <= 768; // Considerando dispositivos móveis com largura de tela <= 768px
    const modalImages = document.querySelectorAll('[data-bs-toggle="modal"]');
    const infoText = document.querySelector('.efeito-texto'); // Frase "Clique na imagem para expandir"
    
    if (isMobile) {
        // Para dispositivos móveis, remove o evento de abrir o modal
        modalImages.forEach(img => {
            img.removeAttribute('data-bs-toggle');
            img.removeAttribute('data-bs-target');
        });

    } else {
        // Caso não seja mobile, deixa a funcionalidade de modal
        modalImages.forEach(img => {
            img.setAttribute('data-bs-toggle', 'modal');
            img.setAttribute('data-bs-target', '#imageModal');
        });
        
        // Exibe a frase em dispositivos não móveis
        if (infoText) {
            infoText.style.display = 'block';
        }
    }
}


// JS para suavizar o efeito de rolagem
// Chama a função para verificar o tipo de dispositivo ao carregar a página
window.addEventListener('load', checkDeviceType);
// Também chama a função quando o tamanho da tela for alterado (em dispositivos móveis)
window.addEventListener('resize', checkDeviceType);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
  
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 50, // valor para evitar sobreposição com a navbar fixa
          behavior: 'smooth'
        });
      }
    });
  });
  