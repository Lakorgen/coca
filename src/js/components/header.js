export const useHeader = () => {
  document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function () {
      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollTop > lastScrollTop) {
        if (currentScrollTop > 100) {
          header.classList.remove('header--show');
        }
      } else {
        header.classList.add('header--show');
      }
      if (currentScrollTop > 0) {
        header.classList.add('header__fixed');
      } else {
        header.classList.remove('header__fixed');
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });
  });
};
