const hamburger = document.querySelector('.hamburger__menu')
const mobileMenu = document.querySelector('.hamburger__nav')
const mobileBackground = document.querySelector('.hamburger__background')

const isToggleMenu = () => {
    hamburger.classList.toggle('open')
    mobileMenu.classList.toggle('open')
    mobileBackground.classList.toggle('open')
}
hamburger.addEventListener('click', isToggleMenu)


