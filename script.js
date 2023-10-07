const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-buttons')
function navSlide() {
    burger.addEventListener('click', () => {
        nav.classList.toggle('active')
        burger.classList.toggle('clicked')

    })
}

navSlide()