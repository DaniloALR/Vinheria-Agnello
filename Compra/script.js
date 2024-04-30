const cupom = document.getElementById('cupom')
const preco = document.getElementById('preco')
const btnCupom = document.getElementById('btn-cupom')
const txtCupom = document.querySelector('.txt-cupom')
const overlayComprar = document.querySelector('.overlay-modal')
const modalComprar = document.querySelector('.modal-comprar')
const btnComprar = document.getElementById('btn-comprar')
const precoTotal = document.getElementById('total')
let modalMsg = document.querySelector('.modal-msg')
let nome = document.getElementById('nome')
let email = document.getElementById('email')
let telefone = document.getElementById('telefone')
let mensagem = document.getElementById('mensagem')
let btnMsg = document.getElementById('btn-msg')
let menu = document.getElementById('menu')
let navContainer = document.getElementById('nav-container')
let close = document.getElementById('close')
let body = document.querySelector('html')

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

let contador = 0
let total = 0
btnCupom.addEventListener('click' , (e) => {
    e.preventDefault();
    let newPrice = preco.textContent

    if(cupom.value == 'FIAP2024'){
        if(contador <= 0){
            newPrice = parseInt(newPrice)
            let desconto = newPrice * 0.1
            newPrice -= desconto
            preco.textContent = newPrice
            precoTotal.textContent = newPrice
            total += newPrice
            txtCupom.style.display = 'block'
        }
    }
    contador++
})

btnComprar.addEventListener('click', (e) => {
    e.preventDefault()

    document.querySelector('body').style.overflow = 'hidden'

    overlayComprar.style.display = 'flex'

    overlayComprar.addEventListener('click', () => {
        overlayComprar.style.display = 'none'
        document.querySelector('body').style.overflowY = 'scroll'
    })

    total += parseInt(preco.textContent)
    precoTotal.textContent = total
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

