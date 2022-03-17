import toggleMenu from "./modules/menu.js";
import preloadImages from "./modules/preload.js";
import portfolioChangeItems from "./modules/portfolio.js";
import langSwitch from "./modules/lang.js";
import themeToggle from "./modules/theme.js";

window.onload = () => {
    toggleMenu()
    preloadImages()
    portfolioChangeItems()
    langSwitch()
    themeToggle()
}

let theme = 'light'

window.addEventListener('beforeunload', () => {
    localStorage.setItem('theme', theme)
})

// window.addEventListener('load', () => {
//     if (localStorage.getItem('theme')) {
//         const themeMode = localStorage.getItem('theme')
//         themeToggle(themeMode)
//     }
// })
