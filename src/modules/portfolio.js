const portfolioChangeItems = () => {
  document.querySelector('.portfolio__btns').addEventListener('click', (event) => {
    const portfolioImage = document.querySelectorAll('.portfolio__item');
    if (event.target.dataset.season) {
      [...portfolioImage].forEach(
        (img, i) => (img.src = `./src/assets/img/${event.target.dataset.season}/${i + 1}.jpg`),
      );
    }
    const portfolioBtnsActive = document.querySelectorAll('.btn_non-colored');
    if (event.target) {
      [...portfolioBtnsActive].forEach((i) => {
        i === event.target && i.classList.add('active');
        i !== event.target && i.classList.remove('active');
      });
    }
  });
};
export default portfolioChangeItems;
