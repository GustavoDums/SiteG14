
window.revelar = ScrollReveal({reset:true})

// topo do site

revelar.reveal('.efeito-logo',
{
    duration: 2000,
    distance: '90px'
})

// titulos do site

revelar.reveal('.efeito-title',
{
    duration: 2000,
    distance: '100px',
    delay: 200
})

revelar.reveal('.efeito-title-agenda',
{
    duration: 2200,
    distance: '150px',
    delay: 1100
})

// textos do site

revelar.reveal('.efeito-subtitle',
{
    duration: 2200,
    distance: '200px',
    delay: 600,
    origin: 'right'
})

revelar.reveal('.efeito-texto',
{
    duration: 2100,
    distance: '250px',
    delay: 1000,
    origin: 'left'
})

revelar.reveal('.slider-a',
{
    duration: 2000,
    distance: '300px',
    delay: 800,
    origin: 'right'
})

revelar.reveal('.efeito-subtitle-localização',
{
    duration: 2000,
    distance: '350px',
    delay: 1000,
    origin: 'left'
})

// efeito iframe

revelar.reveal('.efeito-iframe-maps',
{
    duration: 2000,
    distance: '350px',
    delay: 1000,
    origin: 'right'
})
