//----- Open Menu -----//

const toggleHamburger = document.querySelector('.hamburger__menu')
const mobileMenu = document.querySelector('.hamburger__nav')
const mobileBackground = document.querySelector('.hamburger__background')

const openMenu = () => {
    toggleHamburger.classList.toggle('open')
    mobileMenu.classList.toggle('open')
    mobileBackground.classList.toggle('open')
}

toggleHamburger.addEventListener('click', openMenu)

//----- Close Menu -----//

const toggleNavLinks = document.querySelector('.hamburger__nav-list')

const closeMenu = (ev) => {
    console.log(ev)
    if (ev.target.classList.contains('nav-link')) {
        toggleHamburger.classList.remove('open')
        mobileMenu.classList.remove('open')
        mobileBackground.classList.remove('open')
    }
}

toggleNavLinks.addEventListener('click', closeMenu)

