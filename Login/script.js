const loginEmail = document.getElementById('login-email')
const loginSenha = document.getElementById('login-senha')
const loginBtn = document.getElementById('login-btn')
const msg = document.getElementById('error-msg')

loginBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if(loginEmail.value != '1234' && loginSenha.value != '1234'){
        msg.innerText = 'Nome ou senha incorretos'
        loginEmail.style.borderColor = 'red'
        loginSenha.style.borderColor = 'red'
    } else {
        msg.innerText = ''
        loginEmail.style.borderColor = '#F8F5C1'
        loginSenha.style.borderColor = '#F8F5C1'
    }
})