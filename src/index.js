import i18Obj from "./modules/translate.js";

//---------- OPEN MENU ----------//

const toggleHamburger = document.querySelector('.hamburger__menu')
const mobileMenu = document.querySelector('.hamburger__nav')
const mobileBackground = document.querySelector('.hamburger__background')

const openMenu = () => {
    toggleHamburger.classList.toggle('open')
    mobileMenu.classList.toggle('open')
    mobileBackground.classList.toggle('open')
}
toggleHamburger.addEventListener('click', openMenu)

//---------- CLOSE MENU ----------//

const toggleNavLinks = document.querySelector('.hamburger__nav-list')

const closeMenu = (e) => {
    if (e.target.classList.contains('nav-link')) {
        toggleHamburger.classList.remove('open')
        mobileMenu.classList.remove('open')
        mobileBackground.classList.remove('open')
    }
}
toggleNavLinks.addEventListener('click', closeMenu)

//---------- IMAGE CASHING ----------//

const seasons = ['winter', 'spring', 'summer', 'autumn'];

const preloadImages = () => {
    for (let i = 0; i <= seasons.length - 1; i++) {
        for (let j = 1; j <= 6; j++) {
            const img = new Image()
            img.src = `./src/assets/img/${seasons[i]}/${j}.jpg`
        }
    }
}
preloadImages()

//---------- CHANGE OF SEASONS ----------//

const portfolioBtns = document.querySelector('.portfolio__btns')

const changeItem = (e) => {
    const portfolioImage = document.querySelectorAll('.portfolio__item')
    if (e.target.dataset.season) {
        [...portfolioImage].forEach((img, i) => img.src = `./src/assets/img/${e.target.dataset.season}/${i + 1}.jpg`)
    }
}
portfolioBtns.addEventListener('click', changeItem)

//---------- ACTIVE BUTTON ----------//

const changeActiveClass = (e) => {
    const portfolioBtnsActive = document.querySelectorAll('.btn_non-colored')
    if (e.target) {
        [...portfolioBtnsActive].forEach((i) => {
            i === e.target && i.classList.add('active')
            i !== e.target && i.classList.remove('active')
        })
    }
}
portfolioBtns.addEventListener('click', changeActiveClass)

//---------- ACTIVE LANG-SWITCH ----------//

const langSwitch = document.querySelector('.lang-switcher')

const changeActiveLink = (e) => {
    const langSwitchActive = document.querySelectorAll('.lang-link')
    if (e.target) {
        [...langSwitchActive].forEach((i) => {
            i === e.target && i.classList.add('active')
            i !== e.target && i.classList.remove('active')
        })
    }
}
langSwitch.addEventListener('click', changeActiveLink)

//---------- SWITCH LANGUAGES ----------//

const switchLang = document.querySelector('.lang-link')

const getTranslate = (ru) => {
    const changeLang = document.querySelectorAll('[data-i18n]')
    changeLang.forEach((current) => {
        if (current.dataset.i18n === i18Obj['ru'][''] && current.placeholder) {
            current.placeholder = i18Obj['ru']
            current.textContent = ''
        }
    })
}
switchLang.addEventListener('click', getTranslate)

