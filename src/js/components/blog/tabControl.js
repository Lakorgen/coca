export const useTabControls = () => {
  const tabControls = document.querySelector('.hero__tab-controls');

  tabControls.addEventListener('click', toggleTab);

  function toggleTab(e) {
    const tabControl = e.target.closest('.hero__tab-controls-link');

    if (!tabControl) return;
    e.preventDefault();
    if (tabControl.classList.contains('hero__tab-controls-link--active'))
      return;

    const tabContentId = tabControl.getAttribute('href');
    const tabContent = document.querySelector(tabContentId);
    const activeControl = document.querySelector(
      '.hero__tab-controls-link--active',
    );
    const activeContent = document.querySelector('.hero__tab-content--show');
    if (activeControl) {
      activeControl.classList.remove('hero__tab-controls-link--active');
    }
    if (activeContent) {
      activeContent.classList.remove('hero__tab-content--show');
    }

    tabControl.classList.add('hero__tab-controls-link--active');
    tabContent.classList.add('hero__tab-content--show');
  }
};
