const btn = document.querySelector('.btn-plataforma')

const elementoPlataforma = document.querySelector('.btn-plataforma .plataformas')

btn.addEventListener('click' , () => {
    elementoPlataforma.classList.toggle('ativo')
})