export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
  const starterPrice = document.querySelector('[data-price="starter"]');
  const popularPrice = document.querySelector('[data-price="popular"]');
  const enterprisePrice = document.querySelector('[data-price="enterprise"]');
  const textPrice = document.querySelectorAll('[data-price="text"]');
  const priceList = {
    starter: {
      default: 120,
      withSale: 1152,
    },
    popular: {
      default: 1680,
      withSale: 16128,
    },
    enterprise: {
      default: 2520,
      withSale: 24192,
    },
  };

  const setPricesWithSale = () => {
    starterPrice.textContent = priceList.starter.withSale;
    popularPrice.textContent = priceList.popular.withSale;
    enterprisePrice.textContent = priceList.enterprise.withSale;
    textPrice.forEach((text) => {
      text.textContent = '/yr';
    });
  };

  const setDefaultPrices = () => {
    starterPrice.textContent = priceList.starter.default;
    popularPrice.textContent = priceList.popular.default;
    enterprisePrice.textContent = priceList.enterprise.default;
    textPrice.forEach((text) => {
      text.textContent = '/mo';
    });
  };

  switcher.checked = false;

  switcher.addEventListener('change', () => {
    if (switcher.checked) {
      setPricesWithSale();
    } else {
      setDefaultPrices();
    }
  });
};
