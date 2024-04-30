document.addEventListener("DOMContentLoaded", function () {
    let carousel = document.querySelector(".carousel");
    let contentd = document.querySelector(".contentd");
    let contentm = document.querySelector(".contentm");
    let contentp = document.querySelector(".contentp");
    let items = carousel.querySelectorAll(".item");
    let vinhod = contentd.querySelectorAll(".vinho");
    let dotsContainer = document.querySelector(".dots");
    let container = document.getElementById('adocar')
    let up = document.querySelectorAll(".up");
    let modalMsg = document.querySelector('.modal-msg')
    let nome = document.getElementById('nome')
    let email = document.getElementById('email')
    let telefone = document.getElementById('telefone')
    let mensagem = document.getElementById('mensagem')
    let btnMsg = document.getElementById('btn-msg')
    let overlay = document.querySelector('.overlay')
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

    items.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        if (index === 0) dot.classList.add("active");
        dot.dataset.index = index;
        dotsContainer.appendChild(dot);
    });

    let dots = document.querySelectorAll(".dot");

    function showItem(index) {
        items.forEach((item, idx) => {
            item.classList.remove("active");
            dots[idx].classList.remove("active");
            if (idx === index) {
            item.classList.add("active");
            dots[idx].classList.add("active");
            }
        });
    }

    document.querySelector(".btn-prev-container").addEventListener("click", () => {
        let index = [...items].findIndex((item) =>
            item.classList.contains("active")
        );
        showItem((index - 1 + items.length) % items.length);
    });

    document.querySelector(".btn-next-container").addEventListener("click", () => {
        let index = [...items].findIndex((item) => 
            item.classList.contains("active")
        );
        showItem((index + 1) % items.length);
    });

    let contadorD = 0;

    document.querySelector(".btn-vinho-next").addEventListener("click", () => {
        [...vinhod].forEach((item, index) => {
            if(contadorD == index){
                item.style.display = "none"
            }
            if(contadorD >= 2) {
                contadorD = 0
            }
        })
        contadorD++
    });

    document.querySelector(".btn-vinho-prev").addEventListener("click", () => {
        [...vinhod].forEach((item, index) => {
            if(contadorD == index){
                item.style.display = "block"
            }
            if(contadorD == 0) {
                contadorD = 1
            }
        })
        contadorD--
    });
    
    
    dots.forEach((dot) => {
        dot.addEventListener("click", () => {
            let index = parseInt(dot.dataset.index);
            showItem(index);
        });
    });

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

    overlay.addEventListener('click', () => {
        document.location = '../Compra/index.html'
    })
});


