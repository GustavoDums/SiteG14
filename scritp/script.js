var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1 
    }

    document.getElementById('radio'+cont).checked = true
}

function fechar() {
    const navBar = document.getElementById('navbarNavDropdown');
    const navToggle = document.querySelector('.navbar-toggler');

    if (navBar.classList.contains('show')) {
        navBar.classList.remove('show'); // Fecha a navbar
        navToggle.setAttribute('aria-expanded', 'false'); // Atualiza o atributo aria-expanded
    }
}