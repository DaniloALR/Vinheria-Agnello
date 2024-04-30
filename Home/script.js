let cabecalho = document.getElementById('container-cabecalho')
let menu = document.getElementById('menu')
let navContainer = document.getElementById('nav-container')
let close = document.getElementById('close')
let body = document.querySelector('html')
let contatoBtn = document.getElementById('btn-contato')
let modalMsg = document.querySelector('.modal-msg')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let mensagem = document.getElementById('mensagem')
let btnMsg = document.getElementById('btn-msg')

menu.addEventListener('click', (event) => {
    event.preventDefault()

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

btnMsg.addEventListener('click', (e) => {
    e.preventDefault()

    if(nome.value && email.value && telefone.value && mensagem.value){
        modalMsg.style.display = 'flex'
    } else {
        nome.style.borderColor = 'red'
        email.style.borderColor = 'red'
        telefone.style.borderColor = 'red'
        mensagem.style.borderColor = 'red'
    }
})

modalMsg.addEventListener('click',() => {
    modalMsg.style.display = 'none'

    nome.style.borderColor = '#F8F5C1'
    email.style.borderColor = '#F8F5C1'
    telefone.style.borderColor = '#F8F5C1'
    mensagem.style.borderColor = '#F8F5C1'

    nome.value = ''
    email.value = ''
    telefone.value = ''
    mensagem.value = ''
})