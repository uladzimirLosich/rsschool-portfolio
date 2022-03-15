// import i18Obj from "./modules/translate.js";

window.onload = () => {
    openMenu()
    closeMenu()
    preloadImages()
    portfolioBtns()
    langSwitch()
    themeToggle()
}

const openMenu = () => {
    document.querySelector('.hamburger__menu').addEventListener('click', () => {
        const openMenuItems = document.querySelectorAll('.hamburger__menu, .hamburger__nav, .hamburger__background')
        openMenuItems.forEach((event) => {
            event.classList.toggle('open')
        })
    })
}

const closeMenu = () => {
    document.querySelector('.hamburger__nav-list').addEventListener('click', (event) => {
            const closeMenuItems = document.querySelectorAll('.hamburger__menu, .hamburger__nav, .hamburger__background')
            if (event.target.classList.contains('nav-link')) {
                closeMenuItems.forEach((event) => {
                    event.classList.remove('open')
                })
            }
        }
    )
}

const preloadImages = () => {
    const seasons = ['winter', 'spring', 'summer', 'autumn'];
    for (let i = 0; i <= seasons.length - 1; i++) {
        for (let j = 1; j <= 6; j++) {
            const img = new Image()
            img.src = `./src/assets/img/${seasons[i]}/${j}.jpg`
        }
    }
}

const portfolioBtns = () => {
    document.querySelector('.portfolio__btns').addEventListener('click', (event) => {
            const portfolioImage = document.querySelectorAll('.portfolio__item')
            if (event.target.dataset.season) {
                [...portfolioImage].forEach((img, i) => img.src = `./src/assets/img/${event.target.dataset.season}/${i + 1}.jpg`)
            }
            const portfolioBtnsActive = document.querySelectorAll('.btn_non-colored')
            if (event.target) {
                [...portfolioBtnsActive].forEach((i) => {
                    i === event.target && i.classList.add('active')
                    i !== event.target && i.classList.remove('active')
                })
            }
        }
    )
}

const langSwitch = () => {
    document.querySelector('.lang-switcher').addEventListener('click', (event) => {
            const langSwitchActive = document.querySelectorAll('.lang-link')
            if (event.target) {
                [...langSwitchActive].forEach((i) => {
                    i === event.target && i.classList.add('active')
                    i !== event.target && i.classList.remove('active')
                })
            }
        }
    )
}

const themeToggle = () => {
    const theme = document.querySelector('.theme-toggle')
    theme.addEventListener('click', () => {
        const themes = document.querySelectorAll('.section-skills, .section-portfolio, .section-video, .section-price, .price__item, .section-heading, .section-heading__title, .btn_non-colored')
        themes.forEach((event) => {
            event.classList.toggle('light-theme')
        })
        theme.classList.toggle('light')
    })
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

let theme = 'light'

window.addEventListener('beforeunload', () => {
    localStorage.setItem('theme', theme)
})

window.addEventListener('load', () => {
    if (localStorage.getItem('theme')) {
        const themeMode = localStorage.getItem('theme')
        themeToggle(themeMode)
    }
})
