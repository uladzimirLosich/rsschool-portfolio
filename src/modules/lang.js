// import i18Obj from "./modules/translate.js";

const langSwitch = () => {
  document
    .querySelector('.lang-switcher')
    .addEventListener('click', (event) => {
      const langSwitchActive = document.querySelectorAll('.lang-link');
      if (event.target) {
        [...langSwitchActive].forEach((i) => {
          i === event.target && i.classList.add('active');
          i !== event.target && i.classList.remove('active');
        });
      }
    });
};

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

export default langSwitch;
