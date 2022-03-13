// import i18Obj from "./modules/translate.js";

//---------- MENU ----------//

const openMenu = document.querySelector('.hamburger__menu')
const mobileMenu = document.querySelector('.hamburger__nav')
const mobileBackground = document.querySelector('.hamburger__background')

openMenu.onclick = () => {
    openMenu.classList.toggle('open')
    mobileMenu.classList.toggle('open')
    mobileBackground.classList.toggle('open')
}

const closeMenu = document.querySelector('.hamburger__nav-list')

closeMenu.onclick = (e) => {
    if (e.target.classList.contains('nav-link')) {
        openMenu.classList.remove('open')
        mobileMenu.classList.remove('open')
        mobileBackground.classList.remove('open')
    }
}

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

portfolioBtns.onclick = (e) => {
    const portfolioImage = document.querySelectorAll('.portfolio__item')
    if (e.target.dataset.season) {
        [...portfolioImage].forEach((img, i) => img.src = `./src/assets/img/${e.target.dataset.season}/${i + 1}.jpg`)
    }
    const portfolioBtnsActive = document.querySelectorAll('.btn_non-colored')
    if (e.target) {
        [...portfolioBtnsActive].forEach((i) => {
            i === e.target && i.classList.add('active')
            i !== e.target && i.classList.remove('active')
        })
    }
}

//---------- ACTIVE LANG-SWITCH ----------//

const langSwitch = document.querySelector('.lang-switcher')

langSwitch.onclick = (e) => {
    const langSwitchActive = document.querySelectorAll('.lang-link')
    if (e.target) {
        [...langSwitchActive].forEach((i) => {
            i === e.target && i.classList.add('active')
            i !== e.target && i.classList.remove('active')
        })
    }
}

// //---------- SWITCH LANGUAGES ----------//
//
// const getTranslate = document.querySelector('.lang-ru')
//
// getTranslate.addEventListener('click', (ru) => {
//     const changeLang = document.querySelectorAll('[data-i18n]')
//         changeLang.forEach((e) => {
//             if (e.dataset.i18n === i18Obj.ru.video) {
//                 e.textContent = e.dataset.i18n
//                 console.log(e.textContent)
//             }
//         })
// })

const theme = document.querySelector('.theme-toggle')
const themes = document.querySelectorAll('.section-skills, .section-portfolio, .section-video, .section-price, .price__item, .section-heading, .section-heading__title, .btn_non-colored')

theme.onclick = () => {
    theme.classList.toggle('toggle')
    themes.forEach((e) => {
        e.classList.toggle('light-theme')
    })
}




