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
    if (ev.target.classList.contains('nav-link')) {
        toggleHamburger.classList.remove('open')
        mobileMenu.classList.remove('open')
        mobileBackground.classList.remove('open')
    }
}
toggleNavLinks.addEventListener('click', closeMenu)

//----- Change Of Seasons -----//

const portfolioBtns = document.querySelector('.portfolio__btns')
const portfolioImage = document.querySelectorAll('.portfolio__item')

const changeItem = (e) => {
    if (e.target.dataset.season) {
        portfolioImage.forEach((img, i) => img.src = `./src/assets/img/${e.target.dataset.season}/${i + 1}.jpg`)
    }
}
portfolioBtns.addEventListener('click', changeItem)

//----- Cash Images -----//

const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = () => {
    for (let i = 0; i <= seasons.length - 1; i++) {
        for (let j = 1; j <= 6; j++) {
            const img = new Image()
            img.src = `./src/assets/img/${seasons[i]}/${j}.jpg`
            console.log(img.src = `./src/assets/img/${seasons[i]}/${j}.jpg`)
        }
    }
}
preloadImages()

