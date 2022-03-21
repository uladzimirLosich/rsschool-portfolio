const themeToggle = () => {
  const theme = document.querySelector('.theme-icon');
  theme.addEventListener('click', () => {
    const themes = document.querySelectorAll(
      '.section-skills, .section-portfolio, .section-video, .section-price, .price__item, .section-heading, .section-heading__title, .btn_non-colored'
    );
    themes.forEach((event) => {
      event.classList.toggle('light');
    });
    theme.classList.toggle('theme-toggle');
  });
};
export default themeToggle;
