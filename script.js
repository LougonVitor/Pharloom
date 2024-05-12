var menu = document.getElementById('menu');
window.addEventListener('scroll',  () => {
    if (window.scrollY > 5) {
        menu.classList.add('menu--preto')
    } else {
        menu.classList.remove('menu--preto')
    }
})

function sobrepor (n) {
    const hoverDiv = document.querySelector(`.hoverDiv${n}`)
    hoverDiv.style.display = 'block'
}

function limpar (x) {
    const hoverDiv = document.querySelector(`.hoverDiv${x}`)
    hoverDiv.style.display = 'none'
}