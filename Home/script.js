let cabecalho = document.getElementById('container-cabecalho')
let menu = document.getElementById('menu')
let navContainer = document.getElementById('nav-container')
let close = document.getElementById('close')
let body = document.querySelector('html')
let contatoBtn = document.getElementById('btn-contato')

document.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        cabecalho.className = 'container-cabecalho'
    } else {
        cabecalho.className = ''
    }
})

menu.addEventListener('click', (event) => {
    event.preventDefault()


    console.log(body)
    navContainer.style.display = 'flex'
    body.style.overflowY = 'hidden'
})

close.addEventListener('click', (event) => {
    event.preventDefault()

    navContainer.style.display = 'none'
    body.style.overflowY = ''
})

contatoBtn.addEventListener('click', () => {
    navContainer.style.display = 'none'
    body.style.overflowY = ''
})