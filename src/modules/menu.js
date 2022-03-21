const toggleMenu = () => {
  document.querySelector('.hamburger__menu').addEventListener('click', () => {
    const openMenuItems = document.querySelectorAll(
      '.hamburger__menu, .hamburger__nav, .hamburger__background',
    );
    openMenuItems.forEach((event) => {
      event.classList.toggle('open');
    });
  });
  document.querySelector('.hamburger__nav-list').addEventListener('click', (event) => {
    const closeMenuItems = document.querySelectorAll(
      '.hamburger__menu, .hamburger__nav, .hamburger__background',
    );
    if (event.target.classList.contains('nav-link')) {
      closeMenuItems.forEach((item) => {
        item.classList.remove('open');
      });
    }
  });
};

export default toggleMenu;
